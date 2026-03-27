#!/usr/bin/env node
import { spawnSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';
import { join, relative } from 'path';
import semverPkg from 'semver';
const { semver } = semverPkg;


// ----------------
// Helpers
// ----------------

// Centralized fatal helper: consistent message + single exit code
function fatal(message, result) {
    console.error('\nERROR:', message);
    if (result) {
        if (result.stdout) console.error(String(result.stdout));
        if (result.stderr) console.error(String(result.stderr));
        if (result.error) console.error(result.error.message || result.error);
        // Print short diagnostic fields when available for easier triage
        if (typeof result.status !== 'undefined') console.error('Exit code:', result.status);
        if (result.signal) console.error('Signal:', result.signal);
        if (result.error && result.error.code) console.error('Code:', result.error.code);
    }
    process.exit(1);
}

// Run a command and return spawnSync result. Do NOT throw; caller must inspect result.
function run(cmd, args, opts = {}) {
    return spawnSync(cmd, args, { stdio: 'pipe', ...opts });
}

// Run a command and on failure print command, stdout/stderr and exit with mapped code
function runAndCheck(cmd, args, opts = {}) {
    // Convenience wrapper for commands that must succeed. Uses `fatal()` on any failure.
    const r = run(cmd, args, opts);
    const out = r.stdout ? r.stdout.toString() : '';
    const err = r.stderr ? r.stderr.toString() : '';
    const fmt = formatCommand(cmd, args);
    if (r.status !== 0) {
        fatal(`Command returned non-zero: ${fmt}`, r);
    }
    return { stdout: out, stderr: err, status: r.status };
}

// Format command for error messages
function formatCommand(cmd, args) {
    const parts = Array.isArray(args) ? args : [args];
    return `${cmd} ${parts.map(a => `'${String(a).replace(/'/g, "\\'" )}'`).join(' ')}`;
}

// Prompt helper
function askYesNo(prompt) {
    return new Promise(async (resolve) => {
        const readline = await import('readline');
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        rl.question(`${prompt} (y/N) `, (ans) => {
            rl.close();
            resolve(/^(y|yes)$/i.test((ans || '').trim()));
        });
    });
}


// ----------------
// Initialization
// ----------------

console.log('Starting release-and-tag script...');

const argv = process.argv.slice(2);

// If no args or help flag provided, show concise help and exit immediately
if (argv.length === 0 || argv.includes('-h') || argv.includes('--help')) {
    console.log('release-and-tag.js — safe, conservative release helper');
    console.log('');
    console.log('Usage: node scripts/release-and-tag.js [-c|--commit] [-p|--push] [-h|--help]');
    console.log('');
    console.log('Flags:');
    console.log('  -c, --commit     Build, stage and commit release artifact and package files, then create an annotated tag v<version>');
    console.log('  -p, --push       Push the commit (if present) and the tag to origin (can be used with or after --commit)');
    console.log('  -h, --help       Show this help and exit');
    console.log('');
    console.log('Examples:');
    console.log('  node scripts/release-and-tag.js                 # show this help and exit');
    console.log('  node scripts/release-and-tag.js --commit        # build, commit and tag locally');
    console.log('  node scripts/release-and-tag.js --commit --push # build, commit, tag and push');
    console.log('');
    console.log('Notes:');
    console.log('  - Version is read from package.json; update it manually before running.');
    console.log('  - The script will refuse to create a tag unless the release artifact is present in the commit.');
    console.log('  - User confirmation is requested before commit and push.');
    console.log('  - All non-user cancellations exit with code 1 and print diagnostics.');
    process.exit(0);
}

const opts = { commit: false, push: false, };
for (const a of argv) {
    if      (a === '-c' || a === '--commit') opts.commit = true;
    else if (a === '-p' || a === '--push') opts.push = true;
    else if (a.startsWith('-')) fatal(`Unknown flag ${a}`);
    else fatal('Positional arguments are not accepted.');
}

// repo root and release file paths
const root = process.cwd();
const pkgPath = join(root, 'package.json');
const esbuildScript = join(root, 'esbuild.config.js');
const releaseFilePath = join(root, 'release', 'mod', 'hypersynergism_release.js');
if (!existsSync(releaseFilePath)) fatal('Release file missing: ' + releaseFilePath);
const releaseFileRel = relative(root, releaseFilePath).replace(/\\/g, '/');

// release version is read from package.json.version (it must be updated manually beforehand)
if (!existsSync(pkgPath)) fatal('package.json not found');
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
const targetVersion = pkg.version;
if (!targetVersion) fatal('no version found in package.json');
const targetTagName = 'v' + targetVersion;

// ----------------
// Fetch tags and get latest tag on remote
// ----------------

// Ensure git is available
runAndCheck('git', ['--version']);

// Fetch tags from origin
const fetchRes = run('git', ['fetch', '--tags', '--quiet']);
if (fetchRes.error || fetchRes.status !== 0) fatal('Failed to fetch tags from origin.', fetchRes);

// 0. Check the current active branch
const r2 = run('git', ['rev-parse', '--abbrev-ref', 'HEAD']);
if (r2.error || r2.status !== 0) fatal('git failed while getting current branch', r2);
const branch = r2.stdout.toString().trim();

// --- Search for latest reachable tag on the current branch ---
// 1. Get the SHA of the remote branch tip
const r3 = run('git', ['ls-remote', '--heads', 'origin', branch]);
if (r3.error || r3.status !== 0) fatal('git failed while getting branch SHA', r3);
const branchSHA = r3.stdout.toString().split(/\s+/)[0];

// 2. Get all remote tags and their SHAs
const r4 = run('git', ['ls-remote', '--tags', 'origin']);
if (r4.error || r4.status !== 0) fatal('git failed while listing remote tags', r4);
const tagLines = r4.stdout.toString().trim().split(/\r?\n/).filter(line => !line.includes('^{}'));

// 3. For each tag, check if its commit is an ancestor of the branch tip
let reachableTags = [];
for (const line of tagLines) {
    const [sha, ref] = line.split(/\s+/);
    if (!sha || !ref) continue;
    const tag = ref.replace('refs/tags/', '');
    if (!semver.valid(tag)) continue;
    // Check ancestry using git merge-base --is-ancestor
    const check = run('git', ['merge-base', '--is-ancestor', sha, branchSHA]);
    if (check.status === 0) reachableTags.push(tag);
}

// 4. Sort and get the latest
const latestRemoteTag = reachableTags.length ? reachableTags.sort(semver.compare).pop() : '(none)';


// ----------------
// Working tree status check
// ----------------

// Check working tree status and warn if dirty (but allow continuation)
let status = '';
const s = run('git', ['status', '--porcelain']);
if (s.error || s.status !== 0) fatal('git failed while checking working tree status', s);
status = s.stdout ? s.stdout.toString().trim() : '';
if (!status) {
    console.log('Working tree is clean. Continuing...');
} else {
    console.log('==============================================================');
    console.warn('Warning: working tree is dirty (uncommitted changes detected):');
    console.log(status);
    console.log('==============================================================');
}


// ----------------
// Commit and tag
// ----------------

if (opts.commit) {
    // Ensure the local tag does not already exist
    const localCheck = run('git', ['rev-parse', '--verify', '--quiet', `refs/tags/${targetTagName}`]);
    if (localCheck.error) fatal('git failed while checking local tag', localCheck);
    if (localCheck.status === 0) fatal('Local tag should NOT already exist when committing.');

    // Sync lockfile and run release build
    // Single string for the command below: avoids DeprecationWarning when shell: true
    runAndCheck('npm install --package-lock-only', [], { shell: true });
    runAndCheck('node', [esbuildScript, 'release'], { cwd: root });
    console.log('Lockfile synced and release built.');

    // check if release file is tracked in HEAD
    const t = run('git', ['ls-files', '--error-unmatch', releaseFileRel]);
    if (t.error) fatal('git failed while verifying if release file is tracked', t);
    if (t.status !== 0) fatal('Built release file is untracked.');

    // check if release file differs from HEAD
    const d = run('git', ['diff', '--quiet', '--', releaseFileRel]);
    if (d.error) fatal('git failed while verifying if release file differs', d);
    if (d.status !== 0) fatal('Built release file differs from HEAD.');

    console.log('Staging release file and package files');
    runAndCheck('git', ['add', releaseFileRel, 'package.json', 'package-lock.json']);

    // Ensure there are staged changes to commit
    let staged = '';
    const s2 = run('git', ['diff', '--cached', '--name-only']);
    if (s2.error || s2.status !== 0) fatal('git failed while checking staged files', s2);
    staged = s2.stdout ? s2.stdout.toString().trim() : '';
    if (!staged) { fatal('No changes were committed.'); }
    console.log('Release and package files staged.');

    // Ensure remote does not have an existing tag with the same name
    const remoteCheck = run('git', ['ls-remote', '--tags', 'origin', targetTagName]);
    if (remoteCheck.error || remoteCheck.status !== 0) fatal('git failed while checking remote tag', remoteCheck);
    if (remoteCheck.stdout && remoteCheck.stdout.toString().trim()) {
        fatal(`Remote tag ${targetTagName} already exists. Aborting commit/tag to avoid conflicts.`);
    }

    // Confirmation before COMMIT and TAG
    const ok = await askYesNo(`Latest released tag on origin: ${latestRemoteTag}. Release target: ${targetTagName}. Proceed with the commit and tag?`);
    if (!ok) { console.log('Operation cancelled by user.'); process.exit(0); }
    // Commit
    runAndCheck('git', ['commit', '-m', `release: ${targetTagName}`]);
    console.log('Commit done.');
    // Tag
    runAndCheck('git', ['tag', '-a', targetTagName, '-m', `Release ${targetTagName}`]);
    console.log('Tag created:', targetTagName);
}


// ----------------
// Push (either push-only or commit&push)
// ----------------

if (opts.push) {
    // Ensure local tag exists
    const rev = run('git', ['rev-parse', '--verify', `refs/tags/${targetTagName}`]);
    if (rev.error) fatal('git failed while preparing push checks', rev);
    if (rev.status !== 0) fatal(`Local tag ${targetTagName} not found. Run the script with --commit (or --commit --push).`);

    // Ensure the tagged commit contains the release file (important for push-only flows)
    const tagContains = run('git', ['cat-file', '-e', `${targetTagName}:${releaseFileRel}`]);
    if (tagContains.error) fatal('git failed while checking tagged commit contents', tagContains);
    if (tagContains.status !== 0) fatal(`Tagged commit ${targetTagName} does not contain the release file ${releaseFileRel}. Aborting push.`);
        
    // Check remote tag state and compare SHAs for idempotence
    const ls = run('git', ['ls-remote', '--tags', 'origin', targetTagName]);
    if (ls.error || ls.status !== 0) fatal('git failed while checking remote tag for push', ls);
    const lsOut = ls.stdout ? ls.stdout.toString().trim() : '';
    if (lsOut) {
        const remoteSHA = lsOut.split(/\s+/)[0];
        const localSHAres = run('git', ['rev-list', '-n', '1', targetTagName]);
        if (localSHAres.error || localSHAres.status !== 0) fatal('git failed while resolving local tag to commit', localSHAres);
        const localSHA = localSHAres.stdout ? localSHAres.stdout.toString().trim() : '';
        if (remoteSHA != localSHA) {
            fatal(`Remote tag ${targetTagName} exists but points to a different commit. Aborting to avoid overwriting remote tag.`);
        } else {
            console.warn('Remote tag exists and matches local tag. Push is idempotent (no tag overwrite).');
        }
    }

    // Confirmation before PUSH
    const ok = await askYesNo(`Latest released tag on origin: ${latestRemoteTag}. Local tag ${targetTagName} will be pushed. Proceed with the push?`);
    if (!ok) { console.log('Operation cancelled by user.'); process.exit(0); }
    
    const upstreamRes = run('git', ['rev-parse', '--abbrev-ref', '--symbolic-full-name', '@{u}']);
    const hasUpstream = upstreamRes.status === 0;
    
    if (!hasUpstream) { 
        const ok = await askYesNo(`No upstream exists for branch ${branch}. Proceed to set the upstream and push?`);
        if (!ok) { console.log('Operation cancelled by user.'); process.exit(0); }
        // Set upstream and push
        runAndCheck('git', ['push', '--set-upstream', 'origin', branch]);
    } else {
        runAndCheck('git', ['push']);
    }
    runAndCheck('git', ['push', 'origin', `refs/tags/${targetTagName}`]);
    console.log('Commit and tag pushed to origin.');
}

console.log('Release process completed. Tag:', targetTagName);

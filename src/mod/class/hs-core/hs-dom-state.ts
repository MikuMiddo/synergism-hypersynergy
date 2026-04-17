import { HSGlobal } from "./hs-global";

export class HSDOMState {
    static readonly #TRUE_TOKENS = ['ON', '开启', '启用', '已开启', '已启用', '开'] as const;
    static readonly #FALSE_TOKENS = ['OFF', '关闭', '禁用', '已关闭', '已禁用', '关'] as const;

    static normalizeText(text: string): string {
        return text.replace(/\s+/g, ' ').trim();
    }

    static getPlayer(): any {
        return HSGlobal.exposedPlayer as any;
    }

    static getSelectorStateFromPlayer(selector: string): boolean | null {
        const player = this.getPlayer();
        if (!player) {
            return null;
        }

        const buildingToggleMatch = selector.match(/^#toggle(\d+)\.auto\.autobuyerToggleButton$/);
        if (buildingToggleMatch) {
            return Boolean(player.toggles?.[buildingToggleMatch[1]]);
        }

        const tesseractToggleMatch = selector.match(/^#tesseractAutoToggle(\d+)\.auto\.autobuyerToggleButton$/);
        if (tesseractToggleMatch) {
            const toggleIndex = Number(tesseractToggleMatch[1]) - 1;
            return Boolean(player.autoTesseracts?.[toggleIndex]);
        }

        switch (selector) {
            case '#toggle15.auto':
                return Boolean(Number(player.resettoggle1 ?? 0));
            case '#toggle21.auto':
                return Boolean(Number(player.resettoggle2 ?? 0));
            case '#toggle27.auto':
                return Boolean(Number(player.resettoggle3 ?? 0));
            case '#tesseractautobuytoggle':
                return Boolean(Number(player.tesseractAutoBuyerToggle ?? 0));
            case '#coinAutoUpgrade.autobuyerToggleButton':
                return Boolean(player.toggles?.coinautobuy);
            case '#prestigeAutoUpgrade.autobuyerToggleButton':
                return Boolean(player.toggles?.prestigeautobuy);
            case '#transcendAutoUpgrade.autobuyerToggleButton':
                return Boolean(player.toggles?.transcendautobuy);
            case '#reincarnateAutoUpgrade.autobuyerToggleButton':
                return Boolean(player.toggles?.reincarnateautobuy);
            case '#generatorsAutoUpgrade.autobuyerToggleButton':
                return Boolean(player.toggles?.generatorautobuy);
            case '#toggleresearchbuy':
                return Boolean(player.researchBuyMaxToggle);
            case '#toggleautoresearch':
                return Boolean(player.autoResearchToggle);
            case '#toggleautosacrifice':
                return Boolean(player.autoSacrificeToggle);
            case '#toggleautoBuyFragments':
                return Boolean(player.autoBuyFragment);
            case '#toggleautofortify':
                return Boolean(player.autoFortifyToggle);
            case '#toggleAutoCubeUpgrades':
                return Boolean(player.autoCubeUpgradesToggle);
            case '#toggleAutoPlatonicUpgrades':
                return Boolean(player.autoPlatonicUpgradesToggle);
            case '#toggleAutoSacrificeAnt':
                return Boolean(player.ants?.toggles?.autoSacrificeEnabled);
            case '#openCubes':
                return Boolean(player.autoOpenCubes);
            case '#openTesseracts':
                return Boolean(player.autoOpenTesseracts);
            case '#openHypercubes':
                return Boolean(player.autoOpenHypercubes);
            case '#openPlatonicCube':
                return Boolean(player.autoOpenPlatonicsCubes);
            case '#toggleAutoChallengeStart':
                return Boolean(player.autoChallengeRunning);
            case '#ascensionAutoEnable':
                return Boolean(player.autoAscend);
            default:
                return null;
        }
    }

    static parseTokenState(token: string): boolean | null {
        const normalized = this.normalizeText(token).toUpperCase();
        if (!normalized) return null;

        if (this.#TRUE_TOKENS.some(value => value.toUpperCase() === normalized)) {
            return true;
        }

        if (this.#FALSE_TOKENS.some(value => value.toUpperCase() === normalized)) {
            return false;
        }

        return null;
    }

    static extractToggleState(el: HTMLElement | null): boolean | null {
        if (!el) return null;

        const ariaPressed = el.getAttribute('aria-pressed');
        if (ariaPressed === 'true') return true;
        if (ariaPressed === 'false') return false;

        const ariaChecked = el.getAttribute('aria-checked');
        if (ariaChecked === 'true') return true;
        if (ariaChecked === 'false') return false;

        try {
            const computed = window.getComputedStyle(el);
            const backgroundColor = (el.style.backgroundColor || computed.backgroundColor || '').toLowerCase();
            if (backgroundColor === 'green' || backgroundColor.includes('0, 128, 0')) return true;
            if (backgroundColor === 'red' || backgroundColor.includes('255, 0, 0')) return false;
        } catch {
            // ignore style lookup failures
        }

        const text = this.normalizeText(el.textContent || '');
        if (!text) return null;

        const bracketMatch = text.match(/\[\s*([^\]]+?)\s*\]/);
        if (bracketMatch) {
            const tokenState = this.parseTokenState(bracketMatch[1]);
            if (tokenState !== null) return tokenState;
        }

        const cnBracketMatch = text.match(/自动\s*\[\s*([开关])\s*\]/);
        if (cnBracketMatch) {
            return cnBracketMatch[1] === '开';
        }

        const colonMatch = text.match(/[:：]\s*([^\s\]]+)/);
        if (colonMatch) {
            const tokenState = this.parseTokenState(colonMatch[1]);
            if (tokenState !== null) return tokenState;
        }

        if (/\bON\b/i.test(text)) return true;
        if (/\bOFF\b/i.test(text)) return false;
        if (/自动\s*\[\s*开\s*\]/.test(text)) return true;
        if (/自动\s*\[\s*关\s*\]/.test(text)) return false;
        if (/(开启|启用|已开启|已启用)/.test(text)) return true;
        if (/(关闭|禁用|已关闭|已禁用)/.test(text)) return false;
        if (/(自动.*开|自动.*启)/.test(text)) return true;
        if (/(自动.*关|自动.*禁)/.test(text)) return false;
        if (/(\d+(\.\d+)?)%/.test(text)) return true;

        const className = String(el.className || '');
        if (/\b(on|enabled|active)\b/i.test(className)) return true;
        if (/\b(off|disabled|inactive)\b/i.test(className)) return false;

        return null;
    }

    static isElementOn(selector: string, el: HTMLElement | null): boolean {
        const playerState = this.getSelectorStateFromPlayer(selector);
        if (playerState !== null) {
            return playerState;
        }

        return this.extractToggleState(el) ?? false;
    }

    static isPercentageMode(selector: string, el: HTMLElement | null): boolean {
        if (!el) return false;

        if (selector === '#tesseractautobuymode') {
            const text = this.normalizeText(el.textContent || '');
            return /percent|百分|%/i.test(text);
        }

        return /%/.test(this.normalizeText(el.textContent || ''));
    }

    static isCheapestMode(selector: string, el: HTMLElement | null): boolean {
        const player = this.getPlayer();
        if (selector === '#toggleautoresearchmode' && player) {
            const mode = String(player.autoResearchMode ?? '').toLowerCase();
            if (mode.includes('cheap') || mode.includes('cost') || mode.includes('spend')) return true;
            if (mode.includes('manual')) return false;
            return mode === 'cheapest';
        }

        const text = this.normalizeText(el?.textContent || '');
        if (/花费|花費|cost|spend/i.test(text)) return true;
        return /cheapest|最便宜|最低/i.test(text);
    }

    static matchesExpected(selector: string, el: HTMLElement | null, expected?: string | boolean): boolean {
        if (expected === undefined) {
            return this.isElementOn(selector, el);
        }

        if (typeof expected === 'boolean') {
            return expected ? this.isElementOn(selector, el) : !this.isElementOn(selector, el);
        }

        const normalizedExpected = expected.toUpperCase();

        if (normalizedExpected.includes('PERCENTAGE')) {
            return this.isPercentageMode(selector, el);
        }

        if (normalizedExpected.includes('CHEAPEST')) {
            return this.isCheapestMode(selector, el);
        }

        if (normalizedExpected.includes('MAX')) {
            const player = this.getPlayer();
            if (selector === '#toggleresearchbuy' && player) {
                return Boolean(player.researchBuyMaxToggle);
            }
        }

        if (normalizedExpected.includes('OFF')) {
            return !this.isElementOn(selector, el);
        }

        if (normalizedExpected.includes('ON')) {
            return this.isElementOn(selector, el);
        }

        return this.normalizeText(el?.textContent || '') === this.normalizeText(expected);
    }
}

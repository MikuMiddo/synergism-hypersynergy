import { hsSettingTranslationsZhCN } from "./settings/hs-settings-localization";

type Locale = 'en' | 'zh-CN';

type TranslationDictionary = Record<string, string>;

declare global {
    interface Window {
        __HS_i18next?: {
            language?: string;
            languages?: string[];
            resolvedLanguage?: string;
            t?: (key: string, options?: Record<string, unknown>) => string;
        };
    }
}

const translations: Record<Locale, TranslationDictionary> = {
    en: {
        'hs.localeName': 'English',
        'hs.panel.log': 'Log',
        'hs.panel.info': 'Info',
        'hs.panel.tools': 'Tools',
        'hs.panel.settings': 'Settings',
        'hs.panel.debug': 'Debug',
        'hs.panel.clearLog': 'Clear Log',
        'hs.panel.copyLog': 'Copy Log',
        'hs.tools.exportTools': 'Export Tools',
        'hs.tools.ambrosiaHeaterDesc': 'Export extended save data string for Ambrosia Heater.',
        'hs.tools.ambrosiaHeater': 'Ambrosia Heater',
        'hs.tools.references': 'References',
        'hs.tools.corruptionRef': 'Corruption Ref',
        'hs.tools.corruptionOnemind': 'Corruption One Mind',
        'hs.tools.modLinks': 'Mod Links',
        'hs.tools.modGithub': 'Mod Github',
        'hs.tools.modWiki': 'Mod Wiki',
        'hs.tools.modFeatures': 'Feature Guide',
        'hs.tools.checkVersion': 'Check Version',
        'hs.tools.otherTools': 'Other Tools',
        'hs.tools.dumpSettings': 'Dump Settings',
        'hs.tools.dumpGameData': 'Dump Game Data',
        'hs.tools.fixExaltBug': 'Fix Exalt Bug',
        'hs.tools.clearSettings': 'Clear Settings',
        'hs.tools.testingTools': 'Testing Tools',
        'hs.tools.notifyTest': 'Notify Test',
        'hs.tools.notifyTestLong': 'Long Notify Test',
        'hs.tools.calculationTools': 'Calculation Tools',
        'hs.tools.calculationDesc': 'Run supported calculations and inspect the result. Entries marked with "(C)" support component output.',
        'hs.tools.calculationCacheHint': 'Calculating by components always clears the calculation cache first.',
        'hs.tools.calculateReduced': 'Calculate Result',
        'hs.tools.calculateComponents': 'Calculate Components',
        'hs.tools.clearCache': 'Clear Cache',
        'hs.tools.dumpCache': 'Dump Cache',
        'hs.tools.lastCalcResult': 'Latest Calculation Result',
        'hs.tools.notifySample': 'Test notification',
        'hs.tools.notifySampleLong': 'This is a long test notification used to verify long messages render correctly.',
        'hs.tools.loaded': 'Hypersynergism v{{version}} loaded.',
        'hs.tools.versionLatest': 'You are using the latest version of Hypersynergism.',
        'hs.tools.versionOutdated': 'Your Hypersynergism version is out of date.',
        'hs.tools.heaterCopied': 'Ambrosia Heater data copied to clipboard.',
        'hs.quick.quickbars': 'Quickbars',
        'hs.quick.autosing': 'Start Auto-Sing (S256+)',
        'hs.quick.heater': 'Export Heater',
        'hs.quick.quickbar.ambrosia': 'Ambrosia',
        'hs.quick.quickbar.ambrosiaMinibars': 'Amb minibars',
        'hs.quick.quickbar.corruption': 'Corruption',
        'hs.quick.quickbar.automation': 'Automation',
        'hs.quick.quickbar.events': 'Events',
        'hs.settings.page.hepteract': 'Hepteract',
        'hs.settings.page.ui': 'UI',
        'hs.settings.page.log': 'Log',
        'hs.settings.page.input': 'Input',
        'hs.settings.page.gamedata': 'Game Data',
        'hs.settings.page.patch': 'Patch',
        'hs.settings.page.ambrosia': 'Ambrosia',
        'hs.settings.page.shop': 'Shop',
        'hs.settings.page.auto-sing': 'Auto-Sing',
        'hs.settings.page.qol-buttons': 'QOL Buttons',
        'hs.settings.page.misc': 'Misc',
        'hs.settings.page.debug': 'Debug',
        'hs.settings.group.hepteracts': 'Hepteract Settings',
        'hs.settings.group.ui': 'UI Settings',
        'hs.settings.group.notifications': 'Notification Settings',
        'hs.settings.group.log': 'Log Settings',
        'hs.settings.group.talismans': 'Talisman Settings',
        'hs.settings.group.mouse': 'Mouse Settings',
        'hs.settings.group.ambrosia': 'ADD/TIME Ambrosia Auto-Switch',
        'hs.settings.group.ambrosia2': 'AFK Swap Settings',
        'hs.settings.group.ambrosia3': 'Minibar Settings',
        'hs.settings.group.patch': 'Legacy Patch Settings',
        'hs.settings.group.gamedata': 'Game Data Settings',
        'hs.settings.group.shop': 'Shop Settings',
        'hs.settings.group.debug': 'Debug Settings',
        'hs.settings.group.auto-sing': 'Auto-Sing Settings',
        'hs.settings.group.auto-sing-strategy-controls': 'Auto-Sing Strategy Controls',
        'hs.settings.group.auto-sing-ambrosia': 'Auto-Sing Ambrosia Loadouts',
        'hs.settings.group.auto-sing-timer-modal': 'Auto-Sing Advanced Settings',
        'hs.settings.group.quickbar-qol': 'Quickbar QOL Settings',
        'hs.settings.group.Golden-quarks-qol-settings': 'Golden Quarks QOL Settings',
        'hs.settings.group.Octeracts-qol-settings': 'Octeract QOL Settings',
        'hs.settings.toggle.on': 'On',
        'hs.settings.toggle.off': 'Off',
        'hs.settings.none': 'None',
        'hs.settings.loadout': 'Loadout {{index}}',
        'hs.settings.defaultStrategies': 'Default Strategies',
        'hs.settings.userStrategies': 'User Strategies',
        'hs.settings.deleteSelect': 'Select a strategy to delete first.',
        'hs.settings.exportSelect': 'Select a strategy to export first.',
        'hs.settings.editSelect': 'Select a strategy to edit first.',
        'hs.settings.strategyDropdownUnavailable': 'Strategy dropdown is unavailable.',
        'hs.settings.strategySelectedMissing': 'Selected strategy was not found in the dropdown.',
        'hs.settings.strategyCannotDeleteDefault': 'Default strategies cannot be deleted.',
        'hs.settings.strategyDeleteConfirm': 'Delete strategy "{{name}}"?',
        'hs.settings.strategyDeleteFailed': 'Failed to delete strategy from storage.',
        'hs.settings.strategyDeleted': 'Strategy "{{name}}" deleted. Switched to {{fallback}}.',
        'hs.settings.strategyNotFound': 'Strategy not found for export.',
        'hs.settings.strategyCopied': 'Strategy "{{name}}" copied to clipboard.',
        'hs.settings.strategyCopyFailed': 'Failed to copy strategy to clipboard.',
        'hs.settings.importStrategy': 'Import Strategy',
        'hs.settings.strategyName': 'Strategy Name',
        'hs.settings.enterStrategyName': 'Enter strategy name',
        'hs.settings.strategyJson': 'Strategy JSON',
        'hs.settings.pasteStrategyJson': 'Paste strategy JSON here',
        'hs.settings.cancel': 'Cancel',
        'hs.settings.import': 'Import',
        'hs.settings.importModalFailed': 'Failed to build import dialog.',
        'hs.settings.enterStrategyNameWarn': 'Enter a strategy name.',
        'hs.settings.strategyAlreadyExists': 'Strategy "{{name}}" already exists.',
        'hs.settings.invalidJson': 'Invalid JSON.',
        'hs.settings.saveStrategyFailed': 'Failed to save strategy.',
        'hs.settings.findHsUiFailed': 'Could not find HSUI.',
        'hs.settings.strategyImported': 'Strategy "{{name}}" imported and selected.',
        'hs.settings.strategyEditNotFound': 'Could not find the selected strategy.',
        'hs.ui.logCopied': 'Log copied to clipboard.',
        'hs.ui.newVersion': 'New version available!',
        'hs.qol.consume10x': 'CONSUME 10x',
        'hs.qol.buy10x': 'BUY 10x',
        'hs.qol.add10': 'Add x10',
        'hs.qol.gqDistributor': 'GQ Distributor',
        'hs.qol.distribute': 'Distribute',
        'hs.qol.toggleAfkSwapper': 'Toggle AFK Swapper',
        'hs.qol.iconAssignHint': 'Alt+Click a slot to pick an icon for it.\nRight-click to clear the assigned icon.',
        'hs.qol.corruptionSlotTitle': 'Configure icon: {{name}}',
        'hs.qol.corruptionIconCleared': 'Corruption slot icon cleared',
        'hs.qol.iconPickerActive': 'Icon picker active: click an in-game icon/image to assign to this slot. Any click ends mode.',
        'hs.qol.iconPickerNoUsableIcon': 'No usable icon found on the clicked element.',
        'hs.qol.corruptionIconSet': 'Corruption slot icon set successfully',
        'hs.qol.distributeStatus.buying': 'Buying {{current}}/{{total}} - spending {{amount}} GQ...',
        'hs.qol.distributeStatus.skipped': 'Skipped {{current}}/{{total}} (0 GQ)',
        'hs.qol.distributeStatus.done': 'Done!',
        'hs.ambrosia.quickImport': 'Quick Import',
        'hs.ambrosia.quickImportInvalidClipboard': 'Clipboard does not contain valid loadout data.',
        'hs.ambrosia.quickImportInvalidCount': 'Invalid number of loadouts: {{count}}. Expected 1 - 16.',
        'hs.ambrosia.importInputMissing': 'Import input element not found.',
        'hs.ambrosia.modeToggleMissing': 'Mode toggle button not found.',
        'hs.ambrosia.quickImportFailed': 'Quick Import failed.',
        'hs.ambrosia.quickImportResultPartial': 'Imported {{imported}} loadout(s); {{failed}} failed (see logs).',
        'hs.ambrosia.quickImportResultSuccess': 'Imported {{imported}} loadout(s), skipped {{skipped}} empty slot(s).',
        'hs.ambrosia.idleSwapEnabled': 'IDLE SWAP ENABLED WHILE IN THIS VIEW',
        'hs.ambrosia.dragHint': 'Drag an icon from the grid to the quickbar. Right-click a slot to clear it.',
        'hs.ambrosia.unknownError': 'Unknown error',
        'hs.events.noActiveHappyHour': 'No active HH',
        'hs.events.happyHourEndingAt': '{{amount}} HH ending at: {{times}}{{suffix}}',
        'hs.events.moreCount': ', (+{{count}}...)',
        'hs.events.noActiveLotus': 'No active Lotus',
        'hs.events.lotusUntil': 'Lotus until: {{time}}',
        'hs.hepteracts.ratioA': 'CHR/HYP/CHL: {{chronos}} / {{hyper}} / 1',
        'hs.hepteracts.ratioB': 'ACC/BST/MLT: {{accelerator}} / {{boost}} / 1',
        'hs.hepteracts.ratioC': 'CHR/ACC: {{chronos}} / 1',
        'hs.hepteracts.costQuark': '[{{context}}]: Total QUARK cost to max after next expand: {{cost}} (ESTIMATE!)',
        'hs.hepteracts.costHept': '[{{context}}]: Total HEPT cost to max after next expand: {{cost}} ({{percent}}% of owned)',
        'hs.talismans.cycleBuy': 'Cycle BUY',
        'hs.talismans.next': 'Next',
        'hs.talismans.fragment.yellow': 'Yellow',
        'hs.talismans.fragment.white': 'White',
        'hs.talismans.fragment.green': 'Green',
        'hs.talismans.fragment.blue': 'Blue',
        'hs.talismans.fragment.purple': 'Purple',
        'hs.talismans.fragment.orange': 'Orange',
        'hs.talismans.fragment.red': 'Red',
        'hs.automation.label.AutoChallenge': 'Auto-Challenge',
        'hs.automation.label.BuildingsAndUpgrades': 'Buildings and Upgrades',
        'hs.automation.label.Rune': 'Runes',
        'hs.automation.label.Research': 'Research',
        'hs.automation.label.AutoAntSacrifice': 'Auto-Sacrifice',
        'hs.automation.label.Cube': 'Cube Auto-Open',
        'hs.automation.label.Hepteract': 'Hept Auto-Open',
        'hs.automation.label.AutoAscend': 'Auto Ascend',
        'hs.autosing.modal.title': 'Autosing',
        'hs.autosing.modal.pause': 'Pause Autosing',
        'hs.autosing.modal.resume': 'Resume Autosing',
        'hs.autosing.modal.restart': 'Restart Singularity from the beginning',
        'hs.autosing.modal.stopNow': 'Stop Autosing NOW',
        'hs.autosing.modal.stopAfterCurrent': 'Stop Autosing at the end of current Singularity',
        'hs.autosing.modal.toggleDetails': 'Toggle Detailed Data Visibility',
        'hs.autosing.modal.minimize': 'Minimize',
        'hs.autosing.modal.closeStats': 'Close stats modal',
        'hs.autosing.corruption.none': 'None',
        'hs.autosing.corruption.done': 'Done',
        'hs.autosing.corruption.empty': 'No corruption loadouts created yet.',
        'hs.autosing.corruption.selectTitle': 'Select Corruption Loadout',
        'hs.autosing.corruption.loadoutName': 'Loadout Name',
        'hs.autosing.corruption.enterLoadoutName': 'Enter loadout name...',
        'hs.autosing.corruption.save': 'Save',
        'hs.autosing.corruption.create': 'Create',
        'hs.autosing.corruption.cancel': 'Cancel',
        'hs.autosing.corruption.editTitle': 'Edit Corruption Loadout',
        'hs.autosing.corruption.createTitle': 'Create Corruption Loadout',
        'hs.autosing.corruption.nameRequired': 'Loadout name is required.',
        'hs.autosing.corruption.nameExists': 'Loadout name "{{name}}" already exists.',
        'hs.autosing.corruption.managerTitle': 'Corruption Loadouts',
        'hs.autosing.corruption.managerLabel': 'Corruption Loadouts',
        'hs.autosing.corruption.createButton': '+ Create Loadout',
        'hs.autosing.corruption.deleteBlocked': 'Cannot delete loadout "{{name}}". In use by: {{usages}}.',
        'hs.autosing.corruption.usage.phase': 'Phase {{range}}',
        'hs.autosing.corruption.usage.action': 'Action in {{range}}',
        'hs.autosing.strategy.strategyName': 'Strategy Name',
        'hs.autosing.strategy.enterName': 'Enter strategy name...',
        'hs.autosing.strategy.readOnlyNote': 'Default strategies are read-only; saving creates a user copy.',
        'hs.autosing.strategy.phases': 'Strategy Phases',
        'hs.autosing.strategy.empty': 'No strategy phases added yet.',
        'hs.autosing.strategy.createLoadouts': 'Create Corruption Loadouts',
        'hs.autosing.strategy.addPhase': '+ Add Phase',
        'hs.autosing.strategy.update': 'Update Strategy',
        'hs.autosing.strategy.saveAsNew': 'Save as a new Strategy',
        'hs.autosing.strategy.create': 'Create Strategy',
        'hs.autosing.strategy.editTitle': 'Edit Autosing Strategy',
        'hs.autosing.strategy.copyTitle': 'View / Copy Default Strategy',
        'hs.autosing.strategy.createTitle': 'Create Autosing Strategy',
        'hs.autosing.strategy.failedSave': 'Failed to save strategy',
        'hs.autosing.strategy.updated': 'Strategy "{{name}}" updated',
        'hs.autosing.strategy.savedAsNew': 'Strategy "{{name}}" saved as new and selected.',
        'hs.autosing.strategy.createdAndSelected': 'Strategy "{{name}}" created and selected.',
        'hs.autosing.strategy.unnamed': 'Unnamed Strategy',
        'hs.autosing.strategy.phaseLine': 'Phase {{index}}: {{start}} -> {{end}}',
        'hs.autosing.phase.phase': 'Phase',
        'hs.autosing.phase.start': 'Starting Phase',
        'hs.autosing.phase.end': 'Ending Phase',
        'hs.autosing.phase.corruptionLoadout': 'Corruption Loadout',
        'hs.autosing.phase.selectCorruptionLoadout': 'Select Corruption Loadout',
        'hs.autosing.phase.configureChallenges': 'Configure Challenges',
        'hs.autosing.phase.save': 'Save',
        'hs.autosing.phase.create': 'Create Phase',
        'hs.autosing.phase.none': 'None',
        'hs.autosing.phase.editDisplayTitle': 'Edit {{name}}',
        'hs.autosing.phase.editTitle': 'Edit Strategy Phase {{range}}',
        'hs.autosing.phase.createDisplayTitle': 'Create {{name}}',
        'hs.autosing.phase.createTitle': 'Create Strategy Phase',
        'hs.autosing.challenge.loadCorruptionLoadout': 'Load Corruption Loadout',
        'hs.autosing.challenge.jumpHere': 'Jump here (IF)',
        'hs.autosing.challenge.addHere': 'Add Here',
        'hs.autosing.challenge.waitBefore': 'Wait before',
        'hs.autosing.challenge.waitInside': 'Wait inside',
        'hs.autosing.challenge.max': 'Max',
        'hs.autosing.challenge.specialAction': 'Special Action:',
        'hs.autosing.challenge.noneStandard': 'None (Standard Challenge)',
        'hs.autosing.challenge.challengeNumber': 'Challenge #:',
        'hs.autosing.challenge.minCompletions': 'Min Completions:',
        'hs.autosing.challenge.waitBeforeMs': 'Wait before (ms):',
        'hs.autosing.challenge.waitInsideMs': 'Wait inside (ms):',
        'hs.autosing.challenge.maxTimeMs': 'Max Time (ms):',
        'hs.autosing.challenge.comment': 'Comment:',
        'hs.autosing.challenge.commentPlaceholder': 'Add a comment (optional)',
        'hs.autosing.challenge.ifJumpMode': 'If Jump Mode',
        'hs.autosing.challenge.ifChallenge': 'If Challenge',
        'hs.autosing.challenge.condition': 'Condition',
        'hs.autosing.challenge.value': 'Value',
        'hs.autosing.challenge.challenges': 'Challenges',
        'hs.autosing.challenge.storedC15': 'Stored C15 value',
        'hs.autosing.challenge.addAction': 'Add Action/Challenge',
        'hs.autosing.challenge.updateAction': 'Update Action',
        'hs.autosing.challenge.cancel': 'Cancel',
        'hs.autosing.challenge.saveStrategy': 'Save Strategy',
        'hs.autosing.challenge.configureDisplayTitle': 'Configure {{name}}',
        'hs.autosing.challenge.configureTitle': 'Configure Strategy Actions ({{range}})',
        'hs.autosing.challenge.multiplier': 'Multiplier (10^x)',
        'hs.autosing.challenge.compareTo': 'Compare To',
        'hs.autosing.challenge.currentC15': 'Current C15 value',
        'hs.autosing.challenge.corruptionLoadouts': 'Corruption Loadouts',
        'hs.autosing.challenge.completions': 'completions',
        'hs.autosing.challenge.challengeDisplay': 'Challenge {{number}}',
        'hs.autosing.action.Exit Transcension challenge': 'Exit Transcension challenge',
        'hs.autosing.action.Exit Reincarnation challenge': 'Exit Reincarnation challenge',
        'hs.autosing.action.Exit Ascension challenge': 'Exit Ascension challenge',
        'hs.autosing.action.Ascend': 'Ascend',
        'hs.autosing.action.Wait': 'Wait',
        'hs.autosing.action.Ant Sacrifice': 'Ant Sacrifice',
        'hs.autosing.action.Auto Challenge Toggle': 'Auto Challenge Toggle',
        'hs.autosing.action.Auto Ant-Sac Toggle': 'Auto Ant-Sac Toggle',
        'hs.autosing.action.Auto Ascend Toggle': 'Auto Ascend Toggle',
        'hs.autosing.action.If-jump': 'If-jump',
        'hs.autosing.action.Max C11': 'Max C11',
        'hs.autosing.action.Max C12': 'Max C12',
        'hs.autosing.action.Max C13': 'Max C13',
        'hs.autosing.action.Max C14': 'Max C14',
        'hs.autosing.action.Store C15': 'Store C15',
        'hs.autosing.action.Ambrosia pre-AOAG loadout': 'Ambrosia pre-AOAG loadout',
        'hs.autosing.action.Ambrosia post-AOAG Cube loadout': 'Ambrosia post-AOAG Cube loadout',
        'hs.autosing.action.Ambrosia Quark loadout': 'Ambrosia Quark loadout',
        'hs.autosing.action.Ambrosia Obt loadout': 'Ambrosia Obt loadout',
        'hs.autosing.action.Ambrosia Off loadout': 'Ambrosia Off loadout',
        'hs.autosing.action.Ambrosia Luck loadout': 'Ambrosia Luck loadout',
        'hs.autosing.action.Corrup 0*': 'Corrup 0*',
        'hs.autosing.action.Corrup from phase (reapply)': 'Corrup from phase (reapply)',
        'hs.autosing.action.Corrup Ants': 'Corrup Ants',
        'hs.autosing.action.C1 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C1 until no more completions within maxTime ms (after initially waiting waitTime ms)',
        'hs.autosing.action.C2 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C2 until no more completions within maxTime ms (after initially waiting waitTime ms)',
        'hs.autosing.action.C3 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C3 until no more completions within maxTime ms (after initially waiting waitTime ms)',
        'hs.autosing.action.C4 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C4 until no more completions within maxTime ms (after initially waiting waitTime ms)',
        'hs.autosing.action.C5 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C5 until no more completions within maxTime ms (after initially waiting waitTime ms)',
        'hs.autosing.action.C6 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C6 until no more completions within maxTime ms (after initially waiting waitTime ms)',
        'hs.autosing.action.C7 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C7 until no more completions within maxTime ms (after initially waiting waitTime ms)',
        'hs.autosing.action.C8 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C8 until no more completions within maxTime ms (after initially waiting waitTime ms)',
        'hs.autosing.action.C9 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C9 until no more completions within maxTime ms (after initially waiting waitTime ms)',
        'hs.autosing.action.C10 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C10 until no more completions within maxTime ms (after initially waiting waitTime ms)',
        'hs.autosing.action.Forge Auto-Buy Toggle - Chronos Hept': 'Forge Auto-Buy Toggle - Chronos Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Hyperreal Hept': 'Forge Auto-Buy Toggle - Hyperreal Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Quarks Hept': 'Forge Auto-Buy Toggle - Quarks Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Challenge Hept': 'Forge Auto-Buy Toggle - Challenge Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Abyss Hept': 'Forge Auto-Buy Toggle - Abyss Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Accelerator Hept': 'Forge Auto-Buy Toggle - Accelerator Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Boost Hept': 'Forge Auto-Buy Toggle - Boost Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Multiplier Hept': 'Forge Auto-Buy Toggle - Multiplier Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Orbs': 'Forge Auto-Buy Toggle - Orbs',
        'hs.autosing.action.Click AOAG': 'Click AOAG',
        'hs.autosing.action.Restart Autosing': 'Restart Autosing',
        'hs.autosing.action.Stop Autosing': 'Stop Autosing',
        'hs.codes.hijackIntro': '[HSCodes] Hypersynergism hijacked this window. Redeemable codes are listed below and can be clicked to autofill.',
        'hs.info.title': 'Important information about the mod can be found here',
        'hs.info.gds.title': '2025-05-12 - Game Data Sniffing (GDS) and Singularity',
        'hs.info.gds.body': 'The mod automatically disables GDS when you enter a new Singularity or leave a Singularity challenge. GDS reads and writes localStorage heavily, which is normally fine but can cause stutter or other issues when starting a new singularity. After a few seconds, the mod automatically re-enables GDS for the new Singularity.',
        'hs.github.newVersionLog': 'New version available: {{version}}!',
        'hs.gamedata.required': 'This feature requires Game Data Sniffing to be enabled.'
    },
    'zh-CN': {
        'hs.localeName': '简体中文',
        'hs.panel.log': '日志',
        'hs.panel.info': '信息',
        'hs.panel.tools': '工具',
        'hs.panel.settings': '设置',
        'hs.panel.debug': '调试',
        'hs.panel.clearLog': '清空日志',
        'hs.panel.copyLog': '复制日志',
        'hs.tools.exportTools': '导出工具',
        'hs.tools.ambrosiaHeaterDesc': '导出扩展存档字符串，用于 Ambrosia Heater。',
        'hs.tools.ambrosiaHeater': 'Ambrosia Heater',
        'hs.tools.references': '参考图',
        'hs.tools.corruptionRef': '腐化参考',
        'hs.tools.corruptionOnemind': '腐化 One Mind',
        'hs.tools.modLinks': '插件链接',
        'hs.tools.modGithub': '插件 Github',
        'hs.tools.modWiki': '插件 Wiki',
        'hs.tools.modFeatures': '功能说明',
        'hs.tools.checkVersion': '检查版本',
        'hs.tools.otherTools': '其他工具',
        'hs.tools.dumpSettings': '导出设置',
        'hs.tools.dumpGameData': '导出游戏变量',
        'hs.tools.fixExaltBug': '修复 Exalt Bug',
        'hs.tools.clearSettings': '清空设置',
        'hs.tools.testingTools': '测试工具',
        'hs.tools.notifyTest': '通知测试',
        'hs.tools.notifyTestLong': '长通知测试',
        'hs.tools.calculationTools': '计算工具',
        'hs.tools.calculationDesc': '执行支持的计算并查看结果。带有 "(C)" 的项目支持按组件输出。',
        'hs.tools.calculationCacheHint': '按组件计算前会先清空计算缓存。',
        'hs.tools.calculateReduced': '计算结果',
        'hs.tools.calculateComponents': '计算组件',
        'hs.tools.clearCache': '清空缓存',
        'hs.tools.dumpCache': '导出缓存',
        'hs.tools.lastCalcResult': '上次计算结果',
        'hs.tools.notifySample': '测试通知',
        'hs.tools.notifySampleLong': '这是一条较长的测试通知，用来确认长文本通知也能正常显示。',
        'hs.tools.loaded': 'Hypersynergism v{{version}} 已加载。',
        'hs.tools.versionLatest': '你正在使用最新版本的 Hypersynergism。',
        'hs.tools.versionOutdated': '你当前使用的不是最新版本的 Hypersynergism。',
        'hs.tools.heaterCopied': 'Ambrosia Heater 数据已复制到剪贴板。',
        'hs.quick.quickbars': '快捷栏',
        'hs.quick.autosing': '启动 Auto-Sing（S256+）',
        'hs.quick.heater': '导出 Heater',
        'hs.quick.quickbar.ambrosia': 'Ambrosia',
        'hs.quick.quickbar.ambrosiaMinibars': 'Ambrosia 小条',
        'hs.quick.quickbar.corruption': '腐化',
        'hs.quick.quickbar.automation': '自动化',
        'hs.quick.quickbar.events': '活动',
        'hs.settings.page.hepteract': 'Hepteract',
        'hs.settings.page.ui': '界面',
        'hs.settings.page.log': '日志',
        'hs.settings.page.input': '输入',
        'hs.settings.page.gamedata': '游戏数据',
        'hs.settings.page.patch': '补丁',
        'hs.settings.page.ambrosia': 'Ambrosia',
        'hs.settings.page.shop': '商店',
        'hs.settings.page.auto-sing': 'Auto-Sing',
        'hs.settings.page.qol-buttons': 'QOL 按钮',
        'hs.settings.page.misc': '杂项',
        'hs.settings.page.debug': '调试',
        'hs.settings.group.hepteracts': 'Hepteract 设置',
        'hs.settings.group.ui': '界面设置',
        'hs.settings.group.notifications': '通知设置',
        'hs.settings.group.log': '日志设置',
        'hs.settings.group.talismans': '护符设置',
        'hs.settings.group.mouse': '鼠标设置',
        'hs.settings.group.ambrosia': 'ADD/TIME Ambrosia 预设自动切换',
        'hs.settings.group.ambrosia2': 'AFK 切换设置',
        'hs.settings.group.ambrosia3': '小条设置',
        'hs.settings.group.patch': '旧补丁设置',
        'hs.settings.group.gamedata': '游戏数据设置',
        'hs.settings.group.shop': '商店设置',
        'hs.settings.group.debug': '调试设置',
        'hs.settings.group.auto-sing': 'Auto-Sing 设置',
        'hs.settings.group.auto-sing-strategy-controls': 'Auto-Sing 策略控制',
        'hs.settings.group.auto-sing-ambrosia': 'Auto-Sing Ambrosia 预设',
        'hs.settings.group.auto-sing-timer-modal': 'Auto-Sing 高级设置',
        'hs.settings.group.quickbar-qol': '快捷栏 QOL 设置',
        'hs.settings.group.Golden-quarks-qol-settings': '金夸克 QOL 设置',
        'hs.settings.group.Octeracts-qol-settings': 'Octeract QOL 设置',
        'hs.settings.toggle.on': '开',
        'hs.settings.toggle.off': '关',
        'hs.settings.none': '无',
        'hs.settings.loadout': '预设 {{index}}',
        'hs.settings.defaultStrategies': '默认策略',
        'hs.settings.userStrategies': '用户策略',
        'hs.settings.deleteSelect': '请先选择一个要删除的策略。',
        'hs.settings.exportSelect': '请先选择一个要导出的策略。',
        'hs.settings.editSelect': '请先选择一个要编辑的策略。',
        'hs.settings.strategyDropdownUnavailable': '策略下拉框不可用。',
        'hs.settings.strategySelectedMissing': '在下拉框中找不到当前选中的策略。',
        'hs.settings.strategyCannotDeleteDefault': '默认策略不能删除。',
        'hs.settings.strategyDeleteConfirm': '确定要删除策略“{{name}}”吗？',
        'hs.settings.strategyDeleteFailed': '从本地存储删除策略失败。',
        'hs.settings.strategyDeleted': '策略“{{name}}”已删除，当前切换到 {{fallback}}。',
        'hs.settings.strategyNotFound': '找不到该策略，无法导出。',
        'hs.settings.strategyCopied': '策略“{{name}}”已复制到剪贴板。',
        'hs.settings.strategyCopyFailed': '复制策略到剪贴板失败。',
        'hs.settings.importStrategy': '导入策略',
        'hs.settings.strategyName': '策略名称',
        'hs.settings.enterStrategyName': '输入策略名称',
        'hs.settings.strategyJson': '策略 JSON',
        'hs.settings.pasteStrategyJson': '在这里粘贴策略 JSON',
        'hs.settings.cancel': '取消',
        'hs.settings.import': '导入',
        'hs.settings.importModalFailed': '创建导入窗口失败。',
        'hs.settings.enterStrategyNameWarn': '请输入策略名称。',
        'hs.settings.strategyAlreadyExists': '策略“{{name}}”已存在。',
        'hs.settings.invalidJson': 'JSON 格式无效。',
        'hs.settings.saveStrategyFailed': '保存策略失败。',
        'hs.settings.findHsUiFailed': '无法找到 HSUI。',
        'hs.settings.strategyImported': '策略“{{name}}”导入成功并已选中。',
        'hs.settings.strategyEditNotFound': '找不到要编辑的策略。',
        'hs.ui.logCopied': '日志已复制到剪贴板。',
        'hs.ui.newVersion': '发现新版本！',
        'hs.qol.consume10x': '连续使用 10 次',
        'hs.qol.buy10x': '连续购买 10 次',
        'hs.qol.add10': '添加 x10',
        'hs.qol.gqDistributor': 'GQ 分配器',
        'hs.qol.distribute': '分配',
        'hs.qol.toggleAfkSwapper': '切换 AFK Swapper',
        'hs.qol.iconAssignHint': '按住 Alt 并点击槽位可为其选择图标。\n右键点击可清除已分配的图标。',
        'hs.qol.corruptionSlotTitle': '配置图标：{{name}}',
        'hs.qol.corruptionIconCleared': '已清除腐化槽位图标',
        'hs.qol.iconPickerActive': '图标选择模式已开启：点击游戏内任意图标或图片即可分配给该槽位。任意一次点击都会结束该模式。',
        'hs.qol.iconPickerNoUsableIcon': '你点击的元素上没有可用的图标。',
        'hs.qol.corruptionIconSet': '腐化槽位图标设置成功',
        'hs.qol.distributeStatus.buying': '正在购买 {{current}}/{{total}}，分配 {{amount}} GQ...',
        'hs.qol.distributeStatus.skipped': '已跳过 {{current}}/{{total}}（0 GQ）',
        'hs.qol.distributeStatus.done': '完成！',
        'hs.ambrosia.quickImport': '快速导入',
        'hs.ambrosia.quickImportInvalidClipboard': '剪贴板里没有有效的预设数据。',
        'hs.ambrosia.quickImportInvalidCount': '预设数量无效：{{count}}。应为 1 到 16。',
        'hs.ambrosia.importInputMissing': '未找到导入输入框。',
        'hs.ambrosia.modeToggleMissing': '未找到模式切换按钮。',
        'hs.ambrosia.quickImportFailed': '快速导入失败。',
        'hs.ambrosia.quickImportResultPartial': '已导入 {{imported}} 个预设；{{failed}} 个失败（详见日志）。',
        'hs.ambrosia.quickImportResultSuccess': '已导入 {{imported}} 个预设，跳过 {{skipped}} 个空槽位。',
        'hs.ambrosia.idleSwapEnabled': '当前界面已启用 IDLE SWAP',
        'hs.ambrosia.dragHint': '把图标从网格拖到快捷栏即可，右键槽位可清空。',
        'hs.talismans.cycleBuy': '循环购买',
        'hs.talismans.next': '下一个',
        'hs.talismans.fragment.yellow': '黄',
        'hs.talismans.fragment.white': '白',
        'hs.talismans.fragment.green': '绿',
        'hs.talismans.fragment.blue': '蓝',
        'hs.talismans.fragment.purple': '紫',
        'hs.talismans.fragment.orange': '橙',
        'hs.talismans.fragment.red': '红',
        'hs.automation.label.AutoChallenge': '自动挑战',
        'hs.automation.label.BuildingsAndUpgrades': '建筑与升级',
        'hs.automation.label.Rune': '符文',
        'hs.automation.label.Research': '研究',
        'hs.automation.label.AutoAntSacrifice': '自动献祭',
        'hs.automation.label.Cube': '方块自动开启',
        'hs.automation.label.Hepteract': 'Hepteract 自动',
        'hs.automation.label.AutoAscend': '自动 Ascend',
        'hs.autosing.modal.title': 'Autosing',
        'hs.autosing.modal.pause': '暂停 Auto-Sing',
        'hs.autosing.modal.resume': '继续 Auto-Sing',
        'hs.autosing.modal.restart': '从当前奇点开头重新开始',
        'hs.autosing.modal.stopNow': '立即停止 Auto-Sing',
        'hs.autosing.modal.stopAfterCurrent': '在当前奇点结束后停止 Auto-Sing',
        'hs.autosing.modal.toggleDetails': '切换详细数据可见性',
        'hs.autosing.modal.minimize': '最小化',
        'hs.autosing.modal.closeStats': '关闭统计窗口',
        'hs.autosing.corruption.none': '无',
        'hs.autosing.corruption.done': '完成',
        'hs.autosing.corruption.empty': '还没有创建任何 Corruption 预设。',
        'hs.autosing.corruption.selectTitle': '选择 Corruption 预设',
        'hs.autosing.corruption.loadoutName': '预设名称',
        'hs.autosing.corruption.enterLoadoutName': '输入预设名称...',
        'hs.autosing.corruption.save': '保存',
        'hs.autosing.corruption.create': '创建',
        'hs.autosing.corruption.cancel': '取消',
        'hs.autosing.corruption.editTitle': '编辑 Corruption 预设',
        'hs.autosing.corruption.createTitle': '创建 Corruption 预设',
        'hs.autosing.corruption.nameRequired': '预设名称不能为空。',
        'hs.autosing.corruption.nameExists': '预设名称“{{name}}”已存在。',
        'hs.autosing.corruption.managerTitle': 'Corruption 预设',
        'hs.autosing.corruption.managerLabel': 'Corruption 预设',
        'hs.autosing.corruption.createButton': '+ 新建预设',
        'hs.autosing.corruption.deleteBlocked': '无法删除预设“{{name}}”。它仍被以下位置使用：{{usages}}。',
        'hs.autosing.corruption.usage.phase': '阶段 {{range}}',
        'hs.autosing.corruption.usage.action': '{{range}} 中的动作',
        'hs.autosing.strategy.strategyName': '策略名称',
        'hs.autosing.strategy.enterName': '输入策略名称...',
        'hs.autosing.strategy.readOnlyNote': '默认策略为只读；保存时会创建一个用户副本。',
        'hs.autosing.strategy.phases': '策略阶段',
        'hs.autosing.strategy.empty': '还没有添加任何策略阶段。',
        'hs.autosing.strategy.createLoadouts': '创建 Corruption 预设',
        'hs.autosing.strategy.addPhase': '+ 添加阶段',
        'hs.autosing.strategy.update': '更新策略',
        'hs.autosing.strategy.saveAsNew': '另存为新策略',
        'hs.autosing.strategy.create': '创建策略',
        'hs.autosing.strategy.editTitle': '编辑 Auto-Sing 策略',
        'hs.autosing.strategy.copyTitle': '查看 / 复制默认策略',
        'hs.autosing.strategy.createTitle': '创建 Auto-Sing 策略',
        'hs.autosing.strategy.failedSave': '保存策略失败',
        'hs.autosing.strategy.updated': '策略“{{name}}”已更新',
        'hs.autosing.strategy.savedAsNew': '策略“{{name}}”已另存为新策略并选中。',
        'hs.autosing.strategy.createdAndSelected': '策略“{{name}}”已创建并选中。',
        'hs.autosing.strategy.unnamed': '未命名策略',
        'hs.autosing.strategy.phaseLine': '阶段 {{index}}：{{start}} -> {{end}}',
        'hs.autosing.phase.phase': '阶段',
        'hs.autosing.phase.start': '起始阶段',
        'hs.autosing.phase.end': '结束阶段',
        'hs.autosing.phase.corruptionLoadout': 'Corruption 预设',
        'hs.autosing.phase.selectCorruptionLoadout': '选择 Corruption 预设',
        'hs.autosing.phase.configureChallenges': '配置挑战',
        'hs.autosing.phase.save': '保存',
        'hs.autosing.phase.create': '创建阶段',
        'hs.autosing.phase.none': '无',
        'hs.autosing.phase.editDisplayTitle': '编辑 {{name}}',
        'hs.autosing.phase.editTitle': '编辑策略阶段 {{range}}',
        'hs.autosing.phase.createDisplayTitle': '创建 {{name}}',
        'hs.autosing.phase.createTitle': '创建策略阶段',
        'hs.autosing.challenge.loadCorruptionLoadout': '载入 Corruption 预设',
        'hs.autosing.challenge.jumpHere': '跳转到这里（IF）',
        'hs.autosing.challenge.addHere': '在此插入',
        'hs.autosing.challenge.waitBefore': '前置等待',
        'hs.autosing.challenge.waitInside': '内部等待',
        'hs.autosing.challenge.max': '上限',
        'hs.autosing.challenge.specialAction': '特殊动作：',
        'hs.autosing.challenge.noneStandard': '无（标准挑战）',
        'hs.autosing.challenge.challengeNumber': '挑战编号：',
        'hs.autosing.challenge.minCompletions': '最低完成次数：',
        'hs.autosing.challenge.waitBeforeMs': '前置等待（毫秒）：',
        'hs.autosing.challenge.waitInsideMs': '内部等待（毫秒）：',
        'hs.autosing.challenge.maxTimeMs': '最大时间（毫秒）：',
        'hs.autosing.challenge.comment': '备注：',
        'hs.autosing.challenge.commentPlaceholder': '添加备注（可选）',
        'hs.autosing.challenge.ifJumpMode': 'IF 跳转模式',
        'hs.autosing.challenge.ifChallenge': 'IF 挑战',
        'hs.autosing.challenge.condition': '条件',
        'hs.autosing.challenge.value': '数值',
        'hs.autosing.challenge.challenges': '挑战',
        'hs.autosing.challenge.storedC15': '已存储的 C15 数值',
        'hs.autosing.challenge.addAction': '添加动作/挑战',
        'hs.autosing.challenge.updateAction': '更新动作',
        'hs.autosing.challenge.cancel': '取消',
        'hs.autosing.challenge.saveStrategy': '保存策略',
        'hs.autosing.challenge.configureDisplayTitle': '配置 {{name}}',
        'hs.autosing.challenge.configureTitle': '配置策略动作（{{range}}）',
        'hs.autosing.challenge.multiplier': '倍率（10^x）',
        'hs.autosing.challenge.compareTo': '比较对象',
        'hs.autosing.challenge.currentC15': '当前 C15 数值',
        'hs.autosing.challenge.corruptionLoadouts': 'Corruption 预设',
        'hs.autosing.challenge.completions': '次完成',
        'hs.autosing.challenge.challengeDisplay': '挑战 {{number}}',
        'hs.autosing.action.Exit Transcension challenge': '退出 Transcension 挑战',
        'hs.autosing.action.Exit Reincarnation challenge': '退出 Reincarnation 挑战',
        'hs.autosing.action.Exit Ascension challenge': '退出 Ascension 挑战',
        'hs.autosing.action.Ascend': '进行 Ascend',
        'hs.autosing.action.Wait': '等待',
        'hs.autosing.action.Ant Sacrifice': '蚂蚁献祭',
        'hs.autosing.action.Auto Challenge Toggle': '自动挑战开关',
        'hs.autosing.action.Auto Ant-Sac Toggle': '自动蚂蚁献祭开关',
        'hs.autosing.action.Auto Ascend Toggle': '自动 Ascend 开关',
        'hs.autosing.action.If-jump': 'IF 跳转',
        'hs.autosing.action.Max C11': '最大化 C11',
        'hs.autosing.action.Max C12': '最大化 C12',
        'hs.autosing.action.Max C13': '最大化 C13',
        'hs.autosing.action.Max C14': '最大化 C14',
        'hs.autosing.action.Store C15': '存储 C15',
        'hs.autosing.action.Ambrosia pre-AOAG loadout': 'Ambrosia AOAG 前预设',
        'hs.autosing.action.Ambrosia post-AOAG Cube loadout': 'Ambrosia AOAG 后 Cube 预设',
        'hs.autosing.action.Ambrosia Quark loadout': 'Ambrosia Quark 预设',
        'hs.autosing.action.Ambrosia Obt loadout': 'Ambrosia Obt 预设',
        'hs.autosing.action.Ambrosia Off loadout': 'Ambrosia 关闭预设',
        'hs.autosing.action.Ambrosia Luck loadout': 'Ambrosia Luck 预设',
        'hs.autosing.action.Corrup 0*': 'Corruption 0*',
        'hs.autosing.action.Corrup from phase (reapply)': '使用阶段 Corruption（重新应用）',
        'hs.autosing.action.Corrup Ants': 'Corruption Ants',
        'hs.autosing.action.C1 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C1 直到在 maxTime 毫秒内无法再完成（初始等待 waitTime 毫秒后）',
        'hs.autosing.action.C2 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C2 直到在 maxTime 毫秒内无法再完成（初始等待 waitTime 毫秒后）',
        'hs.autosing.action.C3 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C3 直到在 maxTime 毫秒内无法再完成（初始等待 waitTime 毫秒后）',
        'hs.autosing.action.C4 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C4 直到在 maxTime 毫秒内无法再完成（初始等待 waitTime 毫秒后）',
        'hs.autosing.action.C5 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C5 直到在 maxTime 毫秒内无法再完成（初始等待 waitTime 毫秒后）',
        'hs.autosing.action.C6 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C6 直到在 maxTime 毫秒内无法再完成（初始等待 waitTime 毫秒后）',
        'hs.autosing.action.C7 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C7 直到在 maxTime 毫秒内无法再完成（初始等待 waitTime 毫秒后）',
        'hs.autosing.action.C8 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C8 直到在 maxTime 毫秒内无法再完成（初始等待 waitTime 毫秒后）',
        'hs.autosing.action.C9 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C9 直到在 maxTime 毫秒内无法再完成（初始等待 waitTime 毫秒后）',
        'hs.autosing.action.C10 until no more completions within maxTime ms (after initially waiting waitTime ms)': 'C10 直到在 maxTime 毫秒内无法再完成（初始等待 waitTime 毫秒后）',
        'hs.autosing.action.Forge Auto-Buy Toggle - Chronos Hept': 'Forge 自动购买开关 - Chronos Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Hyperreal Hept': 'Forge 自动购买开关 - Hyperreal Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Quarks Hept': 'Forge 自动购买开关 - Quarks Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Challenge Hept': 'Forge 自动购买开关 - Challenge Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Abyss Hept': 'Forge 自动购买开关 - Abyss Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Accelerator Hept': 'Forge 自动购买开关 - Accelerator Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Boost Hept': 'Forge 自动购买开关 - Boost Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Multiplier Hept': 'Forge 自动购买开关 - Multiplier Hept',
        'hs.autosing.action.Forge Auto-Buy Toggle - Orbs': 'Forge 自动购买开关 - Orbs',
        'hs.autosing.action.Click AOAG': '点击 AOAG',
        'hs.autosing.action.Restart Autosing': '重启 Autosing',
        'hs.autosing.action.Stop Autosing': '停止 Autosing',
        'hs.codes.hijackIntro': '[HSCodes] Hypersynergism 已接管此窗口，下方列出了可重复领取的代码，点击即可自动填入。',
        'hs.info.title': '这里可以查看插件的重要说明',
        'hs.info.gds.title': '2025-05-12 - Game Data Sniffing（GDS）与奇点',
        'hs.info.gds.body': '当玩家进入新的奇点，或进入 / 退出奇点挑战时，插件会自动关闭 GDS。因为 GDS 会频繁读写 localStorage，平时通常没问题，但在开启新奇点时可能造成卡顿或其他异常。几秒后，插件会自动为新的奇点重新启用 GDS。',
        'hs.github.newVersionLog': '发现新版本：{{version}}！',
        'hs.gamedata.required': '此功能需要启用 Game Data Sniffing。'
    }
};

export class HSLocalization {
    static readonly defaultLocale: Locale = 'en';

    static getLocale(): Locale {
        const candidates = [
            window.__HS_i18next?.resolvedLanguage,
            window.__HS_i18next?.language,
            ...(window.__HS_i18next?.languages ?? []),
            document.documentElement.lang,
            navigator.language
        ].filter(Boolean) as string[];

        for (const candidate of candidates) {
            if (candidate.toLowerCase().startsWith('zh')) {
                return 'zh-CN';
            }
        }

        return this.defaultLocale;
    }

    static isChinese(): boolean {
        return this.getLocale() === 'zh-CN';
    }

    static hasKey(key: string, locale = this.getLocale()): boolean {
        return key in (translations[locale] ?? {});
    }

    static t(key: string, params?: Record<string, unknown>): string {
        const locale = this.getLocale();
        const dict = translations[locale] ?? translations.en;
        const template = dict[key] ?? translations.en[key] ?? key;

        return template.replace(/\{\{(\w+)\}\}/g, (_match, token: string) => {
            const value = params?.[token];
            return value === undefined || value === null ? '' : String(value);
        });
    }

    static tOrFallback(key: string, fallback: string, params?: Record<string, unknown>): string {
        if (!this.hasKey(key)) {
            return fallback;
        }

        return this.t(key, params);
    }

    static maybeTranslateGameKey(i18nKey: string, fallback: string): string {
        const i18n = window.__HS_i18next;
        if (i18n?.t) {
            try {
                const translated = i18n.t(i18nKey);
                if (translated && translated !== i18nKey) {
                    return translated;
                }
            } catch {
                // ignore and fall back
            }
        }

        return fallback;
    }

    static localizeLoadoutLabel(index: number): string {
        return this.t('hs.settings.loadout', { index });
    }

    static localizeLoadoutOptionText(text: string): string {
        const trimmed = text.trim();
        if (/^none$/i.test(trimmed) || trimmed === '(none)') {
            return this.t('hs.settings.none');
        }

        const match = trimmed.match(/^Loadout\s+(\d+)$/i);
        if (match) {
            return this.localizeLoadoutLabel(Number(match[1]));
        }

        return trimmed;
    }

    static localizeTabNameByPageKey(pageKey: string, fallback: string): string {
        return this.tOrFallback(`hs.settings.page.${pageKey}`, fallback);
    }

    static localizeGroupNameByGroupKey(groupKey: string, fallback: string): string {
        return this.tOrFallback(`hs.settings.group.${groupKey}`, fallback);
    }

    static localizeAutomationLabel(toggleKey: string, fallback: string): string {
        return this.tOrFallback(`hs.automation.label.${toggleKey}`, fallback);
    }

    static localizeSettingDescription(settingName: string, fallback: string): string {
        if (this.isChinese()) {
            const translated = hsSettingTranslationsZhCN[settingName]?.description;
            if (translated) {
                return translated;
            }
        }

        return this.tOrFallback(`hs.setting.${settingName}.description`, fallback);
    }

    static localizeSettingHelpText(settingName: string, fallback: string): string {
        if (this.isChinese()) {
            const translated = hsSettingTranslationsZhCN[settingName]?.help;
            if (translated) {
                return translated;
            }
        }

        return this.tOrFallback(`hs.setting.${settingName}.help`, fallback);
    }

    static localizeInfoHtml(): void {
        const tabMap: Array<[string, string]> = [
            ['#hs-panel-tab-1', 'hs.panel.log'],
            ['#hs-panel-tab-5', 'hs.panel.info'],
            ['#hs-panel-tab-2', 'hs.panel.tools'],
            ['#hs-panel-tab-3', 'hs.panel.settings'],
            ['#hs-panel-tab-4', 'hs.panel.debug']
        ];

        for (const [selector, key] of tabMap) {
            const el = document.querySelector(selector);
            if (el) {
                el.textContent = this.t(key);
            }
        }

        const clearBtn = document.getElementById('hs-ui-log-clear');
        if (clearBtn) clearBtn.textContent = this.t('hs.panel.clearLog');

        const copyBtn = document.getElementById('hs-ui-log-copy');
        if (copyBtn) copyBtn.textContent = this.t('hs.panel.copyLog');

        const toolsPanel = document.getElementById('hs-tools-panel');
        if (toolsPanel && toolsPanel.childElementCount === 0) {
            toolsPanel.textContent = this.t('hs.panel.tools');
        }

        const settingsPanel = document.getElementById('hs-settings-panel');
        if (settingsPanel && settingsPanel.childElementCount === 0) {
            settingsPanel.textContent = this.t('hs.panel.settings');
        }

        const infoTitle = document.querySelector('.hs-panel-info-h1');
        if (infoTitle) infoTitle.textContent = this.t('hs.info.title');

        const infoSubtitle = document.querySelector('.hs-panel-info-h2');
        if (infoSubtitle) infoSubtitle.textContent = this.t('hs.info.gds.title');

        const infoBody = document.querySelector('.hs-panel-info-p');
        if (infoBody) infoBody.textContent = this.t('hs.info.gds.body');
    }

    static isLoadoutModeLoad(rawMode: string | null | undefined): boolean {
        if (!rawMode) return false;

        const normalized = rawMode.toLowerCase();
        if (normalized.includes('loadtree')) return true;
        if (normalized.includes('savetree')) return false;

        const text = HSUtilsNormalize.compact(rawMode);
        return /\bload\b/i.test(text) || /加载|讀取|读取/.test(text);
    }

    static isLoadoutModeSave(rawMode: string | null | undefined): boolean {
        if (!rawMode) return false;

        const normalized = rawMode.toLowerCase();
        if (normalized.includes('savetree')) return true;
        if (normalized.includes('loadtree')) return false;

        const text = HSUtilsNormalize.compact(rawMode);
        return /\bsave\b/i.test(text) || /保存|儲存/.test(text);
    }
}

class HSUtilsNormalize {
    static compact(value: string): string {
        return value.replace(/\s+/g, ' ').trim();
    }
}

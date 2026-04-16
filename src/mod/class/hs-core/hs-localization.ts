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

export type HSSettingLocalizationEntry = {
    description?: string;
    help?: string;
};

export const hsSettingTranslationsZhCN: Record<string, HSSettingLocalizationEntry> = {
    expandCostProtection: {
        description: 'Hepteract 扩容花费保护',
        help: '启用后，在 Hepteract 页面点击 Hepteract 图标执行“快速扩容并拉满”时，如果花费会达到或超过设定百分比的 Hepteract，就不会执行。'
    },
    expandCostProtectionDoubleCap: {
        description: '已解锁 Hepteract 双倍容量？',
        help: '如果你已解锁 Hepteract 的双倍容量升级，请勾选此项，这样扩容花费保护才能正确计算。'
    },
    expandCostProtectionNotifications: {
        description: '隐藏花费保护日志',
        help: '如果你不想在日志里看到较为频繁的花费保护提示，请启用此项。'
    },
    hiddenVanillaTabs: {
        description: '隐藏原版标签页',
        help: '选择要从原版标签栏中隐藏的标签页（可使用 Ctrl+点击 进行多选）。'
    },
    patch_shopItemNameMapping: {
        description: '显示商店物品名称',
        help: '为商店物品补全名称显示。'
    },
    autoConfirmPopups: {
        description: '自动确认弹窗（仅 Tampermonkey）',
        help: '启用后，确认和提示弹窗会被自动关闭。确认弹窗会自动选择“确定”，提示弹窗会被静默关闭。'
    },
    syncNotificationOpacity: {
        description: '通知透明度',
        help: '控制游戏内通知的透明度，例如成就通知。'
    },
    reactiveMouseHover: {
        description: '响应式鼠标悬停（按住 SHIFT 时）',
        help: '启用后，按住 SHIFT 时会在当前鼠标位置持续触发悬停事件。设置值为事件间隔秒数（0.1 = 100ms）。'
    },
    autoClick: {
        description: '自动点击（按住 CTRL 时）',
        help: '启用后，按住 CTRL 时会在当前鼠标位置自动点击。设置值为点击间隔秒数（0.1 = 100ms）。'
    },
    autoClickIgnoreElements: {
        description: '自动点击忽略特定元素',
        help: '启用后，自动点击会跳过某些通常不需要连点的元素，例如部分按钮，以避免误操作。'
    },
    useGameData: {
        description: '游戏数据嗅探（GDS）',
        help: '启用后台持续扫描 localStorage 存档数据的游戏数据嗅探功能。启用后插件能力会大幅增强，但在部分系统上可能带来性能问题。'
    },
    stopSniffOnError: {
        description: '出错时自动禁用',
        help: '启用后，读取游戏数据出现错误时会自动关闭 GDS。建议开启，因为读取游戏数据并不总是可靠。'
    },
    addTimeAutoLoadouts: {
        description: 'ADD/TIME Ambrosia 预设自动切换',
        help: '启用后，点击 ADD 或 TIME 按钮时，插件会自动切换到配置好的 Ambrosia 预设。'
    },
    autoLoadoutAdd: {
        description: 'ADD 预设',
        help: '配置点击 ADD 按钮时要使用的 Ambrosia 预设。'
    },
    autoLoadoutTime: {
        description: 'TIME 预设',
        help: '配置点击 TIME 按钮时要使用的 Ambrosia 预设。'
    },
    ambrosiaIdleSwap: {
        description: 'Ambrosia AFK 自动切换',
        help: '启用后，会根据 Ambrosia 进度条的进度自动切换 Ambrosia 预设。按设计，此功能只会在 Ambrosia 页面中生效，不会在后台自动切换。'
    },
    ambrosiaIdleSwapNormalLoadout: {
        description: '普通预设',
        help: '当 Ambrosia 进度条未满时，AFK 自动切换器会切换到此预设。'
    },
    ambrosiaIdleSwap100Loadout: {
        description: '100% 预设',
        help: '当 Ambrosia 进度条即将达到 100% 时，AFK 自动切换器会切换到此预设。'
    },
    startAutosing: {
        description: '启动/停止 Auto-Sing（S256+）',
        help: '启用后，插件会自动执行奇点轮回。'
    },
    singularityNumber: {
        description: '要刷的奇点数',
        help: '控制 Auto-Sing 会刷到哪个奇点层数。'
    },
    autosingStrategy: {
        description: 'Auto-Sing 策略',
        help: '这是 Auto-Sing 将遵循的策略。'
    },
    editAutosingStrategy: {
        description: '✏️ 编辑',
        help: '打开新窗口以编辑当前选中的 Auto-Sing 策略。'
    },
    createAutosingStrategy: {
        description: '➕ 新建',
        help: '打开新窗口以创建你自己的 Auto-Sing 策略。'
    },
    deleteAutosingStrategy: {
        description: '🗑️ 删除',
        help: '删除当前选中的策略。'
    },
    importAutosingStrategy: {
        description: '📥 导入',
        help: '打开弹窗，粘贴你想导入的策略。'
    },
    exportAutosingStrategy: {
        description: '📤 导出',
        help: '将当前选中的策略导出到剪贴板。'
    },
    migrateAndSaveAllUserStrategies: {
        description: '迁移并全部保存',
        help: '迁移所有非默认的本地策略（旧 ID 与新 ID 互转）并保存到 localStorage。'
    },
    autosingEarlyCubeLoadout: {
        description: 'AOAG 前 Cube 预设',
        help: '这是前期能提供最多 Cube 的 Ambrosia 预设。'
    },
    autosingLateCubeLoadout: {
        description: 'AOAG 后 Cube 预设',
        help: '这是后期能提供最多 Cube 的 Ambrosia 预设。'
    },
    autosingQuarkLoadout: {
        description: 'Quark 预设',
        help: '这是能提供最多 Quark 的 Ambrosia 预设。注意：在 Auto-Sing 点击奇点按钮之前会自动切换到该预设，同时也会点击 Ascension 按钮以获得额外 Quark。'
    },
    autosingObtLoadout: {
        description: 'Obtainium 预设',
        help: '这是能提供最多 Obtainium 的 Ambrosia 预设。'
    },
    autosingOffLoadout: {
        description: 'Offering 预设',
        help: '这是能提供最多 Offering 的 Ambrosia 预设。'
    },
    autosingAmbrosiaLoadout: {
        description: 'Luck 预设',
        help: '这是能提供最多 Ambrosia 的预设。'
    },
    advancedDataCollection: {
        description: '高级数据采集',
        help: '启用后，会收集更详细的 Auto-Sing 调试数据。'
    },
    ambrosiaQuickBar: {
        description: 'Ambrosia 快捷栏（S25+）',
        help: '启用后，会在页眉显示 Ambrosia 预设快捷栏，方便无需打开 Ambrosia 菜单就能快速载入预设。'
    },
    ambrosiaMinibars: {
        description: 'Ambrosia 迷你进度条（S25+）',
        help: '在页面顶部显示蓝色和红色 Ambrosia 的小型进度条。'
    },
    enableAutomationQuickBar: {
        description: '自动化快捷栏',
        help: '启用后，会在页眉显示紧凑的自动化状态栏（改编自 syn UI userscript）。'
    },
    enableCorruptionQuickBar: {
        description: 'Corruption 快捷栏',
        help: '启用后，会在页眉显示 Corruption 预设按钮以便快速加载。'
    },
    enableEventsQuickBar: {
        description: '活动快捷栏',
        help: '启用后，活动期间会在页眉显示 HH/Lotus。'
    },
    hideMaxedGQUpgrades: {
        description: '隐藏已满级 GQ 升级',
        help: '启用后，会在快捷栏中隐藏已满级的 Golden Quark 升级。'
    },
    enableGQDistributor: {
        description: '启用 GQ 分配器',
        help: '启用后，会在 GQ 页面添加 GQ Distributor，用于在无限升级之间分配 Golden Quarks。'
    },
    gqDistributorRatio1: {
        description: 'GQ 分配器比例 1',
        help: 'GQ 分配器输入 1 的比例。'
    },
    gqDistributorRatio2: {
        description: 'GQ 分配器比例 2',
        help: 'GQ 分配器输入 2 的比例。'
    },
    gqDistributorRatio3: {
        description: 'GQ 分配器比例 3',
        help: 'GQ 分配器输入 3 的比例。'
    },
    gqDistributorRatio4: {
        description: 'GQ 分配器比例 4',
        help: 'GQ 分配器输入 4 的比例。'
    },
    gqDistributorRatio5: {
        description: 'GQ 分配器比例 5',
        help: 'GQ 分配器输入 5 的比例。'
    },
    gqDistributorRatio6: {
        description: 'GQ 分配器比例 6',
        help: 'GQ 分配器输入 6 的比例。'
    },
    gqDistributorRatio7: {
        description: 'GQ 分配器比例 7',
        help: 'GQ 分配器输入 7 的比例。'
    },
    gqDistributorRatio8: {
        description: 'GQ 分配器比例 8',
        help: 'GQ 分配器输入 8 的比例。'
    },
    hideMaxedOctUpgrades: {
        description: '隐藏已满级 Octeract 升级',
        help: '启用后，会在快捷栏中隐藏已满级的 Octeract 升级。'
    },
    logTimestamp: {
        description: '在日志中显示时间戳',
        help: '控制插件日志视图中是否显示时间戳。'
    },
    showDebugLogs: {
        description: '显示调试日志',
        help: '控制插件日志视图中是否显示 debug 类型日志。'
    },
    patch_testPatch: {
        description: '测试补丁',
        help: '测试补丁，会把 Buildings 按钮变成红色。'
    },
    patch_ambrosiaViewOverflow: {
        description: '修复 Ambrosia 页面溢出',
        help: '此补丁可修复 Ambrosia 页面中的溢出问题，避免鼠标悬停在 Ambrosia 升级上时页面发生跳动。'
    },
    patch_iconSetCaching: {
        description: '图标集缓存',
        help: '对某些图标使用另一种缓存方式，以避免在打开 DevTools 时出现过度拉取。对大多数玩家来说可能没什么影响；如果你不知道它的作用，建议保持关闭。'
    },
    enableTalismansModule: {
        description: '启用“Cycle BUY”按钮（增强版 BUY ALL）',
        help: '启用后，会在原版按钮旁添加增强版“Cycle BUY”按钮，用于循环购买不同碎片。'
    },
    autosing3to6DCubeOpeningPercent: {
        description: '3-6D Cube 开启百分比',
        help: '自动开启 3-6D Cube 的百分比（1-100）。'
    },
    autosingTessBuildingAutoBuyPercent: {
        description: 'Tesseract 建筑自动购买百分比',
        help: '自动购买 Tesseract 建筑的百分比（1-100）。'
    },
    autosingAutoChallTimerStart: {
        description: '自动挑战开始计时器',
        help: '自动开始挑战的计时器（正小数）。'
    },
    autosingAutoChallTimerExit: {
        description: '自动挑战退出计时器',
        help: '自动退出挑战的计时器（正小数）。'
    },
    autosingAutoChallTimerEnter: {
        description: '自动挑战进入计时器',
        help: '自动进入挑战的计时器（正小数）。'
    }
};

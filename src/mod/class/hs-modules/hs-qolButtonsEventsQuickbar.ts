import { HSModuleManager } from "../hs-core/module/hs-module-manager";
import { HSGameDataAPI } from "../hs-core/gds/hs-gamedata-api";
import { HSLogger } from "../hs-core/hs-logger";

export class HSQOLEventsQuickbar {
    private container: HTMLDivElement | null = null;
    private elements?: {
        happyHourSpan: HTMLSpanElement;
        happyHourAmountSpan: HTMLSpanElement;
        lotusSpan: HTMLSpanElement;
    };
    private unsubscribeEventData: (() => void) | null = null;

    public createSection(): HTMLElement {
        const container = document.createElement('div');
        container.id = 'eventsQuickBar';
        container.className = 'hs-events-quickbar';
        return container;
    }

    public setup(container: HTMLDivElement): void {
        this.container = container;
        this.resetRuntime();
        this.createDOM();
        this.setupSubscription();
    }

    public teardown(): void {
        this.cleanupSubscription();
        this.resetRuntime();
        this.container = null;
    }

    private resetRuntime(): void {
        if (this.container) this.container.innerHTML = '';
        this.elements = undefined;
    }

    private createDOM(): void {
        if (!this.container) return;

        const happyHourSpan = document.createElement('span');
        happyHourSpan.id = 'events-quickbar-happy-hour-span';
        happyHourSpan.style.cursor = 'help';

        const happyHourAmountSpan = document.createElement('span');
        happyHourSpan.appendChild(happyHourAmountSpan);

        const happyHourImg = document.createElement('img');
        happyHourImg.className = 'events-quickbar-event-img';
        happyHourImg.src = 'Pictures/PseudoShop/HAPPY_HOUR_BELL.png';
        happyHourSpan.appendChild(happyHourImg);

        const lotusSpan = document.createElement('span');
        lotusSpan.id = 'events-quickbar-lotus-span';
        lotusSpan.style.cursor = 'help';

        const lotusImg = document.createElement('img');
        lotusImg.className = 'events-quickbar-event-img';
        lotusImg.src = 'Pictures/PseudoShop/LOTUS.png';
        lotusSpan.appendChild(lotusImg);

        this.elements = {
            happyHourSpan,
            happyHourAmountSpan: happyHourAmountSpan,
            lotusSpan
        };

        this.container.appendChild(happyHourSpan);
        this.container.appendChild(lotusSpan);
        HSLogger.debug('Events quickbar DOM created', 'HSQOLEventsQuickbar');
    }

    private updateDOM(): void {
        if (!this.elements) return;
        const gameDataAPI = HSModuleManager.getModule<HSGameDataAPI>('HSGameDataAPI');
        if (!gameDataAPI) return;
        const eventData = gameDataAPI.getEventData();
        if (!eventData) return;

        const happyHourEvent = eventData?.HAPPY_HOUR_BELL;
        const lotusEvent = eventData?.LOTUS_OF_REJUVENATION;
        const happyHourAmount = happyHourEvent?.amount ?? 0;

        let hhTooltipText = '';
        if (happyHourEvent?.ends && happyHourEvent.ends.length > 0) {
            const hhEndsTimes = happyHourEvent.ends.map((e: any) => new Date(e).toLocaleTimeString(undefined, { hour12: false })).join(', ');
            hhTooltipText = `${happyHourAmount} HH ending at: ${hhEndsTimes}`;
        } else {
            hhTooltipText = 'No active HH event';
        }
        let lotusTooltipText = '';
        if (lotusEvent?.ends && lotusEvent.ends.length > 0) {
            const lotusEndTime = new Date(lotusEvent.ends[0]).toLocaleTimeString(undefined, { hour12: false });
            lotusTooltipText = `Lotus until: ${lotusEndTime}`;
        } else {
            lotusTooltipText = 'No active Lotus event';
        }

        const { happyHourSpan, happyHourAmountSpan, lotusSpan } = this.elements;
        happyHourSpan.title = hhTooltipText;
        happyHourAmountSpan.textContent = `${happyHourAmount}`;
        if (happyHourEvent?.ends?.length === 0) {
            happyHourSpan.classList.add('no-event');
        } else {
            happyHourSpan.classList.remove('no-event');
        }

        lotusSpan.title = lotusTooltipText;
        if (lotusEvent?.ends?.length === 0) {
            lotusSpan.classList.add('hs-hidden');
        } else {
            lotusSpan.classList.remove('hs-hidden');
        }

        HSLogger.debug(`Events quickbar updated: Happy Hour: "${hhTooltipText}", Lotus: "${lotusTooltipText}"`, 'HSQOLEventsQuickbar');
    }

    private setupSubscription(): void {
        if (this.unsubscribeEventData) return;
        if (!this.elements) return;
        const gameDataAPI = HSModuleManager.getModule<HSGameDataAPI>('HSGameDataAPI');
        if (!gameDataAPI) return;

        if (gameDataAPI && typeof gameDataAPI.subscribeEventDataChange === 'function') {
            this.unsubscribeEventData = gameDataAPI.subscribeEventDataChange(() => { this.updateDOM(); }) ?? null;
            HSLogger.debug('Subscribed to event data changes for Events Quickbar', 'HSQOLEventsQuickbar');
        }
    }

    private cleanupSubscription(): void {
        if (this.unsubscribeEventData) {
            try { this.unsubscribeEventData(); } catch (e) { /* ignore */ }
            this.unsubscribeEventData = null;
            HSLogger.debug('Unsubscribed from event data changes for Events Quickbar', 'HSQOLEventsQuickbar');
        }
    }
}

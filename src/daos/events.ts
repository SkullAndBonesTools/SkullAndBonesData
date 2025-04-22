import eventsData from '../../data/events.json';

export class Event {
    constructor(
        public readonly id: string
    ) {}

    public static loadEvents(): Record<string, Event> {
        const events: Record<string, Event> = {};
        for (const [key, value] of Object.entries(eventsData)) {
            events[key] = new Event(
                value.id
            );
        }
        return events;
    }
}

export type Events = {
    [K in keyof typeof eventsData]: Event;
};

export const Events = Event.loadEvents() as Events;
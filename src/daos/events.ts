import eventsData from '../../data/events.json';
import { Season, Seasons } from './seasons';

export class Event {
    constructor(
        public readonly id: string,
        public readonly seasons: Season[]
    ) {}

    public static loadEvents(): Record<string, Event> {
        const events: Record<string, Event> = {};
        for (const [key, value] of Object.entries(eventsData)) {
            const seasons: Season[] = value.seasons.map((_season: string) => {
                const season = _season as keyof typeof Seasons;
                return Seasons[season];
            });
            events[key] = new Event(
                value.id,
                seasons
            );
        }
        return events;
    }
}

export type Events = {
    [K in keyof typeof eventsData]: Event;
};

export const Events = Event.loadEvents() as Events;
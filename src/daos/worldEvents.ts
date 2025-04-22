import worldEventsData from '../../data/worldEvents.json';

export class WorldEvent {
    constructor(
        public readonly id: string
    ) {}

    public static loadWorldEvents(): Record<string, WorldEvent> {
        const worldEvents: Record<string, WorldEvent> = {};
        for (const [key, value] of Object.entries(worldEventsData)) {
            worldEvents[key] = new WorldEvent(
                value.id
            );
        }
        return worldEvents;
    }
}

type WorldEvents = {
    [K in keyof typeof worldEventsData]: WorldEvent;
};

export const WorldEvents = WorldEvent.loadWorldEvents() as WorldEvents;
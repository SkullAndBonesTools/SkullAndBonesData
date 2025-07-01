import worldEventsData from '../../data/worldEvents.json';
import { WorldEventType } from '../types/WorldEventProperties';
import { Faction, Factions } from './factions';

export class WorldEvent {
    constructor(
        public readonly id: string,
        public readonly type: WorldEventType,
        public readonly faction?: Faction,
    ) {}

    public static fromRawData(rawData: any): WorldEvent {
        const faction = rawData.faction as keyof typeof Factions;
        return new WorldEvent(
            rawData.id,
            rawData.type as WorldEventType,
            faction ? Factions[faction] : undefined
        );
    }

    public static loadWorldEvents(): Record<string, WorldEvent> {
        const worldEvents: Record<string, WorldEvent> = {};
        for (const [key, value] of Object.entries(worldEventsData)) {
            worldEvents[key] = WorldEvent.fromRawData(value);
        }
        return worldEvents;
    }
}

type WorldEvents = {
    [K in keyof typeof worldEventsData]: WorldEvent;
};

export const WorldEvents = WorldEvent.loadWorldEvents() as WorldEvents;
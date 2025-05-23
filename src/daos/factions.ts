import factionsData from "../../data/factions.json";
import { Event, Events } from "./events";
import { Season, Seasons } from "./seasons";

export class Faction {
    constructor(
        public readonly id: string,
        public readonly firstAppearingSeason: Season,
        public readonly event: Event | undefined,
        public readonly dateAdded: Date,
        public readonly lastUpdated: Date
    ) {}

    public static fromRawData(rawData: any): Faction {
        const season = rawData.firstAppearingSeason as keyof typeof Seasons;
        const event = rawData.event as keyof typeof Events;
        return new Faction(
            rawData.id,
            Seasons[season],
            event ? Events[event] : undefined,
            new Date(rawData.dateAdded),
            new Date(rawData.lastUpdated)
        );
    }

    public static loadFactions(): Record<string, Faction> {
        const factions: Record<string, Faction> = {};
        for (const [key, value] of Object.entries(factionsData)) {
            factions[key] = Faction.fromRawData(value);
        }
        return factions;
    }
}

type Factions = {
    [K in keyof typeof factionsData]: Faction;
};

export const Factions: Factions = Faction.loadFactions() as Factions;
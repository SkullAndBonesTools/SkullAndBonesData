import territoriesData from "../../data/territories.json";
import { Faction, Factions } from "./factions";
import { Region, Regions } from "./regions";

export class Territory {
    constructor(
        public readonly id: string,
        public readonly factions: Faction[],
        public readonly region: Region,
        public readonly dateAdded: Date,
        public readonly lastUpdated: Date
    ) {}

    public static fromRawData(rawData: any): Territory {
        const factions: Faction[] = rawData.factions.map((_faction: string) => {
            const faction = _faction as keyof typeof Factions;
            return Factions[faction];
        });
        const region = rawData.region as keyof typeof Regions;
        return new Territory(
            rawData.id,
            factions,
            Regions[region],
            new Date(rawData.dateAdded),
            new Date(rawData.lastUpdated)
        );
    }

    public static loadTerritories(): Record<string, Territory> {
        const Territories: Record<string, Territory> = {};
        for (const [key, value] of Object.entries(territoriesData)) {
            Territories[key] = Territory.fromRawData(value);
        }
        return Territories;
    }
}

type Territories = {
    [K in keyof typeof territoriesData]: Territory;
};

export const Territories: Territories = Territory.loadTerritories() as Territories;
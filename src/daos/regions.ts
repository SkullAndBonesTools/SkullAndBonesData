import regionsData from "../../data/regions.json";
import { Faction, Factions } from "./factions";

export class Region {
    constructor(
        public readonly id: string,
        public readonly factions: Faction[],
        public readonly dateAdded: Date,
        public readonly lastUpdated: Date
    ) {}

    public static fromRawData(rawData: any): Region {
        const factions: Faction[] = rawData.factions.map((_faction: string) => {
            const faction = _faction as keyof typeof Factions;
            return Factions[faction];
        });
        return new Region(
            rawData.id,
            factions,
            new Date(rawData.dateAdded),
            new Date(rawData.lastUpdated)
        );
    }

    public static loadRegions(): Record<string, Region> {
        const Regions: Record<string, Region> = {};
        for (const [key, value] of Object.entries(regionsData)) {
            Regions[key] = Region.fromRawData(value);
        }
        return Regions;
    }
}

type Regions = {
    [K in keyof typeof regionsData]: Region;
};

export const Regions: Regions = Region.loadRegions() as Regions;
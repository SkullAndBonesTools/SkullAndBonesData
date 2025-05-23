import commoditiesData from "../../data/commodities.json";
import { CommodityCategory } from "../types/Category";
import { Rarity } from "../types/Rarity";
import { Event, Events } from "./events";

export class Commodity {
    constructor(
        public readonly id: string,
        public readonly rarity: Rarity,
        public readonly category: CommodityCategory,
        public readonly event?: Event
    ) {}

    public static fromRawData(rawData: any): Commodity {
        const event = rawData.event as keyof typeof Events;
        return new Commodity(
            rawData.id,
            rawData.rarity as Rarity,
            rawData.category as CommodityCategory,
            event ? Events[event] : undefined
        );
    }

    public static loadCommodities(): Record<string, Commodity> {
        const commodities: Record<string, Commodity> = {};
        for (const [key, value] of Object.entries(commoditiesData)) {
            commodities[key] = Commodity.fromRawData(value);
        }
        return commodities;
    }
}

type Commodities = {
    [K in keyof typeof commoditiesData]: Commodity;
};

export const Commodities: Commodities = Commodity.loadCommodities() as Commodities;
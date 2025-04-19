import commoditiesData from "../../data/commodities.json";
import { CommodityCategory } from "../types/CommodityCategory";
import { Rarity } from "../types/Rarity";

export class Commodity {
    constructor(
        public readonly id: string,
        public readonly rarity: Rarity,
        public readonly category: CommodityCategory
    ) {}

    public static loadCommodities(): Record<string, Commodity> {
        const commodities: Record<string, Commodity> = {};
        for (const [key, value] of Object.entries(commoditiesData)) {
            commodities[key] = new Commodity(
                key,
                value.rarity as Rarity,
                value.category as CommodityCategory
            );
        }
        return commodities;
    }
}

export type Commodities = {
    [K in keyof typeof commoditiesData]: Commodity;
};

export const Commodities: Commodities = Commodity.loadCommodities() as Commodities;
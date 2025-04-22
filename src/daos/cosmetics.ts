import cosmeticsData from '../../data/cosmetics.json';
import { Effect } from '../types/CosmeticProperties';
import { Material, Materials } from './materials';
import { Season } from './seasons';

export class Cosmetic {
    constructor(
        public readonly id: string,
        public readonly type: string,
        public readonly dateAdded: string,
        public readonly lastUpdated: string,
        public readonly set?: string,
        public readonly obtainable?: string | string[] | Array<string | string[]>,
        public readonly effect?: Effect | Effect[],
        public readonly season?: Season,
        public readonly contract?: string,
        public readonly required?: Map<Material, number>,
        public readonly requiredRank?: string,
        public readonly bounty?: string,
        public readonly worldEvent?: string
    ) {}

    public static fromRawData(rawData: any): Cosmetic {
        const required = rawData.required ? new Map<Material, number>() : undefined;
        if(required) {
            for (const [requiredKey, quantity] of Object.entries(rawData.required)) {
                const requiredMaterial = requiredKey as keyof typeof Materials;
                required.set(Materials[requiredMaterial], quantity as number);
            }
        }
        
        return new Cosmetic(
            rawData.id,
            rawData.type,
            rawData.dateAdded,
            rawData.lastUpdated,
            rawData.set ?? undefined,
            rawData.obtainable ?? undefined,
            rawData.effect ?? undefined,
            rawData.season ?? undefined,
            rawData.contract ?? undefined,
            required,
            rawData.requiredRank ?? undefined,
            rawData.bounty ?? undefined,
            rawData.worldEvent ?? undefined
        );
    }

    public static loadCosmetics(): Record<string, Cosmetic> {
        const cosmetics: Record<string, Cosmetic> = {};
        for (const [key, value] of Object.entries(cosmeticsData)) {
            cosmetics[key] = Cosmetic.fromRawData(value);
        }
        return cosmetics;
    }
}

type Cosmetics = {
    [K in keyof typeof cosmeticsData]: Cosmetic;
};

export const Cosmetics: Cosmetics = Cosmetic.loadCosmetics() as Cosmetics;
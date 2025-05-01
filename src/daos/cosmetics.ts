import cosmeticsData from '../../data/cosmetics.json';
import { Effect } from '../types/CosmeticProperties';
import { Rarity } from '../types/Rarity';
import { Event, Events } from './events';
import { Material, Materials } from './materials';
import { Season, Seasons } from './seasons';
import { Set, Sets } from './sets';
import { WorldEvent, WorldEvents } from './worldEvents';

export class Cosmetic {
    constructor(
        public readonly id: string,
        public readonly type: string,
        public readonly dateAdded: string,
        public readonly lastUpdated: string,
        public readonly rarity?: Rarity,
        public readonly tier?: number,
        public readonly set?: Set,
        public readonly obtainable?: string | string[] | Array<string | string[]>,
        public readonly effect?: Effect | Effect[],
        public readonly season?: Season,
        public readonly contract?: string,
        public basic?: Cosmetic,
        public upgrades?: Cosmetic[],
        public readonly required?: Map<Material, number>,
        public readonly requiredRank?: string,
        public readonly bounty?: string,
        public readonly event?: Event,
        public readonly worldEvent?: WorldEvent
    ) {}

    public static fromRawData(rawData: any): Cosmetic {
        const season = rawData.season as keyof typeof Seasons;
        const set = rawData.set as keyof typeof Sets;
        const event = rawData.event as keyof typeof Events;
        const worldEvent = rawData.worldEvent as keyof typeof WorldEvents;
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
            rawData.rarity as Rarity ?? undefined,
            rawData.tier ?? undefined,
            rawData.set ? Sets[set] : undefined,
            rawData.obtainable ?? undefined,
            rawData.effect ?? undefined,
            rawData.season ? Seasons[season] : undefined,
            rawData.contract ?? undefined,
            undefined,
            undefined,
            required,
            rawData.requiredRank ?? undefined,
            rawData.bounty ?? undefined,
            rawData.event ? Events[event] : undefined,
            rawData.worldEvent ? WorldEvents[worldEvent] : undefined
        );
    }

    public static updateCosmeticWithUpgrades(key: string, rawData: any, cosmetics: Record<string, Cosmetic>) {
        if(rawData.basic) {
            const basic = cosmetics[rawData.basic];
            if (basic) cosmetics[key].basic = basic;
        }
        if(rawData.upgrades) {
            const upgrades = rawData.upgrades.map((upgradeCosmetic: string) => cosmetics[upgradeCosmetic]);
            cosmetics[key].upgrades = upgrades;
        }
    }

    public static loadCosmetics(): Record<string, Cosmetic> {
        const cosmetics: Record<string, Cosmetic> = {};
        for (const [key, value] of Object.entries(cosmeticsData)) {
            cosmetics[key] = Cosmetic.fromRawData(value);
        }
        for (const [key, value] of Object.entries(cosmeticsData)) {
            Cosmetic.updateCosmeticWithUpgrades(key, value, cosmetics);
        }
        return cosmetics;
    }
}

type Cosmetics = {
    [K in keyof typeof cosmeticsData]: Cosmetic;
};

export const Cosmetics: Cosmetics = Cosmetic.loadCosmetics() as Cosmetics;
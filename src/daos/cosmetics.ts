import cosmeticsData from '../../data/cosmetics.json';
import { CosmeticEffect, PlayerAppearanceType, PlayerOutfitType, ShipCosmeticType } from '../types/CosmeticProperties';
import { Rarity } from '../types/Rarity';
import { Contract, Contracts } from './contracts';
import { Event, Events } from './events';
import { Item, Items } from './items';
import { Material, Materials } from './materials';
import { Season, Seasons } from './seasons';
import { Set, Sets } from './sets';
import { WorldEvent, WorldEvents } from './worldEvents';

export class Cosmetic {
    constructor(
        public readonly id: string,
        public readonly type: ShipCosmeticType | PlayerOutfitType | PlayerAppearanceType,
        public readonly dateAdded: Date,
        public readonly lastUpdated: Date,
        public readonly rarity?: Rarity,
        public readonly tier?: number,
        public readonly set?: Set,
        public readonly obtainable?: string | Item | Array<string | Item> | Array<Array<string | Item> | Item | string>,
        public readonly effect?: CosmeticEffect | CosmeticEffect[],
        public readonly season?: Season,
        public readonly contract?: Contract,
        public basic?: Cosmetic,
        public upgrades?: Cosmetic[],
        public readonly required?: Map<Material, number>,
        public readonly requiredRank?: string,
        public readonly bounty?: string,
        public readonly event?: Event,
        public readonly worldEvent?: WorldEvent | WorldEvent[]
    ) {}

    public static fromRawData(rawData: any): Cosmetic {
        const season = rawData.season as keyof typeof Seasons;
        const set = rawData.set as keyof typeof Sets;
        const contract = rawData.contract as keyof typeof Contracts;
        const event = rawData.event as keyof typeof Events;
        const worldEvent = Array.isArray(rawData.worldEvent)
            ? rawData.worldEvent.map((_worldEvent: string) => WorldEvents[_worldEvent as keyof typeof WorldEvents])
            : WorldEvents[rawData.worldEvent as keyof typeof WorldEvents];
        const required = rawData.required ? new Map<Material, number>() : undefined;
        if(required) {
            for (const [requiredKey, quantity] of Object.entries(rawData.required)) {
                const requiredMaterial = requiredKey as keyof typeof Materials;
                required.set(Materials[requiredMaterial], quantity as number);
            }
        }
        let obtainable = rawData.obtainable ?? undefined;
        if(Array.isArray(obtainable)) {
            const _obtainable = new Array<string | Item>();
            for(const obtainableKey of rawData.obtainable as Array<keyof typeof Items>) {
                const obtainableItem = Items[obtainableKey];
                if (obtainableItem && obtainableItem.type === "chest") {
                    _obtainable.push(obtainableItem);
                } else {
                    _obtainable.push(obtainableKey);
                }
            }
            obtainable = _obtainable;
        } else if(obtainable) {
            const obtainableItem = Items[rawData.obtainable as keyof typeof Items];
            if (obtainableItem && obtainableItem.type === "chest") {
                obtainable = obtainableItem;
            }
        }
        
        return new Cosmetic(
            rawData.id,
            rawData.type,
            new Date(rawData.dateAdded),
            new Date(rawData.lastUpdated),
            rawData.rarity as Rarity ?? undefined,
            rawData.tier ?? undefined,
            rawData.set ? Sets[set] : undefined,
            obtainable,
            rawData.effect ?? undefined,
            rawData.season ? Seasons[season] : undefined,
            rawData.contract ? Contracts[contract] : undefined,
            undefined,
            undefined,
            required,
            rawData.requiredRank ?? undefined,
            rawData.bounty ?? undefined,
            rawData.event ? Events[event] : undefined,
            worldEvent ?? undefined
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
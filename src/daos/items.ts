import itemsData from '../../data/items.json';
import { FurnitureType, GeneralType, Tier, WeaponType } from '../types/ItemProperties';
import { Rarity } from '../types/Rarity';
import { Contract, Contracts } from './contracts';
import { Event, Events } from './events';
import { Material, Materials } from './materials';
import { Season, Seasons } from './seasons';
import { WorldEvent, WorldEvents } from './worldEvents';

export class Item {
    constructor(
        public readonly id: string,
        public readonly type: GeneralType | WeaponType | FurnitureType,
        public readonly season: Season,
        public readonly dateAdded: Date,
        public readonly lastUpdated: Date,
        public readonly tier?: Tier,
        public readonly blueprint?: string,
        public readonly value?: number,
        public readonly weight?: number,
        public readonly gearScore?: number,
        public readonly projectilesPerShot?: number,
        public readonly damagePerShot?: number,
        public readonly rateOfFire?: number,
        public readonly reloadSpeed?: number,
        public readonly optimalRange?: number,
        public readonly projectileSpeed?: number,
        public readonly timeToTarget?: number,
        public readonly required?: Map<Material, number>,
        public readonly requiredRank?: string,
        public readonly perks?: string[],
        public readonly rarity?: Rarity,
        public obtainable?: string | Item | Array<string | Item> | Array<Array<string | Item> | Item | string>,
        public readonly event?: Event,
        public readonly worldEvent?: WorldEvent | WorldEvent[],
        public readonly armor?: number,
        public readonly damageMitigation?: Record<string, number>,
        public readonly contract?: Contract
    ) {}

    public static fromRawData(rawData: any): Item {
        const season = rawData.season as keyof typeof Seasons;
        const event = rawData.event as keyof typeof Events;
        const contract = rawData.contract as keyof typeof Contracts;
        const worldEvent = Array.isArray(rawData.worldEvent)
            ? rawData.worldEvent.map((_worldEvent: string) => WorldEvents[_worldEvent as keyof typeof WorldEvents])
            : WorldEvents[rawData.worldEvent as keyof typeof WorldEvents];
        const required = rawData.required ? new Map<Material, number>() : undefined;
        if (required) {
            for (const [requiredKey, quantity] of Object.entries(rawData.required)) {
                const requiredMaterial = requiredKey as keyof typeof Materials;
                required.set(Materials[requiredMaterial], quantity as number);
            }
        }

        return new Item(
            rawData.id,
            rawData.type,
            Seasons[season],
            new Date(rawData.dateAdded),
            new Date(rawData.lastUpdated),
            rawData.tier,
            rawData.blueprint ?? undefined,
            rawData.value ?? undefined,
            rawData.weight ?? undefined,
            rawData.gearScore ?? undefined,
            rawData.projectilesPerShot ?? undefined,
            rawData.damagePerShot ?? undefined,
            rawData.rateOfFire ?? undefined,
            rawData.reloadSpeed ?? undefined,
            rawData.optimalRange ?? undefined,
            rawData.projectileSpeed ?? undefined,
            rawData.timeToTarget ?? undefined,
            required,
            rawData.requiredRank ?? undefined,
            rawData.perks ?? [],
            rawData.rarity ?? undefined,
            rawData.obtainable ?? undefined,
            rawData.event ? Events[event] : undefined,
            worldEvent ?? undefined,
            rawData.armor ?? undefined,
            rawData.damageMitigation ?? undefined,
            rawData.contract ? Contracts[contract] : undefined
        );
    }

    public static updateObtainableWithItems(key:string, rawData:any, items: Record<string, Item>) {
        if(!rawData.obtainable) return;
        if(Array.isArray(rawData.obtainable)) {
            const obtainable = new Array<Array<string | Item> | string | Item>();
            for(const obtainableKey of rawData.obtainable) {
                if (Array.isArray(obtainableKey)) {
                    const obtainableGroup = new Array<string | Item>();
                    for (const subKey of obtainableKey) {
                        const obtainableItem = items[subKey];
                        if (obtainableItem && obtainableItem.type === "chest") {
                            obtainableGroup.push(obtainableItem);
                        } else {
                            obtainableGroup.push(subKey);
                        }
                    }
                    obtainable.push(obtainableGroup);
                } else {
                    const obtainableItem = items[obtainableKey];
                    if (obtainableItem && obtainableItem.type === "chest") {
                        obtainable.push(obtainableItem);
                    } else {
                        obtainable.push(obtainableKey);
                    }
                }
            }
            items[key].obtainable = obtainable;
        } else {
            const obtainableItem = items[rawData.obtainable];
            if (obtainableItem && obtainableItem.type === "chest") {
                items[key].obtainable = obtainableItem;
            }
        }
    }

    public static loadItems(): Record<string, Item> {
        const items: Record<string, Item> = {};
        for (const [key, value] of Object.entries(itemsData)) {
            items[key] = Item.fromRawData(value);
        }

        for (const [key, value] of Object.entries(itemsData)) {
            Item.updateObtainableWithItems(key, value, items);
        }
        return items;
    }
}

type Items = {
    [K in keyof typeof itemsData]: Item;
};

export const Items: Items = Item.loadItems() as Items;
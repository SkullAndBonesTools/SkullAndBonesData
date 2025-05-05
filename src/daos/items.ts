import itemsData from '../../data/items.json';
import { Tier } from '../types/ItemProperties';
import { Rarity } from '../types/Rarity';
import { Event, Events } from './events';
import { Material, Materials } from './materials';
import { Season, Seasons } from './seasons';
import { WorldEvent, WorldEvents } from './worldEvents';

export class Item {
    constructor(
        public readonly id: string,
        public readonly type: string,
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
        public readonly required?: Map<Material, number>,
        public readonly requiredRank?: string,
        public readonly perks?: string[],
        public readonly rarity?: Rarity,
        public readonly season?: Season,
        public readonly obtainable?: string | string[],
        public readonly event?: Event,
        public readonly worldEvent?: WorldEvent | WorldEvent[],
        public readonly armor?: number,
        public readonly damageMitigation?: Record<string, number>,
        public readonly contract?: string
    ) {}

    public static fromRawData(rawData: any): Item {
        const season = rawData.season as keyof typeof Seasons;
        const event = rawData.event as keyof typeof Events;
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
            required,
            rawData.requiredRank ?? undefined,
            rawData.perks ?? [],
            rawData.rarity ?? undefined,
            rawData.season ? Seasons[season] : undefined,
            rawData.obtainable ?? undefined,
            rawData.event ? Events[event] : undefined,
            worldEvent ?? undefined,
            rawData.armor ?? undefined,
            rawData.damageMitigation ?? undefined,
            rawData.contract ?? undefined
        );
    }

    public static loadItems(): Record<string, Item> {
        const items: Record<string, Item> = {};
        for (const [key, value] of Object.entries(itemsData)) {
            items[key] = Item.fromRawData(value);
        }
        return items;
    }
}

type Items = {
    [K in keyof typeof itemsData]: Item;
};

export const Items: Items = Item.loadItems() as Items;
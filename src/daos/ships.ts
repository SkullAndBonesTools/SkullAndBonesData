import shipsData from '../../data/ships.json';
import { ShipSize, SlotWithGunports, SlotWithGunportsAcrossDecks } from '../types/ShipProperties';
import { Contract, Contracts } from './contracts';
import { Material, Materials } from './materials';
import { Season, Seasons } from './seasons';

export class Ship {
    constructor(
        public readonly id: string,
        public readonly size: ShipSize,
        public readonly type: string,
        public readonly contract: Contract | undefined,
        public readonly blueprint: string | string[] | undefined,
        public readonly season: Season | undefined,
        public readonly hitpoints: number,
        public readonly braceStrength: number,
        public readonly braceStrengthRecovery: number,
        public readonly stamina: number | undefined,
        public readonly baseRank: number,
        public readonly requiredRank: string | undefined,
        public readonly contact: string | undefined,
        public readonly sailSpeed: {
            halfSail: number;
            fullSail: number;
            travelSail: number;
        },
        public readonly cargo: {
            cargoSlots: number;
            cargoMaxWeight: number;
        },
        public readonly required: Map<Material, number> | undefined,
        public readonly slots: {
            attachement?: SlotWithGunports;
            frontWeapon?: SlotWithGunportsAcrossDecks;
            leftSideWeapon?: SlotWithGunportsAcrossDecks;
            rightSideWeapon?: SlotWithGunportsAcrossDecks;
            aftWeapon?: SlotWithGunportsAcrossDecks;
            auxiliaryWeapon?: SlotWithGunports;
            furniture?: SlotWithGunports;
            ultimate?: SlotWithGunports;
        },
        public readonly perks: string[],
        public readonly dateAdded: Date,
        public readonly lastUpdated: Date
    ) {}

    // Static method to create a Ship instance from raw data
    public static fromRawData(rawData: any): Ship {
        const season = rawData.season as keyof typeof Seasons;
        const contract = rawData.contract as keyof typeof Contracts;
        const required = rawData.required ? new Map<Material, number>() : undefined;
        if(required) {
            for (const [requiredKey, quantity] of Object.entries(rawData.required)) {
                const requiredMaterial = requiredKey as keyof typeof Materials;
                required.set(Materials[requiredMaterial], quantity as number);
            }
        }

        return new Ship(
            rawData.id,
            rawData.size,
            rawData.type,
            rawData.contract ? Contracts[contract] : undefined,
            rawData.blueprint ?? undefined,
            season ? Seasons[season] : undefined,
            rawData.hitpoints,
            rawData.braceStrength,
            rawData.braceStrengthRecovery,
            rawData.stamina ?? undefined,
            rawData.baseRank,
            rawData.requiredRank ?? undefined,
            rawData.contact ?? undefined,
            rawData.sailSpeed,
            rawData.cargo,
            required,
            {
                attachement: rawData.slots.attachement ?? undefined,
                frontWeapon: rawData.slots.frontWeapon ?? undefined,
                leftSideWeapon: rawData.slots.leftSideWeapon ?? undefined,
                rightSideWeapon: rawData.slots.rightSideWeapon ?? undefined,
                aftWeapon: rawData.slots.aftWeapon ?? undefined,
                auxiliaryWeapon: rawData.slots.auxiliaryWeapon ?? undefined,
                furniture: rawData.slots.furniture ?? undefined,
                ultimate: rawData.slots.ultimate ?? undefined
            },
            rawData.perks,
            new Date(rawData.dateAdded),
            new Date(rawData.lastUpdated)
        );
    }

    // Static method to load all ships from the JSON data
    public static loadShips(): Record<string, Ship> {
        const ships: Record<string, Ship> = {};
        for (const [key, value] of Object.entries(shipsData)) {
            ships[key] = Ship.fromRawData(value);
        }
        return ships;
    }
}

type Ships = {
    [K in keyof typeof shipsData]: Ship;
};

export const Ships: Ships = Ship.loadShips() as Ships;
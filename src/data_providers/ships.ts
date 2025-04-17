import shipsData from '../../data/ships.json';

type SlotWithGunports = [number, { top: number; lower?: number }];

export class Ship {
    constructor(
        public readonly id: string,
        public readonly size: string,
        public readonly type: string,
        public readonly blueprint: string | string[] | undefined,
        public readonly season: string | undefined,
        public readonly hitpoints: number,
        public readonly braceStrength: number,
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
        public readonly required: Record<string, number> | undefined,
        public readonly slots: {
            attachement?: number;
            frontWeapon?: SlotWithGunports;
            leftSideWeapon?: SlotWithGunports;
            rightSideWeapon?: SlotWithGunports;
            aftWeapon?: SlotWithGunports;
            auxiliaryWeapon?: number;
            furniture?: number;
        },
        public readonly perks: string[],
        public readonly dateAdded: string,
        public readonly lastUpdated: string
    ) {}

    // Static method to create a Ship instance from raw data
    public static fromRawData(rawData: any): Ship {
        return new Ship(
            rawData.id,
            rawData.size,
            rawData.type,
            rawData.blueprint ?? undefined,
            rawData.season ?? undefined,
            rawData.hitpoints,
            rawData.braceStrength,
            rawData.stamina ?? undefined,
            rawData.baseRank,
            rawData.requiredRank ?? undefined,
            rawData.contact ?? undefined,
            rawData.sailSpeed,
            rawData.cargo,
            rawData.required,
            {
                attachement: rawData.slots.attachement ?? undefined,
                frontWeapon: rawData.slots.frontWeapon ?? undefined,
                leftSideWeapon: rawData.slots.leftSideWeapon ?? undefined,
                rightSideWeapon: rawData.slots.rightSideWeapon ?? undefined,
                aftWeapon: rawData.slots.aftWeapon ?? undefined,
                auxiliaryWeapon: rawData.slots.auxiliaryWeapon ?? undefined,
                furniture: rawData.slots.furniture ?? undefined,
            },
            rawData.perks,
            rawData.dateAdded,
            rawData.lastUpdated
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

export const Ships = Ship.loadShips();
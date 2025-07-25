export const ShipSizes = [
    "extraSmall", "small", "medium", "large"
] as const;
export type ShipSize = (typeof ShipSizes)[number];
// Slot amounts, gunports
export type SlotWithGunports = [number, number];
export type SlotWithGunportsAcrossDecks = [
    number, {
        top: number;
        lower?: number
    }
];
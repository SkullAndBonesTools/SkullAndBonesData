export type ShipSize = "extraSmall" | "small" | "medium" | "large";
// Slot amounts, gunports
export type SlotWithGunports = [number, number];
export type SlotWithGunportsAcrossDecks = [
    number, {
        top: number;
        lower?: number
    }
];
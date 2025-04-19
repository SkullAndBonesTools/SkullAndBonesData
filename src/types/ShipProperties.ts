export type ShipSize = "extraSmall" | "small" | "medium" | "large";
export type SlotWithGunports = [
    number, {
        top: number;
        lower?: number
    }
];
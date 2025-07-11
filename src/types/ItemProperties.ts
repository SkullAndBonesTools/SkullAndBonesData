export const Tiers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
] as const;
export type Tier = (typeof Tiers)[number];
export type GeneralType = "consumable" | "ammunition" | "armor" | "tool" | "chest";
export const WeaponTypes = [
    "culverin", "longGun", "demicannon", "bombard", "torpedo", "ballista", "seaFire", "mortar", "rocket", "springloader"
] as const;
export type WeaponType = (typeof WeaponTypes)[number];
export const FurnitureTypes = [
    "offensiveFurniture", "utilityFurniture", "majorFurniture"
] as const;
export type FurnitureType = (typeof FurnitureTypes)[number];
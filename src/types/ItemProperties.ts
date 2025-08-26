export const Tiers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
] as const;
export type Tier = (typeof Tiers)[number];
export type GeneralType = "consumable" | "ammunition" | "armor" | "tool" | "chest" | "quest" | "contract";
export const WeaponTypes = [
    "culverin", "longGun", "demicannon", "bombard", "torpedo", "ballista", "seaFire", "mortar", "rocket", "springloader"
] as const;
export type WeaponType = (typeof WeaponTypes)[number];
export const FrontWeaponTypes = [
    "ballista", "seaFire"
] as const;
export const TopDeckWeaponTypes = [
    "longGun", "bombard", "torpedo"
] as const;
// Auxiliary weapons are always top deck weapons, so they are not explicitly listed in TopDeckWeaponTypes.
export const AuxiliaryWeaponTypes = [
    "mortar", "rocket", "springloader"
] as const;
export const FurnitureTypes = [
    "offensiveFurniture", "utilityFurniture", "majorFurniture"
] as const;
export type FurnitureType = (typeof FurnitureTypes)[number];
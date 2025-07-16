/**
 * Grade overview based on weapon rarity:
 * - Common: Basic, Basic, Advanced, Special
 * - Uncommon: Basic, Advanced, Special
 * - Rare: Basic, Advanced, Special
 * - Epic: Basic, Advanced, Advanced
 */
export const ModificationGrades = [
    "basic", "advanced", "special"
] as const;
export type Grade = (typeof ModificationGrades)[number];
// Defines if a modification can only be applied to a regular weapon, both to a regular and repair weapon, or only to a repair weapon.
export type RepairAccess = "none" | "shared" | "exclusive";
export type EffectType = "ignoreResistance" | "bonusElementalDamage" | "addElementalDamage" | "increaseDamage" | "increaseReloadSpeed" | "extraElementalDamage" | 
    "extraDamage" | "increaseProjectileSpeed" | "increaseProjectileRange" | "reduceTimeToTarget" | "increaseCritDamage" | "increaseSiegeDamage" |
    "increaseSailDamage" | "increaseBlastRadius" | "increaseBuoyOperationTime" | "increaseBuoyHealth";
export const DamageTypes = [
    "piercing", "electric", "explosive", "flooding", "burning", "tearing", "toxic", "overall", "base"
] as const;
export type DamageType = (typeof DamageTypes)[number];
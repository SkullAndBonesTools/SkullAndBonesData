/**
 * Grade overview based on weapon rarity:
 * - Common: Basic, Basic, Advanced, Special
 * - Uncommon: Basic, Advanced, Special, Mythic
 * - Rare: Basic, Advanced, Special, Mythic
 * - Epic: Basic, Advanced, Advanced, Mythic
 */
export const ModificationGrades = [
    "basic", "advanced", "special", "mythic"
] as const;
export type Grade = (typeof ModificationGrades)[number];
/**
 * Defines if a modification can only be applied to a regular weapon, both to a regular and repair weapon, or only to a repair weapon.
 * - none: The modification can only be applied to non-repair weapons.
 * - shared: The modification can be applied to both regular and repair weapons.
 * - exclusive: The modification can only be applied to repair weapons.
 */
export type RepairAccess = "none" | "shared" | "exclusive";
export type EffectType = "ignoreResistance" | "bonusElementalDamage" | "addElementalDamage" | "increaseDamage" | "increaseReloadSpeed" | "extraElementalDamage" | 
    "extraDamage" | "increaseProjectileSpeed" | "increaseProjectileRange" | "reduceTimeToTarget" | "increaseCritDamage" | "increaseSiegeDamage" |
    "increaseSailDamage" | "increaseBlastRadius" | "increaseBuoyOperationTime" | "increaseBuoyHealth" |
    // Armor related effects
    "increaseArmor" | "reduceDamageWhileBracing" | "increaseElementalResistance" | "increaseHullHealth" | "increaseBraceStrength" | "increaseStamina" |
    "hullRepairPerSecond" | "increaseBraceStrengthRecovery" | "increaseRepairAmountOfRepairKits";
export const DamageTypes = [
    "piercing", "electric", "explosive", "flooding", "burning", "tearing", "toxic", "overall", "base"
] as const;
export type DamageType = (typeof DamageTypes)[number];
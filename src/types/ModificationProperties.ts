/**
 * Grade overview based on weapon rarity:
 * - Common: Basic, Basic, Advanced, Special
 * - Uncommon: Basic, Advanced, Special
 * - Rare: Basic, Advanced, Special
 * - Epic: Basic, Advanced, Advanced
 */
export type Grade = "basic" | "advanced" | "special";
// Defines if a modification can only be applied to a regular weapon, both to a regular and repair weapon, or only to a repair weapon.
export type RepairAccess = "none" | "shared" | "exclusive";
export type EffectType = "ignoreResistance" | "bonusElementalDamage" | "increaseDamage" | "increaseReloadSpeed" | "extraElementalDamage" | 
    "extraDamage" | "increaseProjectileSpeed" | "increaseProjectileRange" | "reduceTimeToTarget" | "increaseCritDamage" | "increaseSiegeDamage" |
    "increaseSailDamage" | "increaseBlastRadius" | "increaseBuoyOperationTime" | "increaseBuoyHealth";
export type DamageType = "piercing" | "electric" | "explosive" | "flooding" | "burning" | "overall" | "base";
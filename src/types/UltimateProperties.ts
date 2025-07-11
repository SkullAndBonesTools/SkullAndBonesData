export const UltimateTypes = [
    "powerWeapon", "combatSkill", "legendaryEntity"
] as const;
export type UltimateType = (typeof UltimateTypes)[number];
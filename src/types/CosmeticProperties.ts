export const CosmeticEffects = [
    "emissive", "combatReactive", "killReactive", "bossKillReactive", "animated"
] as const;
export type CosmeticEffect = (typeof CosmeticEffects)[number];
export const ShipCosmeticTypes = [
    "sailsEmblem", "sailsPattern", "sailsColor", "hull", "crowsNest", "trophy", "wheel", "helmDecor", "ornaments", "figureHead", "nameplate",
    "pet", "crewLook", "aura", "shipSkin", "armorSkin"
] as const;
export type ShipCosmeticType = (typeof ShipCosmeticTypes)[number];
export const PlayerOutfitTypes = [
    "headwear", "faceAccessory", "torso", "neck", "forearm", "hand", "waist", "bottom", "footwear", "bodyCosmetics", "emote"
] as const;
export type PlayerOutfitType = (typeof PlayerOutfitTypes)[number];
export const PlayerAppearanceTypes = [
    "hair", "facialHair", "eyeColor"
] as const;
export type PlayerAppearanceType = (typeof PlayerAppearanceTypes)[number];
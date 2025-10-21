export const CommodityCategories = [
    "localFaction", "megacorp", "kingpin", "theHelm", "summoningBell", "unique"
] as const;
export type CommodityCategory = (typeof CommodityCategories)[number];
export const MaterialCategories = [
    "raw", "refined", "specialized", "exotic", "helm", "scrap", "currency"
] as const;
export type MaterialCategory = (typeof MaterialCategories)[number];
export const AchievementCategories = [
    "mastery", "enterprise", "legends", "cooperative", "seasonal", "domains", "deathTides", "factionWar"
] as const;
export type AchievementCategory = (typeof AchievementCategories)[number];
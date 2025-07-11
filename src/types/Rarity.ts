export const Rarities = [
    "common", "uncommon", "rare", "epic", "legendary"
] as const;
export type Rarity = (typeof Rarities)[number];
import materialsData from "../../data/materials.json";
import { MaterialCategory } from "../types/Category";
import { Rarity } from "../types/Rarity";
import { Event, Events } from "./events";
import { Faction, Factions } from "./factions";

export class Material {
    id!: string;
    rarity!: Rarity;
    category!: MaterialCategory;
    required?: Map<Material, number>;
    requiredRank?: string;
    faction?: Faction;
    event?: Event;
    deprecated?: boolean;

    constructor(id: string, rarity: Rarity, category: MaterialCategory, requiredRank?: string, faction?: Faction, event?: Event, deprecated?: boolean) {
        this.id = id;
        this.rarity = rarity;
        this.category = category;
        this.requiredRank = requiredRank;
        this.faction = faction;
        this.event = event;
        this.deprecated = deprecated;
    }

    public static fromRawData(key: string, rawData: any): Material {
        const faction = rawData.faction as keyof typeof Factions;
        const event = rawData.event as keyof typeof Events;
        return new Material(
            key,
            rawData.rarity as Rarity,
            rawData.category as MaterialCategory,
            rawData.requiredRank ?? undefined,
            faction ? Factions[faction] : undefined,
            event ? Events[event] : undefined,
            rawData.deprecated ?? false
        );
    }

    public static updateMaterialWithRequired(key:string, rawData:any, materials: Record<string, Material>) {
        if(!rawData.raw) return;
        const required = new Map<Material, number>();
        for (const [requiredKey, quantity] of Object.entries(rawData.raw)) {
            const requiredMaterial = materials[requiredKey];
            if (requiredMaterial) {
                required.set(requiredMaterial, quantity as number);
            }
        }
        materials[key].required = required;
    }

    public static loadMaterials(): Record<string, Material> {
        const materials: Record<string, Material> = {};
        // Load all materials without their required materials
        for (const [key, value] of Object.entries(materialsData)) {
            materials[key] = Material.fromRawData(key, value);
        }

        // Load the required materials for each material
        for (const [key, value] of Object.entries(materialsData)) {
            Material.updateMaterialWithRequired(key, value, materials);
        }
        return materials;
    }
}

type Materials = {
    [K in keyof typeof materialsData]: Material;
};

export const Materials: Materials = Material.loadMaterials() as Materials;
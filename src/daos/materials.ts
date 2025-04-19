import materialsData from "../../data/materials.json";
import { Rarity } from "../types/Rarity";

export class Material {
    id!: string;
    rarity!: Rarity;
    category!: string;
    required?: Map<Material, number>;
    requiredRank?: string;

    constructor(id: string, rarity: Rarity, category: string, raw?: Record<string, number>, requiredRank?: string) {
        this.id = id;
        this.rarity = rarity;
        this.category = category;
        this.requiredRank = requiredRank;
        if(raw) {
            this.required = new Map(Object.entries(raw).map(([key, value]) => {
                const material = key as keyof typeof Materials;
                return [Materials[material], value]
            }));
        }
    }

    public static fromRawData(key: string, rawData: any): Material {
            return new Material(
                key,
                rawData.rarity,
                rawData.category,
                rawData.raw ?? undefined,
                rawData.requiredRank ?? undefined
            );
        }

    public static loadMaterials(): Record<string, Material> {
        const materials: Record<string, Material> = {};
        for (const [key, value] of Object.entries(materialsData)) {
            materials[key] = Material.fromRawData(key, value);
        }
        return materials;
    }
}

export type Materials = {
    [K in keyof typeof materialsData]: Material;
};

export const Materials: Materials = Material.loadMaterials() as Materials;
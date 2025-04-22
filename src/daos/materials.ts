import materialsData from "../../data/materials.json";
import { Rarity } from "../types/Rarity";

export class Material {
    id!: string;
    rarity!: Rarity;
    category!: string;
    required?: Map<Material, number>;
    requiredRank?: string;

    constructor(id: string, rarity: Rarity, category: string, requiredRank?: string) {
        this.id = id;
        this.rarity = rarity;
        this.category = category;
        this.requiredRank = requiredRank;
    }

    public static fromRawData(key: string, rawData: any): Material {
            return new Material(
                key,
                rawData.rarity,
                rawData.category,
                rawData.requiredRank ?? undefined
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
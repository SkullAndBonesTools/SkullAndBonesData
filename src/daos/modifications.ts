import modificationsData from '../../data/modifications.json';
import { DamageType, EffectType, Grade, RepairAccess } from '../types/ModificationProperties';

export type ModificationVariant = {
    itemType: string[],
    range: number[]
}

export class Modification {
    constructor(
        public readonly id: string,
        public readonly effectType: EffectType | undefined,
        public readonly damageType: DamageType | undefined,
        public readonly variants: ModificationVariant[],
        public readonly dropOnly: boolean,
        public readonly repairAccess: RepairAccess,
        public readonly grade: Grade,
        public readonly dateAdded: Date,
        public readonly lastUpdated: Date,
    ) {}

    public static fromRawData(rawData: any): Modification {
        const variants: ModificationVariant[] = rawData.variants.map((variant: any) => ({
            itemType: variant.itemType,
            range: variant.range,
        }));
        return new Modification(
            rawData.id,
            rawData.effectType ?? undefined,
            rawData.damageType ?? undefined,
            variants,
            rawData.dropOnly,
            rawData.repairAccess as RepairAccess,
            rawData.grade as Grade,
            new Date(rawData.dateAdded),
            new Date(rawData.lastUpdated)
        );
    }

    public static loadModifications(): Record<string, Modification> {
        const modifications: Record<string, Modification> = {};
        for (const [key, value] of Object.entries(modificationsData)) {
            modifications[key] = Modification.fromRawData(value);
        }
        return modifications;
    }
}

type Modifications = {
    [K in keyof typeof modificationsData]: Modification;
};

export const Modifications = Modification.loadModifications() as Modifications;
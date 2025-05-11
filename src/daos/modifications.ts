import modificationsData from '../../data/modifications.json';
import { EffectType, Grade } from '../types/ModificationProperties';

export class Modification {
    constructor(
        public readonly id: string,
        public readonly itemType: string[],
        public readonly effectType: EffectType | undefined,
        public readonly range: number[],
        public readonly dropOnly: boolean,
        public readonly repairOnly: boolean,
        public readonly grade: Grade,
    ) {}

    public static fromRawData(rawData: any): Modification {
        return new Modification(
            rawData.id,
            rawData.itemType,
            rawData.effectType ?? undefined,
            rawData.range,
            rawData.dropOnly,
            rawData.repairOnly ?? false,
            rawData.grade as Grade,
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
import ultimatesData from '../../data/ultimates.json';
import { Rarity } from '../types/Rarity';
import { UltimateType } from '../types/UltimateProperties';
import { Season, Seasons } from './seasons';

export class Ultimate {
    constructor(
        public readonly id: string,
        public readonly type: UltimateType,
        public readonly rarity: Rarity,
        public readonly season: Season,
        public readonly chargeRequired: number,
        public readonly dateAdded: Date,
        public readonly lastUpdated: Date
    ) {}

    public static loadContracts(): Record<string, Ultimate> {
        const ultimates: Record<string, Ultimate> = {};
        for (const [key, value] of Object.entries(ultimatesData)) {
            const season = value.season as keyof typeof Seasons;
            ultimates[key] = new Ultimate(
                value.id,
                value.type as UltimateType,
                value.rarity as Rarity,
                Seasons[season],
                value.chargeRequired,
                new Date(value.dateAdded),
                new Date(value.lastUpdated)
            );
        }
        return ultimates;
    }
}

type Ultimates = {
    [K in keyof typeof ultimatesData]: Ultimate;
};

export const Ultimates = Ultimate.loadContracts() as Ultimates;
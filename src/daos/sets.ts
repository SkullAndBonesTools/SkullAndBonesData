import cosmeticsData from '../../data/cosmetics.json';
import { Cosmetic } from './cosmetics';

export class Set {
    constructor(
        public readonly id: string
    ) {}

    public static fromRawData(rawData: any): Set {
        return new Set(
            rawData.set,
        );
    }

    public static loadSets(): Record<string, Set> {
        const sets: Record<string, Set> = {};
        for (const [key, value] of Object.entries(cosmeticsData)) {
            const cosmetic = value as Cosmetic;
            const set = cosmetic.set as string | undefined;
            if(!set || sets[set]) continue;
            sets[set] = Set.fromRawData(value);
        }
        return sets;
    }
}

// TODO: Add auto completion for set names

export const Sets = Set.loadSets();
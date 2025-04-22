import setsData from '../../data/sets.json';
import { SetType } from '../types/SetProperties';

export class Set {
    constructor(
        public readonly id: string,
        public readonly type: SetType
    ) {}

    public static loadSets(): Record<string, Set> {
        const sets: Record<string, Set> = {};
        for (const [key, value] of Object.entries(setsData)) {
            sets[key] = new Set(
                value.id,
                value.type as SetType
            );
        }
        return sets;
    }
}

type Sets = {
    [K in keyof typeof setsData]: Set;
};

export const Sets = Set.loadSets() as Sets;
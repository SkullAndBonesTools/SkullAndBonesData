import setsData from '../../data/sets.json';
import { SetType } from '../types/SetProperties';

type RawSet = {
    id: string;
    type: SetType;
    inofficial?: boolean;
};

const typedSetsData = setsData as Record<string, RawSet>;

export class Set {
    constructor(
        public readonly id: string,
        public readonly dataType: "set",
        public readonly type: SetType,
        public readonly inofficial: boolean
    ) {}

    public static loadSets(): Record<string, Set> {
        const sets: Record<string, Set> = {};
        for (const [key, value] of Object.entries(typedSetsData)) {
            sets[key] = new Set(
                value.id,
                "set",
                value.type as SetType,
                value.inofficial ?? false
            );
        }
        return sets;
    }
}

type Sets = {
    [K in keyof typeof setsData]: Set;
};

export const Sets = Set.loadSets() as Sets;
import seasonsData from "./../data/seasons.json";

export default class Season {
    constructor(
        public readonly index: number,
        public readonly id: string,
        public readonly startDate: Date,
        public readonly endDate: Date,
        public readonly color: string
    ) {}

    public static loadSeasons(): Record<string, Season> {
        const seasons: Record<string, Season> = {};
        for (const [key, value] of Object.entries(seasonsData)) {
            seasons[key] = new Season(
                value.index,
                value.id,
                new Date(value.startDate),
                new Date(value.endDate),
                value.color
            );
        }
        return seasons;
    }
}

export const Seasons = Season.loadSeasons();
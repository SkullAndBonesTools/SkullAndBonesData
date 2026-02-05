import achievementData from "../../data/achievements.json";
import { AchievementCategory } from "../types/Category";
import { Event, Events } from "./events";
import { Season, Seasons } from "./seasons";
import { WorldEvent, WorldEvents } from "./worldEvents";

export class Achievement {
    constructor(
        public readonly id: string,
        public readonly tier: number | undefined,
        public readonly category: AchievementCategory,
        public readonly season: Season,
        public readonly event: Event | undefined,
        public readonly worldEvent: WorldEvent | WorldEvent[] | undefined,
        public readonly goal: number,
        public readonly dateAdded: Date,
        public readonly lastUpdated: Date,
    ) {}

    public static fromRawData(key: string, rawData: any): Achievement {
        const season = rawData.season as keyof typeof Seasons;
        const event = rawData.event as keyof typeof Events;
        const worldEvent = Array.isArray(rawData.worldEvent)
            ? rawData.worldEvent.map((_worldEvent: string) => WorldEvents[_worldEvent as keyof typeof WorldEvents])
            : WorldEvents[rawData.worldEvent as keyof typeof WorldEvents];
        return new Achievement(
            key,
            rawData.tier ?? undefined,
            rawData.category as AchievementCategory,
            Seasons[season],
            event ? Events[event] : undefined,
            worldEvent ?? undefined,
            rawData.goal,
            new Date(rawData.dateAdded),
            new Date(rawData.lastUpdated)
        );
    }

    public static loadAchievements(): Record<string, Achievement> {
        const achievements: Record<string, Achievement> = {};
        for (const [key, value] of Object.entries(achievementData)) {
            achievements[key] = Achievement.fromRawData(key, value);
        }
        return achievements;
    }
}

type Achievements = {
    [K in keyof typeof achievementData]: Achievement;
};

export const Achievements: Achievements = Achievement.loadAchievements() as Achievements;
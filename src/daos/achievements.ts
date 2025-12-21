import achievementData from "../../data/achievements.json";
import { AchievementCategory } from "../types/Category";
import { Event, Events } from "./events";

export class Achievement {
    constructor(
        public readonly id: string,
        public readonly tier: number | undefined,
        public readonly category: AchievementCategory,
        public readonly event: Event | undefined,
        public readonly goal: number,
        public readonly dateAdded: Date,
        public readonly lastUpdated: Date,
    ) {}

    public static fromRawData(key: string, rawData: any): Achievement {
        const event = rawData.event as keyof typeof Events;
        return new Achievement(
            key,
            rawData.tier ?? undefined,
            rawData.category as AchievementCategory,
            event ? Events[event] : undefined,
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
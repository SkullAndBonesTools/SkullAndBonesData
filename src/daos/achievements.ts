import achievementData from "../../data/achievements.json";
import { AchievementCategory } from "../types/Category";

export class Achievement {
    constructor(
        public readonly id: string,
        public readonly tier: number | undefined,
        public readonly category: AchievementCategory,
        public readonly goal: number,
    ) {}

    public static fromRawData(key: string, rawData: any): Achievement {
        return new Achievement(
            key,
            rawData.tier ?? undefined,
            rawData.category as AchievementCategory,
            rawData.goal
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
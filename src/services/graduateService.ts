import { simulateDelay } from "./apiClient";
import {
    sampleCareerData,
    sampleJobs,
    sampleLearningPaths,
    sampleSkillGaps,
} from "../data/graduateData";
import type { CareerItem, SkillGapItem } from "../types/graduate";
import type { JobData } from "../types/jobData";
import type { LearningPathData } from "../types/learningPath";

export async function getCareerPaths(): Promise<CareerItem[]> {
    await simulateDelay(300);
    return sampleCareerData;
}

export async function getJobOpportunities(): Promise<JobData[]> {
    await simulateDelay(350);
    return sampleJobs;
}

export async function getLearningPaths(): Promise<LearningPathData[]> {
    await simulateDelay(300);
    return sampleLearningPaths;
}

export async function getSkillGaps(): Promise<SkillGapItem[]> {
    await simulateDelay(250);
    return sampleSkillGaps;
}

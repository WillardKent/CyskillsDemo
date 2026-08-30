import type { TagVariant } from "../elements/Tag";

export interface TimelineStep {
    yearTitle: string;
    items: string[];
}

export interface CareerItem {
    id: string;
    title: string;
    matchPercentage: number;
    category: string;
    openings: number;
    description: string;
    skills: string[];
    avgSalary: string;
    skillsGap: number;
    timeline: TimelineStep[];
}

export interface JobData {
    title: string;
    company: string;
    description: string;
    tags: string[];
    tagLabel: string;
    tagVariant: TagVariant;
    postedAgo: string;
    salary: string;
    workType: string;
    companyDescription: string;
    jobDescription: string;
    responsibilities: string[];
    qualifications: string[];
}

export interface LearningPathData {
    title: string;
    platform: string;
    duration: string;
    purpose: string;
    level: string;
    matchScoreGain: string;
    tagLabel: string;
    tagVariant: TagVariant;
    skills: string[];
}

export interface SkillGapItem {
    title: string;
    demandText: string;
    userLevelText: string;
    tagLabel: string;
    tagVariant: TagVariant;
    marketDemandValue: number;
    userLevelValue: number;
}

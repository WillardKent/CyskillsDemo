import type { LucideIcon } from "lucide-react";

export interface ProgressItem {
    label: string;
    percentage: number;
    gradient?: string;
}

export interface CoverageStat {
    title: string;
    value: string;
    change?: string;
    source?: string;
    icon?: LucideIcon;
    iconColor?: string;
    changeColor?: string;
}

export interface ProgrammeDomainData {
    domain: string;
    graduatesPerYear: number;
    employmentRate: string;
    alignmentScore: number;
    shortfallStatus: "balanced" | "surplus" | "shortfall";
}

export interface EscoSkillMapping {
    id: string;
    escoSkill: string;
    programTitle: string;
    institution: string;
    coverageScore: number;
    status: "verified" | "pending" | "needs-review";
}

export interface DistrictSkillItem {
    district: string;
    topSkills: string[];
    openVacancies: number;
    unemploymentRate: string;
    dominantSector: string;
}

export interface PolicyIndicator {
    id: string;
    code: string;
    title: string;
    targetValue: string;
    currentValue: string;
    source: string;
    deadline: string;
    status: "on-track" | "at-risk" | "behind";
}

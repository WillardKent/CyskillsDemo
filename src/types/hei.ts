import type { LucideIcon } from "lucide-react";

export interface ProgramStat {
    title: string;
    value: string;
    change?: string;
    source?: string;
    icon?: LucideIcon;
    iconColor?: string;
    changeColor?: string;
}

export type CourseAlignmentStatus = "info" | "warning" | "danger";

export interface CourseItem {
    id: string;
    code: string;
    title: string;
    status: CourseAlignmentStatus;
    tags: string[];
}

export interface YearValue {
    year: string;
    value: number;
}

export interface AlignmentProjection {
    values: number[];
}

export interface AlignmentData {
    label: string;
    current: YearValue[];
    forecast: YearValue[];
    projections: AlignmentProjection[];
}

export interface CurriculumRecommendationItem {
    id: string;
    title: string;
    category: string;
    actionType: "add" | "update" | "remove" | "restructure";
    impact: string;
    description: string;
    affectedCourses: string[];
}

import { simulateDelay } from "./apiClient";
import {
    sampleAlignmentData,
    sampleCourses,
    sampleCurriculumPrograms,
} from "../data/heiData";
import type { AlignmentData, CourseItem } from "../types/hei";
import type { ProgressItem } from "../types/mesy";

export async function getCurriculumAlignment(): Promise<AlignmentData[]> {
    await simulateDelay(300);
    return sampleAlignmentData;
}

export async function getCurriculumPrograms(): Promise<ProgressItem[]> {
    await simulateDelay(250);
    return sampleCurriculumPrograms;
}

export async function getProgramCourses(): Promise<CourseItem[]> {
    await simulateDelay(300);
    return sampleCourses;
}

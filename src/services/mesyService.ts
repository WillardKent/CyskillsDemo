import { simulateDelay } from "./apiClient";
import {
    nationalCoverageStats,
    programmeDomainSupplyData,
    nationalEmploymentData,
} from "../data/mesyData";
import type { CoverageStat, ProgressItem } from "../types/mesy";

export async function getNationalCoverageStats(): Promise<CoverageStat[]> {
    await simulateDelay(200);
    return nationalCoverageStats;
}

export async function getProgrammeDomainSupply(): Promise<ProgressItem[]> {
    await simulateDelay(250);
    return programmeDomainSupplyData;
}

export async function getNationalEmploymentData(): Promise<ProgressItem[]> {
    await simulateDelay(250);
    return nationalEmploymentData;
}

import { simulateDelay } from "./apiClient";

export interface GenerateReportParams {
    title: string;
    format: "PDF" | "CSV" | "XLSX";
    program?: string;
    yearRange?: string;
}

export async function generateReport(_params: GenerateReportParams): Promise<{ downloadUrl: string; reportId: string }> {
    await simulateDelay(600);
    return {
        reportId: `rep-${Date.now()}`,
        downloadUrl: "/reports/sample.pdf",
    };
}

export interface AvailableReportItem {
    id: string;
    title: string;
    description: string;
    category: string;
    format: "PDF" | "CSV" | "XLSX";
    frequency: string;
    lastGenerated: string;
}

export interface ScheduledReportItem {
    id: string;
    title: string;
    schedule: string;
    recipients: string[];
    nextRun: string;
    format: string;
    status: "Active" | "Paused";
}

export interface ReportHistoryItem {
    id: string;
    title: string;
    generatedAt: string;
    generatedBy: string;
    fileSize: string;
    format: string;
    downloadUrl: string;
}

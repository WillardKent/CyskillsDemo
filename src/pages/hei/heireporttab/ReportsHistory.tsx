import { useState } from "react";
import DataCard from "../../../elements/DataCard";
import ReportPreviewModal from "../../../components/ReportPreviewModal";

type ReportCard = {
    title: string;
    description: string;
    tags: string[];
};

const historyReports: ReportCard[] = [
    {
        title: "Spring 2026 Employability Snapshot",
        description:
            "Completed analysis of early graduate placement rates and initial skill match metrics for the spring cohort.",
        tags: ["Completed", "May 2026", "PDF"],
    },
    {
        title: "2025 Annual ESCO Compliance",
        description:
            "Archived mapping of all undergraduate degree programs to the 2025 European ESCO taxonomy.",
        tags: ["Archived", "Dec 2025", "PDF + CSV"],
    },
    {
        title: "Legacy IT Curriculum Gap Report",
        description:
            "Historical comparison of the deprecated IT curriculum versus 2024 market requirements before the syllabus overhaul.",
        tags: ["Completed", "IT Dept", "Review Closed"],
    },
    {
        title: "Q1 Labour Market Shift Analysis",
        description:
            "Past forecast brief detailing the sudden shift in remote work skills required for business administration graduates.",
        tags: ["Archived", "Mar 2026", "PDF"],
    },
];

export default function ReportsHistory() {

    const [isReportPreviewModalOpen, setIsReportPreviewModalOpen] = useState(false);

    return (
        <>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2">
                {historyReports.map((report) => (
                    <DataCard
                        key={report.title}
                        title={report.title}
                        description={report.description}
                        tags={
                            <>
                                {report.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded bg-[#EBF0FA] px-2 py-1 text-xs font-normal text-[#2264E5]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </>
                        }
                        buttons={[
                            {
                                text: "Generate",
                                variant: "blue",
                                onClick: () => { },
                            },
                            {
                                text: "Preview",
                                variant: "white",
                                onClick: () => setIsReportPreviewModalOpen(true),
                            },
                        ]}

                    />
                ))}
            </div>
            <ReportPreviewModal
                isOpen={isReportPreviewModalOpen}
                onClose={() => setIsReportPreviewModalOpen(false)}
                pdfUrl="/reports/sample.pdf"
                fileName="sample.pdf"
            />

        </>
    );
}
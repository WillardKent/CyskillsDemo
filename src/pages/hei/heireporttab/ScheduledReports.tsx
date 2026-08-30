import { useState } from "react";
import DataCard from "../../../elements/DataCard";
import ReportPreviewModal from "../../../components/ReportPreviewModal";

type ReportCard = {
    title: string;
    description: string;
    tags: string[];
};

const scheduledReports: ReportCard[] = [
    {
        title: "Q4 Program Alignment Audit",
        description:
            "Scheduled automated review of the engineering curriculum against projected Q4 tech industry demands.",
        tags: ["Scheduled: Nov 15", "Engineering", "Automated"],
    },
    {
        title: "Biannual Faculty Syllabus Review",
        description:
            "Pending generation of syllabus gap analysis for the upcoming spring semester courses.",
        tags: ["Pending Approval", "All Programs", "Draft"],
    },
    {
        title: "Regional Employer Needs Forecast",
        description:
            "Upcoming extraction and mapping of local job postings to update institutional learning outcomes.",
        tags: ["Scheduled: Dec 1", "AI-generated", "Data Prep"],
    },
    {
        title: "Undergraduate Core Competency Check",
        description:
            "Queued audit to verify that fundamental courses meet the newly updated 2027 national accreditation standards.",
        tags: ["Queued", "Core Subjects", "System Scheduled"],
    },
];


export default function ScheduledReports() {

    const [isReportPreviewModalOpen, setIsReportPreviewModalOpen] = useState(false);

    return (
        <>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2">
                {scheduledReports.map((report) => (
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
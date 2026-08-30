import { useState } from "react";
import DataCard from "../../../elements/DataCard";
import ReportPreviewModal from "../../../components/ReportPreviewModal";

type ReportCard = {
    title: string;
    description: string;
    tags: string[];
};

const reports: ReportCard[] = [
    {
        title: "Curriculum Alignment Report",
        description:
            "Full program-level curriculum vs market alignment analysis with skill gap mapping and syllabus recommendations.",
        tags: ["All Programs", "AI-generated", "Quarterly"],
    },
    {
        title: "Industry Skill Gap Analysis",
        description:
            "Detailed comparative breakdown between course learning outcomes and active regional labor market demand.",
        tags: ["Undergraduate", "AI-generated", "Monthly"],
    },
    {
        title: "Learning Outcome Benchmark Audit",
        description:
            "Automated evaluation of syllabus competency coverage against national accreditation and qualification standards.",
        tags: ["Departmental", "Automated", "Per Semester"],
    },
    {
        title: "Market Demand & Emerging Tech Forecast",
        description:
            "Predictive insights on emerging industry skills and technologies to support proactive curriculum modernization.",
        tags: ["STEM Programs", "AI-generated", "Annual"],
    },
    {
        title: "Module Modernization Brief",
        description:
            "Targeted module-level recommendations for deprecating outdated course materials in favor of high-demand topics.",
        tags: ["Faculty-Level", "AI-generated", "On-Demand"],
    },
    {
        title: "Accreditation & Framework Compliance",
        description:
            "Holistic program review verifying adherence to European ESCO taxonomy and international educational standards.",
        tags: ["All Programs", "Audit Review", "Biannual"],
    },
];


export default function AvailableReports() {

    const [isReportPreviewModalOpen, setIsReportPreviewModalOpen] = useState(false);

    return (
        <>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2">
                {reports.map((report) => (
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
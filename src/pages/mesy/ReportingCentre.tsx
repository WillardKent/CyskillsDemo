import { useState } from "react";
import InfoBanner from "../../elements/InfoBanner";
import HeaderBanner from "../../elements/HeaderBanner";
import DataTable from "../../elements/DataTable";
import Button from "../../elements/Button";
import DataCard from "../../elements/DataCard";
import ReportTemplateModal from "../../components/ReportTemplateModal";
import ReportPreviewModal from "../../components/ReportPreviewModal";
import GenerateReportModal from "../../components/GenerateReportModal";
import type { ColumnDef } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import type {
    TableFilter,
} from "../../elements/DataTable";


type ReportCard = {
    title: string;
    description: string;
    tags: string[];
};

const reports: ReportCard[] = [
    {
        title: "Graduate Supply Report",
        description:
            "Aggregate summaries of graduate profiles and volumes across study programs and domains.",
        tags: ["Annual", "PDF + CSV", "EN / EL"],
    },
    {
        title: "CYGraduates Employability",
        description:
            "Early employability indicators based on historical data from the CYGraduates survey.",
        tags: ["Biannual", "PDF", "EN / EL"],
    },
    {
        title: "ESCO Mapping Coverage",
        description:
            "Current alignment status between educational programs and the European ESCO taxonomy.",
        tags: ["Biannual", "PDF", "EN / EL"],
    },
    {
        title: "National Skills Audits",
        description:
            "Comprehensive evaluation of the national workforce skills inventory (Requires employer survey data).",
        tags: ["Annual", "PDF", "EN / EL"],
    },
    {
        title: "Labour Market Forecast Briefs",
        description:
            "Projected workforce and skill demand trends for the next 1-3 years (Requires time-indexed vacancy data).",
        tags: ["Annual", "PDF", "EN / EL"],
    },
    {
        title: "Review Queues",
        description:
            "Pending skill mappings and data points that require manual validation or administrative review.",
        tags: ["Biannual", "PDF", "EN / EL"],
    },
];


type reportData = {
    report: string;
    generated: string;
    language: string;
    format: string;
    status: "Ready" | "Unavailable";
    action: string;
};

const tablereport: reportData[] = [
    {
        report: "National Skills Audit 2024–25",
        generated: "Today, 08:22",
        language: "EN + ΕΛ",
        format: "PDF + CSV",
        status: "Ready",
        action: "Download",
    },
    {
        report: "Graduate Supply Report",
        generated: "Today, 08:22",
        language: "EN + ΕΛ",
        format: "PDF + CSV",
        status: "Ready",
        action: "Download",
    },
    {
        report: "CYGraduates Employability",
        generated: "Today, 08:22",
        language: "EN + ΕΛ",
        format: "PDF + CSV",
        status: "Ready",
        action: "Download",
    },

    {
        report: "ESCO Mapping Coverage",
        generated: "Today, 08:22",
        language: "EN + ΕΛ",
        format: "PDF + CSV",
        status: "Ready",
        action: "Download",
    },
    {
        report: "National Skills Audits",
        generated: "Today, 08:22",
        language: "EN + ΕΛ",
        format: "PDF + CSV",
        status: "Ready",
        action: "Download",
    },
    {
        report: "Labour Market Forecast Briefs",
        generated: "Today, 08:22",
        language: "EN + ΕΛ",
        format: "PDF + CSV",
        status: "Unavailable",
        action: "Download",
    },
    {
        report: "National Skills Audits",
        generated: "Today, 08:22",
        language: "EN + ΕΛ",
        format: "PDF + CSV",
        status: "Ready",
        action: "Download",
    },
    {
        report: "Review Queues",
        generated: "Today, 08:22",
        language: "EN + ΕΛ",
        format: "PDF + CSV",
        status: "Ready",
        action: "Download",
    },
    {
        report: "Labour Market Forecast Briefs",
        generated: "Today, 08:22",
        language: "EN + ΕΛ",
        format: "PDF + CSV",
        status: "Ready",
        action: "Download",
    },
    {
        report: "Review Queues",
        generated: "Today, 08:22",
        language: "EN + ΕΛ",
        format: "PDF + CSV",
        status: "Ready",
        action: "Download",
    },

];

const handleDownload = (tablereport: reportData) => {
    if (tablereport.status === "Unavailable") {
        console.log("This report is unavailable");
        return;
    }

    console.log(`Downloading: ${tablereport.report}`);
};

const reportColumns: ColumnDef<reportData, unknown>[] = [
    {
        accessorKey: "report",
        header: "Report Name",
    },
    {
        accessorKey: "generated",
        header: "Generated",
    },
    {
        accessorKey: "language",
        header: "Language",
    },
    {
        accessorKey: "format",
        header: "Format",
    },
    {
        accessorKey: "status",
        header: "Status",

        cell: ({ getValue }) => {
            const value = getValue<
                reportData["status"]
            >();

            const isReady = value === "Ready";

            return (
                <div className="flex items-center gap-2">
                    <span
                        className={`size-2 rounded-full ${isReady
                            ? "bg-[#53B160] border-2 border-[#D4F5CE]"
                            : "bg-[#B3172B] border-2 border-[#FDEBEC]"
                            }`}
                    />

                    <span>
                        {value}
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: "action",
        header: "Action",

        cell: ({ getValue, row }) => {
            const value = getValue<reportData["action"]>();
            const report = row.original;

            const isUnavailable = report.status === "Unavailable";

            return (
                <Button
                    text={isUnavailable ? "Unavailable" : value}
                    variant="white"
                    disabled={isUnavailable}
                    onClick={() => handleDownload(report)}
                />
            );
        },
    },


];

const reportFilters: TableFilter[] = [
    {
        columnId: "status",
        label: "Status",
        placeholder: "All Status",

        options: getUniqueOptions(
            tablereport,
            "status"
        ),
    },

    {
        columnId: "format",
        label: "Format",
        placeholder: "All Format",

        options: getUniqueOptions(
            tablereport,
            "format"
        ),
    },
    {
        columnId: "language",
        label: "Language",
        placeholder: "All Language",

        options: getUniqueOptions(
            tablereport,
            "language"
        ),
    },
];

export default function ReportingCentre() {
    const [isReportTemplateModalOpen, setIsReportTemplateModalOpen] = useState(false);
    const [isReportPreviewModalOpen, setIsReportPreviewModalOpen] = useState(false);
    const [selectedReportForGenerate, setSelectedReportForGenerate] = useState<ReportCard | null>(null);

    return (
        <>
            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="Reporting Centre"
                    title="Government Reporting Centre"
                    description="Generate, review, and schedule national & EU reports"
                    buttons={[
                        {
                            text: "New Report",
                            icon: Plus,
                            variant: "blue",
                            onClick: () => setIsReportTemplateModalOpen(true),
                        },
                    ]}
                />

                <InfoBanner title="Report templates adapt to available validated outputs. Near-term reports cover graduate supply, employability from CYGraduates, and ESCO mapping. National skills audits and labour market forecast briefs are marked as future/data-dependent."
                />
                <div className="py-5 bg-white border border-[#F7F8FA] font-inter">
                    <div className="px-6 pb-5 border-b border-[#F7F8FA]">
                        <h1 className="text-[#111827] text-lg font-medium">Report Templates</h1>
                    </div>
                    <div className="px-6 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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
                                        variant: "white",
                                        onClick: () => setSelectedReportForGenerate(report),
                                    },
                                    {
                                        text: "Preview",
                                        variant: "blue",
                                        onClick: () => setIsReportPreviewModalOpen(true),
                                    },
                                ]}
                            />
                        ))}
                    </div>
                </div>
                <DataTable
                    title="Recent Reports"
                    data={tablereport}
                    columns={reportColumns}
                    filters={reportFilters}
                />
                <ReportTemplateModal
                    isOpen={isReportTemplateModalOpen}
                    onClose={() => setIsReportTemplateModalOpen(false)}
                />

                <ReportPreviewModal
                    isOpen={isReportPreviewModalOpen}
                    onClose={() => setIsReportPreviewModalOpen(false)}
                    pdfUrl="/reports/sample.pdf"
                    fileName="sample.pdf"
                />

                <GenerateReportModal
                    isOpen={Boolean(selectedReportForGenerate)}
                    onClose={() => setSelectedReportForGenerate(null)}
                    report={selectedReportForGenerate}
                    onGenerate={(report) => console.log("Generating report:", report)}
                />
            </div>
        </>
    );
}

function getUniqueOptions<TData>(
    data: TData[],
    key: keyof TData
) {
    return Array.from(
        new Set(
            data.map((item) => String(item[key]))
        )
    ).map((value) => ({
        label: value,
        value,
    }));
}
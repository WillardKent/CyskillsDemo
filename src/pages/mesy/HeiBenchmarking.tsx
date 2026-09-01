import { useState } from "react";
import StatCard from "../../elements/StatCard";
import InfoBanner from "../../elements/InfoBanner";
import ProgressBar from "../../elements/ProgressBar";
import HeaderBanner from "../../elements/HeaderBanner";
import DataTable from "../../elements/DataTable";
import AccessRequestModal from "../../components/AccessRequestModal";
import ContactTechnicalModal from "../../components/ContactTechnicalModal";
import type { ColumnDef } from "@tanstack/react-table";
import { Earth, Trophy, TrendingDown, Check, ChevronDown } from "lucide-react";
import type {
    TableFilter,
} from "../../elements/DataTable";





type InstitutionData = {
    institution: string;
    alignmentScore: number;
    graduateEmployability: number;
    criticalGaps: number;
    improvementPlan: "Required" | "Not required";
    dataStatus: "Active" | "Inactive";
};

const institutionData: InstitutionData[] = [
    {
        institution: "University of Cyprus",
        alignmentScore: 84,
        graduateEmployability: 76,
        criticalGaps: 2,
        improvementPlan: "Not required",
        dataStatus: "Inactive",
    },
    {
        institution: "University of Cyprus",
        alignmentScore: 89,
        graduateEmployability: 76,
        criticalGaps: 2,
        improvementPlan: "Required",
        dataStatus: "Inactive",
    },
    {
        institution: "Cyprus University of Technology",
        alignmentScore: 76,
        graduateEmployability: 76,
        criticalGaps: 2,
        improvementPlan: "Not required",
        dataStatus: "Inactive",
    },
    {
        institution: "Cyprus University of Technology",
        alignmentScore: 80,
        graduateEmployability: 76,
        criticalGaps: 2,
        improvementPlan: "Required",
        dataStatus: "Inactive",
    },
    {
        institution: "Open University of Cyprus",
        alignmentScore: 68,
        graduateEmployability: 76,
        criticalGaps: 2,
        improvementPlan: "Required",
        dataStatus: "Inactive",
    },
    {
        institution: "Open University of Cyprus",
        alignmentScore: 72,
        graduateEmployability: 76,
        criticalGaps: 2,
        improvementPlan: "Not required",
        dataStatus: "Inactive",
    },
    {
        institution: "Frederick University",
        alignmentScore: 50,
        graduateEmployability: 76,
        criticalGaps: 2,
        improvementPlan: "Not required",
        dataStatus: "Inactive",
    },
    {
        institution: "Frederick University",
        alignmentScore: 59,
        graduateEmployability: 76,
        criticalGaps: 2,
        improvementPlan: "Required",
        dataStatus: "Active",
    },
    {
        institution: "European University Cyprus",
        alignmentScore: 63,
        graduateEmployability: 76,
        criticalGaps: 2,
        improvementPlan: "Required",
        dataStatus: "Active",
    },
    {
        institution: "European University Cyprus",
        alignmentScore: 69,
        graduateEmployability: 76,
        criticalGaps: 2,
        improvementPlan: "Not required",
        dataStatus: "Inactive",
    },
];

const institutionColumns: ColumnDef<InstitutionData, unknown>[] = [
    {
        accessorKey: "institution",
        header: "Institution",
    },

    {
        accessorKey: "alignmentScore",
        header: "Alignment Score",

        cell: ({ getValue }) => {
            const value = getValue<number>();

            return (
                <ProgressBar value={value} />
            );
        },
    },

    {
        accessorKey: "graduateEmployability",
        header: "Graduate Employ (6mo)",

        cell: ({ getValue }) => {
            const value = getValue<number>();

            return (
                <span>
                    {value}%
                </span>
            );
        },
    },

    {
        accessorKey: "criticalGaps",
        header: "Critical Gaps",
    },

    {
        accessorKey: "improvementPlan",
        header: "Improvement Plan",

        cell: ({ getValue }) => {
            const value = getValue<
                InstitutionData["improvementPlan"]
            >();

            const isRequired = value === "Required";

            return (
                <div className="flex items-center gap-2">
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${isRequired
                            ? "bg-[#2563EB]"
                            : "bg-[#4CAF50]"
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
        accessorKey: "dataStatus",
        header: "Data status",

        cell: ({ getValue }) => {
            const value = getValue<
                InstitutionData["dataStatus"]
            >();

            return (
                <span
                    className={`inline-flex rounded-md px-3 py-1.5 font-inter text-xs font-normal ${value === "Active"
                        ? "bg-green-50 text-green-600"
                        : "bg-[#E9EDF5] text-[#5A6376]"
                        }`}
                >
                    {value}
                </span>
            );
        },
    },
];

const institutionFilters: TableFilter[] = [
    {
        columnId: "improvementPlan",
        label: "Improvement Plan",
        placeholder: "All Improvement Plans",

        options: getUniqueOptions(
            institutionData,
            "improvementPlan"
        ),
    },

    {
        columnId: "dataStatus",
        label: "Data Status",
        placeholder: "All Data Status",

        options: getUniqueOptions(
            institutionData,
            "dataStatus"
        ),
    },
];

export default function HeiBenchmarking() {
    const [isAccessRequesModalOpen, setIsAccessRequesModalOpen] = useState(false);
    const [isContactTechnicalModalOpen, setIsContactTechnicalModalOpen] = useState(false);

    const data = [
        {
            title: "National avg. alignment",
            value: "71%",
            source: "Provisional threshold",
            icon: Earth,
            iconColor: "text-[#1A62F8]",
            changeColor: "text-[#1A62F8]",
        },
        {
            title: "Highest score (UCY)",
            value: "84%",
            source: "Based on anonymised data",
            icon: Trophy,
            iconColor: "text-[#10B981]",
            changeColor: "text-[#10B981]",
        },
        {
            title: "Lowest score (OUC)",
            value: "52",
            source: "Requires validation",
            icon: TrendingDown,
            iconColor: "text-[#F59E0B]",
            changeColor: "text-[#F59E0B]",
        },
        {
            title: "Active improvement plans",
            value: "2 / 5",
            source: "Requires HEI data access",
            icon: Check,
            iconColor: "text-[#8B5CF6]",
            changeColor: "text-[#8B5CF6]",
        },
    ];

    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="HEI Benchmarking"
                    title="HEI Benchmarking"
                    description="Cross-institutional curriculum alignment · graduate outcomes · improvement plan status"
                    buttons={[
                        {
                            text: "Year: 2024–25",
                            icon: ChevronDown,
                            variant: "white",
                            onClick: () => console.log("Year clicked"),
                        },
                        {
                            text: "Export Benchmarking Report",
                            variant: "blue",
                            onClick: () => console.log("Export clicked"),
                        },
                    ]}
                />
                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                    {data.map((stat) => (
                        <StatCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                            desc={stat.source}
                            icon={stat.icon}
                            iconColor={stat.iconColor}
                            changeColor={stat.changeColor}
                        />
                    ))}
                </div>



                <InfoBanner title="Data limitations — Phase A: "
                    info="Institution-level metrics are currently not possible using the anonymized CYGraduates dataset. Alignment scores and gap counts are still provisional, as the definitions, thresholds, and data sources have not yet been finalized. All figures shown on this page should not yet be used for official reporting."
                    buttons={[
                        {
                            text: "Contact the Technical Team",
                            variant: "white",
                            onClick: () => setIsContactTechnicalModalOpen(true),
                        },
                        {
                            text: "Data access request",
                            variant: "blue",
                            onClick: () => setIsAccessRequesModalOpen(true),
                        },
                    ]} />

                <div className="flex w-full flex-col gap-4 xl:flex-row">

                </div>
                <DataTable
                    title="Institution Performance Overview"
                    desc="Year: 2024–25 · All figures provisional pending data access agreement"
                    data={institutionData}
                    columns={institutionColumns}
                    filters={institutionFilters}
                />
                <AccessRequestModal
                    isOpen={isAccessRequesModalOpen}
                    onClose={() => setIsAccessRequesModalOpen(false)}
                />

                <ContactTechnicalModal
                    isOpen={isContactTechnicalModalOpen}
                    onClose={() => setIsContactTechnicalModalOpen(false)}
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
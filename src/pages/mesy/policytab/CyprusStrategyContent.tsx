import ProgressBar from "../../../elements/ProgressBar";
import DataTable from "../../../elements/DataTable";
import type { ColumnDef } from "@tanstack/react-table";


import type {
    TableFilter,
} from "../../../elements/DataTable";





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

export default function CyprusStrategyContent() {


    return (
        <>
            <DataTable
                title="Institution Performance Overview"
                desc="Year: 2024–25 · All figures provisional pending data access agreement"
                data={institutionData}
                columns={institutionColumns}
                filters={institutionFilters}
            />
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
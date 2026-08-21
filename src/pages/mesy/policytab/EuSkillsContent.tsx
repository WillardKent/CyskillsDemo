
import ProgressBar from "../../../elements/ProgressBar";
import DataTable from "../../../elements/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import FooterBanner from "../../../elements/FooterBanner";
import MiniCard from "../../../elements/MiniCard";
import type {
    TableFilter,
} from "../../../elements/DataTable";






type EuData = {
    target: string;
    eugoal: string;
    cypruscurrent: string;
    progress: number;
    status: "On track" | "Off track";
    source: string;
    dataStatus: "Available now" | "Unvailable";
};

const EuData: EuData[] = [
    {
        target: "Adults in training (25–64)",
        eugoal: "76%",
        cypruscurrent: "53%",
        progress: 50,
        status: "On track",
        source: "Eurostat LFS\nExternal benchmarks",
        dataStatus: "Available now"
    },
    {
        target: "ICT specialists in employment",
        eugoal: "80%",
        cypruscurrent: "45%",
        progress: 90,
        status: "Off track",
        source: "CYSTAT / Eurostat\nExternal benchmarks",
        dataStatus: "Available now"
    },
    {
        target: "Basic digital skills",
        eugoal: "60%",
        cypruscurrent: "76%",
        progress: 75,
        status: "On track",
        source: "Eurostat LFS\nExternal benchmarks",
        dataStatus: "Available now"
    },
    {
        target: "Tertiary attainment (25–34)",
        eugoal: "95%",
        cypruscurrent: "86%",
        progress: 64,
        status: "Off track",
        source: "CYSTAT / Eurostat\nExternal benchmarks",
        dataStatus: "Available now"
    },
    {
        target: "Basic digital skills",
        eugoal: "68%",
        cypruscurrent: "95%",
        progress: 100,
        status: "On track",
        source: "Eurostat LFS\nExternal benchmarks",
        dataStatus: "Available now"
    },
    {
        target: "Adults in training (25–64)",
        eugoal: "76%",
        cypruscurrent: "53%",
        progress: 50,
        status: "On track",
        source: "Eurostat LFS\nExternal benchmarks",
        dataStatus: "Available now"
    },
    {
        target: "ICT specialists in employment",
        eugoal: "80%",
        cypruscurrent: "45%",
        progress: 90,
        status: "Off track",
        source: "CYSTAT / Eurostat\nExternal benchmarks",
        dataStatus: "Available now"
    },
    {
        target: "Basic digital skills",
        eugoal: "60%",
        cypruscurrent: "76%",
        progress: 75,
        status: "On track",
        source: "Eurostat LFS\nExternal benchmarks",
        dataStatus: "Available now"
    },
    {
        target: "Tertiary attainment (25–34)",
        eugoal: "95%",
        cypruscurrent: "86%",
        progress: 64,
        status: "Off track",
        source: "CYSTAT / Eurostat\nExternal benchmarks",
        dataStatus: "Available now"
    },
    {
        target: "Basic digital skills",
        eugoal: "68%",
        cypruscurrent: "95%",
        progress: 100,
        status: "On track",
        source: "Eurostat LFS\nExternal benchmarks",
        dataStatus: "Available now"
    },


];

const EuColumns: ColumnDef<EuData, unknown>[] = [
    {
        accessorKey: "target",
        header: "Target",
    },

    {
        accessorKey: "eugoal",
        header: "EU 2030 Goal",

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
        accessorKey: "cypruscurrent",
        header: "Cyprus Current",

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
        accessorKey: "progress",
        header: "Progress",

        cell: ({ getValue }) => {
            const value = getValue<number>();

            return (
                <ProgressBar value={value} />
            );
        },
    },

    {
        accessorKey: "status",
        header: "Status",

        cell: ({ getValue }) => {
            const value = getValue<
                EuData["status"]
            >();

            const track = value === "Off track";

            return (
                <div className="flex items-center gap-2">
                    <span
                        className={`size-2 rounded-full ${track
                            ? "bg-[#B3172B] border-2 border-[#FDEBEC]"
                            : "bg-[#53B160] border-2 border-[#D4F5CE]"
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
        accessorKey: "source",
        header: "Source",
    },

    {
        accessorKey: "dataStatus",
        header: "Data status",

        cell: ({ getValue }) => {
            const value = getValue<
                EuData["dataStatus"]
            >();

            return (
                <span
                    className={`inline-flex rounded-md px-3 py-1.5 font-inter text-xs font-normal ${value === "Available now"
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

const EuFilters: TableFilter[] = [
    {
        columnId: "status",
        label: "Status",
        placeholder: "All Status",

        options: getUniqueOptions(
            EuData,
            "status"
        ),
    },

    {
        columnId: "dataStatus",
        label: "Data Status",
        placeholder: "All Data Status",

        options: getUniqueOptions(
            EuData,
            "dataStatus"
        ),
    },
];

export default function EuSkillsContent() {


    return (
        <>
            <DataTable
                title="EU Skills Agenda 2030 — Cyprus Progress"
                data={EuData}
                columns={EuColumns}
                filters={EuFilters}
            />
            <FooterBanner paragraph="AI Policy Alert: 3 EU targets are flagged as 'At risk' or 'Off track'. The ICT graduates target requires the most urgent intervention — at current HEI graduation
rates, Cyprus will reach only 58% of the 2030 target without a significant curriculum expansion. Recommend generating a policy brief for the Minister before the
June 2025 Digital Decade submission."/>

            <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                <MiniCard
                    label="Source"
                    value="Time-indexed vacancy data"
                />

                <MiniCard
                    label="Method"
                    value="Benchmark comparison — not yet validated"
                />

                <MiniCard
                    label="Review status"
                    value="Pending — not ready for reporting"
                    variant="warning"
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
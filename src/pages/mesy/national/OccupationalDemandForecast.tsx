
import HeaderBanner from "../../../elements/HeaderBanner";
import DataTable from "../../../elements/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import type {
    TableFilter,
} from "../../../elements/DataTable";
import { getUniqueOptions } from "../../../utils/table";
import { Tag } from "../../../elements";
import ProgressBar from "../../../elements/ProgressBar";

type OccupationData = {
    occupation: string;
    iscoCode: string;
    demandShare: number;
    employers: number;
    threeYearGrowth: string;
    status: string;
};

const data: OccupationData[] = [
    {
        occupation: "Software Developers",
        iscoCode: "2411",
        demandShare: 38.5,
        employers: 71,
        threeYearGrowth: "+17.5%",
        status: "High"
    },
    {
        occupation: "Renewable Energy Systems",
        iscoCode: "5131",
        demandShare: 38.5,
        employers: 34,
        threeYearGrowth: "+17.5%",
        status: "High"
    },
    {
        occupation: "Civil Engineers",
        iscoCode: "1411",
        demandShare: 33.6,
        employers: 12,
        threeYearGrowth: "+13.8%",
        status: "High"
    },
    {
        occupation: "Accountants",
        iscoCode: "3512",
        demandShare: 31.4,
        employers: 43,
        threeYearGrowth: "+13.8%",
        status: "High"
    },
    {
        occupation: "Hospitality & Hotel Managers",
        iscoCode: "5120",
        demandShare: 24.7,
        employers: 56,
        threeYearGrowth: "+6.5%",
        status: "High"
    },
    {
        occupation: "Hospitality & Hotel Managers",
        iscoCode: "2412",
        demandShare: 24.7,
        employers: 12,
        threeYearGrowth: "+4.2%",
        status: "Medium"
    },
    {
        occupation: "Generalist Medical Practitioners",
        iscoCode: "2144",
        demandShare: 24.7,
        employers: 14,
        threeYearGrowth: "+4.2%",
        status: "Medium"
    },
    {
        occupation: "EU Regulatory Compliance",
        iscoCode: "2144",
        demandShare: 19.6,
        employers: 16,
        threeYearGrowth: "+4.2%",
        status: "Low"
    },
    {
        occupation: "EU Regulatory Compliance",
        iscoCode: "2144",
        demandShare: 19.6,
        employers: 12,
        threeYearGrowth: "+4.2%",
        status: "Low"
    },
    {
        occupation: "Basic digital skills",
        iscoCode: "2144",
        demandShare: 19.6,
        employers: 16,
        threeYearGrowth: "+4.2%",
        status: "Low"
    }
];

const columns: ColumnDef<OccupationData, unknown>[] = [
    {
        accessorKey: "occupation",
        header: "Occupation",
        filterFn: "equalsString",
    },
    {
        accessorKey: "iscoCode",
        header: "ISCO Code",
    },
    {
        accessorKey: "demandShare",
        header: "Demand Share",
        cell: ({ getValue }) => {
            const value = getValue<number>();

            return (
                <ProgressBar value={value}
                    colorClass="bg-linear-to-r from-[#F58D50] to-[#F2D468]" />
            );
        },
    },
    {
        accessorKey: "employers",
        header: "Employers",
    },
    {
        accessorKey: "threeYearGrowth",
        header: "3-Yr Growth",
        cell: ({ getValue }) => {
            const value = getValue<OccupationData["threeYearGrowth"]>();

            return (
                <span
                    className={`font-inter text-xs font-medium ${value.startsWith("+")
                        ? "text-[#106832]"
                        : "text-[#D12953]"
                        }`}
                >
                    {value}
                </span>
            );
        },
    },
    {
        accessorKey: "status",
        header: "Status",
        filterFn: "equalsString",
        cell: ({ getValue }) => {
            const value = getValue<OccupationData["status"]>();

            return (
                <Tag
                    variant={
                        value === "High"
                            ? "success"
                            : value === "Medium"
                                ? "info"
                                : value === "Low"
                                    ? "danger"
                                    : "default"
                    }
                >
                    {value}
                </Tag>
            );
        },
    },
];

const filters: TableFilter[] = [
    {
        columnId: "occupation",
        label: "Occupation",
        placeholder: "All Occupations",
        options: getUniqueOptions(
            data,
            "occupation"
        ),
    },
    {
        columnId: "iscoCode",
        label: "Isco Code",
        placeholder: "All Isco Code",
        options: getUniqueOptions(
            data,
            "iscoCode"
        ),
    },
    {
        columnId: "status",
        label: "Status",
        placeholder: "All Statuses",
        options: getUniqueOptions(
            data,
            "status"
        ),
    },
];


export default function OccupationalDemandForecast() {

    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="National Dashboard / Occupational Demand (D1)"
                    title="Occupational Demand (D1)"
                    description="Official forecast of occupational demand based on Republic of Cyprus data."
                />

                <DataTable
                    data={data}
                    columns={columns}
                    filters={filters}
                    title="Occupational Demand (D1)"
                />

            </div>

        </>
    );
}
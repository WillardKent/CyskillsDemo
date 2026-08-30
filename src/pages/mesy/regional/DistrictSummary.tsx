
import HeaderBanner from "../../../elements/HeaderBanner";
import DataTable from "../../../elements/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import type {
    TableFilter,
} from "../../../elements/DataTable";

type DistrictData = {
    district: string;
    vacancy: number;
    skillgap: "ICT / AI" | "Finance / Legal";
    youthunemp: string;
    hei: String;
};

const districtData: DistrictData[] = [
    {
        district: "Nicosia",
        vacancy: 62400,
        skillgap: "ICT / AI",
        youthunemp: "7.2%",
        hei: "UCY,UNIC,OUC,EUC",
    },
    {
        district: "Paphos",
        vacancy: 62400,
        skillgap: "ICT / AI",
        youthunemp: "7.2%",
        hei: "UCY,UNIC,OUC,EUC",
    },
    {
        district: "Limasol",
        vacancy: 62400,
        skillgap: "ICT / AI",
        youthunemp: "7.2%",
        hei: "UCY,UNIC,OUC,EUC",
    },
    {
        district: "Larnaca",
        vacancy: 22400,
        skillgap: "ICT / AI",
        youthunemp: "7.2%",
        hei: "UCY,UNIC,OUC,EUC",
    },
    {
        district: "Paphos",
        vacancy: 62400,
        skillgap: "ICT / AI",
        youthunemp: "7.2%",
        hei: "UCY,UNIC,OUC,EUC",
    },
    {
        district: "Larnaca",
        vacancy: 22400,
        skillgap: "ICT / AI",
        youthunemp: "7.2%",
        hei: "UCY,UNIC,OUC,EUC",
    },
    {
        district: "Famagusta",
        vacancy: 22400,
        skillgap: "ICT / AI",
        youthunemp: "7.2%",
        hei: "UCY,UNIC,OUC,EUC",
    },
    {
        district: "Limassol",
        vacancy: 14800,
        skillgap: "Finance / Legal",
        youthunemp: "7.2%",
        hei: "CUT",
    },
    {
        district: "Famagusta",
        vacancy: 22400,
        skillgap: "ICT / AI",
        youthunemp: "7.2%",
        hei: "UCY,UNIC,OUC,EUC",
    },
    {
        district: "Limassol",
        vacancy: 14800,
        skillgap: "Finance / Legal",
        youthunemp: "7.2%",
        hei: "CUT",
    },
];

const districtColumns: ColumnDef<DistrictData, unknown>[] = [
    {
        accessorKey: "district",
        header: "District",
    },
    {
        accessorKey: "vacancy",
        header: "Active Vacancies",
    },
    {
        accessorKey: "skillgap",
        header: "Top Skill Gap",

        cell: ({ getValue }) => {
            const value = getValue<
                DistrictData["skillgap"]
            >();

            return (
                <span
                    className={`inline-flex rounded-md px-3 py-1.5 font-inter text-xs font-normal ${value === "ICT / AI"
                        ? "bg-[#E1FCEF] text-[#14804A]"
                        : "bg-[#FCF2E6] text-[#AA5B00]"
                        }`}
                >
                    {value}
                </span>
            );
        },
    },
    {
        accessorKey: "youthunemp",
        header: "Youth Unemp.",
    },
    {
        accessorKey: "hei",
        header: "HEIs",
    },

];





const filters: TableFilter[] = [
    {
        columnId: "district",
        label: "District",
        placeholder: "All District",

        options: [
            {
                label: "Nicosia",
                value: "Nicosia",
            },
            {
                label: "Limassol",
                value: "Limassol",
            },
            {
                label: "Larnaca",
                value: "Larnaca",
            },
            {
                label: "Famagusta",
                value: "Famagusta",
            },


        ],
    },

    {
        columnId: "hei",
        label: "Institution",
        placeholder: "All Institutions",

        options: [
            {
                label: "UCY",
                value: "UCY",
            },
            {
                label: "UNIC",
                value: "UNIC",
            },
            {
                label: "OUC",
                value: "OUC",
            },
            {
                label: "EUC",
                value: "EUC",
            },
            {
                label: "CUT",
                value: "CUT",
            },


        ],
    },
];


export default function DistrictSummary() {

    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="Regional Comparison / District-Level Skills & Vacancy Summary"
                    title="District-Level Skills & Vacancy Summary "
                    description="Compare employment, growth and skills performance across districts, industries and occupations."
                />

                <DataTable
                    data={districtData}
                    columns={districtColumns}
                    filters={filters}
                    title="District summary"
                />
            </div>

        </>
    );
}
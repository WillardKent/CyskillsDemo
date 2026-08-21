
import HeaderBanner from "../../../elements/HeaderBanner";
import DataTable from "../../../elements/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import type {
    TableFilter,
} from "../../../elements/DataTable";

type GraduateData = {
    domain: string;
    share: string;
    graduates: string;
    contributingHEIs: string;
};

const data: GraduateData[] = [
    {
        domain: "ICT & Engineering",
        share: "84%",
        graduates: "3,210",
        contributingHEIs: "UCY, UNIC, EUC, Frederick",
    },
    {
        domain: "Business & Law",
        share: "76%",
        graduates: "2,890",
        contributingHEIs: "UCY, UNIC, EUC, Frederick",
    },
    {
        domain: "Education & Social",
        share: "71%",
        graduates: "2,890",
        contributingHEIs: "UCY, UNIC, EUC, Frederick",
    },
    {
        domain: "Health & Life Sciences",
        share: "58%",
        graduates: "2,890",
        contributingHEIs: "UCY, UNIC, EUC, Frederick",
    },
    {
        domain: "Arts & Humanities",
        share: "58%",
        graduates: "2,890",
        contributingHEIs: "UCY, UNIC, EUC, Frederick",
    },
    {
        domain: "ICT & Engineering",
        share: "84%",
        graduates: "3,210",
        contributingHEIs: "UCY, UNIC, EUC, Frederick",
    },
    {
        domain: "Business & Law",
        share: "76%",
        graduates: "2,890",
        contributingHEIs: "UCY, UNIC, EUC, Frederick",
    },
    {
        domain: "Education & Social",
        share: "71%",
        graduates: "2,890",
        contributingHEIs: "UCY, UNIC, EUC, Frederick",
    },
    {
        domain: "Health & Life Sciences",
        share: "58%",
        graduates: "2,890",
        contributingHEIs: "UCY, UNIC, EUC, Frederick",
    },
    {
        domain: "Arts & Humanities",
        share: "58%",
        graduates: "2,890",
        contributingHEIs: "UCY, UNIC, EUC, Frederick",
    },

];

const columns: ColumnDef<GraduateData, unknown>[] = [
    {
        accessorKey: "domain",
        header: "Domain",
        filterFn: "equalsString",
    },
    {
        accessorKey: "share",
        header: "Share of graduates",
    },
    {
        accessorKey: "graduates",
        header: "Graduates (n)",
    },
    {
        accessorKey: "contributingHEIs",
        header: "Contributing HEIs",
        filterFn: "includesString",
    },
];

const filters: TableFilter[] = [
    {
        columnId: "domain",
        label: "Domain",
        placeholder: "All Domain",

        options: [
            {
                label: "ICT & Engineering",
                value: "ICT & Engineering",
            },
            {
                label: "Business & Law",
                value: "Business & Law",
            },
            {
                label: "Education & Social",
                value: "Education & Social",
            },
            {
                label: "Health & Life Sciences",
                value: "Health & Life Sciences",
            },
            {
                label: "Arts & Humanities",
                value: "Arts & Humanities",
            },
        ],
    },

    {
        columnId: "contributingHEIs",
        label: "Contributing HEIs",
        placeholder: "All Contributing HEIs",

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
                label: "EUC",
                value: "EUC",
            },
            {
                label: "Frederick",
                value: "Frederick",
            },
        ],
    },
];


export default function ProgrammeDomain() {

    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="National Dashboard / Supply by programme domain"
                    title="Supply by programme domain"
                    description="Full breakdown of graduate output share by domain, including contributing institutions and confidence. Illustrative — source not yet confirmed."
                />

                <DataTable
                    data={data}
                    columns={columns}
                    filters={filters}
                    title="Programme domains — 2024–25 cohort"
                />
            </div>


        </>
    );
}
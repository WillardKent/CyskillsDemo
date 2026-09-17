
import HeaderBanner from "../../../elements/HeaderBanner";
import DataTable from "../../../elements/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import type {
    TableFilter,
} from "../../../elements/DataTable";
import { getUniqueOptions } from "../../../utils/table";
import { Tag } from "../../../elements";

type SectorData = {
    programmeSector: string;
    heiGraduateOutput: string;
    d1DemandStatus: string;
    d2SkillRequirement: string;
    alignment: string;
};

const data: SectorData[] = [
    {
        programmeSector: "ICT & Software",
        heiGraduateOutput: "3,210",
        d1DemandStatus: "High",
        d2SkillRequirement: "Cloud, AI/ML, Data Analytics",
        alignment: "Surplus"
    },
    {
        programmeSector: "Maritime Logistics",
        heiGraduateOutput: "520",
        d1DemandStatus: "High",
        d2SkillRequirement: "Cloud, AI/ML, Data Analytics",
        alignment: "Surplus"
    },
    {
        programmeSector: "Tourism & Hospitality",
        heiGraduateOutput: "3,210",
        d1DemandStatus: "High",
        d2SkillRequirement: "Maritime Safety, Port Ops",
        alignment: "Surplus"
    },
    {
        programmeSector: "Business, Finance & Law",
        heiGraduateOutput: "520",
        d1DemandStatus: "Medium",
        d2SkillRequirement: "Maritime Safety, Port Ops",
        alignment: "Deficit"
    },
    {
        programmeSector: "Health & Life Sciences",
        heiGraduateOutput: "520",
        d1DemandStatus: "Medium",
        d2SkillRequirement: "Maritime Safety, Port Ops",
        alignment: "Deficit"
    },
    {
        programmeSector: "Construction & Engineering",
        heiGraduateOutput: "520",
        d1DemandStatus: "Medium",
        d2SkillRequirement: "Ops Management, Languages",
        alignment: "Deficit"
    },
    {
        programmeSector: "Creative & Digital Media",
        heiGraduateOutput: "520",
        d1DemandStatus: "Medium",
        d2SkillRequirement: "Ops Management, Languages",
        alignment: "Balanced"
    },
    {
        programmeSector: "IT Support Specialist",
        heiGraduateOutput: "520",
        d1DemandStatus: "Low",
        d2SkillRequirement: "Clinical Data, Pharma Ops",
        alignment: "Balanced"
    },
    {
        programmeSector: "Mobile App Developer",
        heiGraduateOutput: "520",
        d1DemandStatus: "Low",
        d2SkillRequirement: "Clinical Data, Pharma Ops",
        alignment: "Balanced"
    },
    {
        programmeSector: "IT Support Specialist",
        heiGraduateOutput: "520",
        d1DemandStatus: "Low",
        d2SkillRequirement: "UX/UI, Content & SEO",
        alignment: "Balanced"
    }
];

const columns: ColumnDef<SectorData, unknown>[] = [
    {
        accessorKey: "programmeSector",
        header: "Programme / Sector",
        filterFn: "equalsString",
    },
    {
        accessorKey: "heiGraduateOutput",
        header: "HEI Graduate Output",
    },
    {
        accessorKey: "d1DemandStatus",
        header: "D1 Demand Status",
        filterFn: "equalsString",

        cell: ({ getValue }) => {
            const value = getValue<SectorData["d1DemandStatus"]>();

            const track =
                value === "High"
                    ? "bg-[#53B160] border-2 border-[#D4F5CE]"
                    : value === "Medium"
                        ? "bg-[#1A62F8] border-2 border-[#D3E2FD]"
                        : "bg-[#B3172B] border-2 border-[#FDEBEC]";

            return (
                <div className="flex items-center gap-2">
                    <span
                        className={`size-2 rounded-full ${track}`}
                    />

                    <span>{value}</span>
                </div>
            );
        },
    },
    {
        accessorKey: "d2SkillRequirement",
        header: "D2 Skill Requirement",
    },
    {
        accessorKey: "alignment",
        header: "Alignment",
        filterFn: "equalsString",

        cell: ({ getValue }) => {
            const value = getValue<SectorData["alignment"]>();

            return (
                <Tag
                    variant={
                        value === "Surplus"
                            ? "success"
                            : value === "Deficit"
                                ? "danger"
                                : value === "Balanced"
                                    ? "info"
                                    : "warning"
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
        columnId: "programmeSector",
        label: "Programme / Sector",
        placeholder: "All Sectors",
        options: getUniqueOptions(
            data,
            "programmeSector"
        ),
    },
    {
        columnId: "d1DemandStatus",
        label: "D1 Demand Status",
        placeholder: "All Demand Statuses",
        options: getUniqueOptions(
            data,
            "d1DemandStatus"
        ),
    },
    {
        columnId: "d2SkillRequirement",
        label: "D2 Skill Requirement",
        placeholder: "All Skill Requirement",
        options: getUniqueOptions(
            data,
            "d2SkillRequirement"
        ),
    },
    {
        columnId: "alignment",
        label: "Alignment",
        placeholder: "All Alignments",
        options: getUniqueOptions(
            data,
            "alignment"
        ),
    },
];


export default function SupplyDemandMatrix() {

    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="National Dashboard / Supply & Demand Alignment Matrix (D1 Forecast)"
                    title="Supply & Demand Alignment Matrix (D1 Forecast)"
                    description="Cross-referencing CYGraduates supply output against Cyprus Gov D1/D2 demand indicators."
                />

                <DataTable
                    data={data}
                    columns={columns}
                    filters={filters}
                    title="Higher Education Supply vs Industry Demand Matrix"
                />

            </div>

        </>
    );
}

import HeaderBanner from "../../../elements/HeaderBanner";
import DataTable from "../../../elements/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import type {
    TableFilter,
} from "../../../elements/DataTable";
import { getUniqueOptions } from "../../../utils/table";
import { Tag } from "../../../elements";
import ProgressBar from "../../../elements/ProgressBar";

type SkillData = {
    skillName: string;
    escoConcept: string;
    sector: string;
    progress: number;
    ojaFrequency: string;
    marketPriority: string;
};

const data: SkillData[] = [
    {
        skillName: "Cloud Architecture & DevOps",
        escoConcept: "S1.2.1",
        sector: "ICT / Tech",
        progress: 94,
        ojaFrequency: "1,420 ads",
        marketPriority: "Critical"
    },
    {
        skillName: "Renewable Energy Systems",
        escoConcept: "S2.5.3",
        sector: "Green Tech",
        progress: 94,
        ojaFrequency: "1,420 ads",
        marketPriority: "Critical"
    },
    {
        skillName: "Data Analytics & Python",
        escoConcept: "S2.5.3",
        sector: "ICT / Tech",
        progress: 70,
        ojaFrequency: "260 ads",
        marketPriority: "Critical"
    },
    {
        skillName: "Artificial Intelligence & ML",
        escoConcept: "S1.2.4",
        sector: "ICT / Tech",
        progress: 80,
        ojaFrequency: "260 ads",
        marketPriority: "Medium"
    },
    {
        skillName: "Full-Stack Web Development",
        escoConcept: "S1.2.4",
        sector: "ICT / Tech",
        progress: 78,
        ojaFrequency: "260 ads",
        marketPriority: "Critical"
    },
    {
        skillName: "EU Regulatory Compliance",
        escoConcept: "L3.1.1",
        sector: "Legal & Finance",
        progress: 40,
        ojaFrequency: "330 ads",
        marketPriority: "Low"
    },
    {
        skillName: "Full-Stack Web Development",
        escoConcept: "L3.1.1",
        sector: "Legal & Finance",
        progress: 20,
        ojaFrequency: "330 ads",
        marketPriority: "Low"
    },
    {
        skillName: "EU Regulatory Compliance",
        escoConcept: "S4.1.3",
        sector: "Security",
        progress: 30,
        ojaFrequency: "330 ads",
        marketPriority: "Low"
    },
    {
        skillName: "EU Regulatory Compliance",
        escoConcept: "S4.1.3",
        sector: "Security",
        progress: 30,
        ojaFrequency: "330 ads",
        marketPriority: "Low"
    },
    {
        skillName: "Basic digital skills",
        escoConcept: "S4.1.3",
        sector: "Security",
        progress: 50,
        ojaFrequency: "330 ads",
        marketPriority: "Low"
    }
];

const columns: ColumnDef<SkillData, unknown>[] = [
    {
        accessorKey: "skillName",
        header: "Skill / Competence Name",
        filterFn: "equalsString",
    },
    {
        accessorKey: "escoConcept",
        header: "ESCO Concept",
    },
    {
        accessorKey: "sector",
        header: "Sector",
        filterFn: "equalsString",
    },
    {
        accessorKey: "progress",
        header: "Progress",
        cell: ({ getValue }) => {
            const value = getValue<number>();

            return (
                <ProgressBar value={value}
                    colorClass="bg-linear-to-r from-[#F58D50] to-[#F2D468]" />
            );
        },
    },
    {
        accessorKey: "ojaFrequency",
        header: "OJA Frequency",
    },
    {
        accessorKey: "marketPriority",
        header: "Market Priority",
        filterFn: "equalsString",
        cell: ({ getValue }) => {
            const value = getValue<SkillData["marketPriority"]>();

            return (
                <Tag
                    variant={
                        value === "Low"
                            ? "default"
                            : value === "Critical"
                                ? "danger"
                                : value === "Medium"
                                    ? "warning"
                                    : "info"
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
        columnId: "skillName",
        label: "Skill / Competence",
        placeholder: "All Skills",
        options: getUniqueOptions(
            data,
            "skillName"
        ),
    },
    {
        columnId: "sector",
        label: "Sector",
        placeholder: "All Sectors",
        options: getUniqueOptions(
            data,
            "sector"
        ),
    },
    {
        columnId: "marketPriority",
        label: "Market Priority",
        placeholder: "All Priorities",
        options: getUniqueOptions(
            data,
            "marketPriority"
        ),
    },
];


export default function InDemandSkillMatrix() {

    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="National Dashboard / Skill Demand (D2)"
                    title="In-Demand Skills Matrix (D2 & OJA Integration)"
                    description="Cross-referencing CYGraduates supply output against Cyprus Gov D1/D2 demand indicators."
                />

                <DataTable
                    data={data}
                    columns={columns}
                    filters={filters}
                    title="Official skill demand index (D2) cross-referenced with OJA frequency."
                />
            </div>

        </>

    );
}
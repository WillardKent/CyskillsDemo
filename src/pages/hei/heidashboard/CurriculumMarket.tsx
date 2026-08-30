
import HeaderBanner from "../../../elements/HeaderBanner";
import DataTable from "../../../elements/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import type {
    TableFilter,
} from "../../../elements/DataTable";

type ProgramData = {
    studyProgram: string;
    skill: string;
    curriculumCoverage: string;
    marketDemand: string;
    alignmentScore: string;
    gap: string;
};

const data: ProgramData[] = [
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        curriculumCoverage: "82%",
        marketDemand: "91%",
        alignmentScore: "90%",
        gap: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        curriculumCoverage: "82%",
        marketDemand: "91%",
        alignmentScore: "90%",
        gap: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        curriculumCoverage: "82%",
        marketDemand: "91%",
        alignmentScore: "90%",
        gap: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        curriculumCoverage: "82%",
        marketDemand: "91%",
        alignmentScore: "90%",
        gap: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        curriculumCoverage: "82%",
        marketDemand: "91%",
        alignmentScore: "90%",
        gap: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        curriculumCoverage: "82%",
        marketDemand: "91%",
        alignmentScore: "90%",
        gap: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        curriculumCoverage: "82%",
        marketDemand: "91%",
        alignmentScore: "90%",
        gap: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        curriculumCoverage: "82%",
        marketDemand: "91%",
        alignmentScore: "90%",
        gap: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        curriculumCoverage: "82%",
        marketDemand: "91%",
        alignmentScore: "90%",
        gap: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "SQL",
        curriculumCoverage: "82%",
        marketDemand: "91%",
        alignmentScore: "90%",
        gap: "9%",
    },
];

const columns: ColumnDef<ProgramData, unknown>[] = [
    {
        accessorKey: "studyProgram",
        header: "Study Program",
        filterFn: "equalsString",
    },
    {
        accessorKey: "skill",
        header: "Skill",
        filterFn: "equalsString",
    },
    {
        accessorKey: "curriculumCoverage",
        header: "Curriculum Coverage",
    },
    {
        accessorKey: "marketDemand",
        header: "Market Demand",
    },
    {
        accessorKey: "alignmentScore",
        header: "Alignment Score",
    },
    {
        accessorKey: "gap",
        header: "Gap",
    },
];

const filters: TableFilter[] = [
    {
        columnId: "studyProgram",
        label: "Study Program",
        placeholder: "All Study Programs",
        options: [
            {
                label: "MSc Data Science & AI",
                value: "MSc Data Science & AI",
            },
        ],
    },
    {
        columnId: "skill",
        label: "Skill",
        placeholder: "All Skills",
        options: [
            {
                label: "Python",
                value: "Python",
            },
            {
                label: "SQL",
                value: "SQL",
            },
        ],
    },
];


export default function CurriculumMarket() {

    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="Dashboard / Curriculum–Market Alignment"
                    title="Curriculum–Market Alignment"
                    description="Measure how closely academic programs align with current and projected workforce demand."
                />

                <DataTable
                    data={data}
                    columns={columns}
                    filters={filters}
                    title="Curriculum–Market Alignment"
                />
            </div>


        </>
    );
}
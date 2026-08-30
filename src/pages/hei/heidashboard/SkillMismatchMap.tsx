
import HeaderBanner from "../../../elements/HeaderBanner";
import DataTable from "../../../elements/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import type {
    TableFilter,
} from "../../../elements/DataTable";

type ProgramData = {
    studyProgram: string;
    skill: string;
    graduateProficiency: string;
    employerDemand: string;
    skillsGap: string;
    matchScore: string;
};

const data: ProgramData[] = [
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        graduateProficiency: "82%",
        employerDemand: "91%",
        skillsGap: "90%",
        matchScore: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        graduateProficiency: "82%",
        employerDemand: "91%",
        skillsGap: "90%",
        matchScore: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        graduateProficiency: "82%",
        employerDemand: "91%",
        skillsGap: "90%",
        matchScore: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        graduateProficiency: "82%",
        employerDemand: "91%",
        skillsGap: "90%",
        matchScore: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        graduateProficiency: "82%",
        employerDemand: "91%",
        skillsGap: "90%",
        matchScore: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        graduateProficiency: "82%",
        employerDemand: "91%",
        skillsGap: "90%",
        matchScore: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        graduateProficiency: "82%",
        employerDemand: "91%",
        skillsGap: "90%",
        matchScore: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        graduateProficiency: "82%",
        employerDemand: "91%",
        skillsGap: "90%",
        matchScore: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Python",
        graduateProficiency: "82%",
        employerDemand: "91%",
        skillsGap: "90%",
        matchScore: "9%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "SQL",
        graduateProficiency: "82%",
        employerDemand: "91%",
        skillsGap: "90%",
        matchScore: "9%",
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
        accessorKey: "graduateProficiency",
        header: "Graduate Proficiency",
    },
    {
        accessorKey: "employerDemand",
        header: "Employer Demand",
    },
    {
        accessorKey: "skillsGap",
        header: "Skills Gap",
    },
    {
        accessorKey: "matchScore",
        header: "Match Score",
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


export default function SkillMismatchMap() {

    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="Dashboard / Skills Mismatch Map"
                    title="Skills Mismatch Map"
                    description="Identify where graduate capabilities differ from employer demand."
                />

                <DataTable
                    data={data}
                    columns={columns}
                    filters={filters}
                    title="Skills Mismatch Map"
                />
            </div>


        </>
    );
}
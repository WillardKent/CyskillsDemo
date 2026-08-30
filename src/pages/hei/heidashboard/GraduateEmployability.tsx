
import HeaderBanner from "../../../elements/HeaderBanner";
import DataTable from "../../../elements/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import type {
    TableFilter,
} from "../../../elements/DataTable";

type CareerData = {
    studyProgram: string;
    institution: string;
    graduates: string;
    employmentRate: string;
    relevantEmployment: string;
    avgTimeToEmployment: string;
    avgStartingSalary: string;
    careerReadiness: string;
};

const data: CareerData[] = [
    {
        studyProgram: "MSc Data Science & AI",
        institution: "UCY",
        graduates: "850",
        employmentRate: "91%",
        relevantEmployment: "91%",
        avgTimeToEmployment: "2.9 months",
        avgStartingSalary: "€28K–€35K / Year",
        careerReadiness: "88%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        institution: "UCY",
        graduates: "850",
        employmentRate: "91%",
        relevantEmployment: "91%",
        avgTimeToEmployment: "2.9 months",
        avgStartingSalary: "€28K–€35K / Year",
        careerReadiness: "88%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        institution: "UCY",
        graduates: "850",
        employmentRate: "91%",
        relevantEmployment: "91%",
        avgTimeToEmployment: "2.9 months",
        avgStartingSalary: "€28K–€35K / Year",
        careerReadiness: "88%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        institution: "UCY",
        graduates: "850",
        employmentRate: "91%",
        relevantEmployment: "91%",
        avgTimeToEmployment: "2.9 months",
        avgStartingSalary: "€28K–€35K / Year",
        careerReadiness: "88%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        institution: "UCY",
        graduates: "850",
        employmentRate: "91%",
        relevantEmployment: "91%",
        avgTimeToEmployment: "2.9 months",
        avgStartingSalary: "€28K–€35K / Year",
        careerReadiness: "88%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        institution: "UCY",
        graduates: "850",
        employmentRate: "91%",
        relevantEmployment: "91%",
        avgTimeToEmployment: "2.9 months",
        avgStartingSalary: "€28K–€35K / Year",
        careerReadiness: "88%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        institution: "UCY",
        graduates: "850",
        employmentRate: "91%",
        relevantEmployment: "91%",
        avgTimeToEmployment: "2.9 months",
        avgStartingSalary: "€28K–€35K / Year",
        careerReadiness: "88%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        institution: "UCY",
        graduates: "850",
        employmentRate: "91%",
        relevantEmployment: "91%",
        avgTimeToEmployment: "2.9 months",
        avgStartingSalary: "€28K–€35K / Year",
        careerReadiness: "88%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        institution: "UCY",
        graduates: "850",
        employmentRate: "91%",
        relevantEmployment: "91%",
        avgTimeToEmployment: "2.9 months",
        avgStartingSalary: "€28K–€35K / Year",
        careerReadiness: "88%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        institution: "CUT",
        graduates: "620",
        employmentRate: "91%",
        relevantEmployment: "90%",
        avgTimeToEmployment: "2.9 months",
        avgStartingSalary: "€28K–€35K / Year",
        careerReadiness: "88%",
    },
];

const columns: ColumnDef<CareerData, unknown>[] = [
    {
        accessorKey: "studyProgram",
        header: "Study Program",
        filterFn: "equalsString",
    },
    {
        accessorKey: "institution",
        header: "Institution",
        filterFn: "equalsString",
    },
    {
        accessorKey: "graduates",
        header: "Graduates (n)",
    },
    {
        accessorKey: "employmentRate",
        header: "Employment Rate",
    },
    {
        accessorKey: "relevantEmployment",
        header: "Relevant Employment",
    },
    {
        accessorKey: "avgTimeToEmployment",
        header: "Avg. Time to Employment",
    },
    {
        accessorKey: "avgStartingSalary",
        header: "Avg. Starting Salary",
    },
    {
        accessorKey: "careerReadiness",
        header: "Career Readiness",
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
        columnId: "institution",
        label: "Institution",
        placeholder: "All Institutions",
        options: [
            {
                label: "UCY",
                value: "UCY",
            },
            {
                label: "CUT",
                value: "CUT",
            },
        ],
    },
];


export default function GraduateEmployability() {

    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="Dashboard / Graduate Employability"
                    title="Graduate Employability"
                    description="Track employment outcomes and career readiness across institutions and study programs."
                />

                <DataTable
                    data={data}
                    columns={columns}
                    filters={filters}
                    title="Graduate Employability"
                />
            </div>


        </>
    );
}
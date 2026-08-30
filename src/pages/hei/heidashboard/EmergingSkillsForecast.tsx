
import HeaderBanner from "../../../elements/HeaderBanner";
import DataTable from "../../../elements/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import type {
    TableFilter,
} from "../../../elements/DataTable";

type DemandData = {
    studyProgram: string;
    skill: string;
    currentDemand: string;
    demand2027: string;
    demand2028: string;
    demand2029: string;
    demand2030: string;
    growth: string;
};

const data: DemandData[] = [
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Generative AI",
        currentDemand: "100",
        demand2027: "125",
        demand2028: "155",
        demand2029: "190",
        demand2030: "230",
        growth: "+130%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Generative AI",
        currentDemand: "100",
        demand2027: "125",
        demand2028: "155",
        demand2029: "190",
        demand2030: "230",
        growth: "+130%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Generative AI",
        currentDemand: "100",
        demand2027: "125",
        demand2028: "155",
        demand2029: "190",
        demand2030: "230",
        growth: "+130%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Generative AI",
        currentDemand: "100",
        demand2027: "125",
        demand2028: "155",
        demand2029: "190",
        demand2030: "230",
        growth: "+130%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Generative AI",
        currentDemand: "100",
        demand2027: "125",
        demand2028: "155",
        demand2029: "190",
        demand2030: "230",
        growth: "+130%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Generative AI",
        currentDemand: "100",
        demand2027: "125",
        demand2028: "155",
        demand2029: "190",
        demand2030: "230",
        growth: "+130%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Generative AI",
        currentDemand: "100",
        demand2027: "125",
        demand2028: "155",
        demand2029: "190",
        demand2030: "230",
        growth: "+130%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Generative AI",
        currentDemand: "100",
        demand2027: "125",
        demand2028: "155",
        demand2029: "190",
        demand2030: "230",
        growth: "+130%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Generative AI",
        currentDemand: "100",
        demand2027: "125",
        demand2028: "155",
        demand2029: "190",
        demand2030: "230",
        growth: "+130%",
    },
    {
        studyProgram: "MSc Data Science & AI",
        skill: "Cloud Computing",
        currentDemand: "100",
        demand2027: "125",
        demand2028: "155",
        demand2029: "190",
        demand2030: "230",
        growth: "+130%",
    },
];

const columns: ColumnDef<DemandData, unknown>[] = [
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
        accessorKey: "currentDemand",
        header: "Current Demand",
    },
    {
        accessorKey: "demand2027",
        header: "2027 Demand",
    },
    {
        accessorKey: "demand2028",
        header: "2028 Demand",
    },
    {
        accessorKey: "demand2029",
        header: "2029 Demand",
    },
    {
        accessorKey: "demand2030",
        header: "2030 Demand",
    },
    {
        accessorKey: "growth",
        header: "Growth",
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
                label: "Generative AI",
                value: "Generative AI",
            },
            {
                label: "Cloud Computing",
                value: "Cloud Computing",
            },
        ],
    },
];


export default function EmergingSkillsForecast() {

    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="Dashboard / Emerging Skills Forecast"
                    title="Emerging Skills Forecast"
                    description="Forecast future skill demand and identify emerging capabilities shaping the workforce."
                />

                <DataTable
                    data={data}
                    columns={columns}
                    filters={filters}
                    title="Emerging Skills Forecast"
                />
            </div>


        </>
    );
}

import HeaderBanner from "../../../elements/HeaderBanner";
import DataTable from "../../../elements/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import type {
    TableFilter,
} from "../../../elements/DataTable";

type GraduateData = {
    programme: string;
    escocode: string;
    status: string;
    reviewer: string;
    updated: string;
};

const data: GraduateData[] = [
    {
        programme: "BSc Computer Science",
        escocode: "2512.1",
        status: "Under review",
        reviewer: "A. Georgiou",
        updated: "12 Jun 2025"
    },
    {
        programme: "BSc Business Administration",
        escocode: "2411.4",
        status: "Under review",
        reviewer: "M. Christou",
        updated: "12 Jun 2025"
    },
    {
        programme: "BEd Primary Education",
        escocode: "2411.4",
        status: "Under review",
        reviewer: "M. Christou",
        updated: "12 Jun 2025"
    },
    {
        programme: "BSc Nursing",
        escocode: "2411.4",
        status: "Pending review",
        reviewer: "M. Christou",
        updated: "12 Jun 2025"
    },
    {
        programme: "BA Fine Arts",
        escocode: "2411.4",
        status: "Completed",
        reviewer: "M. Christou",
        updated: "12 Jun 2025"
    }, {
        programme: "BSc Computer Science",
        escocode: "2512.1",
        status: "Completed",
        reviewer: "A. Georgiou",
        updated: "12 Jun 2025"
    },
    {
        programme: "BSc Business Administration",
        escocode: "2411.4",
        status: "Pending review",
        reviewer: "M. Christou",
        updated: "12 Jun 2025"
    },
    {
        programme: "BEd Primary Education",
        escocode: "2411.4",
        status: "Under review",
        reviewer: "M. Christou",
        updated: "12 Jun 2025"
    },
    {
        programme: "BSc Nursing",
        escocode: "2411.4",
        status: "Under review",
        reviewer: "M. Christou",
        updated: "12 Jun 2025"
    },
    {
        programme: "BA Fine Arts",
        escocode: "2411.4",
        status: "Under review",
        reviewer: "M. Christou",
        updated: "12 Jun 2025"
    },

];

const columns: ColumnDef<GraduateData, unknown>[] = [
    {
        accessorKey: "programme",
        header: "Programme",
        filterFn: "equalsString",
    },
    {
        accessorKey: "escocode",
        header: "ESCO code",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "reviewer",
        header: "Reviewer",
        filterFn: "equalsString",
    },
    {
        accessorKey: "updated",
        header: "Updated",
    },
];

const filters: TableFilter[] = [
    {
        columnId: "programme",
        label: "Programme",
        placeholder: "All Programme",

        options: [
            {
                label: "BSc Computer Science",
                value: "BSc Computer Science",
            },
            {
                label: "BSc Business Administration",
                value: "BSc Business Administration",
            },
            {
                label: "BEd Primary Education",
                value: "BEd Primary Education",
            },
            {
                label: "BSc Nursing",
                value: "BSc Nursing",
            },
            {
                label: "BA Fine Arts",
                value: "BA Fine Arts",
            },

        ],
    },

    {
        columnId: "status",
        label: "Status",
        placeholder: "All Status",

        options: [
            {
                label: "Completed",
                value: "Completed",
            },
            {
                label: "Under review",
                value: "Under review",
            },
            {
                label: "Pending review",
                value: "Pending review",
            },


        ],
    },
];


export default function EscoSkillReview() {

    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="National Dashboard / ESCO Skill Mapping Review"
                    title="ESCO Skill Mapping Review"
                    description="Curriculum-to-ESCO mapping review queue, by programme and confidence level. Illustrative — source not yet confirmed."
                />

                <DataTable
                    data={data}
                    columns={columns}
                    filters={filters}
                    title="Mapping review queue"
                />
            </div>

        </>
    );
}

import HeaderBanner from "../../../elements/HeaderBanner";
import DataTable from "../../../elements/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import type {
    TableFilter,
} from "../../../elements/DataTable";
import { getUniqueOptions } from "../../../utils/table";

type JobData = {
    jobTitle: string;
    company: string;
    industrySector: string;
    location: string;
    datePosted: Date; // Updated to Date object
    status: string;
};

const data: JobData[] = [
    {
        jobTitle: "Software Developer",
        company: "AmpleTech Ltd.",
        industrySector: "Information Technology",
        location: "Nicosia",
        datePosted: new Date("2026-04-18"),
        status: "Active"
    },
    {
        jobTitle: "Cloud DevOps Engineer",
        company: "ScaleUp Solutions",
        industrySector: "Information Technology",
        location: "Nicosia",
        datePosted: new Date("2026-04-17"),
        status: "Active"
    },
    {
        jobTitle: "Full-Stack Engineer",
        company: "AmpleTech Ltd.",
        industrySector: "Information Technology",
        location: "Nicosia",
        datePosted: new Date("2025-06-12"),
        status: "Active"
    },
    {
        jobTitle: "QA Automation Engineer",
        company: "ScaleUp Solutions",
        industrySector: "Information Technology",
        location: "Paphos",
        datePosted: new Date("2025-06-12"),
        status: "Active"
    },
    {
        jobTitle: "Data Engineer",
        company: "ByteHarbor Cyprus",
        industrySector: "Information Technology",
        location: "Paphos",
        datePosted: new Date("2025-06-12"),
        status: "Active"
    },
    {
        jobTitle: "QA Automation Engineer",
        company: "AmpleTech Ltd.",
        industrySector: "Information Technology",
        location: "Famagusta District",
        datePosted: new Date("2025-06-12"),
        status: "Active"
    },
    {
        jobTitle: "Cybersecurity Analyst",
        company: "ByteHarbor Cyprus",
        industrySector: "Information Technology",
        location: "Famagusta District",
        datePosted: new Date("2025-06-12"),
        status: "Active"
    },
    {
        jobTitle: "IT Support Specialist",
        company: "PixelForge Studios",
        industrySector: "Information Technology",
        location: "Famagusta District",
        datePosted: new Date("2025-06-12"),
        status: "Active"
    },
    {
        jobTitle: "Mobile App Developer",
        company: "AmpleTech Ltd.",
        industrySector: "Information Technology",
        location: "Famagusta District",
        datePosted: new Date("2025-06-12"),
        status: "Active"
    },
    {
        jobTitle: "IT Support Specialist",
        company: "PixelForge Studios",
        industrySector: "Information Technology",
        location: "Famagusta District",
        datePosted: new Date("2025-06-12"),
        status: "Inactive"
    }
];

const columns: ColumnDef<JobData, unknown>[] = [
    {
        accessorKey: "jobTitle",
        header: "Job Title",
        filterFn: "equalsString",
    },
    {
        accessorKey: "company",
        header: "Company / Employer",
        filterFn: "equalsString",
    },
    {
        accessorKey: "industrySector",
        header: "Industry Sector",
    },
    {
        accessorKey: "location",
        header: "Location",
        filterFn: "equalsString",
    },
    {
        accessorKey: "datePosted",
        header: "Date Posted",
        // Replace the string with a custom filtering function
        filterFn: (row, columnId, filterValue) => {
            const rowDate = row.getValue<Date>(columnId);

            // Assuming your filter passes an array of [startDate, endDate]
            // Adjust this logic based on what your date picker actually passes as 'filterValue'
            const [start, end] = filterValue as [Date | undefined, Date | undefined];

            if (start && end) {
                return rowDate >= start && rowDate <= end;
            } else if (start) {
                return rowDate >= start;
            } else if (end) {
                return rowDate <= end;
            }

            // If no filter is applied, return true to show the row
            return true;
        },
        cell: ({ row }) => {
            const date = row.getValue<Date>("datePosted");
            return date.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
            });
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        filterFn: "equalsString",

        cell: ({ getValue }) => {
            const value = getValue<
                JobData["status"]
            >();

            const track = value != "Active";

            return (
                <div className="flex items-center gap-2">
                    <span
                        className={`size-2 rounded-full ${track
                            ? "bg-[#B3172B] border-2 border-[#FDEBEC]"
                            : "bg-[#53B160] border-2 border-[#D4F5CE]"
                            }`}
                    />

                    <span>
                        {value}
                    </span>
                </div>
            );
        },
    },
];

// The filters array remains unchanged unless you want to pass specific date ranges as options
const filters: TableFilter[] = [
    {
        columnId: "jobTitle",
        label: "Job Title",
        placeholder: "All Job Titles",
        options: getUniqueOptions(
            data,
            "jobTitle"
        ),
    },
    {
        columnId: "company",
        label: "Company / Employer",
        placeholder: "All Companies",
        options: getUniqueOptions(
            data,
            "company"
        ),
    },
    {
        columnId: "location",
        label: "Location",
        placeholder: "All Locations",
        options: getUniqueOptions(
            data,
            "location"
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


export default function OjaJobVacancy() {

    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="National Dashboard / Labour Demand (OJA)"
                    title="OJA Job Vacancy Explorer (Carierista)"
                    description="Full list of active and recent online job advertisements from Carierista."
                />

                <DataTable
                    data={data}
                    columns={columns}
                    filters={filters}
                    title="OJA Job Vacancy Explorer (Carierista)"
                />

            </div>

        </>
    );
}
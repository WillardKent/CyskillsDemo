
import InfoBanner from "../../../elements/InfoBanner";
import ProgressCard from "../../../elements/ProgressCard";
import FooterBanner from "../../../elements/FooterBanner";
import StatCard from "../../../elements/StatCard";
import { Card } from "../../../elements";
import DataTable from "../../../elements/DataTable";
import type { ColumnDef } from "@tanstack/react-table";
import { Tag } from "../../../elements";
import {
    Building2,
    GraduationCap,
    TriangleAlert,
    BriefcaseBusiness,
} from "lucide-react";

type SupplyData = {
    sector: string;
    supply: string;
    demand: String;
    forecast: string;
    status: string;
};

const supplyData: SupplyData[] = [
    {
        sector: "Nicosia",
        supply: "3,210",
        demand: "High",
        forecast: "+16.8%",
        status: "Surplus",
    },

    {
        sector: "Green Energy & Renewables",
        supply: "908",
        demand: "Low",
        forecast: "-1.8%",
        status: "Deficit",
    },

    {
        sector: "Maritime & Shipping",
        supply: "1,308",
        demand: "low",
        forecast: "-5.8%",
        status: "At Risk",
    },
    {
        sector: "Software Engineering",
        supply: "10,210",
        demand: "High",
        forecast: "+16.8%",
        status: "Balanced",
    },

];

const supplyColumns: ColumnDef<SupplyData, unknown>[] = [
    {
        accessorKey: "sector",
        header: "Sector",
    },
    {
        accessorKey: "vacancy",
        header: "Supply (Grads)",
    },
    {
        accessorKey: "demand",
        header: "Demand Level",
    },
    {
        accessorKey: "forecast",
        header: "Forecast Growth",

        cell: ({ getValue }) => {
            const value = getValue<SupplyData["forecast"]>();

            return (
                <span
                    className={`font-inter text-xs font-medium ${value.startsWith("+")
                        ? "text-[#106832]"
                        : "text-[#D12953]"
                        }`}
                >
                    {value}
                </span>
            );
        },


    },
    {
        accessorKey: "status",
        header: "Status",

        cell: ({ getValue }) => {
            const value = getValue<SupplyData["status"]>();

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

const programmeDomainData = [
    {
        label: "ICT & Engineering",
        percentage: 90,
        gradient:
            "bg-[linear-gradient(225deg,#68DBF2_0.01%,#1A62F8_100%)]",
    },
    {
        label: "Business & Law",
        percentage: 75,
        gradient:
            "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Education & Social",
        percentage: 48,
        gradient:
            "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Health & Life Science",
        percentage: 100,
        gradient:
            "bg-[linear-gradient(225deg,#F27868_0.01%,#F55050_100%)]",
    },
];

const jobVacancyData = [
    {
        label: "ICT & Engineering",
        percentage: 85,
        gradient:
            "bg-[linear-gradient(225deg,#68DBF2_0.01%,#1A62F8_100%)]",
    },
    {
        label: "Tourism & Hospitality",
        percentage: 60,
        gradient:
            "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Maritime & Finance",
        percentage: 60,
        gradient:
            "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Business, Finance & Law",
        percentage: 25,
        gradient:
            "bg-[linear-gradient(225deg,#F27868_0.01%,#F55050_100%)]",
    },
];

const skillDemandData = [
    {
        label: "Cloud Architecture & DevOps (S1.2)",
        percentage: 85,
        gradient:
            "bg-[linear-gradient(225deg,#68DBF2_0.01%,#1A62F8_100%)]",
    },
    {
        label: "Renewable Energy Systems (S2.5) ",
        percentage: 60,
        gradient:
            "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Data Analytics & Python (S1.1)",
        percentage: 60,
        gradient:
            "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
];

export default function NationalDashboard() {

    const coverageStats = [
        {
            title: "Programme coverage",
            value: "5 HEIs",
            change: "+3%",
            source: "CYGraduates data",
            icon: Building2,
            iconColor: "text-[#1A62F8]",
            changeColor: "text-[#1A62F8]",
        },
        {
            title: "Graduate profiles",
            value: "12,400",
            change: "+12%",
            source: "Supply-side, validated",
            icon: GraduationCap,
            iconColor: "text-[#1A62F8]",
            changeColor: "text-[#1A62F8]",
        },
        {
            title: "Source: Carierista OJA",
            value: "8,650",
            source: "Source: Carierista OJA",
            icon: BriefcaseBusiness,
            iconColor: "text-[#1A62F8]",
            changeColor: "text-[#1A62F8]",
        },
        {
            title: "Critical sector gaps",
            value: "48",
            source: "Source: Cyprus Gov (D1)",
            icon: TriangleAlert,
            iconColor: "text-[#1A62F8]",
            changeColor: "text-[#1A62F8]",
        },

    ];

    return (
        <>


            <div className="flex flex-col w-full gap-2">

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {coverageStats.map((stat) => (
                        <StatCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                            change={stat.change}
                            desc={stat.source}
                            icon={stat.icon}
                            iconColor={stat.iconColor}
                            changeColor={stat.changeColor}
                        />
                    ))}
                </div>



                <InfoBanner title="Phase B Active: Full Supply & Demand Integration (Cyprus Gov D1/D2 & Carierista OJA real-time feed)." />

                <div className="flex w-full flex-col gap-4 xl:flex-col  ">
                    <ProgressCard
                        title="Supply by programme domain"
                        desc="Graduate output by programme domain, showing the distribution of graduates across key fields and contributing HEIs."
                        items={programmeDomainData}
                    />

                    <ProgressCard
                        title="OJA Job Vacancy Explorer"
                        desc="Share of active vacancies by industry sector, Carierista"
                        items={jobVacancyData}


                    />
                    <Card
                        title="Supply & Demand Alignment (D1)"
                        description="Comparison of graduate supply vs. occupational demand"
                        onViewAll={() => { }}>

                        <DataTable
                            data={supplyData}
                            columns={supplyColumns}
                            variant="minimal"
                        />
                    </Card>

                    <ProgressCard
                        title="Skill Demand (D2)"
                        desc="Skills indexed by D2 demand index & OJA job mentions"
                        items={skillDemandData}


                    />
                </div>


                <FooterBanner>
                    <p className="mb-1">
                        ICT & Engineering shows the highest graduate output and the fastest
                        demand growth — sustained investment is compounding.
                    </p>

                    <ul className="list-disc pl-5 space-y-0.5">
                        <li>
                            Maritime and Renewable Energy show emerging demand with
                            double-digit growth, but graduate supply remains thin — flag as
                            priority intake domains.
                        </li>

                        <li>
                            Tourism & Hospitality demand is broad-based across roles but
                            concentrated in mid-skill occupations, keeping the sector broadly
                            balanced.
                        </li>

                        <li>
                            Cloud & DevOps and Data Analytics lead OJA skill mentions,
                            outpacing current HEI curriculum coverage in these areas.
                        </li>
                    </ul>
                </FooterBanner>

            </div>

        </>
    );
}
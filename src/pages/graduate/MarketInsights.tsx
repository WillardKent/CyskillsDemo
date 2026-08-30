
import InfoBanner from "../../elements/InfoBanner";
import HeaderBanner from "../../elements/HeaderBanner";
import TrendChart from "../../elements/TrendChart";
import TrendBar from "../../elements/TrendBar";
import type { TrendBarCategory } from "../../elements/TrendBar";

const salaryData: TrendBarCategory[] = [
    {
        label: "Technology",
        roles: [
            {
                role: "Data Scientist",
                salary: 82000,
            },
            {
                role: "Product Analyst",
                salary: 70000,
            },
            {
                role: "BI Analyst",
                salary: 67000,
            },
            {
                role: "Business Analyst",
                salary: 64000,
            },
            {
                role: "Data Analyst",
                salary: 62000,
            },
            {
                role: "Financial Analyst",
                salary: 62000,
            },
        ],
    },

    {
        label: "Finance",
        roles: [
            {
                role: "Financial Manager",
                salary: 78000,
            },
            {
                role: "Investment Analyst",
                salary: 72000,
            },
            {
                role: "Risk Analyst",
                salary: 65000,
            },
            {
                role: "Accountant",
                salary: 55000,
            },
        ],
    },

    {
        label: "Consulting",
        roles: [
            {
                role: "Strategy Consultant",
                salary: 80000,
            },
            {
                role: "Business Consultant",
                salary: 68000,
            },
            {
                role: "Junior Consultant",
                salary: 52000,
            },
        ],
    },

    {
        label: "Healthcare",
        roles: [
            {
                role: "Healthcare Manager",
                salary: 75000,
            },
            {
                role: "Clinical Analyst",
                salary: 62000,
            },
            {
                role: "Medical Researcher",
                salary: 58000,
            },
        ],
    },

    {
        label: "Government",
        roles: [
            {
                role: "Policy Analyst",
                salary: 65000,
            },
            {
                role: "Program Manager",
                salary: 72000,
            },
            {
                role: "Public Administrator",
                salary: 60000,
            },
        ],
    },
];


export default function MarketInsights() {
    const skillData = [
        {
            label: "SQL",
            values: [700, 1000, 1300, 1650, 2100, 3000],
        },
        {
            label: "Power BI",
            values: [1200, 1500, 1800, 2300, 2800, 3300],
        },
        {
            label: "Excel",
            values: [900, 1200, 1500, 2000, 2200, 2500],
        },
        {
            label: "Communication",
            values: [800, 900, 1000, 1250, 1450, 1650],
        },
        {
            label: "Cloud Computing",
            values: [1500, 1900, 2600, 3400, 3900, 4400],
        },
    ];


    const jobData = [
        {
            label: "Technology",
            values: [700, 1000, 1300, 1650, 2100, 4800],
        },
        {
            label: "Finance",
            values: [900, 1200, 1800, 2300, 2800, 3300],
        },
        {
            label: "Consulting",
            values: [650, 750, 800, 900, 1000, 1200],
        },
        {
            label: "Healthcare",
            values: [800, 900, 1000, 1250, 1450, 1650],
        },
        {
            label: "Government",
            values: [600, 950, 1100, 1200, 1400, 1800],
        },
    ];



    return (
        <>


            <div className="flex flex-col w-full gap-2">

                <HeaderBanner breadcrumb="Market Insights"
                    title="Market Insights"
                    description="Cyprus labour market intelligence · Updated daily from 2.4M job postings"
                    buttons={[
                        {
                            text: "Get AI Assistant",
                            variant: "blue",
                            onClick: () => console.log("Year clicked"),
                        }]}
                />



                <InfoBanner title={`You're 3 skills away from being " highly competitive" for Data Analyst roles. Learning SQL + Power BI would raise your match score to 94%. Estimated time: 6–8 weeks.`} />

                <TrendChart
                    title="Skill Demand Trend — Top 6 Skills"
                    subtitle="Top skills based on current job posting demand"
                    description="Job Postings"
                    periods={[
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                    ]}
                    skills={skillData}
                    defaultSkill="SQL"
                    dateRange="Last 6 Months"
                    yAxisMax={5000}
                    yAxisSteps={5}
                    footerText="SQL demand increased by 50% over the last 6 months"
                    footerSubtext="From 2.4k to 3.6k job postings"
                    percvalue={50}
                />
                <TrendChart
                    title="Job Growth by Sector"
                    subtitle="Change in job posting volume over the last 6 months"
                    description="Job Postings"
                    periods={[
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                    ]}
                    skills={jobData}
                    defaultSkill="Technology"
                    dateRange="Last 6 Months"
                    yAxisMax={5000}
                    yAxisSteps={5}
                    footerText="Technology grew by 39% in the last 6 months"
                    footerSubtext="from 3.2k to 4.5k job postings"
                    percvalue={39}
                />

                <TrendBar
                    categories={salaryData}
                    defaultCategory="Technology"
                    experienceLevel="Freshgraduate"
                    maxSalary={100000}
                />
            </div >

        </>
    );
}

import HeaderBanner from "../../elements/HeaderBanner";
import { Tag } from "../../elements/Tag";
import StatCard from "../../elements/StatCard";
import ProgressCard from "../../elements/ProgressCard";
import Card from "../../elements/Card";
import { Indicator } from "../../elements/Indicator";
import CurriculumMarketAlignment from "../../elements/CurriculumTrendChart";
import type { AlignmentData } from "../../elements/CurriculumTrendChart";
export default function HeiDashboard() {


    const alignmentData: AlignmentData[] = [
        {
            label: "Cloud Computing",

            current: [
                {
                    year: "2026",
                    value: 100,
                },
                {
                    year: "2027",
                    value: 130,
                },
            ],

            forecast: [
                {
                    year: "2028",
                    value: 175,
                },
            ],

            projections: [
                {
                    values: [100, 120, 135],
                },
                {
                    values: [100, 110, 125],
                },
                {
                    values: [100, 105, 115],
                },
            ],
        },

        {
            label: "AI/ML Engineering",

            current: [
                {
                    year: "2026",
                    value: 110,
                },
                {
                    year: "2027",
                    value: 145,
                },
            ],

            forecast: [
                {
                    year: "2028",
                    value: 190,
                },
            ],

            projections: [
                {
                    values: [110, 135, 170],
                },
                {
                    values: [110, 125, 150],
                },
            ],
        },

        {
            label: "Cybersecurity",

            current: [
                {
                    year: "2026",
                    value: 95,
                },
                {
                    year: "2027",
                    value: 125,
                },
            ],

            forecast: [
                {
                    year: "2028",
                    value: 160,
                },
            ],

            projections: [
                {
                    values: [95, 115, 140],
                },
                {
                    values: [95, 108, 125],
                },
            ],
        },
    ];

    const heiData = [
        {
            title: "Avg curriculum - market alignment",
            value: "78%"

        },
        {
            title: "Critical skill gap identified",
            value: "68%"

        },
        {
            title: "Graduate Employee",
            value: "78%"

        },
        {
            title: "New Skills Not in Curriculum",
            value: "9"

        },
    ];


    const CurriculumData = [
        {
            label: "MSc Data Science & AI",
            percentage: 90,
            gradient:
                "bg-[linear-gradient(225deg,#68DBF2_0.01%,#1A62F8_100%)]",
        },
        {
            label: "BSc Electrical Eng",
            percentage: 75,
            gradient:
                "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
        },
        {
            label: "MSc Cybersecurity",
            percentage: 48,
            gradient:
                "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
        },
        {
            label: "BSc Computer Science",
            percentage: 100,
            gradient:
                "bg-[linear-gradient(225deg,#F27868_0.01%,#F55050_100%)]",
        },
    ];

    return (
        <>


            <div className="flex flex-col w-full gap-2 font-inter">

                <HeaderBanner breadcrumb="Dashboard"
                    title="University of Cyprus — Curriculum Alignment Report"
                    description="AI analysis of 4 programs, 127 courses, and 2.4M job market signals reveals a 72% average alignment score. BSc Computer Science shows the highest mismatch risk — 14 critical skill gaps identified."

                />
                <div className="py-5 flex gap-2">
                    <Tag variant="default">Labour market data current</Tag>
                    <Tag variant="default">14 critical gaps across programs</Tag>
                    <Tag variant="info">Last analysed: Today, 08:42</Tag>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {heiData.map((stat) => (
                        <StatCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                        />
                    ))}
                </div>


                <div className="flex w-full flex-col gap-4 xl:flex-row">
                    <ProgressCard
                        title="Curriculum–Market Alignment"
                        items={CurriculumData}
                        desc="By study program"
                    />

                </div>

                <div className="flex w-full flex-col gap-4 xl:flex-row">

                    <Card
                        title="Skills Mismatch Map"
                        description="Gaps, oversupply & emerging"
                        onViewAll={() => { }} >

                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">
                                <h1 className="text-[#12151B] font-medium text-lg">Junior Data Analyst</h1>

                                <Indicator variant="success">High Demand</Indicator>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-[#12151B] font-medium text-lg">MLOps & Model Deployment</h1>

                                <Indicator variant="info">Well Matched</Indicator>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-[#12151B] font-medium text-lg">Java (legacy enterprise)</h1>

                                <Indicator variant="warning">Moderate Gap</Indicator>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-[#12151B] font-medium text-lg">Waterfall Project Mgmt</h1>

                                <Indicator variant="danger">Oversupplied</Indicator>
                            </div>
                        </div>

                    </Card>
                    <Card
                        title="Graduate Employability"
                        description="By study program"
                        onViewAll={() => { }} >

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-row gap-2">
                                <Tag variant="info" size="lg">84%</Tag>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-[#12151B] font-medium text-lg">MSc Data Science & AI</h1>
                                    <h2 className="text-[#5C6472] font-normal text-xs">85 grads</h2>
                                </div>
                            </div>

                            <div className="flex flex-row gap-2">
                                <Tag variant="info" size="lg">75%</Tag>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-[#12151B] font-medium text-lg">BSc Electrical Eng</h1>
                                    <h2 className="text-[#5C6472] font-normal text-xs">210 grads</h2>
                                </div>
                            </div>

                            <div className="flex flex-row gap-2">
                                <Tag variant="info" size="lg">84%</Tag>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-[#12151B] font-medium text-lg">BSc Computer Science</h1>
                                    <h2 className="text-[#5C6472] font-normal text-xs">320 grads</h2>
                                </div>
                            </div>


                        </div>
                    </Card>

                </div>
                <CurriculumMarketAlignment
                    data={alignmentData}
                    defaultActive="Cloud Computing"
                    onViewAll={() => {
                        console.log("View All clicked");
                    }}
                />

            </div >

        </>
    );
}
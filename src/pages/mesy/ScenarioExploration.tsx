import InfoBanner from "../../elements/InfoBanner";
import HeaderBanner from "../../elements/HeaderBanner";
import MiniCard from "../../elements/MiniCard";
import FactBanner from "../../elements/FactBanner";
import { ChevronDown } from "lucide-react";
import BarChart from "../../elements/BarChart";
import DataCard from "../../elements/DataCard";
import type { BarChartGroup } from "../../elements/BarChart";

const scenarioData: BarChartGroup[] = [
    {
        label: "2024",
        values: [
            {
                label: "Low",
                value: 20,
                gradient: "bg-[#D3E2FD]",
                textColor: "text-[#1A62F8]",
            },
            {
                label: "Medium",
                value: 50,
                gradient: "bg-[#7BA8FA]",
                textColor: "text-white",
            },
            {
                label: "High",
                value: 100,
                gradient: "bg-[#4F8BF8]",
                textColor: "text-white",
            },
        ],
    },
    {
        label: "2025",
        values: [
            {
                label: "Low",
                value: 20,
                gradient: "bg-[#D3E2FD]",
                textColor: "text-[#1A62F8]",
            },
            {
                label: "Medium",
                value: 50,
                gradient: "bg-[#7BA8FA]",
                textColor: "text-white",
            },
            {
                label: "High",
                value: 80,
                gradient: "bg-[#4F8BF8]",
                textColor: "text-white",
            },
        ],
    },
    {
        label: "2026",
        values: [
            {
                label: "Low",
                value: 20,
                gradient: "bg-[#D3E2FD]",
                textColor: "text-[#1A62F8]",
            },
            {
                label: "Medium",
                value: 50,
                gradient: "bg-[#7BA8FA]",
                textColor: "text-white",
            },
            {
                label: "High",
                value: 80,
                gradient: "bg-[#4F8BF8]",
                textColor: "text-white",
            },
        ],
    },
    {
        label: "2027",
        values: [
            {
                label: "Low",
                value: 20,
                gradient: "bg-[#D3E2FD]",
                textColor: "text-[#1A62F8]",
            },
            {
                label: "Medium",
                value: 50,
                gradient: "bg-[#7BA8FA]",
                textColor: "text-white",
            },
            {
                label: "High",
                value: 80,
                gradient: "bg-[#4F8BF8]",
                textColor: "text-white",
            },
        ],
    },
    {
        label: "2028",
        values: [
            {
                label: "Low",
                value: 20,
                gradient: "bg-[#D3E2FD]",
                textColor: "text-[#1A62F8]",
            },
            {
                label: "Medium",
                value: 50,
                gradient: "bg-[#7BA8FA]",
                textColor: "text-white",
            },
            {
                label: "High",
                value: 80,
                gradient: "bg-[#4F8BF8]",
                textColor: "text-white",
            },
        ],
    },
];

export default function ScenarioExploration() {
    return (
        <div className="flex flex-col w-full gap-4 font-inter">
            <HeaderBanner
                breadcrumb="Scenario Exploration"
                title="Scenario Exploration"
                description="Model policy investment scenarios · compare outcomes · support evidence-based decision-making"
                buttons={[
                    {
                        text: "Horizon: 3 Years",
                        icon: ChevronDown,
                        variant: "white",
                        onClick: () => console.log("Year clicked"),
                    },
                    {
                        text: "Export Analysis",
                        icon: ChevronDown,
                        variant: "blue",
                        onClick: () => console.log("Export clicked"),
                    },
                ]}
            />

            <InfoBanner
                title="Data limitations — Phase A: "
                info="This module is the most data-dependent — Phase A cannot yet support factual forecasting. Three-year projections and policy impact assessments cannot be validated without time-indexed vacancy or employer demand data. The scenarios below are assumption-based explorations, not validated forecasting outputs. These figures should not be used as the basis for policy decisions or official submissions."
            />

            <FactBanner
                title="How to use this page:"
                info="Use the following scenarios as a starting point for discussion and policy exploration. All parameters are assumption-based. To convert these scenarios into official forecasts, validated time-series vacancy or employer demand data would be required."
            />

            {/* Section: Data required */}
            <div className="pt-2">
                <h2 className="font-medium text-base sm:text-lg text-[#111827] mb-3">
                    Data required before this module can generate validated forecasts
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <MiniCard
                        label="Not Available Yet"
                        value="Time-indexed vacancy data"
                        desc="Required for 3-year demand projections"
                    />
                    <MiniCard
                        label="Not Available Yet"
                        value="Employer demand survey"
                        desc="Required to validate scenario assumptions"
                    />
                    <MiniCard
                        label="Not Available Yet"
                        value="CYGraduates supply pipeline"
                        desc="Used as the basis for supply-side assumptions"
                    />
                </div>
            </div>

            {/* Section: Scenarios */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <DataCard
                    title="Scenario A"
                    description="Current HEI curricula and graduate pipeline maintained. No new government skills investment. Labour market demand continues to grow at current rate."
                    cards={[
                        {
                            value: "−2,460",
                            context: "EICT gap by 2027",
                        },
                        {
                            value: "66%",
                            context: "Employability rate",
                        },
                        {
                            value: "9.8%",
                            context: "Youth NEET by 2027",
                        },
                    ]}
                />
                <DataCard
                    title="Scenario B"
                    description="€4M MESY investment in ICT curriculum expansion across 3 HEIs. 400 additional ICT graduates p.a. from 2026. Aligned to EU co-funding eligibility."
                    cards={[
                        {
                            value: "−2,460",
                            context: "EICT gap by 2027",
                        },
                        {
                            value: "66%",
                            context: "Employability rate",
                        },
                        {
                            value: "9.8%",
                            context: "Youth NEET by 2027",
                        },
                    ]}
                />
                <DataCard
                    title="Scenario C"
                    description="€11.2M investment with full EU Digital Decade co-funding. 900 additional ICT graduates p.a. from 2025. Requires RRF alignment and Commission pre-approval."
                    cards={[
                        {
                            value: "−2,460",
                            context: "EICT gap by 2027",
                        },
                        {
                            value: "66%",
                            context: "Employability rate",
                        },
                        {
                            value: "9.8%",
                            context: "Youth NEET by 2027",
                        },
                    ]}
                />
            </div>

            {/* Section: Bar Chart */}
            <BarChart
                title="ICT Skills Gap Projection — Scenario Comparison"
                data={scenarioData}
                maxValue={100}
            />
        </div>
    );
}

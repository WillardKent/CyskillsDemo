
import HeaderBanner from "../../../elements/HeaderBanner";
import { useState } from "react";
import IndicatorDetail from "../../../components/IndicatorDetail";
import MetricCardGrid from "../../../elements/MetricCardGrid";
import type { MetricCardItem } from "../../../elements/MetricCardGrid";


const indicators: MetricCardItem[] = [
    {
        id: 1,
        title: "Graduate Employability Rate",
        description:
            "Proportion of curriculum learning outcomes mapped to ESCO skill codes.",
        source: "CEDEFOP",
        frequency: "Quarterly",
        lastUpdated: "12 Jun 2025",
        category: "Employability",
        status: "Success",

        definition:
            "Measures the proportion of graduates who successfully transition into employment after graduation.",

        calculationMethod:
            "Calculated using graduate employment data collected from participating higher education institutions.",

        relatedReports: [
            {
                label: "Graduate Study Report — Q2 2025",
                href: "#",
            },
            {
                label: "HEI Employability Benchmark Report",
                href: "#",
            },
        ],
    },

    {
        id: 2,
        title: "ESCO Skill Mapping Coverage",
        description:
            "Proportion of curriculum learning outcomes mapped to ESCO skill codes.",
        source: "CYSTAT",
        frequency: "Quarterly",
        lastUpdated: "08 Jun 2025",
        category: "Skill Mapping",
        status: "Pending Review",

        definition:
            "Percentage of programme learning outcomes with a validated ESCO skill code.",

        calculationMethod:
            "Automated NLP mapping, manually validated by curriculum reviewers.",

        relatedReports: [
            {
                label: "Graduate Study Report — Q2 2025",
                href: "#",
            },
            {
                label: "ICT Skills Gap Benchmark Report",
                href: "#",
            },
        ],
    },

    {
        id: 3,
        title: "Active Labour Market Forecast",
        description:
            "Proportion of curriculum learning outcomes mapped to ESCO skill codes.",
        source: "CYSTAT",
        frequency: "Monthly",
        lastUpdated: "01 Jun 2025",
        category: "Employability",
        status: "Under Review",

        definition:
            "Provides an outlook of expected labour market demand and employment trends.",

        calculationMethod:
            "Generated using labour market datasets and forecasting models.",

        relatedReports: [
            {
                label: "Labour Market Forecast Report",
                href: "#",
            },
        ],
    },
    {
        id: 4,
        title: "Graduate Employability Rate",
        description:
            "Proportion of curriculum learning outcomes mapped to ESCO skill codes.",
        source: "CEDEFOP",
        frequency: "Quarterly",
        lastUpdated: "15 May 2025",
        category: "Employability",
        status: "Success",

        definition:
            "Measures the proportion of graduates who successfully transition into employment after graduation.",

        calculationMethod:
            "Calculated using graduate employment data collected from participating higher education institutions.",

        relatedReports: [
            {
                label: "Graduate Study Report — Q2 2025",
                href: "#",
            },
            {
                label: "HEI Employability Benchmark Report",
                href: "#",
            },
        ],
    },
    {
        id: 5,
        title: "Tertiary Attainment Rate (25–34)",
        description:
            "Proportion of curriculum learning outcomes mapped to ESCO skill codes.",
        source: "CEDEFOP",
        frequency: "Quarterly",
        lastUpdated: "12 Jun 2025",
        category: "Employability",
        status: "Pending Review",

        definition:
            "Percentage of programme learning outcomes with a validated ESCO skill code.",

        calculationMethod:
            "Automated NLP mapping, manually validated by curriculum reviewers.",

        relatedReports: [
            {
                label: "Graduate Study Report — Q2 2025",
                href: "#",
            },
            {
                label: "ICT Skills Gap Benchmark Report",
                href: "#",
            },
        ],
    },
    {
        id: 6,
        title: "District Vacancy Rate",
        description:
            "Proportion of curriculum learning outcomes mapped to ESCO skill codes.",
        source: "CEDEFOP",
        frequency: "Quarterly",
        lastUpdated: "12 Jun 2025",
        category: "Employability",
        status: "Under Review",

        definition:
            "Provides an outlook of expected labour market demand and employment trends.",

        calculationMethod:
            "Generated using labour market datasets and forecasting models.",

        relatedReports: [
            {
                label: "Labour Market Forecast Report",
                href: "#",
            },
        ],
    },
];




export default function OfficialIndicator() {
    const [selectedIndicator, setSelectedIndicator] =
        useState<MetricCardItem | null>(null);
    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="Regional Comparison / Official Indicators"
                    title="Official Indicators"
                    description="The validated reference indicators used across dashboards, benchmarking and official reporting."
                />

                <MetricCardGrid
                    data={indicators}
                    onViewDetail={setSelectedIndicator}
                />
            </div>

            <IndicatorDetail
                item={selectedIndicator}
                onClose={() => setSelectedIndicator(null)}
            />

        </>
    );
}
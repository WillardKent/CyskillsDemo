import ProgramContent from "../../../elements/ProgramContent";

interface SkillgapOversupplyProps {
    onGenerateCurriculum?: () => void;
    onAskAi?: () => void;
}

const graduateOutcomesData = [
    {
        id: "1",
        code: "COHORT-2026",
        title: "Class of 2026",
        status: "info" as const,
        tags: ["85% Employed", "Avg: $86k", "Top: SaaS"],
    },
    {
        id: "2",
        code: "COHORT-2025",
        title: "Class of 2025",
        status: "info" as const,
        tags: ["88% Employed", "Avg: $82.5k", "Top: Fintech"],
    },
    {
        id: "3",
        code: "COHORT-2024",
        title: "Class of 2024",
        status: "info" as const,
        tags: ["91% Employed", "Avg: $79k", "Top: E-commerce"],
    },
    {
        id: "4",
        code: "COHORT-2023",
        title: "Class of 2023",
        status: "warning" as const,
        tags: ["75% Employed", "Avg: $75k", "Market Dip"],
    },
    {
        id: "5",
        code: "COHORT-2022",
        title: "Class of 2022",
        status: "info" as const,
        tags: ["92% Employed", "Avg: $72k", "Top: Healthcare IT"],
    },
    {
        id: "6",
        code: "COHORT-2021",
        title: "Class of 2021",
        status: "danger" as const,
        tags: ["68% Employed", "Avg: $68k", "Pandemic Impact"],
    },
    {
        id: "7",
        code: "COHORT-2020",
        title: "Class of 2020",
        status: "info" as const,
        tags: ["84% Employed", "Avg: $65k", "Top: EdTech"],
    },
    {
        id: "8",
        code: "COHORT-2019",
        title: "Class of 2019",
        status: "info" as const,
        tags: ["90% Employed", "Avg: $64k", "Top: Finance"],
    },
    {
        id: "9",
        code: "COHORT-2018",
        title: "Class of 2018",
        status: "info" as const,
        tags: ["93% Employed", "Avg: $62.5k", "Top: Media"],
    },
];

export default function SkillgapOversupply({ onGenerateCurriculum, onAskAi }: SkillgapOversupplyProps) {
    return (
        <>
            <ProgramContent
                courses={graduateOutcomesData}
                onGenerateCurriculum={onGenerateCurriculum}
                onAskAi={onAskAi}
            />
        </>
    );
}
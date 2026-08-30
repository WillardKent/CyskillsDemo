import ProgramContent from "../../../elements/ProgramContent";

interface AlignmentOverviewProps {
    onGenerateCurriculum?: () => void;
    onAskAi?: () => void;
}

const coursesData = [
    {
        id: "1",
        code: "CS101",
        title: "Algorithms & Data Structures",
        status: "info" as const,
        tags: ["Problem Solving", "Python"],
    },
    {
        id: "2",
        code: "CS101",
        title: "Machine Learning Fundamentals",
        status: "warning" as const,
        tags: ["Missing: MLOps", "Missing: Cloud"],
    },
    {
        id: "3",
        code: "CS225",
        title: "Software Engineering",
        status: "danger" as const,
        tags: ["Waterfall", "Agile"],
    },
    // Row 2
    {
        id: "4",
        code: "CS101",
        title: "Algorithms & Data Structures",
        status: "info" as const,
        tags: ["Problem Solving", "Python"],
    },
    {
        id: "5",
        code: "CS101",
        title: "Machine Learning Fundamentals",
        status: "warning" as const,
        tags: ["Missing: MLOps", "Missing: Cloud"],
    },
    {
        id: "6",
        code: "CS225",
        title: "Software Engineering",
        status: "danger" as const,
        tags: ["Waterfall", "Agile"],
    },
    // Row 3
    {
        id: "7",
        code: "CS101",
        title: "Algorithms & Data Structures",
        status: "info" as const,
        tags: ["Problem Solving", "Python"],
    },
    {
        id: "8",
        code: "CS101",
        title: "Machine Learning Fundamentals",
        status: "warning" as const,
        tags: ["Missing: MLOps", "Missing: Cloud"],
    },
    {
        id: "9",
        code: "CS225",
        title: "Software Engineering",
        status: "danger" as const,
        tags: ["Waterfall", "Agile"],
    },
];

export default function AlignmentOverview({ onGenerateCurriculum, onAskAi }: AlignmentOverviewProps) {
    return (
        <>
            <ProgramContent
                courses={coursesData}
                onGenerateCurriculum={onGenerateCurriculum}
                onAskAi={onAskAi}
            />
        </>
    );
}
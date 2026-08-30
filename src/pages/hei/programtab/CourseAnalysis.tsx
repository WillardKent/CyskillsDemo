import ProgramContent from "../../../elements/ProgramContent";

interface CourseAnalysisProps {
    onGenerateCurriculum?: () => void;
    onAskAi?: () => void;
}

const courseAnalysisData = [
    {
        id: "1",
        code: "CS101",
        title: "Algorithms & Data Structures",
        status: "info" as const,
        tags: ["Pass Rate: 88%", "Rating: 4.5/5"],
    },
    {
        id: "2",
        code: "CS305",
        title: "Machine Learning Fundamentals",
        status: "warning" as const,
        tags: ["Pass Rate: 76%", "Needs Update"],
    },
    {
        id: "3",
        code: "CS225",
        title: "Software Engineering",
        status: "info" as const,
        tags: ["Pass Rate: 94%", "Rating: 4.8/5"],
    },
    {
        id: "4",
        code: "CS350",
        title: "Operating Systems Design",
        status: "danger" as const,
        tags: ["Pass Rate: 65%", "High Drop Rate"],
    },
    {
        id: "5",
        code: "CS150",
        title: "Modern Frontend Web Development",
        status: "info" as const,
        tags: ["Pass Rate: 89%", "Rating: 4.9/5"],
    },
    {
        id: "6",
        code: "CS410",
        title: "Cloud Computing Architectures",
        status: "warning" as const,
        tags: ["Pass Rate: 82%", "Capacity Reached"],
    },
    {
        id: "7",
        code: "CS240",
        title: "Database Management Systems",
        status: "info" as const,
        tags: ["Pass Rate: 85%", "Rating: 4.2/5"],
    },
    {
        id: "8",
        code: "CS455",
        title: "Applied Cybersecurity",
        status: "danger" as const,
        tags: ["Pass Rate: 71%", "Curriculum Outdated"],
    },
    {
        id: "9",
        code: "CS500",
        title: "Generative AI & Prompting",
        status: "info" as const,
        tags: ["Pass Rate: 95%", "New Course"],
    },
];

export default function CourseAnalysis({ onGenerateCurriculum, onAskAi }: CourseAnalysisProps) {
    return (
        <>
            <ProgramContent
                courses={courseAnalysisData}
                onGenerateCurriculum={onGenerateCurriculum}
                onAskAi={onAskAi}
            />
        </>
    );
}
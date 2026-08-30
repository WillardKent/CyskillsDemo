import ProgramContent from "../../../elements/ProgramContent";

interface GraduateOutcomesProps {
    onGenerateCurriculum?: () => void;
    onAskAi?: () => void;
}

const skillgapOversupplyData = [
    {
        id: "1",
        code: "SKL-01",
        title: "MLOps & Model Deployment",
        status: "danger" as const,
        tags: ["High Demand", "Low Supply", "Critical Gap"],
    },
    {
        id: "2",
        code: "SKL-02",
        title: "React, Tailwind & TypeScript",
        status: "info" as const,
        tags: ["High Demand", "Adequate Supply"],
    },
    {
        id: "3",
        code: "SKL-03",
        title: "Waterfall Methodology",
        status: "warning" as const,
        tags: ["Low Demand", "High Supply", "Oversupply"],
    },
    {
        id: "4",
        code: "SKL-04",
        title: "Serverless AWS (Lambda, Route53)",
        status: "danger" as const,
        tags: ["Very High Demand", "Low Supply", "Gap"],
    },
    {
        id: "5",
        code: "SKL-05",
        title: "Manual QA Testing",
        status: "warning" as const,
        tags: ["Low Demand", "High Supply", "Oversupply"],
    },
    {
        id: "6",
        code: "SKL-06",
        title: "Advanced Git & CI/CD",
        status: "danger" as const,
        tags: ["High Demand", "Moderate Supply", "Gap"],
    },
    {
        id: "7",
        code: "SKL-07",
        title: "On-Premise Server Maintenance",
        status: "info" as const,
        tags: ["Low Demand", "Moderate Supply"],
    },
    {
        id: "8",
        code: "SKL-08",
        title: "Cybersecurity Incident Response",
        status: "danger" as const,
        tags: ["High Demand", "Low Supply", "Critical Gap"],
    },
    {
        id: "9",
        code: "SKL-09",
        title: "C/C++ Legacy Maintenance",
        status: "info" as const,
        tags: ["Low Demand", "High Supply", "Oversupply"],
    },
];

export default function GraduateOutcomes({ onGenerateCurriculum, onAskAi }: GraduateOutcomesProps) {
    return (
        <>
            <ProgramContent
                courses={skillgapOversupplyData}
                onGenerateCurriculum={onGenerateCurriculum}
                onAskAi={onAskAi}
            />
        </>
    );
}
import { useState } from "react";
import ModuleRecommendationCard from "../../../elements/ModuleRecommendationCard";
import type { ModuleRecommendation } from "../../../elements/ModuleRecommendationCard";
import CurriculumActionModal from "../../../components/CurriculumActionModal";
import type { CurriculumActionType } from "../../../components/CurriculumActionModal";

const updateCourseRecommendations: ModuleRecommendation[] = [
    {
        id: "update-software-testing",
        title: "Automated QA & TDD (Update 'Software Testing')",
        category: "Software Engineering",
        openings: 532,
        confidence: "High Confidence",
        confidenceVariant: "success",
        description:
            "The current 'Software Testing' module relies heavily on manual testing theory. Updating the syllabus to focus on Test-Driven Development (TDD) and automated end-to-end testing frameworks will better prepare students for modern CI/CD pipelines.",
        tags: [
            { label: "Cypress", variant: "info" },
            { label: "Jest", variant: "info" },
            { label: "TDD", variant: "info" },
            { label: "Playwright", variant: "info" },
        ],
        year: "Year 3",
        ects: "5 ECTS",
        semester: "Semester 2",
        demandSignal: "75%",
    },
    {
        id: "applied-ai-llm",
        title: "Applied AI & Large Language Models (Update 'Machine Learning')",
        category: "Artificial Intelligence",
        openings: 512,
        confidence: "High Confidence",
        confidenceVariant: "success",
        description:
            "The current Machine Learning course focuses heavily on traditional models. Updating the curriculum to include prompt engineering and LLM orchestration frameworks matches the recent 85% surge in NLP roles.",
        tags: [
            { label: "LLMs", variant: "info" },
            { label: "LangChain", variant: "info" },
            { label: "Prompt Engineering", variant: "info" },
            { label: "OpenAI API", variant: "info" },
        ],
        year: "Year 4",
        ects: "5 ECTS",
        semester: "Semester 1",
        demandSignal: "85%",
    }
];

export default function CurriculumUpdateCourse() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalAction, setModalAction] = useState<CurriculumActionType>("accept");
    const [selectedModule, setSelectedModule] = useState<ModuleRecommendation | null>(null);

    const openModal = (action: CurriculumActionType, module: ModuleRecommendation) => {
        setModalAction(action);
        setSelectedModule(module);
        setModalOpen(true);
    };

    const handleConfirm = (action: CurriculumActionType, module: ModuleRecommendation, modifiedData?: any) => {
        console.log(`${action}:`, module, modifiedData);
    };

    return (
        <>
            <div className="space-y-4">
                {updateCourseRecommendations.map((recommendation) => (
                    <ModuleRecommendationCard
                        key={recommendation.id}
                        data={recommendation}
                        onAccept={(m) => openModal("accept", m)}
                        onModify={(m) => openModal("modify", m)}
                        onReject={(m) => openModal("reject", m)}
                    />
                ))}
            </div>

            <CurriculumActionModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                action={modalAction}
                module={selectedModule}
                onConfirm={handleConfirm}
            />
        </>
    );
}
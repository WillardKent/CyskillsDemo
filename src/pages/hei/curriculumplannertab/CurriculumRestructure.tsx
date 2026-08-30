import { useState } from "react";
import ModuleRecommendationCard from "../../../elements/ModuleRecommendationCard";
import type { ModuleRecommendation } from "../../../elements/ModuleRecommendationCard";
import CurriculumActionModal from "../../../components/CurriculumActionModal";
import type { CurriculumActionType } from "../../../components/CurriculumActionModal";

const restructureRecommendations: ModuleRecommendation[] = [
    {
        id: "restructure-algorithms",
        title: "Data Structures & Algorithms (Move to Year 1)",
        category: "Computer Science Core",
        openings: 890,
        confidence: "Medium Confidence",
        confidenceVariant: "warning",
        description:
            "Industry feedback indicates students lack core algorithmic knowledge during Year 2 summer internship interviews. Restructuring the curriculum to bring this 10 ECTS module forward from Year 2 to Year 1 establishes a stronger coding foundation earlier.",
        tags: [
            { label: "Algorithms", variant: "info" },
            { label: "Big O Notation", variant: "info" },
            { label: "Data Structures", variant: "info" },
            { label: "Problem Solving", variant: "info" },
        ],
        year: "Year 1",
        ects: "10 ECTS",
        semester: "Semester 2",
        demandSignal: "95%",
    },
    {
        id: "restructure-capstone",
        title: "Capstone Project (Move to Year 4, Semester 1)",
        category: "Project & Research",
        openings: 950,
        confidence: "High Confidence",
        confidenceVariant: "success",
        description:
            "Moving the Final Year Project from Semester 2 to Semester 1 allows students to showcase completed, complex projects in their portfolios during the peak graduate hiring season (January-March), significantly improving interview callback rates.",
        tags: [
            { label: "Portfolio Building", variant: "info" },
            { label: "Project Management", variant: "info" },
            { label: "System Design", variant: "info" },
        ],
        year: "Year 4",
        ects: "15 ECTS",
        semester: "Semester 1",
        demandSignal: "82%",
    }
];

export default function CurriculumRestructure() {
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
                {restructureRecommendations.map((recommendation) => (
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
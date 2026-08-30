import { useState } from "react";
import ModuleRecommendationCard from "../../../elements/ModuleRecommendationCard";
import type { ModuleRecommendation } from "../../../elements/ModuleRecommendationCard";
import CurriculumActionModal from "../../../components/CurriculumActionModal";
import type { CurriculumActionType } from "../../../components/CurriculumActionModal";

const removeReplaceRecommendations: ModuleRecommendation[] = [
    {
        id: "replace-enterprise-arch",
        title: "Microservices & APIs (Replace 'Enterprise Systems')",
        category: "Backend Development",
        openings: 680,
        confidence: "High Confidence",
        confidenceVariant: "success",
        description:
            "SOAP, XML, and monolithic enterprise architectures are rapidly declining in graduate job requirements. Replacing this outdated module with modern Microservices, RESTful API design, and Node.js will dramatically improve backend skill relevance.",
        tags: [
            { label: "Microservices", variant: "info" },
            { label: "GraphQL", variant: "info" },
            { label: "Node.js", variant: "info" },
            { label: "gRPC", variant: "info" },
        ],
        year: "Year 3",
        ects: "10 ECTS",
        semester: "Semester 1",
        demandSignal: "88%",
    },
    {
        id: "modern-web-arch",
        title: "Modern Web Architectures (Replace 'Web Dev 101')",
        category: "Software Engineering",
        openings: 610,
        confidence: "High Confidence",
        confidenceVariant: "success",
        description:
            "Basic HTML/CSS/JS is no longer sufficient for entry-level frontend roles. The industry heavily demands component-based frameworks and strict typing. Replacing the legacy web dev module with this will boost graduate employability.",
        tags: [
            { label: "React", variant: "info" },
            { label: "TypeScript", variant: "info" },
            { label: "Next.js", variant: "info" },
            { label: "Tailwind CSS", variant: "info" },
        ],
        year: "Year 2",
        ects: "10 ECTS",
        semester: "Semester 1",
        demandSignal: "92%",
    }
];

export default function CurriculumRemoveReplace() {
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
                {removeReplaceRecommendations.map((recommendation) => (
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
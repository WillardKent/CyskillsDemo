import { useState } from "react";
import ModuleRecommendationCard from "../../../elements/ModuleRecommendationCard";
import type { ModuleRecommendation } from "../../../elements/ModuleRecommendationCard";
import CurriculumActionModal from "../../../components/CurriculumActionModal";
import type { CurriculumActionType } from "../../../components/CurriculumActionModal";

const addCourseRecommendations: ModuleRecommendation[] = [
    {
        id: "mlops-engineering",
        title: "MLOps & Model Deployment (New 5 ECTS Module)",
        category: "Artificial Intelligence",
        openings: 410,
        confidence: "High Confidence",
        confidenceVariant: "success",
        description:
            "While students learn to build Machine Learning models, there is no course on deploying and maintaining them in production. Introducing a new MLOps module targets a 65% year-over-year increase in AI engineering roles requiring infrastructure skills.",
        tags: [
            { label: "MLOps", variant: "info" },
            { label: "MLflow", variant: "info" },
            { label: "AWS SageMaker", variant: "info" },
            { label: "Terraform", variant: "info" },
        ],
        year: "Year 4",
        ects: "5 ECTS",
        semester: "Semester 1",
        demandSignal: "81%",
    },
    {
        id: "cloud-devops",
        title: "Cloud Computing & DevOps (New 5 ECTS Module)",
        category: "Data & Analytics",
        openings: 423,
        confidence: "High Confidence",
        confidenceVariant: "success",
        description:
            "No current course covers AWS/Azure or containerisation. This skill appears in 78% of CS graduate job postings. Introducing a dedicated 5 ECTS module in Year 3 would address the gap.",
        tags: [
            { label: "AWS", variant: "info" },
            { label: "Kubernetes", variant: "info" },
            { label: "Docker", variant: "info" },
            { label: "CI/CD", variant: "info" },
        ],
        year: "Year 3",
        ects: "5 ECTS",
        semester: "Semester 1",
        demandSignal: "78%",
    }
];

export default function CurriculumAddCourse() {
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
                {addCourseRecommendations.map((recommendation) => (
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
import { useState } from "react";
import ModuleRecommendationCard from "../../../elements/ModuleRecommendationCard";
import type { ModuleRecommendation } from "../../../elements/ModuleRecommendationCard";
import CurriculumActionModal from "../../../components/CurriculumActionModal";
import type { CurriculumActionType } from "../../../components/CurriculumActionModal";

const recommendations: ModuleRecommendation[] = [
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
    },
    {
        id: "data-engineering",
        title: "Data Engineering Fundamentals (New 5 ECTS Module)",
        category: "Data & Analytics",
        openings: 350,
        confidence: "High Confidence",
        confidenceVariant: "success",
        description:
            "There is increasing demand for data engineering skills across graduate job postings.",
        tags: [
            { label: "Python", variant: "info" },
            { label: "SQL", variant: "info" },
            { label: "ETL", variant: "info" },
        ],
        year: "Year 2",
        ects: "5 ECTS",
        semester: "Semester 2",
        demandSignal: "72%",
    },
    {
        id: "applied-ai-llm",
        title: "Applied AI & Large Language Models (Update Existing Module)",
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
    },
    {
        id: "zero-trust-security",
        title: "Cloud Security & Zero Trust Architecture (New 5 ECTS Module)",
        category: "Cybersecurity",
        openings: 289,
        confidence: "Medium Confidence",
        confidenceVariant: "warning",
        description:
            "Security modules currently focus on local network security. With the enterprise shift to the cloud, integrating Identity and Access Management (IAM) and Zero Trust models aligns with modern security analyst requirements.",
        tags: [
            { label: "Zero Trust", variant: "info" },
            { label: "IAM", variant: "info" },
            { label: "Cloudflare", variant: "info" },
            { label: "Cryptography", variant: "info" },
        ],
        year: "Year 3",
        ects: "5 ECTS",
        semester: "Semester 2",
        demandSignal: "64%",
    },
    {
        id: "modern-web-arch",
        title: "Modern Web Architectures (Replace Web Dev 101)",
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
    },
    {
        id: "agile-product-management",
        title: "Agile Software Product Management (New 5 ECTS Module)",
        category: "Management & Strategy",
        openings: 195,
        confidence: "Low Confidence",
        confidenceVariant: "danger",
        description:
            "While coding is essential, employer feedback notes a gap in agile methodology and product lifecycle understanding. A module focusing on sprints, user story mapping, and CI/CD workflows from a management perspective would bridge this gap.",
        tags: [
            { label: "Agile", variant: "info" },
            { label: "Scrum", variant: "info" },
            { label: "Jira", variant: "info" },
            { label: "Product Lifecycle", variant: "info" },
        ],
        year: "Year 4",
        ects: "5 ECTS",
        semester: "Semester 2",
        demandSignal: "45%",
    },
    {
        id: "mobile-cross-platform",
        title: "Cross-Platform Mobile Development (Elective)",
        category: "Software Engineering",
        openings: 315,
        confidence: "Medium Confidence",
        confidenceVariant: "warning",
        description:
            "Native mobile development demand is stable, but cross-platform frameworks are growing rapidly among startups and mid-sized companies seeking faster time-to-market.",
        tags: [
            { label: "Flutter", variant: "info" },
            { label: "React Native", variant: "info" },
            { label: "Dart", variant: "info" },
            { label: "Mobile UI/UX", variant: "info" },
        ],
        year: "Year 3",
        ects: "5 ECTS",
        semester: "Semester 1",
        demandSignal: "58%",
    }
];

export default function CurriculumAllRecommendation() {
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
                {recommendations.map((recommendation) => (
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
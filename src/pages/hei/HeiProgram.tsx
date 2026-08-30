
import HeaderBanner from "../../elements/HeaderBanner";
import StatCard from "../../elements/StatCard";
import Tabs from "../../elements/Tabs";
import AlignmentOverview from "./programtab/AlignmentOverview";
import CourseAnalysis from "./programtab/CourseAnalysis";
import GraduateOutcomes from "./programtab/GraduateOutcomes";
import SkillgapOversupply from "./programtab/SkillgapOversupply";
import { useState } from "react";
import GenerateCurriculumModal from "../../components/GenerateCurriculumModal";
import type { Page } from "../../config/navigation";

interface HeiProgramProps {
    onNavigate?: (page: Page) => void;
}

export default function HeiProgram({ onNavigate }: HeiProgramProps) {
    const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);

    const programData = [
        {
            title: "Enrolled students",
            value: "320"

        }, {
            title: "240 ECTS",
            value: "4 years"

        },
        {
            title: "Mapped courses",
            value: "127"

        },
        {
            title: "▲ 6% vs. prior year",
            value: "MSc Data Science & AI"

        },
    ];

    const [activeTab, setActiveTab] = useState("alignment-overview");

    const tabs = [
        {
            id: "alignment-overview",
            label: "Alignment Overview",
        },
        {
            id: "course-analysis",
            label: "Course-by-Course Analysis",
        },
        {
            id: "skillgap-oversupply",
            label: "Skills Gaps & Oversupply",
        },
        {
            id: "graduate-outcomes",
            label: "Graduate Outcomes",
        },
    ];

    const handleGenerateCurriculum = () => {
        setIsGenerateModalOpen(true);
    };

    const handleAskAi = () => {
        onNavigate?.("hei-ai-assistant");
    };

    const handleGenerate = (program: string) => {
        console.log("Generate curriculum for:", program);
        onNavigate?.("curriculum-planner");
    };

    return (
        <>
            <div className="flex flex-col w-full gap-2">

                <HeaderBanner breadcrumb="Program"
                    title="BSc Computer Science"
                    description="Explore roles matched to your profile across sectors"
                    buttons={[
                        {
                            text: "Export Plan",
                            variant: "blue",
                            onClick: () => console.log("Year clicked"),
                        }]}
                />


                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {programData.map((stat) => (
                        <StatCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                        />
                    ))}
                </div>


                <Tabs
                    tabs={tabs}
                    value={activeTab}
                    onChange={setActiveTab}
                />

                {activeTab === "alignment-overview" && (
                    <AlignmentOverview
                        onGenerateCurriculum={handleGenerateCurriculum}
                        onAskAi={handleAskAi}
                    />
                )}

                {activeTab === "course-analysis" && (
                    <CourseAnalysis
                        onGenerateCurriculum={handleGenerateCurriculum}
                        onAskAi={handleAskAi}
                    />
                )}

                {activeTab === "skillgap-oversupply" && (
                    <SkillgapOversupply
                        onGenerateCurriculum={handleGenerateCurriculum}
                        onAskAi={handleAskAi}
                    />
                )}

                {activeTab === "graduate-outcomes" && (
                    <GraduateOutcomes
                        onGenerateCurriculum={handleGenerateCurriculum}
                        onAskAi={handleAskAi}
                    />
                )}

            </div >

            <GenerateCurriculumModal
                isOpen={isGenerateModalOpen}
                onClose={() => setIsGenerateModalOpen(false)}
                onGenerate={handleGenerate}
            />
        </>
    );
}
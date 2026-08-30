
import HeaderBanner from "../../elements/HeaderBanner";
import type { LearningPathData } from "../../types/learningPath";
import type { Page } from "../../config/navigation";

interface SkillInsightDetailProps {
    data: LearningPathData | null;
    onNavigate: (page: Page) => void;
}

export default function SkillInsightDetail({ data, onNavigate }: SkillInsightDetailProps) {

    if (!data) {
        return (
            <div className="flex flex-col items-center justify-center gap-4 py-20 font-inter">
                <p className="text-lg text-[#5C6472]">No course selected.</p>
                <button
                    onClick={() => onNavigate("skill-insight")}
                    className="text-sm font-medium text-[#1A62F8] hover:underline"
                >
                    ← Back to Skill Insight
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col w-full gap-4">

                {/* Header */}
                <HeaderBanner
                    breadcrumb={`Skill Insight / ${data.title}`}
                    title={data.title}
                    description={`${data.platform} · ${data.duration} · ${data.purpose}`}
                    buttons={[
                        {
                            text: "Start course",
                            variant: "blue",
                            onClick: () => console.log("Start course clicked"),
                        },
                    ]}
                />

                {/* Course Details Card */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex flex-col gap-2 border border-[#F7F8FA] rounded-lg bg-white p-3">
                        <span className="text-sm font-normal text-[#12151B] font-inter">Provider</span>
                        <span className="text-2xl font-medium text-[#12151B] font-inter">{data.platform}</span>
                    </div>
                    <div className="flex flex-col gap-2 border border-[#F7F8FA] rounded-lg bg-white p-3">
                        <span className="text-sm font-normal text-[#12151B] font-inter">Duration</span>
                        <span className="text-2xl font-medium text-[#12151B] font-inter">{data.duration}</span>
                    </div>
                    <div className="flex flex-col gap-2 border border-[#F7F8FA] rounded-lg bg-white p-3">
                        <span className="text-sm font-normal text-[#12151B] font-inter">Level</span>
                        <span className="text-2xl font-medium text-[#12151B] font-inter">{data.level}</span>
                    </div>
                    <div className="flex flex-col gap-2 border border-[#F7F8FA] rounded-lg bg-white p-3">
                        <span className="text-sm font-normal text-[#12151B] font-inter">Match score gain</span>
                        <span className="text-2xl font-medium text-[#12151B] font-inter">{data.matchScoreGain}</span>
                    </div>
                </div>

                <div className="border border-[#F7F8FA] rounded-lg bg-white">
                    {/* Skills You Already Have */}
                    <div className="flex items-center border-b border-[#F7F8FA]">

                        <span className="text-lg font-medium text-[#12151B] font-inter  px-6 py-5">
                            Skills You Already Have
                        </span>
                    </div>

                    <div className="flex flex-col gap-3 px-5 pb-5">
                        {data.skills.map((skill, index) => (
                            <div key={index} className="border border-[#F7F8FA] rounded-lg p-3">
                                <h1 className="text-base font-medium text-[#12151B] pl-3 border-l-2 border-l-[#1A62F8] font-inter">
                                    {skill}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
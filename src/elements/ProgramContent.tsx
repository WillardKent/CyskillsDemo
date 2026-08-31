import { Tag } from "./Tag";
import type { TagVariant } from "./Tag";
import type { DottedTagVariant } from "./DottedTag";
import { DottedTag } from "./DottedTag";
import Button from "./Button";

type CourseStatus = "info" | "warning" | "danger";

interface Course {
    id: string;
    code: string;
    title: string;
    status: CourseStatus;
    tags: string[];
}

interface ProgramContentProps {
    courses: Course[];
    onGenerateCurriculum?: () => void;
    onAskAi?: () => void;
}

export default function ProgramContent({
    courses,
    onGenerateCurriculum,
    onAskAi,
}: ProgramContentProps) {

    const getCardBorderColor = (status: CourseStatus) => {
        switch (status) {
            case "info":
                return "border-[#EBF0FA]";

            case "warning":
                return "border-[#FCF2E6]";

            case "danger":
                return "border-[#FAF0F3]";

            default:
                return "border-[#EAF1FE]";
        }
    };

    return (
        <div className="min-h-screen font-inter text-[#262C36] px-6 py-5">

            {/* Top Section */}
            <section className="bg-white border border-[#F7F8FA] rounded-lg">

                <div className="border-b border-[#F7F8FA]">
                    <h2 className="text-base min-[401px]:text-lg lg:text-xl font-semibold px-6 py-5">
                        Overview of Alignment
                    </h2>
                </div>

                <div className="flex flex-col gap-8 p-5 md:flex-row">

                    {/* Left */}
                    <div className="flex flex-col items-center gap-4">

                        <div className="flex h-40 w-48 flex-col items-center justify-center rounded-xl border-2 border-[#EAF1FE] p-6 gap-4">

                            <span className="text-2xl md:text-[32px] font-medium text-[#1A62F8]">
                                58%
                            </span>

                            <span className="text-center text-xs text-[#5C6472]">
                                Curriculum–Market
                                <br />
                                Alignment
                            </span>

                        </div>

                        <Tag variant="danger" size="sm">
                            Below target
                        </Tag>

                    </div>

                    {/* Right */}
                    <div className="flex flex-col">

                        <h3 className="text-lg min-[401px]:text-xl lg:text-2xl font-medium text-[#262C36] mb-5">
                            3 systemic gaps driving 42% of employability deficit
                        </h3>

                        <p className="mb-18 text-sm leading-relaxed text-[#5C6472]">
                            This program's core skills gap is concentrated in Cloud
                            platforms, MLOps, and Production AI — skills now standard
                            in 70%+ of CS graduate job ads. Current curriculum
                            over-invests in legacy Java and theoretical algorithms
                            relative to market need.
                        </p>

                        <div className="flex items-center gap-3">

                            <Button
                                text="Generate Curriculum"
                                variant="blue"
                                onClick={onGenerateCurriculum}
                            />

                            <Button
                                text="Ask AI"
                                variant="white"
                                onClick={onAskAi}
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* Bottom Section */}
            <section className="bg-white border border-[#F7F8FA] rounded-lg">

                {/* Header */}
                <div>

                    <div className="border-b border-[#F7F8FA]">

                        <h2 className="mb-2 text-base lg:text-lg font-medium text-[#12151B] px-6 pt-5">
                            Course-Level Alignment Map
                        </h2>

                        <p className="text-sm text-[#5C6472] font-normal px-6 pb-5">
                            Colour-coded by alignment status — click any module to inspect
                        </p>

                    </div>


                    {/* Legend */}
                    <div className="flex items-center gap-6 px-6 py-5">

                        <DottedTag variant="info">
                            Aligned
                        </DottedTag>

                        <DottedTag variant="warning">
                            Partial
                        </DottedTag>

                        <DottedTag variant="danger">
                            Gap
                        </DottedTag>

                    </div>

                </div>


                {/* Course Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-6 pb-6">

                    {courses.map((course) => (

                        <div
                            key={course.id}
                            className={`
                                flex
                                cursor-pointer
                                flex-col
                                gap-3
                                rounded-lg
                                border
                                p-5
                                transition-colors
                                hover:bg-gray-50/50
                                ${getCardBorderColor(course.status)}
                            `}
                        >

                            <DottedTag
                                variant={course.status as DottedTagVariant}
                                size="sm"
                            >
                                <span className="text-xs text-[#5A6376]">
                                    {course.code}
                                </span>
                            </DottedTag>


                            <h4 className="text-sm md:text-base font-medium text-[#262C36]">
                                {course.title}
                            </h4>


                            <div className="flex flex-wrap items-center gap-2 pt-1">

                                {course.tags.map((tag, index) => (

                                    <Tag
                                        key={index}
                                        variant={course.status as TagVariant}
                                        size="sm"
                                    >
                                        {tag}
                                    </Tag>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </div>
    );
}
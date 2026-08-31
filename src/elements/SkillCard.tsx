import ProgressBar from "./ProgressBar";
import { Tag } from "./Tag";

// 1. Define the TypeScript interface for your props
interface SkillCardProps {
    title: string;
    demandText: string;
    userLevelText: string;
    tagLabel: string;
    tagVariant?: "danger" | "success" | "info" | "default";
    marketDemandValue: number;
    userLevelValue: number;
}

// 2. Apply the interface to your component
export default function SkillCard({
    title,
    demandText,
    userLevelText,
    tagLabel,
    tagVariant,
    marketDemandValue,
    userLevelValue
}: SkillCardProps) {
    return (
        <div className="w-full font-inter">
            {/* Header Section with bottom border */}
            <div className="flex justify-between items-start pb-3.5">
                <div className="flex flex-col gap-2.5">
                    <h1 className="text-[#12151B] font-medium text-base min-[401px]:text-lg lg:text-xl">{title}</h1>
                    <h4 className="text-[#5C6472] font-normal text-xs">
                        {demandText} &middot; {userLevelText}
                    </h4>
                </div>
                <div>
                    <Tag variant={tagVariant}>{tagLabel}</Tag>
                </div>
            </div>


            <ProgressBar
                label="Market Demand"
                value={marketDemandValue}
            />
            <ProgressBar
                label="Your Level"
                value={userLevelValue}
            />

        </div>
    );
}
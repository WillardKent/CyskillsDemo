import Button from "./Button";
import { Tag } from "./Tag";

type LearningPathCardButton = {
    text: string;
    variant?: "blue" | "white";
    onClick?: () => void;
};


interface LearningPathCardProps {
    title: string;
    platform?: string;
    duration?: string;
    purpose?: string;
    tagLabel: string;
    tagVariant?: "danger" | "success" | "info" | "default";
    buttons?: LearningPathCardButton[];
}

export default function LearningPathCard({
    title,
    platform,
    duration,
    purpose,
    tagLabel,
    tagVariant,
    buttons,
}: LearningPathCardProps) {
    return (
        <div className="w-full font-inter border border-[#F7F8FA] rounded-lg px-4 py-5">
            {/* Header Section with bottom border */}
            <div className="flex justify-between items-center pb-3.5">
                <div className="flex flex-col gap-2.5">
                    <h1 className="text-[#12151B] font-medium text-base min-[401px]:text-lg lg:text-xl">{title}</h1>
                    <h4 className="text-[#5C6472] font-normal text-xs">
                        {platform} &middot; {duration} &middot; {purpose}
                    </h4>
                </div>
                <div className="item-center">
                    <Tag variant={tagVariant}>{tagLabel}</Tag>
                </div>
            </div>


            {/* Buttons */}
            {buttons && buttons.length > 0 && (
                <div className="flex items-center gap-2">
                    {buttons.map((button, index) => (
                        <Button
                            key={index}
                            text={button.text}
                            variant={button.variant}
                            onClick={button.onClick}
                        />
                    ))}
                </div>
            )}

        </div>
    );
}
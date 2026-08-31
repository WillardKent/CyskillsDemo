import Button from "./Button";
import { Tag } from "./Tag";

type JobCardMiniButton = {
    text: string;
    variant?: "blue" | "white";
    onClick?: () => void;
};


interface JobCardMiniProps {
    title: string;
    location?: string;
    workingSetup?: string;
    rate?: string;
    tagLabel: string;
    tagVariant?: "danger" | "success" | "info" | "default";
    buttons?: JobCardMiniButton[];
}

export default function JobCardMini({
    title,
    location,
    workingSetup,
    rate,
    tagLabel,
    tagVariant,
    buttons,
}: JobCardMiniProps) {
    return (
        <div className="w-full font-inter">
            {/* Header Section with bottom border */}
            <div className="flex justify-between items-center pb-3.5">
                <div className="flex flex-col gap-2.5">
                    <h1 className="text-[#12151B] font-medium text-base min-[401px]:text-lg lg:text-xl">{title}</h1>
                    <h4 className="text-[#5C6472] font-normal text-xs">
                        {location} &middot; {workingSetup}
                    </h4>
                    <h2 className="font-normal text-[#1A62F8] text-sm">{rate}</h2>
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


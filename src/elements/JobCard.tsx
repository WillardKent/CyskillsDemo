import { Tag } from "./Tag";

interface JobCardProps {
    title: string;
    company?: string;
    description?: string;
    tags?: string[];
    tagLabel: string;
    tagVariant?: "danger" | "success" | "info" | "default";
    postedAgo?: string;
    salary?: string;
    onClick?: () => void;
}

export default function JobCard({
    title,
    company,
    description,
    tags,
    tagLabel,
    tagVariant,
    postedAgo,
    salary,
    onClick,
}: JobCardProps) {
    return (
        <div
            onClick={onClick}
            className="w-full bg-white font-inter border border-[#F7F8FA] rounded-lg p-5 cursor-pointer hover:border-[#C5D4F8] transition-colors"
        >
            {/* Header */}
            <div className="flex justify-between items-start pb-3">
                <div className="flex flex-col gap-1">
                    <h1 className="text-[#12151B] font-medium text-base lg:text-lg">{title}</h1>
                    <h4 className="text-[#5C6472] font-normal text-xs">{company}</h4>
                </div>
                <Tag variant={tagVariant}>{tagLabel}</Tag>
            </div>

            {/* Description */}
            {description && (
                <p className="text-[#262C36] text-sm font-normal leading-5 py-6">
                    {description}
                </p>
            )}

            {/* Tags */}
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pb-3">
                    {tags.map((tag, index) => (
                        <Tag key={index} variant="info">{tag}</Tag>
                    ))}
                </div>
            )}

            {/* Footer */}
            <div className="flex justify-between items-center pt-2 border-t border-[#F7F8FA]">
                {postedAgo && (
                    <span className="text-[#5C6472] text-xs font-normal">
                        {postedAgo}
                    </span>
                )}
                {salary && (
                    <span className="text-[#000000] text-base lg:text-lg font-medium">
                        {salary} <span className="text-[#5C6472] font-normal text-xs">/Year</span>
                    </span>
                )}
            </div>
        </div>
    );
}
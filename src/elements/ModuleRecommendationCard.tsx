import Button from "./Button";
import { Tag } from "./Tag";

export type ModuleTag = {
    label: string;
    variant?: "success" | "danger" | "warning" | "info" | "default";
};

export interface ModuleRecommendation {
    id: string;

    title: string;
    category: string;
    openings: number;

    confidence: string;
    confidenceVariant?: "success" | "danger" | "warning" | "info" | "default";

    description: string;

    tags: ModuleTag[];

    year: string;
    ects: string;
    semester: string;

    demandSignal: string;
}

interface ModuleRecommendationCardProps {
    data: ModuleRecommendation;

    onAccept?: (data: ModuleRecommendation) => void;
    onModify?: (data: ModuleRecommendation) => void;
    onReject?: (data: ModuleRecommendation) => void;
}

export default function ModuleRecommendationCard({
    data,
    onAccept,
    onModify,
    onReject,
}: ModuleRecommendationCardProps) {
    return (
        <div className="w-full rounded-lg border border-[#F7F8FA] bg-white font-inter shadow-sm">
            {/* Header */}
            <div className="flex items-start justify-between px-6 py-5">
                <div>
                    <h1 className="text-base lg:text-lg font-medium text[#12151B]]">
                        {data.title}
                    </h1>

                    <p className="mt-2 text-xs font-normal text-[#5C6472]">
                        {data.category} · {data.openings} openings
                    </p>
                </div>

                <Tag
                    variant={data.confidenceVariant || "success"}
                >
                    {data.confidence}
                </Tag>
            </div>

            {/* Divider */}
            <div className="border-t border-[#F7F8FA]" />

            {/* Content */}
            <div className="px-6 py-5">
                {/* Description */}
                <p className="text-sm leading-relaxed text-[#262C36]">
                    {data.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {data.tags.map((tag, index) => (
                        <Tag
                            key={`${tag.label}-${index}`}
                            variant={tag.variant || "info"}
                        >
                            {tag.label}
                        </Tag>
                    ))}
                </div>

                {/* Module Details */}
                <div className="mt-4 flex flex-wrap items-center gap-x-32 gap-y-2">
                    <span className="text-xs font-medium text-[#414957]">
                        {data.year} · {data.ects} · {data.semester}
                    </span>

                    <span className="text-xs font-medium text-[#414957]">
                        Demand signal: {data.demandSignal}
                    </span>
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-2">
                    <Button
                        text="Accept and plan"
                        variant="blue"
                        onClick={() => onAccept?.(data)}
                    />

                    <Button
                        text="Modify"
                        variant="white"
                        onClick={() => onModify?.(data)}
                    />

                    <Button
                        text="Reject"
                        variant="red"
                        onClick={() => onReject?.(data)}
                    />
                </div>
            </div>
        </div>
    );
}
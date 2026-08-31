import type { ReactNode } from "react";
import MiniCard from "./MiniCard";
import Button from "./Button";
import { type LucideIcon } from "lucide-react";


type DataCardButton = {
    text: string;
    icon?: LucideIcon;
    variant?: "blue" | "white";
    onClick?: () => void;
};

type DataCardItem = {
    value: string;
    context: string;
    variant?: "default" | "warning";
};

type DataCardProps = {
    title: string;

    description?: string;

    tags?: ReactNode;

    cards?: DataCardItem[];

    buttons?: DataCardButton[];

    children?: ReactNode;
};

export default function DataCard({
    title,
    description,
    tags,
    cards,
    buttons,
    children,
}: DataCardProps) {
    return (
        <div className="flex w-full flex-col rounded-lg border border-[#F7F8FA] bg-white">
            {/* Header */}
            <div className="border-b border-[#F7F8FA] px-6 py-5">
                <h2 className="text-base lg:text-lg font-semibold text-[#12151B]">
                    {title}
                </h2>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5 px-6 py-5">
                {/* Description */}
                {description && (
                    <p className="text-sm font-normal leading-6 text-[#262C36]">
                        {description}
                    </p>
                )}

                {/* Tags */}
                {tags && (
                    <div className="flex flex-wrap gap-2">
                        {tags}
                    </div>
                )}

                {/* Mini Cards */}
                {cards && cards.length > 0 && (
                    <div
                        className={`grid gap-3 ${cards.length === 1
                            ? "grid-cols-1"
                            : cards.length === 2
                                ? "grid-cols-1 sm:grid-cols-2"
                                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                            }`}
                    >
                        {cards.map((card, index) => (
                            <MiniCard
                                key={`${card.value}-${index}`}
                                value={card.value}
                                desc={card.context}
                                variant={card.variant}
                            />
                        ))}
                    </div>
                )}

                {/* Custom content */}
                {children}

                {/* Buttons */}
                {buttons && buttons.length > 0 && (
                    <div className="flex items-center gap-2 mt-3">
                        {buttons.map((button, index) => (
                            <Button
                                key={index}
                                text={button.text}
                                icon={button.icon}
                                variant={button.variant}
                                onClick={button.onClick}
                            />
                        ))}
                    </div>
                )}
            </div>


        </div>
    );
}
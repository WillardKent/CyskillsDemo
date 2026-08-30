import Button from "./Button";
import { type LucideIcon } from "lucide-react";

type HeaderButton = {
    text: string;
    icon?: LucideIcon;
    variant?: "blue" | "white" | "text" | "red";
    onClick?: () => void;
};

type HeaderBannerProps = {
    breadcrumb: string;
    title: string;
    description?: string;
    buttons?: HeaderButton[];
};

export default function HeaderBanner({
    breadcrumb,
    title,
    description,
    buttons,
}: HeaderBannerProps) {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between w-full">
            {/* Header Content */}
            <div className="flex flex-col gap-1.5 font-inter max-w-3xl">
                {breadcrumb && (
                    <span className="text-xs sm:text-sm font-normal text-[#5C6472]">
                        {breadcrumb}
                    </span>
                )}

                <h1 className="text-2xl sm:text-3xl font-semibold text-[#12151B] tracking-tight">
                    {title}
                </h1>

                {description && (
                    <p className="text-xs sm:text-sm font-normal text-[#414957] leading-relaxed">
                        {description}
                    </p>
                )}
            </div>

            {/* Buttons */}
            {buttons && buttons.length > 0 && (
                <div
                    className={`w-full sm:w-auto shrink-0 ${
                        buttons.length === 1
                            ? "flex"
                            : buttons.length === 2
                            ? "grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-2.5"
                            : "flex flex-wrap items-center gap-2.5"
                    }`}
                >
                    {buttons.map((button, index) => (
                        <Button
                            key={index}
                            text={button.text}
                            icon={button.icon}
                            variant={button.variant}
                            onClick={button.onClick}
                            className="w-full sm:w-auto"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
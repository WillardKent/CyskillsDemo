import Button from "./Button";
import { type LucideIcon } from "lucide-react";

type HeaderButton = {
    text: string;
    icon?: LucideIcon;
    variant?: "blue" | "white";
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
        <div className="flex flex-row justify-between">
            {/* Header Content */}
            <div className="flex flex-col gap-1 font-inter">
                <span className="text-xs font-medium text-[#7E8694]">
                    {breadcrumb}
                </span>

                <h1 className="text-3xl font-semibold text-[#262C36]">
                    {title}
                </h1>

                <span className="text-sm font-normal text-[#414957]">
                    {description}
                </span>
            </div>

            {/* Buttons */}
            {buttons && buttons.length > 0 && (
                <div className="flex items-center gap-2">
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
    );
}
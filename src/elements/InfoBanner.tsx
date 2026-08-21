import Button from "./Button";
import { type LucideIcon } from "lucide-react";

type InfoBannerButton = {
    text: string;
    icon?: LucideIcon;
    variant?: "blue" | "white";
    onClick?: () => void;
};

type InfoBannerProps = {
    notif?: string,
    title?: string,
    info?: string
    buttons?: InfoBannerButton[];
};

export default function InfoBanner({
    notif,
    title,
    info,
    buttons
}: InfoBannerProps) {

    return (
        <>
            <div className="flex w-full items-start gap-3 border border-[#F7F8FA] rounded-lg bg-linear-to-r from-white to-[#4F8BF8]/10 p-3">
                <div className="flex size-5 shrink-0 items-center justify-center rounded-md bg-[#1A62F8] font-inter text-xs font-medium text-white">
                    i
                </div>

                <div className="font-inter text-sm leading-4 mr-2">
                    <span className="block font-normal text-[#414957]">
                        {notif}
                    </span>
                    <span className=" font-medium text-[#262C36]">
                        {title}
                    </span>

                    <span className="font-normal text-[#414957]">
                        {info}
                    </span>

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
        </>
    );
}
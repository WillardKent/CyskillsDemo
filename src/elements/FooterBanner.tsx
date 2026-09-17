import type { ReactNode } from "react";

type FooterBannerProps = {
    children: ReactNode;
};

export default function FooterBanner({
    children,
}: FooterBannerProps) {
    return (
        <div className="flex w-full bg-white border border-[#F7F8FA] rounded-lg p-4">
            <div className="font-inter font-medium text-sm text-[#262C36]">
                {children}
            </div>
        </div>
    );
}
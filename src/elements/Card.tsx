import type { ReactNode } from "react";
import { MoveRight } from "lucide-react";

type CardProps = {
    title: string;
    description?: string;
    children: ReactNode;
    footer?: ReactNode;
    maxWidth?: string;
    // New props for the reusable header button
    onViewAll?: () => void;
    viewAllText?: string;
};

export default function Card({
    title,
    description,
    children,
    footer,
    onViewAll,
    viewAllText = "View All",
}: CardProps) {
    return (
        <div className="flex w-full flex-col rounded-lg border border-[#F7F8FA] bg-white">
            {/* Header */}
            <div className="flex h-24 w-full items-center justify-between border-b border-[#F7F8FA] px-6">
                <div className="flex w-2/3 flex-col justify-center gap-2.5">
                    <span className="block font-inter text-lg font-medium text-[#12151B]">
                        {title}
                    </span>

                    {description && (
                        <span className="block font-inter text-xs font-normal text-[#5C6472]">
                            {description}
                        </span>
                    )}
                </div>

                {/* Render button conditionally if onViewAll action is provided */}
                {onViewAll && (
                    <button
                        onClick={onViewAll}
                        className="flex items-center gap-3 rounded-md px-5 py-2 transition-colors hover:bg-gray-50 active:bg-gray-100"
                    >
                        <span className="font-inter text-xs font-medium text-[#414957]">
                            {viewAllText}
                        </span>

                        <MoveRight
                            className="h-5 w-6 text-[#414957]"
                            strokeWidth={1}
                        />
                    </button>
                )}
            </div>

            {/* Progress Rows */}
            <div className="flex flex-col"></div>

            {/* Content */}
            <div className="px-7 py-6">
                {children}
            </div>

            {/* Footer */}
            {footer && (
                <div className="flex items-center justify-end gap-3 border-t border-gray-100 bg-gray-50 px-7 py-5">
                    {footer}
                </div>
            )}
        </div>
    );
}
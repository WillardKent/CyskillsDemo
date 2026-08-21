import type { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string;
    change?: string;
    source: string;
    icon: LucideIcon;
    iconColor?: string;
    changeColor?: string;
}

export default function StatCard({
    title,
    value,
    change,
    source,
    icon: Icon,
    iconColor = "text-[#1A62F8]",
    changeColor = "text-[#1A62F8]",
}: StatCardProps) {
    return (
        <div className="flex h-37.5 w-full flex-col justify-between rounded-lg border border-[#F7F8FA] bg-white p-4">

            {/* Header */}
            <div className="flex items-center justify-between gap-3">
                <span className="font-inter text-sm font-normal text-[#12151B]">
                    {title}
                </span>

                <div className="shrink-0 rounded-sm border border-[#EFF5FF] bg-[#F7F8FA] p-2">
                    <Icon className={`size-4 ${iconColor}`} />
                </div>
            </div>

            {/* Value */}
            <div className="flex items-end gap-2">
                <span className="font-inter text-2xl font-medium text-[#12151B]">
                    {value}
                </span>

                <span
                    className={`font-inter text-xs font-medium ${changeColor}`}
                >
                    {change}
                </span>
            </div>

            {/* Source */}
            <span className="font-inter text-xs font-normal text-[#5C6472]">
                {source}
            </span>
        </div>
    );
}
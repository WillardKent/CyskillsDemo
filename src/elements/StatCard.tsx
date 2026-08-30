import type { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string;
    change?: string;
    desc?: string;
    icon?: LucideIcon;
    iconColor?: string;
    changeColor?: string;
}

export default function StatCard({
    title,
    value,
    change,
    desc,
    icon: Icon,
    iconColor = "text-[#1A62F8]",
    changeColor = "text-[#1A62F8]",
}: StatCardProps) {
    return (
        <div className="flex h-auto w-full flex-col rounded-lg border border-[#F7F8FA] bg-white p-4 gap-2">

            {/* Header */}
            <div className="flex items-center justify-between gap-3 mb-3">
                <span className="font-inter text-sm font-normal text-[#12151B]">
                    {title}
                </span>

                {/* Conditional rendering: Only output this div if an icon was provided */}
                {Icon && (
                    <div className="shrink-0 rounded-sm border border-[#EFF5FF] bg-[#F7F8FA] p-2">
                        <Icon className={`size-4 ${iconColor}`} />
                    </div>
                )}
            </div>

            {/* Value */}
            <div className="flex items-end gap-2">
                <span className="font-inter text-2xl font-medium text-[#12151B]">
                    {value}
                </span>

                {/* You might want to do the same for 'change' if you don't want empty spans */}
                {change && (
                    <span
                        className={`font-inter text-xs font-medium ${changeColor}`}
                    >
                        {change}
                    </span>
                )}
            </div>

            {/* Source */}
            <span className="font-inter text-xs font-normal text-[#5C6472]">
                {desc}
            </span>
        </div>
    );
}
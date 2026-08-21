import { MoveRight } from "lucide-react";

type ProgressItem = {
    label: string;
    percentage: number;
    gradient: string;
};

type ProgressCardProps = {
    title: string;
    items: ProgressItem[];
};

export default function ProgressCard({
    title,
    items,
}: ProgressCardProps) {
    return (
        <div className="flex w-full flex-col rounded-lg border border-[#F7F8FA] bg-white">

            {/* Header */}
            <div className="flex w-full items-center justify-between px-6 py-5">
                <span className="font-inter text-lg font-medium text-[#12151B]">
                    {title}
                </span>

                <button className="flex items-center gap-3 px-5 py-2">
                    <span className="font-inter text-xs font-medium text-[#414957]">
                        View All
                    </span>

                    <MoveRight
                        className="h-5 w-6"
                        strokeWidth={1}
                    />
                </button>
            </div>

            {/* Progress Rows */}
            <div className="flex flex-col">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="grid w-full grid-cols-4 items-center gap-6 px-6 py-5"
                    >
                        {/* Label */}
                        <span className="col-span-1 min-w-0 font-inter text-sm font-semibold text-[#12151B]">
                            {item.label}
                        </span>

                        {/* Progress */}
                        <div className="col-span-3 flex items-center gap-3">
                            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                                <div
                                    className={`h-full rounded-full ${item.gradient}`}
                                    style={{
                                        width: `${item.percentage}%`,
                                    }}
                                />
                            </div>

                            <span className="shrink-0 font-inter text-sm font-normal text-[#414957]">
                                {item.percentage}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
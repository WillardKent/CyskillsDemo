export type BarChartItem = {
    label: string;
    value: number;
    gradient?: string;
    textColor?: string;
};

export type BarChartGroup = {
    label: string;
    values: BarChartItem[];
};

interface BarChartProps {
    title?: string;
    data: BarChartGroup[];
    maxValue?: number;
}

export default function BarChart({
    title,
    data,
    maxValue,
}: BarChartProps) {
    const highestValue = Math.max(
        ...data.flatMap((group) =>
            group.values.map((item) => item.value)
        ),
        0
    );

    const chartMax = maxValue ?? highestValue;

    return (
        <div className="w-full rounded-lg border border-[#F7F8FA] bg-white font-inter">
            {/* Title */}
            {title && (
                <div className="border-b border-[#F7F8FA] px-4 sm:px-6 py-4 sm:py-5">
                    <h2 className="text-base sm:text-lg font-medium text-[#111827]">
                        {title}
                    </h2>
                </div>
            )}

            {/* Chart */}
            <div className="px-4 sm:px-6 py-6">
                <div className="flex flex-col items-center gap-10 md:flex-row md:items-end md:justify-around w-full">
                    {data.map((group) => (
                        <div
                            key={group.label}
                            className="flex flex-col items-center w-full max-w-[240px] md:max-w-none md:flex-1"
                        >
                            {/* Bars */}
                            <div className="flex items-end justify-center gap-2 sm:gap-3 w-full">
                                {group.values.map((item) => {
                                    const percentage =
                                        chartMax > 0
                                            ? (item.value / chartMax) * 100
                                            : 0;

                                    return (
                                        <div
                                            key={item.label}
                                            className="flex h-48 sm:h-60 w-12 sm:w-14 items-end"
                                        >
                                            <div
                                                className={`flex w-full items-start justify-center rounded-t-lg pt-3 transition-all duration-300 ${item.gradient ?? "bg-[#4F7FD1]"}`}
                                                style={{
                                                    height: `${Math.min(
                                                        Math.max(
                                                            percentage,
                                                            0
                                                        ),
                                                        100
                                                    )}%`,
                                                }}
                                            >
                                                <span
                                                    className={`text-xs sm:text-sm font-medium ${item.textColor ?? "text-white"}`}
                                                >
                                                    {item.value}%
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Year */}
                            <div className="flex justify-center mt-3">
                                <span className="text-sm font-medium text-[#464855]">
                                    {group.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
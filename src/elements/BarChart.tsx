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
    maxValue
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
                <div className="border-b border-[#F7F8FA] px-6 py-5">
                    <h2 className="text-lg font-medium text-[#111827]">
                        {title}
                    </h2>
                </div>
            )}

            {/* Chart */}
            <div className="px-6 py-5">
                <div className="flex w-full ">
                    {data.map((group) => (
                        <div
                            key={group.label}
                            className="flex flex-1 flex-col items-start"
                        >
                            {/* Bars */}
                            <div
                                className="flex items-start justify-start gap-2"

                            >
                                {group.values.map((item) => {
                                    const percentage =
                                        chartMax > 0
                                            ? (item.value / chartMax) * 100
                                            : 0;

                                    return (
                                        <div
                                            key={item.label}
                                            className="flex h-64 w-15 items-end"
                                        >
                                            <div
                                                className={`flex w-full items-start justify-center rounded-t-lg pt-3 ${item.gradient ?? "bg-[#4F7FD1]"}`}
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
                                                    className={`text-sm font-medium ${item.textColor ??
                                                        "text-white"
                                                        }`}
                                                >
                                                    {item.value}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Year */}
                            <div className="flex w-49 justify-center">
                                <span className="mt-2 text-sm font-medium text-[#464855]">
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
import React from "react";

interface ProgressBarProps {
    value: number;
    label?: React.ReactNode;
    colorClass?: string;

    // Custom text on the right
    endLabel?: React.ReactNode;

    // Optional styling adjustments
    labelWidth?: string;
    barHeight?: string;

    // When true, the bar stretches to fill available width (even without a label)
    fullWidth?: boolean;
}

export default function ProgressBar({
    value,

    label,
    colorClass = "bg-linear-to-r from-[#1A62F8] to-[#68DBF2]",
    endLabel,
    labelWidth = "w-32",
    barHeight = "h-2.5",
    fullWidth = false,
}: ProgressBarProps) {

    const clampedValue = Math.min(Math.max(value, 0), 100);

    if (label) {
        return (
            <div className="flex w-full items-center gap-4 py-3">
                {/* Label */}
                <span
                    className={`${labelWidth} shrink-0 font-inter text-sm font-medium text-[#414957]`}
                >
                    {label}
                </span>

                {/* Progress bar */}
                <div
                    className={`${barHeight} flex-1 overflow-hidden rounded-full bg-[#E8EDF5]`}
                >
                    <div
                        className={`h-full rounded-full ${colorClass}`}
                        style={{
                            width: `${clampedValue}%`,
                        }}
                    />
                </div>

                {/* Right value */}
                <span className="w-12 shrink-0 text-right font-inter text-sm font-normal text-[#5B6472]">
                    {endLabel ?? `${clampedValue}%`}
                </span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2">
            <div
                className={`${barHeight} ${fullWidth ? "flex-1" : "w-36"} overflow-hidden rounded-full bg-[#E8EDF5]`}
            >
                <div
                    className={`h-full rounded-full ${colorClass}`}
                    style={{
                        width: `${clampedValue}%`,
                    }}
                />
            </div>

            <span className="text-xs font-medium text-[#464855]">
                {endLabel ?? `${clampedValue}%`}
            </span>
        </div>
    );
}
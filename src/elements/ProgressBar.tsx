interface ProgressBarProps {
    value: number;
}

export default function ProgressBar({
    value,
}: ProgressBarProps) {
    return (
        <div className="flex items-center gap-2">
            <div className="h-2 w-36 overflow-hidden rounded-full bg-[#E8EDF5]">
                <div
                    className="h-full rounded-full bg-linear-to-r from-[#F08A45] to-[#F5C55D]"
                    style={{
                        width: `${Math.min(Math.max(value, 0), 100)}%`,
                    }}
                />
            </div>

            <span className="text-xs font-medium text-[#464855]">
                {value}%
            </span>
        </div>
    );
}
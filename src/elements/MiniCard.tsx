type MiniCardProps = {
    label?: string;
    value: string;
    desc?: string;
    variant?: "default" | "warning";
    valueClassName?: string; // Allows overriding font sizes (e.g., for large numbers)
};

export default function MiniCard({
    label,
    value,
    desc,
    variant = "default",
    valueClassName = "",
}: MiniCardProps) {
    const styles = {
        default: {
            label: "text-[#5C6472]",
            value: "text-[#12151B]",
            desc: "text-[#5C6472]",
            backg: "bg-white"
        },
        warning: {
            label: "text-[#8C5300]",
            value: "text-[#8C5300]",
            desc: "text-[#8C5300]",
            backg: "bg-[#FFFCF8]"
        },
    };

    return (
        <div className={`flex min-h-26 flex-1 flex-col justify-center rounded-lg gap-2 font-inter border border-[#F7F8FA] px-5 py-4 ${styles[variant].backg}`}>

            {/* Renders only if a label is provided */}
            {label && (
                <p className={`text-xs font-normal ${styles[variant].label}`}>
                    {label}
                </p>
            )}

            {/* Main Title / Metric */}
            <p className={`text-sm md:text-base font-semibold ${styles[variant].value} ${valueClassName}`}>
                {value}
            </p>

            {/* Renders only if a description is provided */}
            {desc && (
                <p className={`text-xs font-normal ${styles[variant].desc}`}>
                    {desc}
                </p>
            )}
        </div>
    );
}
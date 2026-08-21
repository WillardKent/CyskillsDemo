type MiniCardProps = {
    label?: string;
    value: string;
    desc?: string,
    variant?: "default" | "warning";
};

export default function MiniCard({
    label,
    value,
    desc,
    variant = "default",
}: MiniCardProps) {
    const valueStyles = {
        default: {
            label: "text-[#5C6472]",
            value: "text-[#12151B]",
            backg: "bg-white"
        },
        warning: {
            label: "text-[#8C5300]",
            value: "text-[#8C5300]",
            backg: "bg-[#FFFCF8]"
        },
    };

    return (
        <div className={`flex min-h-26 flex-1 flex-col justify-center rounded-lg gap-2 font-inter border  border-[#F7F8FA] px-5 py-4 ${valueStyles[variant].backg}`}>
            <p className={` text-xs font-normal ${valueStyles[variant].label}`}>
                {label}
            </p>

            <p
                className={`text-base font-semibold ${valueStyles[variant].value}`}
            >
                {value}
            </p>

            <p className={` text-xs font-normal ${valueStyles[variant].label}`}>
                {desc}
            </p>
        </div>
    );
}
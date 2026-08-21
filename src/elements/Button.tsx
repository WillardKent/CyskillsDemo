import { type LucideIcon } from "lucide-react";

type ButtonProps = {
    text: string;
    icon?: LucideIcon;
    disabled?: boolean;
    onClick?: () => void;
    variant?: "blue" | "white";
};

export default function Button({
    text,
    icon: Icon,
    disabled,
    onClick,
    variant = "blue",
}: ButtonProps) {
    const variants = {
        blue: `
        bg-[#1A62F8]
        text-white
        border border-[#1A62F8]
        hover:bg-blue-700
    `,
        white: `
        bg-white
        text-[#262C36]
        border border-[#E1E4E9]
        hover:bg-gray-50
    `,
    };

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center gap-2 rounded-sm px-3 py-2 font-inter text-xs font-medium ${variants[variant]} disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:hover:bg-inherit`}
        >
            <span>{text}</span>

            {Icon && <Icon className="h-4 w-4" />}
        </button>
    );
}
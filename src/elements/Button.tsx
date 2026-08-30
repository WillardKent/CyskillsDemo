import { type LucideIcon } from "lucide-react";

type ButtonProps = {
    text: string;
    icon?: LucideIcon;
    disabled?: boolean;
    onClick?: () => void;
    variant?: "blue" | "white" | "text" | "red";
    className?: string;
};

export default function Button({
    text,
    icon: Icon,
    disabled,
    onClick,
    variant = "blue",
    className = "",
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
        text: `
            bg-transparent
            text-[#262C36]
            border-none
            underline
            underline-offset-2
            hover:text-blue-700
            px-0
            py-0 
        `,
        red: `
            bg-transparent
            text-[#FF4B4B]
            border-none
            hover:text-red-700
        `,
    };

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`
                inline-flex items-center justify-center gap-1.5 sm:gap-2
                h-9 sm:h-10 px-3 sm:px-4 py-1.5 sm:py-2
                rounded-md sm:rounded-lg
                font-inter text-xs sm:text-sm font-medium whitespace-nowrap transition-colors
                ${variants[variant]}
                disabled:cursor-not-allowed
                disabled:opacity-50
                cursor-pointer
                ${className}
            `}
        >
            <span className="truncate">{text}</span>
            {Icon && <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />}
        </button>
    );
}
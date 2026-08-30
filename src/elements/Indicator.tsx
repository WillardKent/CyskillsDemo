import React from "react";
import type { ReactNode } from "react";
import {
    ArrowUp,
    ArrowDown,
    Equal,
    TriangleAlert,
    type LucideIcon,
} from "lucide-react";

export type TagVariant =
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "default";

export type IndicatorSize = "sm" | "md" | "lg";

export interface IndicatorProps {
    children: ReactNode;
    variant?: TagVariant;
    size?: IndicatorSize;
    className?: string;
}

export const Indicator: React.FC<IndicatorProps> = ({
    children,
    variant = "default",
    size = "sm",
    className = "",
}) => {
    const baseStyles =
        "inline-flex items-center justify-center gap-1.5 rounded-[5px] font-inter font-normal w-fit";

    const variantStyles: Record<TagVariant, string> = {
        success: "border-[#6ED393] text-[#14804A]",
        danger: "border-[#EF7E88] text-[#D12953]",
        info: "border-[#AFC4F5] text-[#2264E5]",
        warning: "border-[#F2C98D] text-[#AA5B00]",
        default: "border-[#D5DAE5] text-[#5A6376]",
    };

    const sizeStyles: Record<IndicatorSize, string> = {
        sm: "px-2.5 py-1 text-xs",
        md: "px-2.5 py-1.5 text-base",
        lg: "px-3 py-2 text-xl",
    };

    const iconSizes: Record<IndicatorSize, number> = {
        sm: 14,
        md: 18,
        lg: 22,
    };

    const variantIcons: Record<TagVariant, LucideIcon> = {
        success: ArrowUp,
        danger: ArrowDown,
        warning: TriangleAlert,
        info: Equal,
        default: Equal,
    };

    const Icon = variantIcons[variant];

    return (
        <span
            className={`bg-white border ${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        >


            {children}
            <Icon size={iconSizes[size]} strokeWidth={2} />
        </span>
    );
};
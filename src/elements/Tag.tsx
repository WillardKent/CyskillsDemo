import React from "react";
import type { ReactNode } from "react";

export type TagVariant =
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "default";

export type TagSize = "sm" | "md" | "lg";

export interface TagProps {
    children: ReactNode;
    variant?: TagVariant;
    size?: TagSize;
    className?: string;
}

export const Tag: React.FC<TagProps> = ({
    children,
    variant = "default",
    size = "sm",
    className = "",
}) => {
    const baseStyles =
        "inline-flex items-center justify-center rounded-[5px] font-inter w-fit";

    const variantStyles: Record<TagVariant, string> = {
        success: "bg-[#E1FCEF] text-[#14804A]",
        danger: "bg-[#FAF0F3] text-[#D12953]",
        info: "bg-[#EBF0FA] text-[#2264E5]",
        warning: "bg-[#FCF2E6] text-[#AA5B00]",
        default: "bg-[#E9EDF5] text-[#5A6376]",
    };

    const sizeStyles: Record<TagSize, string> = {

        sm: "px-2.5 py-1 text-xs font-normal",
        md: "px-2.5 py-1.5 text-base font-normal",
        lg: "p-2.5 text-xl font-medium",
    };

    return (
        <span
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        >
            {children}
        </span>
    );
};
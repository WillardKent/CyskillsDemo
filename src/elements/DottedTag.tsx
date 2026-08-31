import React from "react";
import type { ReactNode } from "react";

export type DottedTagVariant =
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "default";

export type DottedTagSize = "sm" | "md" | "lg";

export interface DottedTagProps {
    children: ReactNode;
    variant?: DottedTagVariant;
    size?: DottedTagSize;
    className?: string;
}

export const DottedTag: React.FC<DottedTagProps> = ({
    children,
    variant = "default",
    size = "sm",
    className = "",
}) => {
    const baseStyles =
        "inline-flex items-center justify-center rounded-[5px] font-inter w-fit bg-white text-[#262C36]";


    const variantDot: Record<DottedTagVariant, string> = {
        success: "bg-[#53B160] border-[#D4F5CE]",
        danger: "bg-[#B3172B]  border-[#FDEBEC]",
        info: "bg-[#1A62F8]  border-[#D3E2FD]",
        warning: "bg-[#E68A00]  border-[#FFF6E5]",
        default: "bg-[#696969]  border-[#e8e8e8]",
    };

    const sizeStyles: Record<DottedTagSize, string> = {

        sm: "text-xs font-normal",
        md: "text-sm md:text-base font-normal",
        lg: "text-base min-[401px]:text-lg lg:text-xl font-medium",
    };

    const dottedSize: Record<DottedTagSize, string> = {

        sm: "size-2",
        md: "size-4",
        lg: "size-6",
    };

    return (

        <div className="flex items-center gap-2 ">
            <span
                className={`${dottedSize[size]} rounded-full border-2 ${variantDot[variant]}`}
            />

            <span
                className={`${baseStyles} ${sizeStyles[size]} ${className}`}
            >
                {children}
            </span>
        </div>

    );
};
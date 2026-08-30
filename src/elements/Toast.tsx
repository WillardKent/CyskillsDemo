import React from "react";
import type { ReactNode } from "react";
import { Check, AlertCircle, AlertTriangle, Info, X } from "lucide-react";

export type ToastVariant =
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "default";

export type ToastPosition =
    | "top-right"
    | "top-left"
    | "top-center"
    | "bottom-right"
    | "bottom-left"
    | "bottom-center"
    | "center";

export interface ToastProps {
    id?: string;
    title: ReactNode;
    description?: ReactNode;
    variant?: ToastVariant;
    iconStyle?: "badge" | "plain";
    onClose?: () => void;
    className?: string;
}

const variantStyles: Record<
    ToastVariant,
    { badge: string; iconColor: string; icon: React.FC<{ className?: string }> }
> = {
    success: {
        badge: "bg-[#E1FCEF] text-[#14804A]",
        iconColor: "text-[#14804A]",
        icon: Check,
    },
    danger: {
        badge: "bg-[#FAF0F3] text-[#D12953]",
        iconColor: "text-[#D12953]",
        icon: AlertCircle,
    },
    warning: {
        badge: "bg-[#FCF2E6] text-[#AA5B00]",
        iconColor: "text-[#AA5B00]",
        icon: AlertTriangle,
    },
    info: {
        badge: "bg-[#EBF0FA] text-[#2264E5]",
        iconColor: "text-[#2264E5]",
        icon: Info,
    },
    default: {
        badge: "bg-[#E9EDF5] text-[#5A6376]",
        iconColor: "text-[#5A6376]",
        icon: Check,
    },
};

export const Toast: React.FC<ToastProps> = ({
    title,
    description,
    variant = "success",
    iconStyle = "badge",
    onClose,
    className = "",
}) => {
    const config = variantStyles[variant];
    const IconComponent = config.icon;

    return (
        <div
            role="alert"
            className={`
                pointer-events-auto flex items-center justify-between gap-3.5 
                rounded-xl bg-white border border-gray-100 p-4 
                shadow-[0_8px_30px_rgb(0,0,0,0.12)] font-inter min-w-[320px] max-w-md
                transition-all duration-300 ease-in-out
                ${className}
            `}
        >
            <div className="flex items-center gap-3.5 min-w-0">
                {/* Icon */}
                {iconStyle === "badge" ? (
                    <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${config.badge}`}
                    >
                        <IconComponent className="h-5 w-5 stroke-[2.5]" />
                    </div>
                ) : (
                    <IconComponent
                        className={`h-5 w-5 shrink-0 stroke-[2.5] ${config.iconColor}`}
                    />
                )}

                {/* Content */}
                <div className="flex flex-col min-w-0">
                    <h4 className="text-sm font-semibold text-[#12151B] leading-tight">
                        {title}
                    </h4>
                    {description && (
                        <p className="text-xs font-normal text-[#5C6472] mt-0.5 truncate">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            {/* Close Button */}
            {onClose && (
                <button
                    type="button"
                    onClick={onClose}
                    className="shrink-0 rounded-md p-1 text-[#9CA3AF] hover:text-[#4B5563] hover:bg-gray-100 transition-colors"
                    aria-label="Dismiss toast"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
};

export default Toast;


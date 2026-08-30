import React, { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import Toast, { type ToastVariant, type ToastPosition } from "../elements/Toast";

export interface ToastOptions {
    id?: string;
    title: ReactNode;
    description?: ReactNode;
    variant?: ToastVariant;
    position?: ToastPosition;
    duration?: number; // ms, default 3500ms (set to 0 for persistent)
    iconStyle?: "badge" | "plain";
}

interface ToastItem extends ToastOptions {
    id: string;
}

interface ToastContextType {
    show: (options: ToastOptions) => string;
    success: (title: ReactNode, description?: ReactNode, options?: Partial<ToastOptions>) => string;
    error: (title: ReactNode, description?: ReactNode, options?: Partial<ToastOptions>) => string;
    warning: (title: ReactNode, description?: ReactNode, options?: Partial<ToastOptions>) => string;
    info: (title: ReactNode, description?: ReactNode, options?: Partial<ToastOptions>) => string;
    dismiss: (id: string) => void;
    dismissAll: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const positionClasses: Record<ToastPosition, string> = {
    "top-right": "top-5 right-5 items-end",
    "top-left": "top-5 left-5 items-start",
    "top-center": "top-5 left-1/2 -translate-x-1/2 items-center",
    "bottom-right": "bottom-5 right-5 items-end",
    "bottom-left": "bottom-5 left-5 items-start",
    "bottom-center": "bottom-5 left-1/2 -translate-x-1/2 items-center",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center",
};

export const ToastProvider: React.FC<{ children: ReactNode; defaultPosition?: ToastPosition }> = ({
    children,
    defaultPosition = "top-right",
}) => {
    const [toasts, setToasts] = useState<ToastItem[]>([]);

    const dismiss = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const dismissAll = useCallback(() => {
        setToasts([]);
    }, []);

    const show = useCallback(
        (options: ToastOptions): string => {
            const id = options.id || String(Date.now() + Math.random());
            const duration = options.duration !== undefined ? options.duration : 3500;
            const position = options.position || defaultPosition;

            const newToast: ToastItem = {
                ...options,
                id,
                position,
                variant: options.variant || "success",
                iconStyle: options.iconStyle || "badge",
            };

            setToasts((prev) => [...prev, newToast]);

            if (duration > 0) {
                setTimeout(() => {
                    dismiss(id);
                }, duration);
            }

            return id;
        },
        [defaultPosition, dismiss]
    );

    const success = useCallback(
        (title: ReactNode, description?: ReactNode, options?: Partial<ToastOptions>) => {
            return show({ ...options, title, description, variant: "success" });
        },
        [show]
    );

    const error = useCallback(
        (title: ReactNode, description?: ReactNode, options?: Partial<ToastOptions>) => {
            return show({ ...options, title, description, variant: "danger" });
        },
        [show]
    );

    const warning = useCallback(
        (title: ReactNode, description?: ReactNode, options?: Partial<ToastOptions>) => {
            return show({ ...options, title, description, variant: "warning" });
        },
        [show]
    );

    const info = useCallback(
        (title: ReactNode, description?: ReactNode, options?: Partial<ToastOptions>) => {
            return show({ ...options, title, description, variant: "info" });
        },
        [show]
    );

    // Group toasts by position
    const positions: ToastPosition[] = [
        "top-right",
        "top-left",
        "top-center",
        "bottom-right",
        "bottom-left",
        "bottom-center",
        "center",
    ];

    return (
        <ToastContext.Provider value={{ show, success, error, warning, info, dismiss, dismissAll }}>
            {children}

            {/* Position containers */}
            {positions.map((pos) => {
                const toastsInPos = toasts.filter((t) => t.position === pos);
                if (toastsInPos.length === 0) return null;

                return (
                    <div
                        key={pos}
                        className={`fixed z-50 flex flex-col gap-2 pointer-events-none ${positionClasses[pos]}`}
                    >
                        {toastsInPos.map((toast) => (
                            <Toast
                                key={toast.id}
                                title={toast.title}
                                description={toast.description}
                                variant={toast.variant}
                                iconStyle={toast.iconStyle}
                                onClose={() => dismiss(toast.id)}
                            />
                        ))}
                    </div>
                );
            })}
        </ToastContext.Provider>
    );
};

export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};

export default ToastContext;


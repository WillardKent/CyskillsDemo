import type { ReactNode } from "react";
import { X } from "lucide-react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    children: ReactNode;
    footer?: ReactNode;
    maxWidth?: string;
};

export default function Modal({
    isOpen,
    onClose,
    title,
    description,
    children,
    footer,
    maxWidth = "max-w-2xl",
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-[2px] font-inter"
            onClick={onClose}
        >
            <div
                className={`w-full ${maxWidth} overflow-hidden rounded-xl bg-white shadow-2xl`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between border-b border-gray-200 px-6 py-5">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-medium text-[#12151B]">
                            {title}
                        </h2>

                        {description && (
                            <p className="text-sm font-normal leading-5 text-[#5C6472]">
                                {description}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-md p-1 text-[#4B5563] transition hover:bg-gray-100 "
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="px-7 py-3.5">
                    {children}
                </div>

                {/* Footer */}
                {footer && (
                    <div className="flex items-center justify-end gap-3 border-t border-gray-100 bg-gray-50 px-7 py-5">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}
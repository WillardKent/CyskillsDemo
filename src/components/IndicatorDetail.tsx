import { X } from "lucide-react";
import type { MetricCardItem } from "../elements/MetricCardGrid";

type IndicatorDetailProps = {
    item: MetricCardItem | null;
    onClose: () => void;
};

export default function IndicatorDetail({
    item,
    onClose,
}: IndicatorDetailProps) {
    if (!item) return null;

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className="fixed inset-0 z-40 bg-black/10"
            />

            {/* Drawer */}
            <div className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-100 flex-col bg-white shadow-xl">

                {/* Header */}
                <div className="flex items-start justify-between border-b border-[#EEF0F3] px-6 py-5">
                    <div>
                        <h2 className="text-lg font-medium text-[#343A45]">
                            Indicator detail
                        </h2>

                        <p className="mt-1 text-xs text-[#7E8694]">
                            {item.category} · {item.source}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-md p-1 text-[#7E8694] transition hover:bg-gray-100"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6">

                    {/* Title */}
                    <h3 className="text-lg font-medium text-[#343A45]">
                        {item.title}
                    </h3>

                    {/* Definition */}
                    {item.definition && (
                        <section className="mt-6">
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#7E8694]">
                                Definition
                            </p>

                            <p className="mt-2 text-xs leading-5 text-[#59616D]">
                                {item.definition}
                            </p>
                        </section>
                    )}

                    {/* Calculation Method */}
                    {item.calculationMethod && (
                        <section className="mt-6">
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#7E8694]">
                                Calculation Method
                            </p>

                            <p className="mt-2 text-xs leading-5 text-[#59616D]">
                                {item.calculationMethod}
                            </p>
                        </section>
                    )}

                    {/* Related Reports */}
                    {item.relatedReports &&
                        item.relatedReports.length > 0 && (
                            <section className="mt-6">
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#7E8694]">
                                    Related Reports
                                </p>

                                <div className="mt-3 flex flex-col gap-3">
                                    {item.relatedReports.map((report) => (
                                        <a
                                            key={report.label}
                                            href={report.href ?? "#"}
                                            className="text-xs font-medium text-blue-600 hover:underline"
                                        >
                                            {report.label} →
                                        </a>
                                    ))}
                                </div>
                            </section>
                        )}
                </div>
            </div>
        </>
    );
}
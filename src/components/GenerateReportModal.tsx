import { Check } from "lucide-react";
import Modal from "../elements/Modal";
import Button from "../elements/Button";
import DataCard from "../elements/DataCard";

export type ReportTemplateItem = {
    title: string;
    description: string;
    tags: string[];
};

type GenerateReportModalProps = {
    isOpen: boolean;
    onClose: () => void;
    report: ReportTemplateItem | null;
    onGenerate?: (report: ReportTemplateItem) => void;
};

export default function GenerateReportModal({
    isOpen,
    onClose,
    report,
    onGenerate,
}: GenerateReportModalProps) {
    if (!report) return null;

    const handleGenerate = () => {
        onGenerate?.(report);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            icon={
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EBF7EE] text-[#22C55E]">
                    <Check className="h-5 w-5 stroke-[2.5]" />
                </div>
            }
            title="Generate Report?"
            description={`${report.title} — Q2 2025 · 3 pages · PDF`}
            maxWidth="w-full max-w-lg md:max-w-2xl"
            footer={
                <>
                    <Button
                        text="Close"
                        variant="white"
                        onClick={onClose}
                    />

                    <Button
                        text="Generate"
                        variant="blue"
                        onClick={handleGenerate}
                    />
                </>
            }
        >
            <div className="font-inter py-2">
                <DataCard
                    title={report.title}
                    description={report.description}
                    tags={
                        <>
                            {report.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded bg-[#EBF0FA] px-2 py-1 text-xs font-normal text-[#2264E5]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </>
                    }
                />
            </div>
        </Modal>
    );
}


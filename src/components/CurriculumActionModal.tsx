import { useState } from "react";
import Modal from "../elements/Modal";
import Button from "../elements/Button";
import { Tag } from "../elements/Tag";
import { X as XIcon } from "lucide-react";
import type { ModuleRecommendation } from "../elements/ModuleRecommendationCard";

// ─── Modal action types ──────────────────────────────────────

export type CurriculumActionType = "accept" | "reject" | "modify";

type CurriculumActionModalProps = {
    isOpen: boolean;
    onClose: () => void;
    action: CurriculumActionType;
    module: ModuleRecommendation | null;
    onConfirm: (action: CurriculumActionType, module: ModuleRecommendation, modifiedData?: ModifiedData) => void;
};

export type ModifiedData = {
    year: string;
    ects: string;
    semester: string;
};

// ─── Shared form field styles ────────────────────────────────

const selectClass =
    "w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#3A3A3A] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat";

function FormLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
    return (
        <label className="mb-2 block text-sm font-normal text-[#464855]">
            {children} {required && <span className="text-red-500">*</span>}
        </label>
    );
}

// ─── Component ───────────────────────────────────────────────

export default function CurriculumActionModal({
    isOpen,
    onClose,
    action,
    module,
    onConfirm,
}: CurriculumActionModalProps) {
    // Parse numeric values from module strings for modify form
    const parseYear = (yearStr: string) => yearStr.replace(/\D/g, "") || "3";
    const parseEcts = (ectsStr: string) => ectsStr.replace(/\D/g, "") || "5";
    const parseSemester = (semStr: string) => semStr.replace(/\D/g, "") || "1";

    const [modYear, setModYear] = useState(() => module ? parseYear(module.year) : "3");
    const [modEcts, setModEcts] = useState(() => module ? parseEcts(module.ects) : "5");
    const [modSemester, setModSemester] = useState(() => module ? parseSemester(module.semester) : "1");

    // Reset form values when module changes
    if (module && action === "modify") {
        const expectedYear = parseYear(module.year);
        const expectedEcts = parseEcts(module.ects);
        const expectedSemester = parseSemester(module.semester);
        if (modYear !== expectedYear && modEcts !== expectedEcts && modSemester !== expectedSemester) {
            setModYear(expectedYear);
            setModEcts(expectedEcts);
            setModSemester(expectedSemester);
        }
    }

    if (!module) return null;

    const handleConfirm = () => {
        if (action === "modify") {
            onConfirm(action, module, { year: modYear, ects: modEcts, semester: modSemester });
        } else {
            onConfirm(action, module);
        }
        onClose();
    };

    // ── Accept Modal ──────────────────────────────────────────
    if (action === "accept") {
        return (
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                title="Add to Curriculum Plan?"
                description="Description"
                maxWidth="w-full max-w-lg md:max-w-2xl"
                footer={
                    <>
                        <Button text="Close" variant="white" onClick={onClose} />
                        <Button text="Generate" variant="blue" onClick={handleConfirm} />
                    </>
                }
            >
                <div className="font-inter">
                    {/* Module preview card */}
                    <div className="rounded-lg border border-[#F7F8FA] bg-white p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-[#12151B]">{module.title}</h3>
                                <p className="mt-1 text-xs font-normal text-[#5C6472]">
                                    {module.category} · {module.openings} openings
                                </p>
                            </div>
                            <Tag variant={module.confidenceVariant || "success"}>
                                {module.confidence}
                            </Tag>
                        </div>

                        {/* Description */}
                        <p className="mt-5 text-sm leading-relaxed text-[#262C36]">
                            {module.description}
                        </p>

                        {/* Tags */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            {module.tags.map((tag, index) => (
                                <Tag key={index} variant={tag.variant || "info"}>
                                    {tag.label}
                                </Tag>
                            ))}
                        </div>

                        {/* Details */}
                        <p className="mt-4 text-xs font-medium text-[#414957]">
                            {module.year} · {module.ects} · {module.semester}
                        </p>

                        <p className="mt-2 text-xs font-medium text-[#414957]">
                            Demand signal: {module.demandSignal}
                        </p>
                    </div>
                </div>
            </Modal>
        );
    }

    // ── Reject Modal ──────────────────────────────────────────
    if (action === "reject") {
        return (
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                title=""
                maxWidth="max-w-sm"
                footer={
                    <>
                        <Button text="Close" variant="white" onClick={onClose} />
                        <Button text="Reject" variant="red" onClick={handleConfirm} />
                    </>
                }
            >
                <div className="flex items-start gap-4 font-inter py-2">
                    {/* Red X icon */}
                    <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-red-50">
                        <XIcon className="w-5 h-5 text-red-500" />
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-[#12151B]">
                            Are you sure you reject this curriculum?
                        </h3>
                        <p className="mt-1 text-sm font-normal text-[#5C6472]">
                            This action will remove it from your planned curriculum
                        </p>
                    </div>
                </div>
            </Modal>
        );
    }

    // ── Modify Modal ──────────────────────────────────────────
    if (action === "modify") {
        return (
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                title="Modify Curriculum Planning"
                maxWidth="w-full max-w-lg md:max-w-2xl"
                footer={
                    <>
                        <Button text="Cancel" variant="white" onClick={onClose} />
                        <Button text="Save" variant="blue" onClick={handleConfirm} />
                    </>
                }
            >
                <div className="space-y-5 font-inter">
                    {/* Module info (read-only preview) */}
                    <div>
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-[#12151B]">{module.title}</h3>
                                <p className="mt-1 text-xs font-normal text-[#5C6472]">
                                    {module.category} · {module.openings} openings
                                </p>
                            </div>
                            <Tag variant={module.confidenceVariant || "success"}>
                                {module.confidence}
                            </Tag>
                        </div>

                        <p className="mt-5 text-sm leading-relaxed text-[#262C36]">
                            {module.description}
                        </p>

                        <p className="mt-4 text-xs font-medium text-[#414957]">
                            Demand signal: {module.demandSignal}
                        </p>

                        {/* Tags */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {module.tags.map((tag, index) => (
                                <Tag key={index} variant={tag.variant || "info"}>
                                    {tag.label}
                                </Tag>
                            ))}
                        </div>
                    </div>

                    {/* Editable fields */}
                    <div>
                        <FormLabel required>Year</FormLabel>
                        <select
                            value={modYear}
                            onChange={(e) => setModYear(e.target.value)}
                            className={selectClass}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    <div>
                        <FormLabel required>ECTS</FormLabel>
                        <select
                            value={modEcts}
                            onChange={(e) => setModEcts(e.target.value)}
                            className={selectClass}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>

                    <div>
                        <FormLabel required>Semester</FormLabel>
                        <select
                            value={modSemester}
                            onChange={(e) => setModSemester(e.target.value)}
                            className={selectClass}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                </div>
            </Modal>
        );
    }

    return null;
}


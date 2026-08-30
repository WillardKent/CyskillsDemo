import { useState } from "react";
import { Check } from "lucide-react";
import Modal from "../elements/Modal";
import Button from "../elements/Button";

type GenerateCurriculumModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onGenerate: (program: string) => void;
};

const analyzeItems = [
    "Current curriculum",
    "Job posting trends",
    "ESCO skill mapping",
    "Graduate employability data",
    "Labour market demand",
];

const identifyItems = [
    "Skill gaps",
    "Courses to replace/remove",
    "Courses to add",
    "Curriculum restructuring opportunities",
    "Courses to update",
];

export default function GenerateCurriculumModal({
    isOpen,
    onClose,
    onGenerate,
}: GenerateCurriculumModalProps) {
    const [program, setProgram] = useState("BSc Computer Science");

    const handleGenerate = () => {
        onGenerate(program);
        onClose();
    };

    const selectClass =
        "w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#3A3A3A] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat";

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Generate Curriculum"
            maxWidth="w-full max-w-lg md:max-w-2xl"
            footer={
                <>
                    <Button text="Cancel" variant="white" onClick={onClose} />
                    <Button text="Generate" variant="blue" onClick={handleGenerate} />
                </>
            }
        >
            <div className="space-y-6 font-inter">
                {/* Program select */}
                <div>
                    <label className="mb-2 block text-sm font-normal text-[#464855]">
                        Program <span className="text-red-500">*</span>
                    </label>
                    <select
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        className={selectClass}
                    >
                        <option value="BSc Computer Science">BSc Computer Science</option>
                        <option value="MSc Data Science & AI">MSc Data Science &amp; AI</option>
                        <option value="BSc Information Systems">BSc Information Systems</option>
                        <option value="MSc Cybersecurity">MSc Cybersecurity</option>
                    </select>
                </div>

                {/* AI will analyze */}
                <div>
                    <h3 className="text-base font-semibold text-[#12151B] mb-4">AI will analyze</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                        {analyzeItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-2.5">
                                <Check className="w-5 h-5 text-green-500 shrink-0" />
                                <span className="text-sm text-[#262C36]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI will identify */}
                <div>
                    <h3 className="text-base font-semibold text-[#12151B] mb-4">AI will identify</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                        {identifyItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-2.5">
                                <Check className="w-5 h-5 text-blue-500 shrink-0" />
                                <span className="text-sm text-[#262C36]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
}

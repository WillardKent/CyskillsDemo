import { useState } from "react";
import Modal from "../elements/Modal";
import Button from "../elements/Button";
type PolicyTargetModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function PolicyTargetModal({
    isOpen,
    onClose,
}: PolicyTargetModalProps) {
    const [subject, setDataset] = useState("");
    const [issue, setDistrict] = useState("");
    const [priority, setDateRange] = useState("");
    const [reporting, setReporting] = useState("");
    const handleSubmit = () => {
        console.log({
            subject,
            issue,
            priority,
        });

        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Add policy target"
            description="Creates one new row in EU Skills Agenda 2030 — Cyprus Progress."
            maxWidth="max-w-4xl"
            footer={
                <>
                    <Button text="Close"
                        variant="white"
                        onClick={onClose}
                    />

                    <Button text="Add Target"
                        variant="blue"
                        onClick={handleSubmit}
                    />

                </>
            }
        >
            <div className="space-y-5 font-inter">
                <div className="font-normal text-xs text-[#1A62F8] leading-4 bg-[#EAF1FE] py-1 px-3 border-l-4 border-l-[#1A62F8]">
                    <span className="">Alignment score and status are calculated automatically from the current value and goal you enter. They can't be typed directly, so the figure stays traceable to its source.</span>
                </div>

                {/* District + Date Range */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Framework <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={issue}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                EU Skills Agenda 2030
                            </option>

                            <option value="framework-1">
                                Framework 1
                            </option>

                            <option value="framework-2">
                                Framework 2
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Reporting <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            value={reporting}
                            onChange={(e) => setReporting(e.target.value)}
                            placeholder="2026"
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] placeholder:text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>
                </div>
                {/* Dataset */}
                <div>
                    <label className="mb-2 block text-sm font-normal text-[#464855]">
                        Target entity name <span className="text-red-500">*</span>
                    </label>

                    <select
                        value={subject}
                        onChange={(e) => setDataset(e.target.value)}
                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="republic-of-cyprus">
                            Cyprus University of Technology
                        </option>

                        <option value="subject-1">
                            Subject 1
                        </option>

                        <option value="subject-2">
                            Subject 2
                        </option>
                    </select>
                </div>
                {/* District + Date Range */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Entity type <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={issue}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                Private · Research
                            </option>

                            <option value="framework-1">
                                Entity 1
                            </option>

                            <option value="framework-2">
                                Entity 2
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Location <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={priority}
                            onChange={(e) => setDateRange(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                Limassol
                            </option>

                            <option value="2024-2025">
                                Larnaca
                            </option>

                            <option value="2023-2024">
                                Cyprus
                            </option>
                        </select>
                    </div>
                </div>
                {/* Dataset */}
                <div>
                    <label className="mb-2 block text-sm font-normal text-[#464855]">
                        Metric definition <span className="text-red-500">*</span>
                    </label>

                    <select
                        value={subject}
                        onChange={(e) => setDataset(e.target.value)}
                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="republic-of-cyprus">
                            ICT graduate employability rate
                        </option>

                        <option value="subject-1">
                            Subject 1
                        </option>

                        <option value="subject-2">
                            Subject 2
                        </option>
                    </select>
                </div>

                {/* District + Date Range */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Current value (%) <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={issue}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                52
                            </option>

                            <option value="framework-1">
                                71
                            </option>

                            <option value="framework-2">
                                92
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            EU 2030 goal (%) <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={priority}
                            onChange={(e) => setDateRange(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                75
                            </option>

                            <option value="2024-2025">
                                50
                            </option>

                            <option value="2023-2024">
                                90
                            </option>
                        </select>
                    </div>
                </div>
                {/* Dataset */}
                <div>
                    <label className="mb-2 block text-sm font-normal text-[#464855]">
                        Data source <span className="text-red-500">*</span>
                    </label>

                    <select
                        value={subject}
                        onChange={(e) => setDataset(e.target.value)}
                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="republic-of-cyprus">
                            CEDEFOP
                        </option>

                        <option value="subject-1">
                            Subject 1
                        </option>

                        <option value="subject-2">
                            Subject 2
                        </option>
                    </select>
                </div>
                {/* Dataset */}
                <div>
                    <label className="mb-2 block text-sm font-normal text-[#464855]">
                        Review status <span className="text-red-500">*</span>
                    </label>

                    <select
                        value={subject}
                        onChange={(e) => setDataset(e.target.value)}
                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="republic-of-cyprus">
                            Pending review
                        </option>

                        <option value="subject-1">
                            In progress review
                        </option>

                        <option value="subject-2">
                            Completed review
                        </option>
                    </select>
                </div>
            </div>
        </Modal>
    );
}
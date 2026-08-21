import { useState } from "react";
import { Upload } from "lucide-react";
import Modal from "../elements/Modal";
import Button from "../elements/Button";
type AccessRequestModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function AccessRequestModal({
    isOpen,
    onClose,
}: AccessRequestModalProps) {
    const [dataset, setDataset] = useState("");
    const [district, setDistrict] = useState("");
    const [dateRange, setDateRange] = useState("");
    const [purpose, setPurpose] = useState("");
    const [attachment, setAttachment] = useState<File | null>(null);

    const handleSubmit = () => {
        console.log({
            dataset,
            district,
            dateRange,
            purpose,
            attachment,
        });

        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Access Request"
            description="Requests to restricted or sensitive datasets are reviewed by the Data Governance Committee."
            footer={
                <>
                    <Button text="Cancel"
                        variant="white"
                        onClick={onClose}
                    />

                    <Button text="Submit Request"
                        variant="blue"
                        onClick={handleSubmit}
                    />

                </>
            }
        >
            <div className="space-y-5 font-inter">
                {/* Dataset */}
                <div>
                    <label className="mb-2 block text-sm font-normal text-[#464855]">
                        Dataset <span className="text-red-500">*</span>
                    </label>

                    <select
                        value={dataset}
                        onChange={(e) => setDataset(e.target.value)}
                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="">
                            Select dataset
                        </option>

                        <option value="graduate-records">
                            Individual - Level Graduate Records
                        </option>

                        <option value="employment-data">
                            Employment Data
                        </option>

                        <option value="student-data">
                            Student Records
                        </option>
                    </select>
                </div>

                {/* District + Date Range */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            District <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                All District
                            </option>

                            <option value="district-1">
                                District 1
                            </option>

                            <option value="district-2">
                                District 2
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Date Range <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                Select range
                            </option>

                            <option value="2024-2025">
                                2024-2025
                            </option>

                            <option value="2023-2024">
                                2023-2024
                            </option>
                        </select>
                    </div>
                </div>

                {/* Purpose */}
                <div>
                    <label className="mb-2 block text-sm font-normal text-[#464855]">
                        Purpose <span className="text-red-500">*</span>
                    </label>

                    <textarea
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        placeholder="Enter the purpose of your request"
                        rows={3}
                        className="w-full resize-none rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                {/* Attachment */}
                <label className="flex h-28 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-[#D1D5DB] transition hover:bg-gray-50">
                    <Upload className="mb-2 h-5 w-5 text-[#7F8089]" />

                    <span className="text-sm text-[#7F8089] font-inter font-normal">
                        {attachment
                            ? attachment.name
                            : "Attachment"}
                    </span>

                    <input
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                            setAttachment(
                                e.target.files?.[0] || null
                            )
                        }
                    />
                </label>
            </div>
        </Modal>
    );
}
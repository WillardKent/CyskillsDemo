import { useState } from "react";
import { Upload } from "lucide-react";
import Modal from "../elements/Modal";
import Button from "../elements/Button";
type ContactTechnicalModalModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ContactTechnicalModal({
    isOpen,
    onClose,
}: ContactTechnicalModalModalProps) {
    const [subject, setDataset] = useState("");
    const [issue, setDistrict] = useState("");
    const [priority, setDateRange] = useState("");
    const [attachment, setAttachment] = useState<File | null>(null);

    const handleSubmit = () => {
        console.log({
            subject,
            issue,
            priority,
            attachment,
        });

        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Contact the Technical Team"
            description="We typically respond within one business day."
            footer={
                <>
                    <Button text="Cancel"
                        variant="white"
                        onClick={onClose}
                    />

                    <Button text="Send"
                        variant="blue"
                        onClick={handleSubmit}
                    />

                </>
            }
        >
            <div className="space-y-5 font-inter">


                {/* District + Date Range */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Issue type <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={issue}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                Data Discrepancy
                            </option>

                            <option value="district-1">
                                Issue 1
                            </option>

                            <option value="district-2">
                                Issue 2
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Priority <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={priority}
                            onChange={(e) => setDateRange(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                Medium
                            </option>

                            <option value="2024-2025">
                                Low
                            </option>

                            <option value="2023-2024">
                                High
                            </option>
                        </select>
                    </div>
                </div>
                {/* Dataset */}
                <div>
                    <label className="mb-2 block text-sm font-normal text-[#464855]">
                        Subject <span className="text-red-500">*</span>
                    </label>

                    <select
                        value={subject}
                        onChange={(e) => setDataset(e.target.value)}
                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="republic-of-cyprus">
                            Republic of Cyprus
                        </option>

                        <option value="subject-1">
                            Subject 1
                        </option>

                        <option value="subject-2">
                            Subject 2
                        </option>
                    </select>
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
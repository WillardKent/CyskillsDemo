import { useState } from "react";
import Modal from "../elements/Modal";
import Button from "../elements/Button";
type ReportTemplateModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ReportTemplateModal({
    isOpen,
    onClose,
}: ReportTemplateModalProps) {
    const [subject, setDataset] = useState("");
    const [issue, setDistrict] = useState("");
    const [reporting, setReporting] = useState("");
    const handleSubmit = () => {
        console.log({
            subject,
            issue,
        });

        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="New report template"
            description="Defines a reusable template. Each future 'Generate' click on it creates one dated entry in Recent Reports."
            maxWidth="max-w-4xl"
            footer={
                <>
                    <Button text="Close"
                        variant="white"
                        onClick={onClose}
                    />

                    <Button text="Create Template"
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
                        Report title <span className="text-red-500">*</span>
                    </label>

                    <input
                        type="text"
                        value={reporting}
                        onChange={(e) => setReporting(e.target.value)}
                        placeholder="Graduate Employability Report"
                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] placeholder:text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>
                {/* Dataset */}
                <div>
                    <label className="mb-2 block text-sm font-normal text-[#464855]">
                        Description <span className="text-red-500">*</span>
                    </label>

                    <input
                        type="text"
                        value={reporting}
                        onChange={(e) => setReporting(e.target.value)}
                        placeholder="Aggregate 6-month employability outcomes by programme domain."
                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] placeholder:text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>
                {/* Dataset */}
                <div>
                    <label className="mb-2 block text-sm font-normal text-[#464855]">
                        Data source module <span className="text-red-500">*</span>
                    </label>

                    <select
                        value={subject}
                        onChange={(e) => setDataset(e.target.value)}
                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="republic-of-cyprus">
                            Employability Tracking
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
                            Frequency <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={issue}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                Annual
                            </option>

                            <option value="framework-1">
                                BiAnnual
                            </option>

                            <option value="framework-2">
                                Quarterly
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Owner department <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={issue}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                DHE Policy Analysis
                            </option>

                            <option value="framework-1">
                                Department 2
                            </option>

                            <option value="framework-2">
                                Department 3
                            </option>
                        </select>
                    </div>
                </div>

                {/* District + Date Range */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Export format <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={issue}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                Pdf
                            </option>

                            <option value="framework-1">
                                Docs
                            </option>

                            <option value="framework-2">
                                Excel
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Languages <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={issue}
                            onChange={(e) => setDistrict(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                English
                            </option>

                            <option value="framework-1">
                                Dutch
                            </option>

                            <option value="framework-2">
                                Turkish
                            </option>
                        </select>
                    </div>
                </div>


            </div>
        </Modal>
    );
}
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
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dataSource, setDataSource] = useState("");
    const [frequency, setFrequency] = useState("");
    const [ownerDepartment, setOwnerDepartment] = useState("");
    const [exportFormat, setExportFormat] = useState("");
    const [language, setLanguage] = useState("");
    const handleSubmit = () => {
        console.log({
            title,
            description,
            dataSource,
            frequency,
            ownerDepartment,
            exportFormat,
            language,
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                        value={dataSource}
                        onChange={(e) => setDataSource(e.target.value)}
                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="">
                            Employability Tracking
                        </option>

                        <option value="employability-tracking-1">
                            Subject 1
                        </option>

                        <option value="employability-tracking-2">
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
                            value={frequency}
                            onChange={(e) => setFrequency(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                Annual
                            </option>

                            <option value="biannual">
                                BiAnnual
                            </option>

                            <option value="quarterly">
                                Quarterly
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Owner department <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={ownerDepartment}
                            onChange={(e) => setOwnerDepartment(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                DHE Policy Analysis
                            </option>

                            <option value="department-2">
                                Department 2
                            </option>

                            <option value="department-3">
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
                            value={exportFormat}
                            onChange={(e) => setExportFormat(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                Pdf
                            </option>

                            <option value="docs">
                                Docs
                            </option>

                            <option value="excel">
                                Excel
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Languages <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                English
                            </option>

                            <option value="dutch">
                                Dutch
                            </option>

                            <option value="turkish">
                                Turkish
                            </option>
                        </select>
                    </div>
                </div>


            </div>
        </Modal>
    );
}
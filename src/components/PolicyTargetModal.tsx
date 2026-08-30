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
    const [framework, setFramework] = useState("");
    const [reporting, setReporting] = useState("");
    const [targetEntity, setTargetEntity] = useState("");
    const [entityType, setEntityType] = useState("");
    const [location, setLocation] = useState("");
    const [metricDefinition, setMetricDefinition] = useState("");
    const [currentValue, setCurrentValue] = useState("");
    const [euGoal, setEuGoal] = useState("");
    const [dataSource, setDataSource] = useState("");
    const [reviewStatus, setReviewStatus] = useState("");

    const handleSubmit = () => {
        console.log({
            framework,
            reporting,
            targetEntity,
            entityType,
            location,
            metricDefinition,
            currentValue,
            euGoal,
            dataSource,
            reviewStatus,
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
                            value={framework}
                            onChange={(e) => setFramework(e.target.value)}
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
                        value={targetEntity}
                        onChange={(e) => setTargetEntity(e.target.value)}
                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="">
                            Cyprus University of Technology
                        </option>

                        <option value="entity-1">
                            Subject 1
                        </option>

                        <option value="entity-2">
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
                            value={entityType}
                            onChange={(e) => setEntityType(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                Private · Research
                            </option>

                            <option value="entity-type-1">
                                Entity 1
                            </option>

                            <option value="entity-type-2">
                                Entity 2
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Location <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                Limassol
                            </option>

                            <option value="larnaca">
                                Larnaca
                            </option>

                            <option value="cyprus">
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
                        value={metricDefinition}
                        onChange={(e) => setMetricDefinition(e.target.value)}
                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="">
                            ICT graduate employability rate
                        </option>

                        <option value="metric-1">
                            Subject 1
                        </option>

                        <option value="metric-2">
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
                            value={currentValue}
                            onChange={(e) => setCurrentValue(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089]  outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                52
                            </option>

                            <option value="71">
                                71
                            </option>

                            <option value="92">
                                92
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            EU 2030 goal (%) <span className="text-red-500">*</span>
                        </label>

                        <select
                            value={euGoal}
                            onChange={(e) => setEuGoal(e.target.value)}
                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">
                                75
                            </option>

                            <option value="50">
                                50
                            </option>

                            <option value="90">
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
                        value={dataSource}
                        onChange={(e) => setDataSource(e.target.value)}
                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="">
                            CEDEFOP
                        </option>

                        <option value="source-1">
                            Subject 1
                        </option>

                        <option value="source-2">
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
                        value={reviewStatus}
                        onChange={(e) => setReviewStatus(e.target.value)}
                        className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="">
                            Pending review
                        </option>

                        <option value="in-progress">
                            In progress review
                        </option>

                        <option value="completed">
                            Completed review
                        </option>
                    </select>
                </div>
            </div>
        </Modal>
    );
}
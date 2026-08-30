import { useState, useEffect } from "react";
import Modal from "../elements/Modal";
import Button from "../elements/Button";

export type MinistryUser = {
    id: string;
    name: string;
    role: string;
    ministry: string;
    email: string;
    accessRights: string[];
    lastLogin: string;
};

type EditMinistryUserModalProps = {
    isOpen: boolean;
    onClose: () => void;
    user: MinistryUser | null;
    onSave: (user: MinistryUser) => void;
};

const ACCESS_RIGHTS_OPTIONS = [
    "Full access",
    "Dashboard viewer ·",
    "Executive briefing view",
];

const inputClass =
    "w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#3A3A3A] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

const selectClass =
    "w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#3A3A3A] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat";

export default function EditMinistryUserModal({
    isOpen,
    onClose,
    user,
    onSave,
}: EditMinistryUserModalProps) {
    const [ministry, setMinistry] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [accessRights, setAccessRights] = useState<string[]>([]);

    useEffect(() => {
        if (user) {
            setMinistry(user.ministry || user.role);
            setName(user.name);
            setEmail(user.email);
            setAccessRights(user.accessRights || []);
        }
    }, [user, isOpen]);

    if (!user) return null;

    const toggleAccessRight = (right: string) => {
        setAccessRights((prev) =>
            prev.includes(right) ? prev.filter((r) => r !== right) : [...prev, right]
        );
    };

    const handleSave = () => {
        onSave({
            ...user,
            ministry,
            role: ministry,
            name,
            email,
            accessRights,
        });
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Edit Ministry User"
            description="Update the user's ministry and access rights."
            maxWidth="w-full max-w-lg md:max-w-xl"
            footer={
                <>
                    <Button text="Close" variant="white" onClick={onClose} />
                    <Button text="Save" variant="blue" onClick={handleSave} />
                </>
            }
        >
            <div className="space-y-5 font-inter py-2">
                {/* Ministry */}
                <div>
                    <label className="mb-2 block text-sm font-normal text-[#464855]">
                        Ministry <span className="text-red-500">*</span>
                    </label>
                    <select
                        value={ministry}
                        onChange={(e) => setMinistry(e.target.value)}
                        className={selectClass}
                    >
                        <option value="Senior Policy Analyst">Senior Policy Analyst</option>
                        <option value="Policy Analyst">Policy Analyst</option>
                        <option value="Director General">Director General</option>
                        <option value="Data Analyst">Data Analyst</option>
                        <option value="Administrator">Administrator</option>
                    </select>
                </div>

                {/* Name */}
                <div>
                    <label className="mb-2 block text-sm font-normal text-[#464855]">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputClass}
                        placeholder="Enter name"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="mb-2 block text-sm font-normal text-[#464855]">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                        placeholder="Enter email"
                    />
                </div>

                {/* Access rights */}
                <div>
                    <label className="mb-3 block text-sm font-normal text-[#464855]">
                        Access rights
                    </label>
                    <div className="flex flex-col gap-3">
                        {ACCESS_RIGHTS_OPTIONS.map((right) => (
                            <label
                                key={right}
                                className="flex items-center gap-3 cursor-pointer select-none"
                            >
                                <input
                                    type="checkbox"
                                    checked={accessRights.some(
                                        (r) => r.toLowerCase().replace(/[^a-z]/g, "") === right.toLowerCase().replace(/[^a-z]/g, "")
                                    )}
                                    onChange={() => toggleAccessRight(right)}
                                    className="w-4 h-4 rounded border-[#D1D5DB] text-[#1A62F8] focus:ring-blue-500 accent-[#1A62F8]"
                                />
                                <span className="text-sm font-normal text-[#262C36]">
                                    {right}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
}


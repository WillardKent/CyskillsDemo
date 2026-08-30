import { useState } from "react";
import { Search } from "lucide-react";
import Modal from "../elements/Modal";
import Button from "../elements/Button";

type InviteMinistryUserModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onInvite: (data: { ministry: string; accessRights: string[] }) => void;
};

const ACCESS_RIGHTS_OPTIONS = [
    "Full access",
    "Dashboard viewer ·",
    "Executive briefing view",
];

export default function InviteMinistryUserModal({
    isOpen,
    onClose,
    onInvite,
}: InviteMinistryUserModalProps) {
    const [ministry, setMinistry] = useState("");
    const [accessRights, setAccessRights] = useState<string[]>([
        "Full access",
        "Dashboard viewer ·",
        "Executive briefing view",
    ]);

    const toggleAccessRight = (right: string) => {
        setAccessRights((prev) =>
            prev.includes(right) ? prev.filter((r) => r !== right) : [...prev, right]
        );
    };

    const handleInvite = () => {
        onInvite({ ministry, accessRights });
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Invite Ministry User"
            description="Administer your users by distributing invitation links."
            maxWidth="w-full max-w-lg md:max-w-xl"
            footer={
                <>
                    <Button text="Close" variant="white" onClick={onClose} />
                    <Button text="Invite" variant="blue" onClick={handleInvite} />
                </>
            }
        >
            <div className="space-y-5 font-inter py-2">
                {/* Ministry search input */}
                <div>
                    <label className="mb-2 block text-sm font-normal text-[#464855]">
                        Ministry
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={ministry}
                            onChange={(e) => setMinistry(e.target.value)}
                            placeholder="Search Ministry"
                            className="w-full rounded-lg border border-[#D1D5DB] pl-4 pr-10 py-3 text-sm font-normal text-[#3A3A3A] placeholder:text-[#9CA3AF] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                        <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                    </div>
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
                                    checked={accessRights.includes(right)}
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


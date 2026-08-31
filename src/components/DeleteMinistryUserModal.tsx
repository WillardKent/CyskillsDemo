import { Trash2 } from "lucide-react";
import Modal from "../elements/Modal";
import Button from "../elements/Button";
import type { MinistryUser } from "./EditMinistryUserModal";

type DeleteMinistryUserModalProps = {
    isOpen: boolean;
    onClose: () => void;
    user: MinistryUser | null;
    onDelete: (user: MinistryUser) => void;
};

export default function DeleteMinistryUserModal({
    isOpen,
    onClose,
    user,
    onDelete,
}: DeleteMinistryUserModalProps) {
    if (!user) return null;

    const handleDelete = () => {
        onDelete(user);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title=""
            maxWidth="max-w-sm"
            footer={
                <>
                    <Button text="Close" variant="white" onClick={onClose} />
                    <Button text="Delete" variant="red" onClick={handleDelete} />
                </>
            }
        >
            <div className="flex items-start gap-4 font-inter py-2">
                {/* Red trash icon */}
                <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-[#FAF0F3] text-[#E02D3C]">
                    <Trash2 className="w-5 h-5" />
                </div>

                <div>
                    <h3 className="text-sm md:text-base font-semibold text-[#12151B]">
                        Delete This Ministry User?
                    </h3>
                    <p className="mt-1 text-sm font-normal text-[#5C6472]">
                        Are you sure you want to delete this data? This action cannot be undone.
                    </p>
                </div>
            </div>
        </Modal>
    );
}


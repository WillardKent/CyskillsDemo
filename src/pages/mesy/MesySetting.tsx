import HeaderBanner from "../../elements/HeaderBanner";
import Button from "../../elements/Button";
import { EllipsisVertical, SignalHigh, Pencil, Trash2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import EditMinistryUserModal, { type MinistryUser } from "../../components/EditMinistryUserModal";
import DeleteMinistryUserModal from "../../components/DeleteMinistryUserModal";
import InviteMinistryUserModal from "../../components/InviteMinistryUserModal";
import { useToast } from "../../context/ToastContext";

type LanguageCode = 'en' | 'el';

interface LanguageOption {
    id: LanguageCode;
    label: string;
    flagUrl: string;
}

const languageOptions: LanguageOption[] = [
    { id: 'en', label: 'English (EN)', flagUrl: 'https://flagcdn.com/w40/gb.png' },
    { id: 'el', label: 'Ελληνικά (ΕΛ)', flagUrl: 'https://flagcdn.com/w40/gr.png' },
];

const initialUsers: MinistryUser[] = [
    {
        id: "1",
        name: "Maria Papadopoulou",
        role: "Senior Policy Analyst",
        ministry: "Senior Policy Analyst",
        email: "Maria.Papadopoulou@mail.com",
        accessRights: ["Full access", "Dashboard viewer ·", "Executive briefing view"],
        lastLogin: "Today",
    },
    {
        id: "2",
        name: "Andreas Nicolaou",
        role: "Policy Analyst",
        ministry: "Policy Analyst",
        email: "Andreas.Nicolaou@mail.com",
        accessRights: ["Dashboard viewer ·"],
        lastLogin: "2 days ago",
    },
    {
        id: "3",
        name: "Christina Ioannou",
        role: "Director General",
        ministry: "Director General",
        email: "Christina.Ioannou@mail.com",
        accessRights: ["Executive briefing view"],
        lastLogin: "1 week ago",
    },
];

export default function MesySetting() {
    const [users, setUsers] = useState<MinistryUser[]>(initialUsers);
    const [openMenuUserId, setOpenMenuUserId] = useState<string | null>(null);

    const [editingUser, setEditingUser] = useState<MinistryUser | null>(null);
    const [deletingUser, setDeletingUser] = useState<MinistryUser | null>(null);
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

    const [selectedInterfaceLang, setInterfaceSelectedLang] = useState<LanguageCode>('en');
    const [selectedReportLang, setReportSelectedLang] = useState<LanguageCode>('en');
    const [isHighContrastEnabled, setIsHighContrastEnabled] = useState<boolean>(true);

    const toast = useToast();
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenMenuUserId(null);
            }
        }
        if (openMenuUserId) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenuUserId]);

    const handleSaveUser = (updatedUser: MinistryUser) => {
        setUsers((prev) =>
            prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        );
        toast.show({
            title: "Your changes have been saved successfully.",
            variant: "success",
            position: "center",
        });
    };

    const handleDeleteUser = (userToDelete: MinistryUser) => {
        setUsers((prev) => prev.filter((u) => u.id !== userToDelete.id));
        toast.error("User has been deleted.");
    };

    const handleInviteUser = (data: { ministry: string; accessRights: string[] }) => {
        const newUser: MinistryUser = {
            id: String(Date.now()),
            name: data.ministry ? `Invited User (${data.ministry})` : "Invited User",
            role: data.ministry || "Policy Analyst",
            ministry: data.ministry || "Policy Analyst",
            email: "pending.invitation@mail.com",
            accessRights: data.accessRights,
            lastLogin: "Invited",
        };
        setUsers((prev) => [...prev, newUser]);
        toast.success("Invitation sent successfully.");
    };

    return (
        <>
            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="Settings"
                    title="Settings"
                />

                {/* User Management */}
                <div className="py-5 bg-white border border-[#F7F8FA] font-inter">
                    <div className="px-6 pb-5 border-b border-[#F7F8FA]">
                        <h1 className="text-[#111827] text-base lg:text-lg font-medium">User Management</h1>
                    </div>

                    {/* Users list */}
                    <div className="flex flex-col px-6 divide-y divide-[#F7F8FA]">
                        {users.map((user) => (
                            <div
                                key={user.id}
                                className="leading-4.5 py-4 flex w-full items-center justify-between"
                            >
                                <div>
                                    <h1 className="text-[#262C36] text-sm font-semibold">
                                        {user.name} · {user.role}
                                    </h1>
                                    <span className="font-normal text-[#5C6472] text-xs">
                                        {user.accessRights.length > 0
                                            ? user.accessRights.join(", ")
                                            : "Dashboard viewer"}
                                        {" · Last login: "}
                                        {user.lastLogin}
                                    </span>
                                </div>

                                {/* Actions popover menu */}
                                <div
                                    className="relative"
                                    ref={openMenuUserId === user.id ? menuRef : null}
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenMenuUserId(
                                                openMenuUserId === user.id ? null : user.id
                                            )
                                        }
                                        className="p-1 rounded hover:bg-gray-100 transition-colors text-[#5C6472]"
                                    >
                                        <EllipsisVertical className="w-5 h-5" />
                                    </button>

                                    {openMenuUserId === user.id && (
                                        <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-20 font-inter">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenMenuUserId(null);
                                                    setEditingUser(user);
                                                }}
                                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-[#262C36] hover:bg-gray-50 transition-colors"
                                            >
                                                <Pencil className="w-4 h-4 text-[#5C6472]" />
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenMenuUserId(null);
                                                    setDeletingUser(user);
                                                }}
                                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-[#DC2626] hover:bg-red-50/50 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4 text-[#DC2626]" />
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="px-6 pt-3 pb-5">
                        <Button
                            text="Invite Ministry User"
                            variant="blue"
                            onClick={() => setIsInviteModalOpen(true)}
                        />
                    </div>
                </div>

                {/* Interface Language */}
                <div className="py-5 bg-white border border-[#F7F8FA] font-inter">
                    <div className="px-6 pb-5 border-b border-[#F7F8FA]">
                        <h1 className="text-[#12151B] text-base lg:text-lg font-medium">Interface Language</h1>
                        <span className="text-[#5C6472] font-normal text-xs">Choose language for application interface</span>
                    </div>
                    <div className="flex items-center gap-8 px-6 py-5 bg-white">
                        {languageOptions.map((lang) => (
                            <label
                                key={lang.id}
                                className="flex items-center gap-3 cursor-pointer group"
                            >
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="radio"
                                        name="language_selection"
                                        value={lang.id}
                                        checked={selectedInterfaceLang === lang.id}
                                        onChange={() => setInterfaceSelectedLang(lang.id)}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`flex items-center justify-center size-6 rounded-full transition-colors ${selectedInterfaceLang === lang.id
                                            ? 'border-[#1A62F8] border-6'
                                            : 'border border-[#B3BABD] group-hover:border-gray-400'
                                            }`}
                                    >
                                        <div className="w-2 h-2 rounded-full transition-colors bg-[#FEFEFE]" />
                                    </div>
                                </div>

                                <span className="text-[#414957] text-sm font-normal">
                                    {lang.label}
                                </span>

                                <img
                                    src={lang.flagUrl}
                                    alt={`${lang.label} flag`}
                                    className="w-7 h-5 rounded-[3px] object-cover"
                                />
                            </label>
                        ))}
                    </div>
                </div>

                {/* Report Output Language */}
                <div className="py-5 bg-white border border-[#F7F8FA] font-inter">
                    <div className="px-6 pb-5 border-b border-[#F7F8FA]">
                        <h1 className="text-[#12151B] text-base lg:text-lg font-medium">Report Output Language</h1>
                        <span className="text-[#5C6472] font-normal text-xs">Choose language for report dan export document</span>
                    </div>
                    <div className="flex items-center gap-8 px-6 py-5 bg-white">
                        {languageOptions.map((lang) => (
                            <label
                                key={lang.id}
                                className="flex items-center gap-3 cursor-pointer group"
                            >
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="radio"
                                        name="report_language_selection"
                                        value={lang.id}
                                        checked={selectedReportLang === lang.id}
                                        onChange={() => setReportSelectedLang(lang.id)}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`flex items-center justify-center size-6 rounded-full transition-colors ${selectedReportLang === lang.id
                                            ? 'border-[#1A62F8] border-6'
                                            : 'border border-[#B3BABD] group-hover:border-gray-400'
                                            }`}
                                    >
                                        <div className="w-2 h-2 rounded-full transition-colors bg-[#FEFEFE]" />
                                    </div>
                                </div>

                                <span className="text-[#414957] text-sm font-normal">
                                    {lang.label}
                                </span>

                                <img
                                    src={lang.flagUrl}
                                    alt={`${lang.label} flag`}
                                    className="w-7 h-5 rounded-[3px] object-cover"
                                />
                            </label>
                        ))}
                    </div>
                </div>

                {/* Accessibility Settings */}
                <div className="py-5 bg-white border border-[#F7F8FA] font-inter rounded-lg">
                    <div className="px-4 sm:px-6 pb-5 border-b border-[#F7F8FA]">
                        <h1 className="text-[#12151B] text-base lg:text-lg font-medium">Accessibility Settings</h1>
                        <span className="text-[#5C6472] font-normal text-xs">
                            Customize your application to fit your needs
                        </span>
                    </div>

                    <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 bg-white gap-4">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                            <div className="flex items-center justify-center size-12 sm:size-14 shrink-0 bg-[#F8F9FB] border border-[#EFF5FF] rounded-lg p-1">
                                <SignalHigh strokeWidth={2} className="text-[#1A62F8] size-8 sm:size-10" />
                            </div>

                            <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-[#12151B] text-sm font-medium">
                                    High contrast mode
                                </span>
                                <span className="text-[#848D9B] text-xs font-normal">
                                    Increase contrast for better visibility.
                                </span>
                            </div>
                        </div>

                        <button
                            type="button"
                            role="switch"
                            aria-checked={isHighContrastEnabled}
                            onClick={() => setIsHighContrastEnabled(!isHighContrastEnabled)}
                            className={`relative inline-flex h-6 w-11 shrink-0 p-0.5 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out ${isHighContrastEnabled ? "bg-[#1A62F8]" : "bg-gray-200"
                                }`}
                        >
                            <span className="sr-only">Enable High contrast mode</span>
                            <span
                                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-xs transition-transform duration-200 ease-in-out ${isHighContrastEnabled ? "translate-x-5" : "translate-x-0"
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Edit User Modal */}
            <EditMinistryUserModal
                isOpen={Boolean(editingUser)}
                onClose={() => setEditingUser(null)}
                user={editingUser}
                onSave={handleSaveUser}
            />

            {/* Delete User Modal */}
            <DeleteMinistryUserModal
                isOpen={Boolean(deletingUser)}
                onClose={() => setDeletingUser(null)}
                user={deletingUser}
                onDelete={handleDeleteUser}
            />

            {/* Invite User Modal */}
            <InviteMinistryUserModal
                isOpen={isInviteModalOpen}
                onClose={() => setIsInviteModalOpen(false)}
                onInvite={handleInviteUser}
            />
        </>
    );
}
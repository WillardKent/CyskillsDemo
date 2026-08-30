import { useState } from "react";
import { Plus, X as XIcon } from "lucide-react";
import Modal from "../elements/Modal";
import Button from "../elements/Button";

// ─── Shared types ────────────────────────────────────────────

type GraduateEditData = {
    role: "graduate";
    name: string;
    degree: string;
    uoc: string;
    academicBackground: {
        university: string;
        graduationYear: string;
        degree: string;
        iscedField: string;
    };
    skills: string[];
};

type HeiEditData = {
    role: "hei";
    name: string;
    user: string;
    institutionDetails: {
        institutionType: string;
        country: string;
        established: string;
        website: string;
        contactEmail: string;
        phone: string;
    };
    facultiesAndPrograms: string[];
};

type MesyEditData = {
    role: "mesy";
    name: string;
    user: string;
    ministryInfo: {
        ministryName: string;
        role: string;
        department: string;
        contactEmail: string;
        phone: string;
    };
};

export type EditProfileData = GraduateEditData | HeiEditData | MesyEditData;

type EditProfileModalProps = {
    isOpen: boolean;
    onClose: () => void;
    profileImageUrl: string;
    data: EditProfileData;
    onSave: (data: EditProfileData) => void;
};

// ─── Reusable form field helpers ─────────────────────────────

const inputClass =
    "w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#3A3A3A] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

const selectClass =
    "w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#3A3A3A] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236B7280%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat";

const readOnlyClass =
    "w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#3A3A3A] bg-[#F9FAFB] outline-none";

function FormLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
    return (
        <label className="mb-2 block text-sm font-normal text-[#464855]">
            {children} {required && <span className="text-red-500">*</span>}
        </label>
    );
}

// ─── Component ───────────────────────────────────────────────

export default function EditProfileModal({
    isOpen,
    onClose,
    profileImageUrl,
    data,
    onSave,
}: EditProfileModalProps) {
    // Local copy of data for editing
    const [formData, setFormData] = useState<EditProfileData>(data);
    // Skill / faculty add input
    const [addInput, setAddInput] = useState("");

    // Reset form when modal opens with new data
    const handleOpen = () => {
        setFormData(data);
        setAddInput("");
    };

    // Use effect equivalent — we reset when `data` reference changes
    if (isOpen && formData.role !== data.role) {
        handleOpen();
    }

    // ── Graduate handlers ─────────────────────────────────────
    const updateGraduate = (patch: Partial<GraduateEditData>) => {
        if (formData.role === "graduate") {
            setFormData({ ...formData, ...patch });
        }
    };

    const updateGraduateAcademic = (patch: Partial<GraduateEditData["academicBackground"]>) => {
        if (formData.role === "graduate") {
            setFormData({
                ...formData,
                academicBackground: { ...formData.academicBackground, ...patch },
            });
        }
    };

    const removeSkill = (index: number) => {
        if (formData.role === "graduate") {
            setFormData({
                ...formData,
                skills: formData.skills.filter((_, i) => i !== index),
            });
        }
    };

    const addSkill = () => {
        if (formData.role === "graduate" && addInput.trim()) {
            setFormData({
                ...formData,
                skills: [...formData.skills, addInput.trim()],
            });
            setAddInput("");
        }
    };

    // ── HEI handlers ──────────────────────────────────────────
    const updateHei = (patch: Partial<HeiEditData>) => {
        if (formData.role === "hei") {
            setFormData({ ...formData, ...patch });
        }
    };

    const updateHeiInstitution = (patch: Partial<HeiEditData["institutionDetails"]>) => {
        if (formData.role === "hei") {
            setFormData({
                ...formData,
                institutionDetails: { ...formData.institutionDetails, ...patch },
            });
        }
    };

    const removeFaculty = (index: number) => {
        if (formData.role === "hei") {
            setFormData({
                ...formData,
                facultiesAndPrograms: formData.facultiesAndPrograms.filter((_, i) => i !== index),
            });
        }
    };

    const addFaculty = () => {
        if (formData.role === "hei" && addInput.trim()) {
            setFormData({
                ...formData,
                facultiesAndPrograms: [...formData.facultiesAndPrograms, addInput.trim()],
            });
            setAddInput("");
        }
    };

    // ── MESY handlers ─────────────────────────────────────────
    const updateMesyInfo = (patch: Partial<MesyEditData["ministryInfo"]>) => {
        if (formData.role === "mesy") {
            setFormData({
                ...formData,
                ministryInfo: { ...formData.ministryInfo, ...patch },
            });
        }
    };

    // ── Save ──────────────────────────────────────────────────
    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    // ── Footer ────────────────────────────────────────────────
    const footer = (
        <>
            <Button text="Close" variant="white" onClick={onClose} />
            <Button text="Save" variant="blue" onClick={handleSave} />
        </>
    );

    // ── Render role-specific form ─────────────────────────────

    const renderGraduateForm = () => {
        if (formData.role !== "graduate") return null;
        return (
            <div className="space-y-5 font-inter">
                {/* Name */}
                <div>
                    <FormLabel required>Name</FormLabel>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateGraduate({ name: e.target.value })}
                        className={inputClass}
                    />
                </div>

                {/* Degree */}
                <div>
                    <FormLabel required>Degree</FormLabel>
                    <input
                        type="text"
                        value={formData.degree}
                        onChange={(e) => updateGraduate({ degree: e.target.value })}
                        className={inputClass}
                    />
                </div>

                {/* UoC */}
                <div>
                    <FormLabel required>UoC</FormLabel>
                    <select
                        value={formData.uoc}
                        onChange={(e) => updateGraduate({ uoc: e.target.value })}
                        className={selectClass}
                    >
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>
                </div>

                {/* Academic Background */}
                <div>
                    <h3 className="text-base font-semibold text-[#12151B] mb-4">Academic Background</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <FormLabel required>University</FormLabel>
                            <select
                                value={formData.academicBackground.university}
                                onChange={(e) => updateGraduateAcademic({ university: e.target.value })}
                                className={selectClass}
                            >
                                <option value="University of Cyprus">University of Cyprus</option>
                                <option value="University of Malaya">University of Malaya</option>
                            </select>
                        </div>
                        <div>
                            <FormLabel required>Graduation Year</FormLabel>
                            <select
                                value={formData.academicBackground.graduationYear}
                                onChange={(e) => updateGraduateAcademic({ graduationYear: e.target.value })}
                                className={selectClass}
                            >
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2025">2025</option>
                            </select>
                        </div>
                        <div>
                            <FormLabel required>Degree</FormLabel>
                            <select
                                value={formData.academicBackground.degree}
                                onChange={(e) => updateGraduateAcademic({ degree: e.target.value })}
                                className={selectClass}
                            >
                                <option value="BSc Computer Science">BSc Computer Science</option>
                                <option value="MSc Computer Science">MSc Computer Science</option>
                                <option value="BA Economics">BA Economics</option>
                            </select>
                        </div>
                        <div>
                            <FormLabel required>ISCED Field</FormLabel>
                            <select
                                value={formData.academicBackground.iscedField}
                                onChange={(e) => updateGraduateAcademic({ iscedField: e.target.value })}
                                className={selectClass}
                            >
                                <option value="ICT & Computing">ICT &amp; Computing</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Business & Administration">Business &amp; Administration</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div>
                    <h3 className="text-base font-semibold text-[#12151B] mb-4">Skill</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {formData.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[100px] text-sm font-medium border border-[#E1E4E9] text-[#5C6472] bg-white"
                            >
                                {skill}
                                <button
                                    type="button"
                                    onClick={() => removeSkill(index)}
                                    className="text-[#9CA3AF] hover:text-[#5C6472] transition-colors"
                                >
                                    <XIcon className="w-3.5 h-3.5" />
                                </button>
                            </span>
                        ))}
                    </div>
                    <div>
                        <label className="mb-2 block text-xs font-normal text-[#464855]">Add Skill not Listed</label>
                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={addInput}
                                onChange={(e) => setAddInput(e.target.value)}
                                placeholder="Skill"
                                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                                className={`flex-1 ${inputClass}`}
                            />
                            <button
                                type="button"
                                onClick={addSkill}
                                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#3A3A3A] border border-[#D1D5DB] rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
                            >
                                <Plus className="w-4 h-4" />
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderHeiForm = () => {
        if (formData.role !== "hei") return null;
        return (
            <div className="space-y-5 font-inter">
                {/* Name of University */}
                <div>
                    <FormLabel required>Name of University</FormLabel>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateHei({ name: e.target.value })}
                        className={inputClass}
                    />
                </div>

                {/* User (read-only) */}
                <div>
                    <FormLabel>User</FormLabel>
                    <input
                        type="text"
                        value={formData.user}
                        readOnly
                        className={readOnlyClass}
                    />
                </div>

                {/* Institution Details */}
                <div>
                    <h3 className="text-base font-semibold text-[#12151B] mb-4">Institution Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <FormLabel>Institution Type</FormLabel>
                            <input
                                type="text"
                                value={formData.institutionDetails.institutionType}
                                onChange={(e) => updateHeiInstitution({ institutionType: e.target.value })}
                                className={inputClass}
                            />
                        </div>
                        <div>
                            <FormLabel>Country</FormLabel>
                            <input
                                type="text"
                                value={formData.institutionDetails.country}
                                onChange={(e) => updateHeiInstitution({ country: e.target.value })}
                                className={inputClass}
                            />
                        </div>
                        <div>
                            <FormLabel>Established</FormLabel>
                            <input
                                type="text"
                                value={formData.institutionDetails.established}
                                onChange={(e) => updateHeiInstitution({ established: e.target.value })}
                                className={inputClass}
                            />
                        </div>
                        <div>
                            <FormLabel required>Website</FormLabel>
                            <select
                                value={formData.institutionDetails.website}
                                onChange={(e) => updateHeiInstitution({ website: e.target.value })}
                                className={selectClass}
                            >
                                <option value="ICT & Computing">ICT &amp; Computing</option>
                                <option value="www.ucy.ac.cy">www.ucy.ac.cy</option>
                            </select>
                        </div>
                        <div>
                            <FormLabel required>Contact Email</FormLabel>
                            <select
                                value={formData.institutionDetails.contactEmail}
                                onChange={(e) => updateHeiInstitution({ contactEmail: e.target.value })}
                                className={selectClass}
                            >
                                <option value="admin@ucy.ac.cy">admin@ucy.ac.cy</option>
                            </select>
                        </div>
                        <div>
                            <FormLabel required>Phone</FormLabel>
                            <select
                                value={formData.institutionDetails.phone}
                                onChange={(e) => updateHeiInstitution({ phone: e.target.value })}
                                className={selectClass}
                            >
                                <option value="+357 22 892000">+357 22 892000</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Faculties & Programs */}
                <div>
                    <h3 className="text-base font-semibold text-[#12151B] mb-4">Faculties &amp; Programs</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-4">
                        {formData.facultiesAndPrograms.map((faculty, index) => (
                            <div key={index} className="flex items-center justify-between gap-2 p-2 rounded-lg bg-gray-50 border border-gray-100">
                                <span className="text-sm font-semibold text-[#3A3A3A] truncate">{faculty}</span>
                                <button
                                    type="button"
                                    onClick={() => removeFaculty(index)}
                                    className="text-[#9CA3AF] hover:text-[#5C6472] transition-colors shrink-0"
                                >
                                    <XIcon className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <label className="mb-2 block text-xs font-normal text-[#464855]">Add Skill not Listed</label>
                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={addInput}
                                onChange={(e) => setAddInput(e.target.value)}
                                placeholder="faculties & programs"
                                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addFaculty())}
                                className={`flex-1 ${inputClass}`}
                            />
                            <button
                                type="button"
                                onClick={addFaculty}
                                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#3A3A3A] border border-[#D1D5DB] rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
                            >
                                <Plus className="w-4 h-4" />
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderMesyForm = () => {
        if (formData.role !== "mesy") return null;
        return (
            <div className="space-y-5 font-inter">
                {/* Name */}
                <div>
                    <FormLabel required>Name</FormLabel>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                    />
                </div>

                {/* User (read-only) */}
                <div>
                    <FormLabel>User</FormLabel>
                    <input
                        type="text"
                        value={formData.user}
                        readOnly
                        className={readOnlyClass}
                    />
                </div>

                {/* Ministry Information */}
                <div>
                    <h3 className="text-base font-semibold text-[#12151B] mb-4">Ministry Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <FormLabel required>Ministry Name</FormLabel>
                            <select
                                value={formData.ministryInfo.ministryName}
                                onChange={(e) => updateMesyInfo({ ministryName: e.target.value })}
                                className={selectClass}
                            >
                                <option value="Ministry of Education, Sport and Youth">Ministry of Education, Sport and Youth</option>
                                <option value="Ministry of Finance">Ministry of Finance</option>
                            </select>
                        </div>
                        <div>
                            <FormLabel required>Role</FormLabel>
                            <select
                                value={formData.ministryInfo.role}
                                onChange={(e) => updateMesyInfo({ role: e.target.value })}
                                className={selectClass}
                            >
                                <option value="Policy Analyst">Policy Analyst</option>
                                <option value="Administrator">Administrator</option>
                                <option value="Director">Director</option>
                            </select>
                        </div>
                        <div>
                            <FormLabel required>Department</FormLabel>
                            <select
                                value={formData.ministryInfo.department}
                                onChange={(e) => updateMesyInfo({ department: e.target.value })}
                                className={selectClass}
                            >
                                <option value="Higher Education and Research">Higher Education and Research</option>
                                <option value="Primary Education">Primary Education</option>
                            </select>
                        </div>
                        <div>
                            <FormLabel required>Contact Email</FormLabel>
                            <input
                                type="text"
                                value={formData.ministryInfo.contactEmail}
                                onChange={(e) => updateMesyInfo({ contactEmail: e.target.value })}
                                className={inputClass}
                            />
                        </div>
                        <div>
                            <FormLabel required>Phone</FormLabel>
                            <input
                                type="text"
                                value={formData.ministryInfo.phone}
                                onChange={(e) => updateMesyInfo({ phone: e.target.value })}
                                className={inputClass}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Edit Profile"
            maxWidth="w-full max-w-2xl"
            footer={footer}
        >
            <div className="space-y-6 font-inter">
                {/* Profile Photo */}
                <div className="flex flex-col items-center gap-3 py-4">
                    <img
                        src={profileImageUrl}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                    />
                    <button
                        type="button"
                        className="text-sm font-medium text-[#3A3A3A] px-4 py-1.5 border border-[#D1D5DB] rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Change Photo Profile
                    </button>
                </div>

                {/* Role-specific form */}
                {formData.role === "graduate" && renderGraduateForm()}
                {formData.role === "hei" && renderHeiForm()}
                {formData.role === "mesy" && renderMesyForm()}
            </div>
        </Modal>
    );
}


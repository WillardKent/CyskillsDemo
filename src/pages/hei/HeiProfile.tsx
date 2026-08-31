import React, { useState } from 'react';
import ProfileCard from '../../elements/ProfileCard';
import type { DetailField } from '../../elements/ProfileCard';
import EditProfileModal from '../../components/EditProfileModal';
import type { EditProfileData } from '../../components/EditProfileModal';

export interface HeiProfileProps {
    name: string;
    subtitle: string; // e.g. "HEI"
    profileImageUrl: string;
    bannerImageUrl?: string;
    institutionDetails: {
        institutionType: string;
        country: string;
        contactEmail: string;
        established: string | number;
        website: string;
        phone: string;
    };
    summary: {
        faculties: number;
        programs: number;
        departments: number;
        activeUsers: number;
    };
    facultiesAndPrograms: string[];
}

const HeiProfile: React.FC<HeiProfileProps> = ({
    name,
    subtitle,
    profileImageUrl,
    bannerImageUrl,
    institutionDetails,
    summary,
    facultiesAndPrograms,
}) => {
    const [isEditOpen, setIsEditOpen] = useState(false);

    const detailFields: DetailField[] = [
        { label: 'Institution Type', value: institutionDetails.institutionType },
        { label: 'Country', value: institutionDetails.country },
        { label: 'Contact Email', value: institutionDetails.contactEmail },
        { label: 'Established', value: institutionDetails.established },
        { label: 'Website', value: institutionDetails.website },
        { label: 'Phone', value: institutionDetails.phone },
    ];

    const extraSections = (
        <>
            {/* Summary Card */}
            <div className="bg-white border border-[#F7F8FA] rounded-lg">
                <div className="border-b border-[#F7F8FA]">
                    <h2 className="text-sm md:text-base font-semibold text-[#000000] px-6 py-5">Summary</h2>
                </div>
                <div className="grid grid-cols-2 gap-y-6 gap-x-1 px-6 py-5">
                    <div>
                        <p className="text-sm font-medium text-[#888888] mb-1">Faculties</p>
                        <p className="text-sm font-semibold text-[#3A3A3A]">{summary.faculties}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-[#888888] mb-1">Programs</p>
                        <p className="text-sm font-semibold text-[#3A3A3A]">{summary.programs}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-[#888888] mb-1">Departments</p>
                        <p className="text-sm font-semibold text-[#3A3A3A]">{summary.departments}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-[#888888] mb-1">Active Users</p>
                        <p className="text-sm font-semibold text-[#3A3A3A]">{summary.activeUsers}</p>
                    </div>
                </div>
            </div>

            {/* Faculties & Programs Card */}
            <div className="bg-white border border-[#F7F8FA] rounded-lg">
                <div className="border-b border-[#F7F8FA]">
                    <h2 className="text-sm md:text-base font-semibold text-[#000000] px-6 py-5">Faculties &amp; Programs</h2>
                </div>
                <div className="grid grid-cols-2 gap-y-6 gap-x-1 px-6 py-5">
                    {facultiesAndPrograms.map((faculty, index) => (
                        <div key={index}>
                            <p className="text-sm font-semibold text-[#3A3A3A]">{faculty}</p>
                        </div>
                    ))}
                </div>
                <div className="px-6 pb-5">
                    <button className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border border-[#E1E4E9] text-[#5C6472] bg-white hover:bg-gray-50 transition-colors">
                        View all faculties &amp; programs
                    </button>
                </div>
            </div>
        </>
    );

    const editData: EditProfileData = {
        role: 'hei',
        name,
        user: subtitle,
        institutionDetails: {
            institutionType: institutionDetails.institutionType,
            country: institutionDetails.country,
            established: String(institutionDetails.established),
            website: institutionDetails.website,
            contactEmail: institutionDetails.contactEmail,
            phone: institutionDetails.phone,
        },
        facultiesAndPrograms: [...facultiesAndPrograms],
    };

    return (
        <>
            <ProfileCard
                name={name}
                subtitle={subtitle}
                profileImageUrl={profileImageUrl}
                bannerImageUrl={bannerImageUrl}
                avatarBorderColor="border-yellow-500"
                detailSectionTitle="Institution Details"
                detailFields={detailFields}
                gridColumns={3}
                extraSections={extraSections}
                onEdit={() => setIsEditOpen(true)}
            />

            <EditProfileModal
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                profileImageUrl={profileImageUrl}
                data={editData}
                onSave={(data) => console.log('Saved HEI profile:', data)}
            />
        </>
    );
};

export default HeiProfile;

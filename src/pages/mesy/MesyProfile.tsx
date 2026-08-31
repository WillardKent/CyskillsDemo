import React, { useState } from 'react';
import ProfileCard from '../../elements/ProfileCard';
import type { DetailField } from '../../elements/ProfileCard';
import EditProfileModal from '../../components/EditProfileModal';
import type { EditProfileData } from '../../components/EditProfileModal';

export interface MesyProfileProps {
    name: string;
    subtitle: string; // e.g. "Government of the Republic of Cyprus"
    profileImageUrl: string;
    bannerImageUrl?: string;
    ministryInfo: {
        ministryName: string;
        role: string;
        contactEmail: string;
        department: string;
        accessLevel: string;
        phone: string;
    };
    summary: {
        dataSourcesAccessed: number;
        dataRequests: number;
        activeSessions: number;
    };
}

const MesyProfile: React.FC<MesyProfileProps> = ({
    name,
    subtitle,
    profileImageUrl,
    bannerImageUrl,
    ministryInfo,
    summary,
}) => {
    const [isEditOpen, setIsEditOpen] = useState(false);

    const detailFields: DetailField[] = [
        { label: 'Ministry Name', value: ministryInfo.ministryName },
        { label: 'Role', value: ministryInfo.role },
        { label: 'Contact Email', value: ministryInfo.contactEmail },
        { label: 'Department', value: ministryInfo.department },
        { label: 'Access Level', value: ministryInfo.accessLevel },
        { label: 'Phone', value: ministryInfo.phone },
    ];

    const extraSections = (
        <div className="bg-white border border-[#F7F8FA] rounded-lg">
            <div className="border-b border-[#F7F8FA]">
                <h2 className="text-sm md:text-base font-semibold text-[#000000] px-6 py-5">Summary</h2>
            </div>
            <div className="grid grid-cols-3 gap-y-6 gap-x-1 px-6 py-5">
                <div>
                    <p className="text-sm font-medium text-[#888888] mb-1">Data Sources Accessed</p>
                    <p className="text-sm font-semibold text-[#3A3A3A]">{summary.dataSourcesAccessed}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-[#888888] mb-1">Data Requests</p>
                    <p className="text-sm font-semibold text-[#3A3A3A]">{summary.dataRequests}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-[#888888] mb-1">Active Sessions</p>
                    <p className="text-sm font-semibold text-[#3A3A3A]">{summary.activeSessions}</p>
                </div>
            </div>
        </div>
    );

    const editData: EditProfileData = {
        role: 'mesy',
        name,
        user: subtitle,
        ministryInfo: {
            ministryName: ministryInfo.ministryName,
            role: ministryInfo.role,
            department: ministryInfo.department,
            contactEmail: ministryInfo.contactEmail,
            phone: ministryInfo.phone,
        },
    };

    return (
        <>
            <ProfileCard
                name={name}
                subtitle={subtitle}
                profileImageUrl={profileImageUrl}
                bannerImageUrl={bannerImageUrl}
                avatarBorderColor="border-emerald-400"
                detailSectionTitle="Ministry Information"
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
                onSave={(data) => console.log('Saved MESY profile:', data)}
            />
        </>
    );
};

export default MesyProfile;

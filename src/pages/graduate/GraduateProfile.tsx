import React, { useState } from 'react';
import ProfileCard from '../../elements/ProfileCard';
import type { DetailField } from '../../elements/ProfileCard';
import EditProfileModal from '../../components/EditProfileModal';
import type { EditProfileData } from '../../components/EditProfileModal';

// Define the shape of the data needed for the profile
export interface AcademicBackground {
    university: string;
    degree: string;
    graduationYear: string | number;
    iscedField: string;
}

export interface GraduateProfileProps {
    name: string;
    headline: string;
    profileImageUrl: string;
    bannerImageUrl?: string; // Optional if you want to allow custom banners
    status: string;
    academicBackground: AcademicBackground;
    skills: string[];
}

const GraduateProfile: React.FC<GraduateProfileProps> = ({
    name,
    headline,
    profileImageUrl,
    bannerImageUrl,
    status,
    academicBackground,
    skills,
}) => {
    const [isEditOpen, setIsEditOpen] = useState(false);

    const detailFields: DetailField[] = [
        { label: 'University', value: academicBackground.university },
        { label: 'Degree', value: academicBackground.degree },
        { label: 'Graduation Year', value: academicBackground.graduationYear },
        { label: 'ISCED Field', value: academicBackground.iscedField },
    ];

    const skillsSection = (
        <div className="bg-white border border-[#F7F8FA] rounded-lg ">
            <div className="border-b border-[#F7F8FA]">
                <h2 className="text-base font-semibold text-[#000000] px-6 py-5">Skill</h2>
            </div>
            <div className="flex flex-wrap gap-3 px-6 py-5">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="inline-flex items-center p-2.5 rounded-[100px] text-sm font-medium border border-[#E1E4E9] text-[#5C6472] bg-white"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );

    const editData: EditProfileData = {
        role: 'graduate',
        name,
        degree: headline,
        uoc: '2024',
        academicBackground: {
            university: academicBackground.university,
            graduationYear: String(academicBackground.graduationYear),
            degree: academicBackground.degree,
            iscedField: academicBackground.iscedField,
        },
        skills: [...skills],
    };

    return (
        <>
            <ProfileCard
                name={name}
                subtitle={headline}
                profileImageUrl={profileImageUrl}
                bannerImageUrl={bannerImageUrl}
                avatarBorderColor="border-blue-600"
                statusTag={{ text: status, variant: 'info' }}
                detailSectionTitle="Academic Background"
                detailFields={detailFields}
                gridColumns={2}
                extraSections={skillsSection}
                onEdit={() => setIsEditOpen(true)}
            />

            <EditProfileModal
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                profileImageUrl={profileImageUrl}
                data={editData}
                onSave={(data) => console.log('Saved graduate profile:', data)}
            />
        </>
    );
};

export default GraduateProfile;
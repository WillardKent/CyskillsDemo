import React, { useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import HeaderBanner from './HeaderBanner';
import { Tag } from './Tag';
import type { TagVariant } from './Tag';
import { Pencil } from 'lucide-react';

// A single label/value pair rendered in the detail grid
export interface DetailField {
    label: string;
    value: string | number;
}

export interface ProfileCardProps {
    name: string;
    subtitle: string;
    profileImageUrl: string;
    bannerImageUrl?: string;
    avatarBorderColor?: string; // Tailwind border-color class, e.g. "border-blue-600"
    statusTag?: {
        text: string;
        variant?: TagVariant;
    };
    detailSectionTitle: string;
    detailFields: DetailField[];
    gridColumns?: 2 | 3; // number of columns in the detail grid
    extraSections?: ReactNode; // role-specific cards rendered below the main card
    onEdit?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    subtitle,
    profileImageUrl,
    bannerImageUrl,
    avatarBorderColor = 'border-blue-600',
    statusTag,
    detailSectionTitle,
    detailFields,
    gridColumns = 2,
    extraSections,
    onEdit,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        }
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const gridColsClass = gridColumns === 3
        ? 'grid-cols-2 sm:grid-cols-3'
        : 'grid-cols-2 sm:grid-cols-2';

    return (
        <div className="flex flex-col w-full gap-2 font-inter">

            <HeaderBanner breadcrumb="My Profile"
                title="My Profile"
            />
            {/* --- Profile & Details Card --- */}
            <div className="bg-white border border-[#F7F8FA] rounded-lg overflow-hidden relative">

                {/* Banner Section */}
                <div
                    className="h-32 bg-gray-50 w-full"
                    style={bannerImageUrl ? { backgroundImage: `url(${bannerImageUrl})`, backgroundSize: 'cover' } : {}}
                ></div>

                {/* Profile Details Container */}
                <div className="px-6 pb-8 relative">

                    {/* Top Row: Avatar & Actions Menu */}
                    <div className="flex justify-between items-start">
                        {/* Avatar (Overlapping banner) */}
                        <div className="relative -mt-12">
                            <img
                                src={profileImageUrl}
                                alt={`${name} Profile`}
                                className={`w-28 h-28 rounded-full border-4 ${avatarBorderColor} object-cover bg-white`}
                            />
                        </div>

                        {/* More Options Icon (...) with dropdown */}
                        <div className="relative" ref={menuRef}>
                            <button
                                className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                            </button>

                            {/* Edit Dropdown */}
                            {isMenuOpen && (
                                <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10">
                                    <button
                                        className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-[#3A3A3A] hover:bg-gray-50 transition-colors"
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            onEdit?.();
                                        }}
                                    >
                                        <Pencil className="w-4 h-4 text-[#5C6472]" />
                                        Edit
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="mt-3">
                        <h1 className="text-lg min-[401px]:text-xl lg:text-2xl font-medium text-[#262C36]">{name}</h1>
                        <p className="text-sm md:text-base font-medium text-[#5C6472] mt-1">{subtitle}</p>
                        {statusTag && (
                            <div className="mt-3">
                                <Tag variant={statusTag.variant ?? 'info'}>{statusTag.text}</Tag>
                            </div>
                        )}
                    </div>

                    {/* Detail Fields Section */}
                    <div className="mt-8">
                        <h2 className="text-base lg:text-lg font-medium text-[#12151B] mb-4">{detailSectionTitle}</h2>

                        <div className={`grid ${gridColsClass} gap-y-6 gap-x-1`}>
                            {detailFields.map((field, index) => (
                                <div key={index}>
                                    <p className="text-sm font-medium text-[#888888] mb-1">{field.label}</p>
                                    <p className="text-sm font-semibold text-[#3A3A3A]">{field.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra role-specific sections */}
            {extraSections}

        </div>
    );
};

export default ProfileCard;

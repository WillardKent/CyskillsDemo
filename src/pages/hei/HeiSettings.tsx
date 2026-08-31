
import HeaderBanner from "../../elements/HeaderBanner";
import { useState } from "react";
import { SignalHigh } from "lucide-react";
type LanguageCode = 'en' | 'el';

interface LanguageOption {
    id: LanguageCode;
    label: string;
    flagUrl: string;
}

const languageOptions: LanguageOption[] = [
    { id: 'en', label: 'English (EN)', flagUrl: 'https://flagcdn.com/w40/gb.png' },
    { id: 'el', label: 'Ελληνικά (ΕΛ)', flagUrl: 'https://flagcdn.com/w40/gr.png' },
]




export default function HeiSettings() {

    const [selectedInterfaceLang, setInterfaceSelectedLang] = useState<LanguageCode>('en');
    const [selectedReportLang, setReportSelectedLang] = useState<LanguageCode>('en');
    const [isHighContrastEnabled, setIsHighContrastEnabled] = useState<boolean>(true);
    return (
        <>


            <div className="flex flex-col w-full gap-2">

                <HeaderBanner breadcrumb="Settings"
                    title="Settings & Support"
                    description=""

                />




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
                                {/* Custom Radio Button */}
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
                                        className={`flex items-center justify-center size-6 rounded-full  transition-colors ${selectedInterfaceLang === lang.id
                                            ? 'border-[#1A62F8] border-6 ' // Tailwind blue-600
                                            : 'border border-[#B3BABD] group-hover:border-gray-400'
                                            }`}
                                    >
                                        <div
                                            className={`w-2 h-2 rounded-full transition-colors bg-[#FEFEFE]'
                                                }`}
                                        />
                                    </div>
                                </div>

                                {/* Label Text */}
                                <span className="text-[#414957] text-sm font-normal">
                                    {lang.label}
                                </span>

                                {/* Flag Icon */}
                                <img
                                    src={lang.flagUrl}
                                    alt={`${lang.label} flag`}
                                    className="w-7 h-5 rounded-[3px] object-cover"
                                />
                            </label>
                        ))}
                    </div>
                </div>

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
                                {/* Custom Radio Button */}
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="radio"
                                        name="language_selection"
                                        value={lang.id}
                                        checked={selectedReportLang === lang.id}
                                        onChange={() => setReportSelectedLang(lang.id)}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`flex items-center justify-center size-6 rounded-full  transition-colors ${selectedReportLang === lang.id
                                            ? 'border-[#1A62F8] border-6 ' // Tailwind blue-600
                                            : 'border border-[#B3BABD] group-hover:border-gray-400'
                                            }`}
                                    >
                                        <div
                                            className={`w-2 h-2 rounded-full transition-colors bg-[#FEFEFE]'
                                                }`}
                                        />
                                    </div>
                                </div>

                                {/* Label Text */}
                                <span className="text-[#414957] text-sm font-normal">
                                    {lang.label}
                                </span>

                                {/* Flag Icon */}
                                <img
                                    src={lang.flagUrl}
                                    alt={`${lang.label} flag`}
                                    className="w-7 h-5 rounded-[3px] object-cover"
                                />
                            </label>
                        ))}
                    </div>
                </div>


                <div className="py-5 bg-white border border-[#F7F8FA] font-inter rounded-lg">
                    {/* Header Section */}
                    <div className="px-4 sm:px-6 pb-5 border-b border-[#F7F8FA]">
                        <h1 className="text-[#12151B] text-base lg:text-lg font-medium">Accessibility Settings</h1>
                        <span className="text-[#5C6472] font-normal text-xs">
                            Customize your application to fit your needs
                        </span>
                    </div>

                    {/* Content Section */}
                    <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 bg-white gap-4">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                            {/* Icon Container */}
                            <div className="flex items-center justify-center size-12 sm:size-14 shrink-0 bg-[#F8F9FB] border border-[#EFF5FF] rounded-lg p-1">
                                <SignalHigh strokeWidth={2} className="text-[#1A62F8] size-8 sm:size-10" />
                            </div>

                            {/* Label and Description */}
                            <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-[#12151B] text-sm font-medium">
                                    High contrast mode
                                </span>
                                <span className="text-[#848D9B] text-xs font-normal">
                                    Increase contrast for better visibility.
                                </span>
                            </div>
                        </div>

                        {/* Custom Toggle Switch */}
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

            </div >

        </>
    );
}
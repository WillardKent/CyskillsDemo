
import HeaderBanner from "../../elements/HeaderBanner";
import Button from "../../elements/Button";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
type LanguageCode = 'en' | 'el';

interface LanguageOption {
    id: LanguageCode;
    label: string;
    flagUrl: string;
}

const languageOptions: LanguageOption[] = [
    { id: 'en', label: 'English (EN)', flagUrl: 'https://flagcdn.com/w40/gb.png' },
    { id: 'el', label: 'Ελληνικά (ΕΛ)', flagUrl: 'https://flagcdn.com/w40/gb.png' },
];
export default function MesySetting() {


    const [selectedLang, setSelectedLang] = useState<LanguageCode>('en');

    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="Settings"
                    title="Settings"
                />

                <div className="py-5 bg-white border border-[#F7F8FA] font-inter">
                    <div className="px-6 pb-5 border-b border-[#F7F8FA]">
                        <h1 className="text-[#111827] text-lg font-medium">Ministry Profile</h1>
                    </div>
                    <div className="px-6 py-5">
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Ministry Name <span className="text-red-500">*</span>
                        </label>

                        <select
                            value="republic-of-cyprus"

                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="republic-of-cyprus">
                                Ministry of Education, Sport and Youth
                            </option>

                            <option value="subject-1">
                                Subject 1
                            </option>

                            <option value="subject-2">
                                Subject 2
                            </option>
                        </select>
                    </div>
                    <div className="px-6 pb-5">
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Country <span className="text-red-500">*</span>
                        </label>

                        <select
                            value="republic-of-cyprus"

                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="republic-of-cyprus">
                                Republic of Cyprus
                            </option>

                            <option value="subject-1">
                                Subject 1
                            </option>

                            <option value="subject-2">
                                Subject 2
                            </option>
                        </select>
                    </div>
                    <div className="px-6 pb-5">
                        <label className="mb-2 block text-sm font-normal text-[#464855]">
                            Department <span className="text-red-500">*</span>
                        </label>

                        <select
                            value="republic-of-cyprus"

                            className="w-full rounded-lg border border-[#D1D5DB] px-4 py-3 text-sm font-normal text-[#7F8089] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="republic-of-cyprus">
                                Higher Education Directorate
                            </option>

                            <option value="subject-1">
                                Subject 1
                            </option>

                            <option value="subject-2">
                                Subject 2
                            </option>
                        </select>
                    </div>
                    <div className="px-6 pb-5">
                        <Button text="Save Changes"
                            variant="blue" />
                    </div>
                </div>


                <div className="py-5 bg-white border border-[#F7F8FA] font-inter">
                    <div className="px-6 pb-5 border-b border-[#F7F8FA]">
                        <h1 className="text-[#111827] text-lg font-medium">Supply by programme domain</h1>
                    </div>
                    <div className="flex flex-col px-6 pb-5 ">
                        <div className="leading-4.5 pb-5 flex w-full items-center justify-between">
                            <div>
                                <h1 className="text-[#262C36] text-sm font-semibold ">Maria Papadopoulou · Senior Policy Analyst</h1>
                                <span className="font-normal text-[#5C6472] text-xs">Full access · Last login: Today</span>
                            </div>
                            <button><EllipsisVertical /></button>
                        </div>

                        <div className="leading-4.5 py-5 flex w-full items-center justify-between">
                            <div>
                                <h1 className="text-[#262C36] text-sm font-semibold ">Andreas Nicolaou · Policy Analyst</h1>
                                <span className="font-normal text-[#5C6472] text-xs">Dashboard viewer · Last login: 2 days ago</span>
                            </div>
                            <button><EllipsisVertical /></button>
                        </div>

                        <div className="leading-4.5 pt-5 pb-2 flex w-full items-center justify-between">
                            <div>
                                <h1 className="text-[#262C36] text-sm font-semibold ">Christina Ioannou · Director General</h1>
                                <span className="font-normal text-[#5C6472] text-xs">Executive briefing view · Last login: 1 week ago</span>
                            </div>
                            <button><EllipsisVertical /></button>
                        </div>
                    </div>
                    <div className="px-6 pb-5">
                        <Button text="Invite Ministry User"
                            variant="blue" />
                    </div>
                </div>

                <div className="py-5 bg-white border border-[#F7F8FA] font-inter">
                    <div className="px-6 pb-5 border-b border-[#F7F8FA]">
                        <h1 className="text-[#111827] text-lg font-medium">Interface Language</h1>
                        <span className="text-[#000000] font-normal text-xs">Choose language for application interface</span>
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
                                        checked={selectedLang === lang.id}
                                        onChange={() => setSelectedLang(lang.id)}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`flex items-center justify-center w-5 h-5 rounded-full border-[2.5px] transition-colors ${selectedLang === lang.id
                                            ? 'border-[#2563eb]' // Tailwind blue-600
                                            : 'border-gray-300 group-hover:border-gray-400'
                                            }`}
                                    >
                                        <div
                                            className={`w-2 h-2 rounded-full transition-colors ${selectedLang === lang.id ? 'bg-[#2563eb]' : 'bg-transparent'
                                                }`}
                                        />
                                    </div>
                                </div>

                                {/* Label Text */}
                                <span className="text-gray-600 text-[15px]">
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
            </div>



        </>
    );
}
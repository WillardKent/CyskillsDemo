import React, { useState, useMemo } from 'react';
import { useAuth } from '../../auth/useAuth';

interface GraduateRegisterProps {
    onBackToLogin: () => void;
}

export default function GraduateRegister({ onBackToLogin }: GraduateRegisterProps) {
    const { login } = useAuth();
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

    // Step 1: Your Profile
    const [fullName, setFullName] = useState('Maria Papadopoulou');
    const [profileEmail, setProfileEmail] = useState('MariaPapadopoulou@mail.com');
    const [profilePassword, setProfilePassword] = useState('');
    const [showProfilePassword, setShowProfilePassword] = useState(false);

    // Password strength check logic: alphanumeric with special char, min 8 chars
    const passwordEvaluation = useMemo(() => {
        const missing: string[] = [];

        if (profilePassword.length < 8) {
            const remaining = 8 - profilePassword.length;
            missing.push(`missing ${remaining} character${remaining > 1 ? 's' : ''} (min 8)`);
        }
        if (!/[a-zA-Z]/.test(profilePassword)) {
            missing.push('need at least 1 letter');
        }
        if (!/[0-9]/.test(profilePassword)) {
            missing.push('need at least 1 number');
        }
        if (!/[!@#$%^&*(),.?":{}|<>_\-+=[\]\\/]/.test(profilePassword)) {
            missing.push('need at least 1 special character');
        }

        if (profilePassword.length === 0) {
            return {
                status: 'empty' as const,
                missing,
                message: 'Password must be alphanumeric with special character and 8+ characters',
                barCount: 0,
            };
        }

        if (missing.length === 0) {
            return {
                status: 'success' as const,
                missing: [],
                message: 'Strong password — meets all criteria!',
                barCount: 4,
            };
        }

        if (missing.length === 1) {
            return {
                status: 'warning' as const,
                missing,
                message: `Almost there — ${missing[0]}`,
                barCount: 3,
            };
        }

        return {
            status: 'danger' as const,
            missing,
            message: `Unsecured — ${missing.join(', ')}`,
            barCount: profilePassword.length > 0 ? (profilePassword.length >= 6 ? 2 : 1) : 0,
        };
    }, [profilePassword]);

    // Step 2: Academic Background
    const [universities, setUniversities] = useState<string[]>([
        'University of Cyprus',
        'Cyprus University of Technology',
        'Open University of Cyprus',
        'European University Cyprus',
        'University of Nicosia',
        'Frederick University',
        'Neapolis University Pafos',
    ]);
    const [university, setUniversity] = useState('University of Cyprus');
    const [isCustomUni, setIsCustomUni] = useState(false);
    const [customUniInput, setCustomUniInput] = useState('');

    const [fieldsOfStudy, setFieldsOfStudy] = useState<string[]>([
        'Engineering',
        'Information and Communication Technologies',
        'Business, Administration and Law',
        'Natural Sciences, Mathematics and Statistics',
        'Health and Welfare',
        'Arts and Humanities',
    ]);
    const [fieldOfStudy, setFieldOfStudy] = useState('Engineering');
    const [isCustomField, setIsCustomField] = useState(false);
    const [customFieldInput, setCustomFieldInput] = useState('');

    // Graduation years: current year and past 15 years
    const currentYear = new Date().getFullYear();
    const initialGradYears = Array.from({ length: 16 }, (_, i) => String(currentYear - i));
    const [graduationYears, setGraduationYears] = useState<string[]>(initialGradYears);
    const [graduationYear, setGraduationYear] = useState(String(currentYear));
    const [isCustomYear, setIsCustomYear] = useState(false);
    const [customYearInput, setCustomYearInput] = useState('');

    const [employmentStatus, setEmploymentStatus] = useState<'seeking' | 'employed'>('seeking');

    const [locations, setLocations] = useState<string[]>([
        'Nicosia',
        'Limassol',
        'Larnaca',
        'Paphos',
        'Famagusta',
        'All Cyprus',
    ]);
    const [location, setLocation] = useState('Nicosia');
    const [isCustomLocation, setIsCustomLocation] = useState(false);
    const [customLocationInput, setCustomLocationInput] = useState('');

    // Helpers to add custom choices
    const handleAddCustomUniversity = () => {
        const trimmed = customUniInput.trim();
        if (trimmed) {
            if (!universities.includes(trimmed)) {
                setUniversities((prev) => [...prev, trimmed]);
            }
            setUniversity(trimmed);
            setCustomUniInput('');
            setIsCustomUni(false);
        }
    };

    const handleAddCustomField = () => {
        const trimmed = customFieldInput.trim();
        if (trimmed) {
            if (!fieldsOfStudy.includes(trimmed)) {
                setFieldsOfStudy((prev) => [...prev, trimmed]);
            }
            setFieldOfStudy(trimmed);
            setCustomFieldInput('');
            setIsCustomField(false);
        }
    };

    const handleAddCustomYear = () => {
        const trimmed = customYearInput.trim();
        if (trimmed) {
            if (!graduationYears.includes(trimmed)) {
                setGraduationYears((prev) => [...prev, trimmed]);
            }
            setGraduationYear(trimmed);
            setCustomYearInput('');
            setIsCustomYear(false);
        }
    };

    const handleAddCustomLocation = () => {
        const trimmed = customLocationInput.trim();
        if (trimmed) {
            if (!locations.includes(trimmed)) {
                setLocations((prev) => [...prev, trimmed]);
            }
            setLocation(trimmed);
            setCustomLocationInput('');
            setIsCustomLocation(false);
        }
    };

    // Step 3: Skills
    const [skillsList, setSkillsList] = useState<string[]>([
        'Data Analysis',
        'Excel / Spreadsheets',
        'Python',
        'Power BI',
        'Cloud Computing',
        'Machine Learning',
        'JavaScript',
        'Project Management',
        'Financial Modeling',
        'UX Research',
        'Figma',
        'Digital Marketing',
        'SEO / SEM',
        'Problem Solving',
        'Communication',
        'Leadership',
        'Cloud (AWS/Azure)',
        'SQL',
    ]);
    const [selectedSkills, setSelectedSkills] = useState<string[]>([
        'Data Analysis',
        'Excel / Spreadsheets',
    ]);
    const [customSkill, setCustomSkill] = useState('');

    const toggleSkill = (skill: string) => {
        setSelectedSkills((prev) =>
            prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
        );
    };

    const handleAddCustomSkill = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const trimmed = customSkill.trim();
        if (trimmed && !skillsList.includes(trimmed)) {
            setSkillsList((prev) => [...prev, trimmed]);
            setSelectedSkills((prev) => [...prev, trimmed]);
            setCustomSkill('');
        }
    };

    // Step 4: Career Interests
    const careerOptions = [
        {
            id: 'data-analytics',
            title: 'Data & Analytics',
            description: 'Turning numbers into business decisions',
            icon: (
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            ),
        },
        {
            id: 'software-dev',
            title: 'Software Development',
            description: 'Building products and applications',
            icon: (
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <polyline points="10 13 8 15 10 17"></polyline>
                    <polyline points="14 13 16 15 14 17"></polyline>
                </svg>
            ),
        },
        {
            id: 'ai-ml',
            title: 'AI & Machine Learning',
            description: 'Intelligent systems and models',
            icon: (
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <circle cx="12" cy="14" r="2"></circle>
                    <path d="M12 10v2m0 4v2m-4-4h2m4 0h2"></path>
                </svg>
            ),
        },
        {
            id: 'finance-consulting',
            title: 'Finance & Consulting',
            description: 'Strategy, banking, and advisory',
            icon: (
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="18" x2="12" y2="12"></line>
                    <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
            ),
        },
        {
            id: 'design-ux',
            title: 'Design & UX',
            description: 'Creating user experiences and visuals',
            icon: (
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <circle cx="10" cy="14" r="2"></circle>
                    <circle cx="14" cy="14" r="2"></circle>
                </svg>
            ),
        },
        {
            id: 'marketing-growth',
            title: 'Marketing & Growth',
            description: 'Growing products and brands',
            icon: (
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <polyline points="9 17 12 12 15 15 18 10"></polyline>
                </svg>
            ),
        },
    ];
    const [selectedInterests, setSelectedInterests] = useState<string[]>(['data-analytics']);

    const toggleInterest = (id: string) => {
        setSelectedInterests((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Step 5: Goals & Timeline
    const [workLocations, setWorkLocations] = useState<string[]>(['Cyprus', 'Europe (Remote)']);
    const [startTimeline, setStartTimeline] = useState<string>('ASAP (within 1 month)');

    const toggleWorkLocation = (loc: string) => {
        setWorkLocations((prev) =>
            prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc]
        );
    };

    const handleComplete = () => {
        login({ email: 'graduate@ucy.ac.cy', password: 'password', role: 'graduate' });
    };

    const steps = [
        { number: 1, title: 'Your Profile', subtitle: 'Tell us about yourself' },
        { number: 2, title: 'Your Background', subtitle: 'Education & degree' },
        { number: 3, title: 'Your Skills', subtitle: 'What you already know' },
        { number: 4, title: 'Career Interests', subtitle: 'What you want to do' },
        { number: 5, title: 'Goals & Timeline', subtitle: 'When & where' },
    ];

    // Analyzing profile modal overlay
    if (isAnalyzing) {
        return (
            <div
                className="
                    w-full min-h-screen 
                    bg-[#000A2B] 
                    bg-[radial-gradient(83.28%_78.75%_at_-4.46%_-12.96%,rgba(56,95,201,0.4)_0%,rgba(56,95,201,0)_100%),radial-gradient(94.25%_77.34%_at_135.89%_37.24%,rgba(31,165,215,0.5)_0%,rgba(31,165,215,0)_100%),radial-gradient(73.82%_73.71%_at_16.9%_115.92%,rgba(36,226,203,0.2)_0%,rgba(36,226,203,0)_100%)]
                    flex items-center justify-center 
                    p-6
                "
            >
                <style>{`
                    @keyframes popIn {
                        from { opacity: 0; transform: scale(0.96) translateY(8px); }
                        to { opacity: 1; transform: scale(1) translateY(0); }
                    }
                    .modal-animate {
                        animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }
                `}</style>
                <div className="w-full max-w-lg bg-white rounded-2xl p-8 md:p-10 shadow-2xl modal-animate">
                    <h2 className="text-2xl font-bold text-[#000A2B] mb-2">Analyzing your profile...</h2>
                    <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                        Our AI is matching your skills against thousands of roles and real job listings in Cyprus.
                    </p>

                    <div className="space-y-3">
                        <div className="border border-gray-200 rounded-lg p-3.5 text-xs text-gray-700 font-medium bg-white">
                            Profile & education analyzed
                        </div>
                        <div className="border border-gray-200 rounded-lg p-3.5 text-xs text-gray-700 font-medium bg-white">
                            Skills mapped to ESCO taxonomy
                        </div>
                        <div className="border border-gray-200 rounded-lg p-3.5 text-xs text-gray-700 font-medium bg-white">
                            Matching you with career roles & job listings...
                        </div>
                        <div className="border border-gray-200 rounded-lg p-3.5 text-xs text-gray-700 font-medium bg-white">
                            Generating your personalized action plan
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleComplete}
                        className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-medium py-3 rounded-lg text-sm transition-colors mt-6 text-center cursor-pointer shadow-sm"
                    >
                        See my Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen flex flex-col lg:flex-row font-sans">
            <style>{`
                @keyframes fadeInSlide {
                    from {
                        opacity: 0;
                        transform: translateY(8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .step-content-animate {
                    animation: fadeInSlide 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>

            {/* Left Stepper / Navigation Sidebar */}
            <div
                className="
                    w-full lg:w-1/2
                    min-h-screen
                    bg-[#000A2B] 
                    bg-[radial-gradient(83.28%_78.75%_at_-4.46%_-12.96%,rgba(56,95,201,0.4)_0%,rgba(56,95,201,0)_100%),radial-gradient(94.25%_77.34%_at_135.89%_37.24%,rgba(31,165,215,0.5)_0%,rgba(31,165,215,0)_100%),radial-gradient(73.82%_73.71%_at_16.9%_115.92%,rgba(36,226,203,0.2)_0%,rgba(36,226,203,0)_100%)]
                    flex flex-col justify-center
                    p-10 lg:p-20 xl:p-44
                    text-white
                "
            >
                <div className="max-w-lg w-full">
                    {/* Brand Heading */}
                    <h1 className="text-3xl font-bold tracking-tight mb-14">CySKILLS-AI</h1>

                    {/* Step list - Clickable Stepper */}
                    <div className="space-y-8">
                        {steps.map((step) => {
                            const isCurrent = currentStep === step.number;
                            const isPassed = currentStep > step.number;
                            const isDoneOrActive = isCurrent || isPassed;

                            return (
                                <button
                                    key={step.number}
                                    type="button"
                                    onClick={() => setCurrentStep(step.number)}
                                    className="flex items-start gap-4.5 text-left w-full group cursor-pointer transition-all duration-200"
                                >
                                    <div
                                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 transition-all duration-200 ${isDoneOrActive
                                            ? 'bg-white text-[#000A2B] shadow-md ring-2 ring-white/25'
                                            : 'border border-white/30 text-white/70 bg-transparent group-hover:border-white/60 group-hover:text-white'
                                            }`}
                                    >
                                        {step.number}
                                    </div>
                                    <div className="pt-0.5">
                                        <h3
                                            className={`text-base font-semibold transition-colors ${isDoneOrActive
                                                ? 'text-white'
                                                : 'text-gray-400 group-hover:text-gray-200'
                                                }`}
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            className={`text-sm transition-colors mt-0.5 ${isDoneOrActive
                                                ? 'text-gray-300'
                                                : 'text-gray-500 group-hover:text-gray-400'
                                                }`}
                                        >
                                            {step.subtitle}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Right Section - Form Content */}
            <div className="w-full lg:w-1/2 min-h-screen bg-white flex flex-col justify-center items-center p-8 lg:p-16">
                <div key={currentStep} className="w-full max-w-xl step-content-animate">

                    {/* STEP 1: Your Profile */}
                    {currentStep === 1 && (
                        <div>
                            {/* Pill Badge */}
                            <div className="inline-block px-3 py-1 rounded-full bg-[#071330] text-white text-[10px] font-bold tracking-wider mb-4 uppercase">
                                YOUR PROFILE
                            </div>

                            <h2 className="text-3xl font-bold text-[#000A2B] mb-2 tracking-tight">
                                Tell us about yourself
                            </h2>
                            <p className="text-xs text-gray-500 mb-8 leading-relaxed">
                                We'll use this to understand your foundation and match you with careers that fit your academic background.
                            </p>

                            <div className="space-y-5">
                                {/* Full Name */}
                                <div className="flex flex-col space-y-1.5">
                                    <label className="text-xs font-medium text-gray-600">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Maria Papadopoulou"
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="flex flex-col space-y-1.5">
                                    <label className="text-xs font-medium text-gray-600">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        value={profileEmail}
                                        onChange={(e) => setProfileEmail(e.target.value)}
                                        placeholder="MariaPapadopoulou@mail.com"
                                        className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Password */}
                                <div className="flex flex-col space-y-1.5">
                                    <label className="text-xs font-medium text-gray-600">
                                        Password <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showProfilePassword ? 'text' : 'password'}
                                            value={profilePassword}
                                            onChange={(e) => setProfilePassword(e.target.value)}
                                            placeholder="**********************"
                                            className={`w-full px-3 py-2.5 border rounded-md text-sm text-gray-900 focus:outline-none focus:ring-1 transition-colors ${passwordEvaluation.status === 'danger'
                                                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                                                : passwordEvaluation.status === 'warning'
                                                    ? 'border-amber-300 focus:border-amber-500 focus:ring-amber-500'
                                                    : passwordEvaluation.status === 'success'
                                                        ? 'border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500'
                                                        : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500'
                                                }`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowProfilePassword(!showProfilePassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                                            title={showProfilePassword ? 'Hide password' : 'Show password'}
                                        >
                                            {showProfilePassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>

                                    {/* Strength Bars */}
                                    {profilePassword.length > 0 && (
                                        <div className="grid grid-cols-4 gap-1.5 pt-1">
                                            {[1, 2, 3, 4].map((index) => {
                                                const isActive = index <= passwordEvaluation.barCount;
                                                const activeColor =
                                                    passwordEvaluation.status === 'danger'
                                                        ? 'bg-red-500'
                                                        : passwordEvaluation.status === 'warning'
                                                            ? 'bg-amber-500'
                                                            : 'bg-emerald-500';

                                                return (
                                                    <div
                                                        key={index}
                                                        className={`h-1 rounded-full transition-all duration-300 ${isActive ? activeColor : 'bg-gray-200'
                                                            }`}
                                                    />
                                                );
                                            })}
                                        </div>
                                    )}

                                    {/* Password Strength and Missing Requirements Feedback */}
                                    <div className="pt-0.5">
                                        {passwordEvaluation.status === 'empty' && (
                                            <p className="text-[11px] text-gray-500">
                                                Password must be alphanumeric with a special character and at least 8 characters.
                                            </p>
                                        )}
                                        {passwordEvaluation.status === 'danger' && (
                                            <p className="text-[11px] text-red-600 font-medium leading-tight">
                                                {passwordEvaluation.message}
                                            </p>
                                        )}
                                        {passwordEvaluation.status === 'warning' && (
                                            <p className="text-[11px] text-amber-600 font-medium leading-tight">
                                                {passwordEvaluation.message}
                                            </p>
                                        )}
                                        {passwordEvaluation.status === 'success' && (
                                            <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                                                <span>✓</span> {passwordEvaluation.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center justify-between mt-10 pt-4">
                                <button
                                    type="button"
                                    onClick={onBackToLogin}
                                    className="text-xs font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1.5 cursor-pointer"
                                >
                                    <span>&larr;</span> Back
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(2)}
                                    className="bg-[#2563EB] hover:bg-blue-700 text-white font-medium px-8 py-2.5 rounded-md text-sm transition-colors flex items-center gap-2 cursor-pointer"
                                >
                                    <span>Next</span>
                                    <span>&rarr;</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: Academic Background */}
                    {currentStep === 2 && (
                        <div>
                            {/* Pill Badge */}
                            <div className="inline-block px-3 py-1 rounded-full bg-[#071330] text-white text-[10px] font-bold tracking-wider mb-4 uppercase">
                                ACADEMIC BACKGROUND
                            </div>

                            <h2 className="text-3xl font-bold text-[#000A2B] mb-2 tracking-tight">
                                Tell us about your academic background
                            </h2>
                            <p className="text-xs text-gray-500 mb-8 leading-relaxed">
                                We'll use this to understand your foundation and match you with careers that fit your academic background.
                            </p>

                            <div className="space-y-5">
                                {/* University */}
                                <div className="flex flex-col space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <label className="text-xs font-medium text-gray-600">
                                            University / Institution <span className="text-red-500">*</span>
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => setIsCustomUni(!isCustomUni)}
                                            className="text-[11px] text-blue-600 hover:underline cursor-pointer"
                                        >
                                            {isCustomUni ? 'Select from list' : '+ Add other'}
                                        </button>
                                    </div>
                                    {!isCustomUni ? (
                                        <select
                                            value={university}
                                            onChange={(e) => {
                                                if (e.target.value === '__add_custom__') {
                                                    setIsCustomUni(true);
                                                } else {
                                                    setUniversity(e.target.value);
                                                }
                                            }}
                                            className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white cursor-pointer"
                                        >
                                            {universities.map((uni) => (
                                                <option key={uni} value={uni}>{uni}</option>
                                            ))}
                                            <option value="__add_custom__">+ Add Other Institution...</option>
                                        </select>
                                    ) : (
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={customUniInput}
                                                onChange={(e) => setCustomUniInput(e.target.value)}
                                                placeholder="Enter your university name"
                                                className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        e.preventDefault();
                                                        handleAddCustomUniversity();
                                                    }
                                                }}
                                            />
                                            <button
                                                type="button"
                                                onClick={handleAddCustomUniversity}
                                                className="px-4 py-2 bg-[#2563EB] hover:bg-blue-700 text-white rounded-md text-xs font-medium cursor-pointer"
                                            >
                                                Add
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Field of Study & Graduation Year Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Field of Study */}
                                    <div className="flex flex-col space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <label className="text-xs font-medium text-gray-600">
                                                Field of Study (ISCED) <span className="text-red-500">*</span>
                                            </label>
                                            <button
                                                type="button"
                                                onClick={() => setIsCustomField(!isCustomField)}
                                                className="text-[11px] text-blue-600 hover:underline cursor-pointer"
                                            >
                                                {isCustomField ? 'Select from list' : '+ Add other'}
                                            </button>
                                        </div>
                                        {!isCustomField ? (
                                            <select
                                                value={fieldOfStudy}
                                                onChange={(e) => {
                                                    if (e.target.value === '__add_custom__') {
                                                        setIsCustomField(true);
                                                    } else {
                                                        setFieldOfStudy(e.target.value);
                                                    }
                                                }}
                                                className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white cursor-pointer"
                                            >
                                                {fieldsOfStudy.map((fos) => (
                                                    <option key={fos} value={fos}>{fos}</option>
                                                ))}
                                                <option value="__add_custom__">+ Add Other Field...</option>
                                            </select>
                                        ) : (
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    value={customFieldInput}
                                                    onChange={(e) => setCustomFieldInput(e.target.value)}
                                                    placeholder="Enter field of study"
                                                    className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter') {
                                                            e.preventDefault();
                                                            handleAddCustomField();
                                                        }
                                                    }}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handleAddCustomField}
                                                    className="px-3 py-2 bg-[#2563EB] hover:bg-blue-700 text-white rounded-md text-xs font-medium cursor-pointer"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {/* Graduation Year */}
                                    <div className="flex flex-col space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <label className="text-xs font-medium text-gray-600">
                                                Graduation Year <span className="text-red-500">*</span>
                                            </label>
                                            <button
                                                type="button"
                                                onClick={() => setIsCustomYear(!isCustomYear)}
                                                className="text-[11px] text-blue-600 hover:underline cursor-pointer"
                                            >
                                                {isCustomYear ? 'Select from list' : '+ Add other'}
                                            </button>
                                        </div>
                                        {!isCustomYear ? (
                                            <select
                                                value={graduationYear}
                                                onChange={(e) => {
                                                    if (e.target.value === '__add_custom__') {
                                                        setIsCustomYear(true);
                                                    } else {
                                                        setGraduationYear(e.target.value);
                                                    }
                                                }}
                                                className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white cursor-pointer"
                                            >
                                                {graduationYears.map((yr) => (
                                                    <option key={yr} value={yr}>{yr}</option>
                                                ))}
                                                <option value="__add_custom__">+ Add Other Year...</option>
                                            </select>
                                        ) : (
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    value={customYearInput}
                                                    onChange={(e) => setCustomYearInput(e.target.value)}
                                                    placeholder="Year (e.g. 2028)"
                                                    className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter') {
                                                            e.preventDefault();
                                                            handleAddCustomYear();
                                                        }
                                                    }}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handleAddCustomYear}
                                                    className="px-3 py-2 bg-[#2563EB] hover:bg-blue-700 text-white rounded-md text-xs font-medium cursor-pointer"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Employment status */}
                                <div className="flex flex-col space-y-2 pt-1">
                                    <label className="text-xs font-medium text-gray-600">
                                        Employment status <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2 text-xs text-gray-800 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="employmentStatus"
                                                checked={employmentStatus === 'seeking'}
                                                onChange={() => setEmploymentStatus('seeking')}
                                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                            />
                                            <span>Actively job seeking</span>
                                        </label>
                                        <label className="flex items-center gap-2 text-xs text-gray-800 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="employmentStatus"
                                                checked={employmentStatus === 'employed'}
                                                onChange={() => setEmploymentStatus('employed')}
                                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                            />
                                            <span>Currently employed</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Current Location */}
                                <div className="flex flex-col space-y-1.5 pt-1">
                                    <div className="flex items-center justify-between">
                                        <label className="text-xs font-medium text-gray-600">
                                            Current location (region) <span className="text-red-500">*</span>
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => setIsCustomLocation(!isCustomLocation)}
                                            className="text-[11px] text-blue-600 hover:underline cursor-pointer"
                                        >
                                            {isCustomLocation ? 'Select from list' : '+ Add other'}
                                        </button>
                                    </div>
                                    {!isCustomLocation ? (
                                        <select
                                            value={location}
                                            onChange={(e) => {
                                                if (e.target.value === '__add_custom__') {
                                                    setIsCustomLocation(true);
                                                } else {
                                                    setLocation(e.target.value);
                                                }
                                            }}
                                            className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white cursor-pointer"
                                        >
                                            {locations.map((loc) => (
                                                <option key={loc} value={loc}>{loc}</option>
                                            ))}
                                            <option value="__add_custom__">+ Add Other Region...</option>
                                        </select>
                                    ) : (
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={customLocationInput}
                                                onChange={(e) => setCustomLocationInput(e.target.value)}
                                                placeholder="Enter location / region"
                                                className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        e.preventDefault();
                                                        handleAddCustomLocation();
                                                    }
                                                }}
                                            />
                                            <button
                                                type="button"
                                                onClick={handleAddCustomLocation}
                                                className="px-4 py-2 bg-[#2563EB] hover:bg-blue-700 text-white rounded-md text-xs font-medium cursor-pointer"
                                            >
                                                Add
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center justify-between mt-10 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(1)}
                                    className="text-xs font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1.5 cursor-pointer"
                                >
                                    <span>&larr;</span> Back
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(3)}
                                    className="bg-[#2563EB] hover:bg-blue-700 text-white font-medium px-8 py-2.5 rounded-md text-sm transition-colors flex items-center gap-2 cursor-pointer"
                                >
                                    <span>Next</span>
                                    <span>&rarr;</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: Skills */}
                    {currentStep === 3 && (
                        <div>
                            {/* Pill Badge */}
                            <div className="inline-block px-3 py-1 rounded-full bg-[#071330] text-white text-[10px] font-bold tracking-wider mb-4 uppercase">
                                SKILL
                            </div>

                            <h2 className="text-3xl font-bold text-[#000A2B] mb-2 tracking-tight">
                                What skills do you already have?
                            </h2>
                            <p className="text-xs text-gray-500 mb-8 leading-relaxed">
                                Select everything you're comfortable with. Don't worry if you don't have all of them — that's what we're here for.
                            </p>

                            {/* Skills Tag Pills */}
                            <div className="flex flex-wrap gap-2.5 mb-8">
                                {skillsList.map((skill) => {
                                    const isSelected = selectedSkills.includes(skill);
                                    return (
                                        <button
                                            key={skill}
                                            type="button"
                                            onClick={() => toggleSkill(skill)}
                                            className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${isSelected
                                                ? 'bg-[#2563EB] text-white shadow-sm'
                                                : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                                                }`}
                                        >
                                            {skill}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Add Skill not listed */}
                            <form onSubmit={handleAddCustomSkill} className="space-y-1.5 mb-8">
                                <label className="text-xs font-medium text-gray-500">Add Skill not Listed</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={customSkill}
                                        onChange={(e) => setCustomSkill(e.target.value)}
                                        placeholder="Skill"
                                        className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    />
                                    <button
                                        type="submit"
                                        className="px-4 py-2 border border-gray-200 text-gray-700 font-medium rounded-md text-xs hover:bg-gray-50 transition-colors flex items-center gap-1 cursor-pointer"
                                    >
                                        <span>+</span> Add
                                    </button>
                                </div>
                            </form>

                            {/* Buttons */}
                            <div className="flex items-center justify-between mt-10 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(2)}
                                    className="text-xs font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1.5 cursor-pointer"
                                >
                                    <span>&larr;</span> Back
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(4)}
                                    className="bg-[#2563EB] hover:bg-blue-700 text-white font-medium px-8 py-2.5 rounded-md text-sm transition-colors flex items-center gap-2 cursor-pointer"
                                >
                                    <span>Next</span>
                                    <span>&rarr;</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 4: Career Interests */}
                    {currentStep === 4 && (
                        <div>
                            {/* Pill Badge */}
                            <div className="inline-block px-3 py-1 rounded-full bg-[#071330] text-white text-[10px] font-bold tracking-wider mb-4 uppercase">
                                CAREER INTERESTS
                            </div>

                            <h2 className="text-3xl font-bold text-[#000A2B] mb-2 tracking-tight">
                                What kind of work excites you?
                            </h2>
                            <p className="text-xs text-gray-500 mb-8 leading-relaxed">
                                Pick the areas that feel most interesting. You can always explore others later.
                            </p>

                            {/* 2x3 Grid of Career Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                                {careerOptions.map((opt) => {
                                    const isSelected = selectedInterests.includes(opt.id);
                                    return (
                                        <button
                                            key={opt.id}
                                            type="button"
                                            onClick={() => toggleInterest(opt.id)}
                                            className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${isSelected
                                                ? 'border-blue-500 bg-blue-50/20 ring-1 ring-blue-500'
                                                : 'border-gray-200 bg-white hover:border-gray-300'
                                                }`}
                                        >
                                            <div className="mb-3">{opt.icon}</div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 mb-0.5">{opt.title}</h4>
                                                <p className="text-[11px] text-gray-500 leading-tight">{opt.description}</p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center justify-between mt-10 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(3)}
                                    className="text-xs font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1.5 cursor-pointer"
                                >
                                    <span>&larr;</span> Back
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(5)}
                                    className="bg-[#2563EB] hover:bg-blue-700 text-white font-medium px-8 py-2.5 rounded-md text-sm transition-colors flex items-center gap-2 cursor-pointer"
                                >
                                    <span>Next</span>
                                    <span>&rarr;</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 5: Goals & Timeline */}
                    {currentStep === 5 && (
                        <div>
                            {/* Pill Badge */}
                            <div className="inline-block px-3 py-1 rounded-full bg-[#071330] text-white text-[10px] font-bold tracking-wider mb-4 uppercase">
                                YOUR GOALS
                            </div>

                            <h2 className="text-3xl font-bold text-[#000A2B] mb-2 tracking-tight">
                                What are you aiming for?
                            </h2>
                            <p className="text-xs text-gray-500 mb-8 leading-relaxed">
                                This helps us set the right timeline and priority in your action plan.
                            </p>

                            <div className="space-y-6 mb-8">
                                {/* Where do you want to work? */}
                                <div>
                                    <h4 className="text-xs font-medium text-gray-700 mb-2.5">
                                        Where do you want to work?
                                    </h4>
                                    <div className="flex flex-wrap gap-2.5">
                                        {['Cyprus', 'Europe (Remote)', 'International', 'Open to anywhere'].map((loc) => {
                                            const isSelected = workLocations.includes(loc);
                                            return (
                                                <button
                                                    key={loc}
                                                    type="button"
                                                    onClick={() => toggleWorkLocation(loc)}
                                                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${isSelected
                                                        ? 'bg-[#2563EB] text-white shadow-sm'
                                                        : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                                                        }`}
                                                >
                                                    {loc}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* When do you want to start working? */}
                                <div>
                                    <h4 className="text-xs font-medium text-gray-700 mb-2.5">
                                        When do you want to start working?
                                    </h4>
                                    <div className="flex flex-wrap gap-2.5">
                                        {['ASAP (within 1 month)', '1-3 months', '3-6 months', 'After further study'].map((time) => {
                                            const isSelected = startTimeline === time;
                                            return (
                                                <button
                                                    key={time}
                                                    type="button"
                                                    onClick={() => setStartTimeline(time)}
                                                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${isSelected
                                                        ? 'bg-[#2563EB] text-white shadow-sm'
                                                        : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                                                        }`}
                                                >
                                                    {time}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center justify-between mt-10 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(4)}
                                    className="text-xs font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1.5 cursor-pointer"
                                >
                                    <span>&larr;</span> Back
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsAnalyzing(true)}
                                    className="bg-[#2563EB] hover:bg-blue-700 text-white font-medium px-7 py-2.5 rounded-md text-sm transition-colors cursor-pointer"
                                >
                                    Build my Career Plan
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

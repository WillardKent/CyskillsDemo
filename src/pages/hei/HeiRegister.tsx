import { useState, useMemo } from 'react';
import { useAuth } from '../../auth/useAuth';

interface HeiRegisterProps {
    onBackToLogin: () => void;
}

export default function HeiRegister({ onBackToLogin }: HeiRegisterProps) {
    const { login } = useAuth();
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

    // Step 1: Institution Profile
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

    const [country, setCountry] = useState('Cyprus');
    const [institutionType, setInstitutionType] = useState('Public Research University');
    const [institutionEmail, setInstitutionEmail] = useState('admin@ucy.ac.cy');
    const [institutionPassword, setInstitutionPassword] = useState('password');
    const [showPassword, setShowPassword] = useState(false);

    // Password strength check logic
    const passwordEvaluation = useMemo(() => {
        const missing: string[] = [];

        if (institutionPassword.length < 8) {
            const remaining = 8 - institutionPassword.length;
            missing.push(`missing ${remaining} character${remaining > 1 ? 's' : ''} (min 8)`);
        }
        if (!/[a-zA-Z]/.test(institutionPassword)) {
            missing.push('need at least 1 letter');
        }
        if (!/[0-9]/.test(institutionPassword)) {
            missing.push('need at least 1 number');
        }
        if (!/[!@#$%^&*(),.?":{}|<>_\-+=[\]\\/]/.test(institutionPassword)) {
            missing.push('need at least 1 special character');
        }

        if (institutionPassword.length === 0) {
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
            barCount: institutionPassword.length > 0 ? (institutionPassword.length >= 6 ? 2 : 1) : 0,
        };
    }, [institutionPassword]);

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

    // Step 2: Faculties & Study Programs
    const faculties = [
        'Faculty of Economics & Mgmt',
        'Faculty of Pure & Applied Sciences',
        'Faculty of Social Sciences',
        'Faculty of Law',
        'Faculty of Engineering',
    ];
    const [selectedFaculty, setSelectedFaculty] = useState('Faculty of Economics & Mgmt');

    const studyPrograms = [
        {
            title: 'BSc Computer Science',
            subtitle: '4 years · 240 ECTS · 320 enrolled',
        },
        {
            title: 'BSc Electrical Engineering',
            subtitle: '4 years · 240 ECTS · 210 enrolled',
        },
    ];

    // Step 3: Curriculum Mapping
    const [framework, setFramework] = useState('DigComp 2.2');
    const [courses, setCourses] = useState([
        {
            id: 'c1',
            name: 'Algorithms & Data Structures',
            code: 'CS101 · 5 ECTS',
            tags: [
                { name: 'Algorithm Design', selected: true },
                { name: 'Problem Solving', selected: true },
                { name: 'Other', selected: false },
            ],
        },
        {
            id: 'c2',
            name: 'Database Systems',
            code: 'CS101 · 5 ECTS',
            tags: [
                { name: 'SQL', selected: true },
                { name: 'Data Modelling', selected: true },
                { name: 'Other', selected: false },
            ],
        },
        {
            id: 'c3',
            name: 'Machine Learning Fundamentals',
            code: 'CS101 · 5 ECTS',
            tags: [
                { name: 'Algorithm Design', selected: true },
                { name: 'Other', selected: false },
            ],
        },
    ]);

    const toggleCourseTag = (courseId: string, tagIndex: number) => {
        setCourses((prev) =>
            prev.map((c) => {
                if (c.id !== courseId) return c;
                const newTags = [...c.tags];
                newTags[tagIndex] = {
                    ...newTags[tagIndex],
                    selected: !newTags[tagIndex].selected,
                };
                return { ...c, tags: newTags };
            })
        );
    };

    // Step 4: Data Connections
    const [isSurveyUploaded, setIsSurveyUploaded] = useState(false);

    const handleComplete = () => {
        login({ email: 'hei@cut.ac.cy', password: 'password', role: 'hei' });
    };

    const steps = [
        { number: 1, title: 'Institution Profile', subtitle: 'University details & type' },
        { number: 2, title: 'Faculties & Programs', subtitle: 'Add your academic structure' },
        { number: 3, title: 'Curriculum Mapping', subtitle: 'Map courses to competencies' },
        { number: 4, title: 'Data Connections', subtitle: 'Link graduate & market data' },
    ];

    // Analyzing institution modal overlay
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
                    <h2 className="text-lg min-[401px]:text-xl lg:text-2xl font-bold text-[#000A2B] mb-2">Analysing your institution</h2>
                    <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                        CySKILLS-AI is processing your programs against live labour market intelligence. This typically takes 30–60 seconds.
                    </p>

                    <div className="space-y-3">
                        <div className="border border-gray-200 rounded-lg p-3.5 text-xs text-gray-700 font-medium bg-white">
                            Curriculum structure indexed — 4 programs, 127 courses
                        </div>
                        <div className="border border-gray-200 rounded-lg p-3.5 text-xs text-gray-700 font-medium bg-white">
                            Course-to-skill mapping applied via ESCO framework
                        </div>
                        <div className="border border-gray-200 rounded-lg p-3.5 text-xs text-gray-700 font-medium bg-white">
                            Emerging skills trend detection (2025–2027 horizon)
                        </div>
                        <div className="border border-gray-200 rounded-lg p-3.5 text-xs text-gray-700 font-medium bg-white">
                            Generating programme-level recommendations
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
                    p-10 lg:p-20 xl:p-24
                    text-white
                "
            >
                <div className="max-w-lg w-full">
                    {/* Brand Heading */}
                    <h1 className="text-xl min-[401px]:text-2xl lg:text-3xl font-bold tracking-tight mb-14">CySKILLS-AI</h1>

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
                                            className={`text-sm md:text-base font-semibold transition-colors ${isDoneOrActive
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

                    {/* STEP 1: Institution Profile */}
                    {currentStep === 1 && (
                        <div>
                            {/* Pill Badge */}
                            <div className="inline-block px-3 py-1 rounded-full bg-[#071330] text-white text-[10px] font-bold tracking-wider mb-4 uppercase">
                                PROFILE
                            </div>

                            <h2 className="text-xl min-[401px]:text-2xl lg:text-3xl font-bold text-[#000A2B] mb-2 tracking-tight">
                                Institution Profile
                            </h2>
                            <p className="text-xs text-gray-500 mb-8 leading-relaxed">
                                Tell us about your university so we can contextualise your insights correctly.
                            </p>

                            <div className="space-y-5">
                                {/* University Name */}
                                <div className="flex flex-col space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <label className="text-xs font-medium text-gray-600">
                                            University Name <span className="text-red-500">*</span>
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
                                            <option value="__add_custom__">+ Add Other University...</option>
                                        </select>
                                    ) : (
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                value={customUniInput}
                                                onChange={(e) => setCustomUniInput(e.target.value)}
                                                placeholder="Enter university name"
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

                                {/* Country & Institution Type Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-xs font-medium text-gray-600">
                                            Country <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white cursor-pointer"
                                        >
                                            <option value="Cyprus">Cyprus</option>
                                            <option value="Greece">Greece</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Germany">Germany</option>
                                            <option value="France">France</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <label className="text-xs font-medium text-gray-600">
                                            Institution Type <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={institutionType}
                                            onChange={(e) => setInstitutionType(e.target.value)}
                                            className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white cursor-pointer"
                                        >
                                            <option value="Public Research University">Public Research University</option>
                                            <option value="Private University">Private University</option>
                                            <option value="Technical University">Technical University</option>
                                            <option value="University of Applied Sciences">University of Applied Sciences</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Email Institution */}
                                <div className="flex flex-col space-y-1.5">
                                    <label className="text-xs font-medium text-gray-600">
                                        Email Institution <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        value={institutionEmail}
                                        onChange={(e) => setInstitutionEmail(e.target.value)}
                                        placeholder="admin@ucy.ac.cy"
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
                                            type={showPassword ? 'text' : 'password'}
                                            value={institutionPassword}
                                            onChange={(e) => setInstitutionPassword(e.target.value)}
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
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                                            title={showPassword ? 'Hide password' : 'Show password'}
                                        >
                                            {showPassword ? (
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
                                    {institutionPassword.length > 0 && (
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
                                                Password must contain a code and be more than 6 characters
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

                    {/* STEP 2: Faculties & Study Programs */}
                    {currentStep === 2 && (
                        <div>
                            {/* Pill Badge */}
                            <div className="inline-block px-3 py-1 rounded-full bg-[#071330] text-white text-[10px] font-bold tracking-wider mb-4 uppercase">
                                STUDY PROGRAMS
                            </div>

                            <h2 className="text-xl min-[401px]:text-2xl lg:text-3xl font-bold text-[#000A2B] mb-2 tracking-tight">
                                Faculties & Study Programs
                            </h2>
                            <p className="text-xs text-gray-500 mb-8 leading-relaxed">
                                Map your existing courses to skills and competency frameworks. CySKILLS-AI will use this to identify alignment gaps and opportunities.
                            </p>

                            {/* Faculty Select Pills */}
                            <div className="flex flex-wrap gap-2.5 mb-8">
                                {faculties.map((fac) => {
                                    const isSelected = selectedFaculty === fac;
                                    return (
                                        <button
                                            key={fac}
                                            type="button"
                                            onClick={() => setSelectedFaculty(fac)}
                                            className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${isSelected
                                                    ? 'bg-[#2563EB] text-white shadow-sm'
                                                    : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                                                }`}
                                        >
                                            {fac}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Study Programs Heading */}
                            <h4 className="text-xs font-semibold text-gray-800 mb-3">
                                Study Programs — {selectedFaculty}
                            </h4>

                            {/* Program Cards */}
                            <div className="space-y-3 mb-8">
                                {studyPrograms.map((prog, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-all"
                                    >
                                        <h5 className="text-sm font-semibold text-gray-900 mb-1">{prog.title}</h5>
                                        <p className="text-xs text-gray-500">{prog.subtitle}</p>
                                    </div>
                                ))}
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

                    {/* STEP 3: Curriculum Mapping */}
                    {currentStep === 3 && (
                        <div>
                            {/* Pill Badge */}
                            <div className="inline-block px-3 py-1 rounded-full bg-[#071330] text-white text-[10px] font-bold tracking-wider mb-4 uppercase">
                                CURRICULUM
                            </div>

                            <h2 className="text-xl min-[401px]:text-2xl lg:text-3xl font-bold text-[#000A2B] mb-2 tracking-tight">
                                Curriculum Mapping
                            </h2>
                            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                                Map your existing courses to skills and competency frameworks. CySKILLS-AI will use this to identify alignment gaps and opportunities.
                            </p>

                            <h4 className="text-xs font-semibold text-gray-800 mb-4">
                                Mapping: BSc Computer Science
                            </h4>

                            {/* Framework Selector */}
                            <div className="flex items-center gap-3 mb-6">
                                <label className="text-xs font-medium text-gray-600 shrink-0">Framework:</label>
                                <select
                                    value={framework}
                                    onChange={(e) => setFramework(e.target.value)}
                                    className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-xs text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white cursor-pointer"
                                >
                                    <option value="DigComp 2.2">DigComp 2.2</option>
                                    <option value="ESCO Framework">ESCO Framework</option>
                                    <option value="e-CF 3.0">e-CF 3.0</option>
                                    <option value="GreenComp">GreenComp</option>
                                    <option value="EntreComp">EntreComp</option>
                                </select>
                            </div>

                            {/* Course Cards */}
                            <div className="space-y-3 mb-8">
                                {courses.map((course) => (
                                    <div
                                        key={course.id}
                                        className="p-4 rounded-xl border border-gray-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                                    >
                                        <div>
                                            <h5 className="text-xs font-semibold text-gray-900 mb-0.5">{course.name}</h5>
                                            <p className="text-[11px] text-gray-500">{course.code}</p>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            {course.tags.map((tag, tagIdx) => (
                                                <button
                                                    key={tagIdx}
                                                    type="button"
                                                    onClick={() => toggleCourseTag(course.id, tagIdx)}
                                                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${tag.selected
                                                            ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-xs'
                                                            : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
                                                        }`}
                                                >
                                                    {tag.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

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

                    {/* STEP 4: Data Sources & Connections */}
                    {currentStep === 4 && (
                        <div>
                            {/* Pill Badge */}
                            <div className="inline-block px-3 py-1 rounded-full bg-[#071330] text-white text-[10px] font-bold tracking-wider mb-4 uppercase">
                                DATA
                            </div>

                            <h2 className="text-xl min-[401px]:text-2xl lg:text-3xl font-bold text-[#000A2B] mb-2 tracking-tight">
                                Data Sources & Connections
                            </h2>
                            <p className="text-xs text-gray-500 mb-8 leading-relaxed">
                                Connect your institutional data to enrich your insights. Graduate outcomes and labour market data will be integrated automatically.
                            </p>

                            <div className="space-y-6 mb-8">
                                {/* Labour Market Intelligence */}
                                <div>
                                    <h4 className="text-xs font-medium text-gray-700 mb-2.5">
                                        Labour Market Intelligence
                                    </h4>
                                    <div className="space-y-2.5">
                                        <div className="p-3.5 rounded-xl border border-gray-200 bg-white flex items-center justify-between">
                                            <div>
                                                <h5 className="text-xs font-semibold text-gray-900">CySKILLS Job Market Feed</h5>
                                                <p className="text-[11px] text-gray-500">Live · 2.4M postings · Updated daily</p>
                                            </div>
                                            <span className="px-3 py-1 rounded-full text-xs font-medium text-blue-600 border border-blue-400 bg-blue-50/30">
                                                Connected ✓
                                            </span>
                                        </div>

                                        <div className="p-3.5 rounded-xl border border-gray-200 bg-white flex items-center justify-between">
                                            <div>
                                                <h5 className="text-xs font-semibold text-gray-900">CEDEFOP Skills Forecast</h5>
                                                <p className="text-[11px] text-gray-500">EU skills demand projections 2025–2030</p>
                                            </div>
                                            <span className="px-3 py-1 rounded-full text-xs font-medium text-blue-600 border border-blue-400 bg-blue-50/30">
                                                Connected ✓
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Graduate Outcomes */}
                                <div>
                                    <h4 className="text-xs font-medium text-gray-700 mb-2.5">
                                        Graduate Outcomes (Optional but Recommended)
                                    </h4>
                                    <div className="p-3.5 rounded-xl border border-gray-200 bg-white flex items-center justify-between">
                                        <div>
                                            <h5 className="text-xs font-semibold text-gray-900">Graduate Employment Survey</h5>
                                            <p className="text-[11px] text-gray-500">Upload CSV / connect SIES system</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsSurveyUploaded(!isSurveyUploaded)}
                                            className={`px-3.5 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer flex items-center gap-1 ${isSurveyUploaded
                                                    ? 'bg-blue-50 text-blue-700 border-blue-300'
                                                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                                                }`}
                                        >
                                            <span>Upload</span>
                                            <span>&uarr;</span>
                                        </button>
                                    </div>
                                </div>
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
                                    onClick={() => setIsAnalyzing(true)}
                                    className="bg-[#2563EB] hover:bg-blue-700 text-white font-medium px-8 py-2.5 rounded-md text-sm transition-colors cursor-pointer"
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

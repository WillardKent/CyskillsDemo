import React, { useState } from 'react';
import { useAuth } from '../auth/useAuth';
import type { UserRole } from '../auth/authTypes';
import GraduateRegister from './graduate/GraduateRegister';
import HeiRegister from './hei/HeiRegister';

interface RoleContent {
    badge: string;
    heading: {
        line1: string;
        italic: string;
        line2: string;
    };
    description: string;
    stats: {
        value: string;
        label: string;
    }[];
    formSubtitle: string;
    emailPlaceholder: string;
}

const ROLE_CONTENT: Record<UserRole, RoleContent> = {
    mesy: {
        badge: "Government Edition",
        heading: {
            line1: "National Skills",
            italic: "Intelligence",
            line2: "Platform",
        },
        description:
            "Evidence-based workforce planning, labour market analysis, and graduate employability tracking — purpose-built for Cyprus national policy decision-making and EU reporting obligations.",
        stats: [
            { value: "47,200+", label: "Live job postings indexed" },
            { value: "5 HEIs", label: "Cypriot institutions tracked" },
            { value: "CEDEFOP", label: "Benchmark data integrated" },
        ],
        formSubtitle:
            "Use your official ministry credentials to access the national intelligence platform.",
        emailPlaceholder: "Goverment@mail.com",
    },
    graduate: {
        badge: "Freshgraduate Edition",
        heading: {
            line1: "Start your career",
            italic: "journey",
            line2: "with clarity.",
        },
        description:
            "CySKILLS-AI gives fresh graduates real data on job demand, skill gaps, and salary benchmarks — so you can make confident career decisions.",
        stats: [
            { value: "47.2k", label: "Live job postings indexed daily" },
            { value: "5 HEIs", label: "Cypriot HEIs tracked in real time" },
            { value: "<30", label: "Days to insight vs 6 months manual" },
        ],
        formSubtitle:
            "Sign in with your registered credentials to access the platform.",
        emailPlaceholder: "youremail@mail.com",
    },
    hei: {
        badge: "HEI - Instation",
        heading: {
            line1: "Transform curricula",
            italic: "into",
            line2: "Graduate futures",
        },
        description:
            "Evidence-based workforce planning, labour market analysis, and graduate employability tracking — purpose-built for Cyprus national policy decision-making and EU reporting obligations.",
        stats: [
            { value: "94%", label: "Curriculum alignment accuracy" },
            { value: "18+", label: "HEIs on the platform" },
            { value: "2.4M", label: "Job postings analysed" },
        ],
        formSubtitle:
            "Use your official ministry credentials to access the national intelligence platform.",
        emailPlaceholder: "Goverment@mail.com",
    },
};

export default function LoginPage() {
    const { login, isLoggingIn, loginError } = useAuth();

    const [selectedRole, setSelectedRole] = useState<UserRole>("mesy");
    const [email, setEmail] = useState("mesy@gov.cy");
    const [password, setPassword] = useState("password");
    const [showPassword, setShowPassword] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const roles: { role: UserRole; label: string; email: string }[] = [
        { role: "mesy", label: "MESY - Goverment", email: "mesy@gov.cy" },
        { role: "graduate", label: "Freshgraduate", email: "graduate@ucy.ac.cy" },
        { role: "hei", label: "HEI - Instation", email: "hei@cut.ac.cy" },
    ];

    const currentContent = ROLE_CONTENT[selectedRole];

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login({ email, password, role: selectedRole });
    };

    if (isRegistering) {
        if (selectedRole === "hei") {
            return <HeiRegister onBackToLogin={() => setIsRegistering(false)} />;
        }
        return <GraduateRegister onBackToLogin={() => setIsRegistering(false)} />;
    }

    return (
        <div className="w-full min-h-screen flex flex-col lg:flex-row font-sans">
            {/* Left Section - Hero/Information */}
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
                <div className="max-w-xl">
                    {/* Badge */}
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/5 backdrop-blur-sm mb-8">
                        <span className="text-sm font-medium text-gray-200">{currentContent.badge}</span>
                    </div>

                    {/* Main Headings */}
                    <h1 className="text-2xl min-[401px]:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-tight">{currentContent.heading.line1}</h1>
                    <h2 className="text-2xl min-[401px]:text-3xl md:text-4xl lg:text-5xl font-light italic mb-2 tracking-tight text-gray-200">{currentContent.heading.italic}</h2>
                    <h1 className="text-2xl min-[401px]:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight">{currentContent.heading.line2}</h1>

                    {/* Description */}
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-12">
                        {currentContent.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {currentContent.stats.map((stat, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                                <h3 className="text-base min-[401px]:text-lg lg:text-xl font-bold mb-1">{stat.value}</h3>
                                <p className="text-xs text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Section - Login Form */}
            <div className="w-full lg:w-1/2 min-h-screen bg-white flex flex-col justify-center items-center p-8">
                <div className="w-full max-w-110">

                    {/* Header */}
                    <h2 className="text-xl min-[401px]:text-2xl lg:text-3xl font-semibold text-[#000A2B] mb-3">Welcome Back!</h2>
                    <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                        {currentContent.formSubtitle}
                    </p>

                    {/* Role Tabs */}
                    <div className="flex bg-gray-50/80 p-1 rounded-lg mb-8 border border-gray-100">
                        {roles.map((r) => (
                            <button
                                key={r.role}
                                type="button"
                                onClick={() => {
                                    setSelectedRole(r.role);
                                    setEmail(r.email);
                                    setPassword("password");
                                }}
                                className={`flex-1 py-2 text-xs transition-all ${selectedRole === r.role
                                    ? "font-semibold bg-white rounded shadow-sm text-gray-800"
                                    : "font-medium text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                {r.label}
                            </button>
                        ))}
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="flex flex-col space-y-5">

                        {/* Email Input */}
                        <div className="flex flex-col space-y-1.5">
                            <label className="text-xs font-medium text-gray-500">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={currentContent.emailPlaceholder}
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="flex flex-col space-y-1.5">
                            <label className="text-xs font-medium text-gray-500">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="1234567890"
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                                {/* SVG Eye Icon for toggling password visibility */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                                    title={showPassword ? "Hide password" : "Show password"}
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
                        </div>

                        {/* Forgot Password Link */}
                        <div className="flex justify-start pt-1">
                            <a href="#" className="text-xs text-blue-600 hover:underline">Forgot Password?</a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={isLoggingIn}
                            className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-medium py-2.5 rounded-md text-sm transition-colors mt-2 disabled:opacity-60 cursor-pointer"
                        >
                            {isLoggingIn ? "Signing in..." : "Login"}
                        </button>
                    </form>

                    {loginError && (
                        <p className="mt-3 text-center text-xs text-red-500">
                            {loginError}
                        </p>
                    )}

                    {/* Divider */}
                    <div className="flex items-center justify-center my-6">
                        <span className="text-xs text-gray-400">Or</span>
                    </div>

                    {/* SSO Login */}
                    {selectedRole === "graduate" ? (
                        <button
                            type="button"
                            className="w-full bg-white border border-gray-200 text-gray-800 font-medium py-2.5 rounded-md text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                            </svg>
                            <span>Sign in with Google</span>
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="w-full bg-white border border-gray-200 text-gray-800 font-medium py-2.5 rounded-md text-sm hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            Sign in with Gov.cy SSO
                        </button>
                    )}

                    {/* Footer - only shown for graduate and hei roles */}
                    {selectedRole !== "mesy" && (
                        <p className="text-center text-xs text-gray-500 mt-8">
                            New to CySKILLS-AI?{" "}
                            <button
                                type="button"
                                onClick={() => setIsRegistering(true)}
                                className="font-semibold text-blue-800 hover:underline cursor-pointer"
                            >
                                Request access
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
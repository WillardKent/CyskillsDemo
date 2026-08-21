import React from 'react';

type LoginPageProps = {
    onLogin: () => void;
};

export default function LoginPage({
    onLogin,
}: LoginPageProps) {
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Temporary login
        onLogin();
    };

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
                        <span className="text-sm font-medium text-gray-200">Government Edition</span>
                    </div>

                    {/* Main Headings */}
                    <h1 className="text-5xl font-bold mb-2 tracking-tight">National Skills</h1>
                    <h2 className="text-5xl font-light italic mb-2 tracking-tight text-gray-200">Intelligence</h2>
                    <h1 className="text-5xl font-bold mb-8 tracking-tight">Platform</h1>

                    {/* Description */}
                    <p className="text-gray-300 text-base leading-relaxed mb-12">
                        Evidence-based workforce planning, labour market analysis, and
                        graduate employability tracking — purpose-built for Cyprus national
                        policy decision-making and EU reporting obligations.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-1">47,200+</h3>
                            <p className="text-xs text-gray-400">Live job postings indexed</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-1">5 HEIs</h3>
                            <p className="text-xs text-gray-400">Cypriot institutions tracked</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-1">CEDEFOP</h3>
                            <p className="text-xs text-gray-400">Benchmark data integrated</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Login Form */}
            <div className="w-full lg:w-1/2 min-h-screen bg-white flex flex-col justify-center items-center p-8">
                <div className="w-full max-w-110">

                    {/* Header */}
                    <h2 className="text-3xl font-semibold text-[#000A2B] mb-3">Welcome Back!</h2>
                    <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                        Use your official ministry credentials to access the national intelligence platform.
                    </p>

                    {/* Role Tabs */}
                    <div className="flex bg-gray-50/80 p-1 rounded-lg mb-8 border border-gray-100">
                        <button className="flex-1 py-2 text-xs font-semibold bg-white rounded shadow-sm text-gray-800">
                            MESY - Goverment
                        </button>
                        <button className="flex-1 py-2 text-xs font-medium text-gray-500 hover:text-gray-700">
                            Freshgraduate
                        </button>
                        <button className="flex-1 py-2 text-xs font-medium text-gray-500 hover:text-gray-700">
                            Freshgraduate
                        </button>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="flex flex-col space-y-5">

                        {/* Email Input */}
                        <div className="flex flex-col space-y-1.5">
                            <label className="text-xs font-medium text-gray-500">Email</label>
                            <input
                                type="email"
                                placeholder="Goverment@mail.com"
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="flex flex-col space-y-1.5">
                            <label className="text-xs font-medium text-gray-500">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="1234567890"
                                    className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                                {/* SVG Eye Icon for toggling password visibility */}
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
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
                            className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-medium py-2.5 rounded-md text-sm transition-colors mt-2"
                        >
                            Login
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center justify-center my-6">
                        <span className="text-xs text-gray-400">Or</span>
                    </div>

                    {/* SSO Login */}
                    <button
                        type="button"
                        className="w-full bg-white border border-gray-200 text-gray-800 font-medium py-2.5 rounded-md text-sm hover:bg-gray-50 transition-colors"
                    >
                        Sign in with Gov.cy SSO
                    </button>

                    {/* Footer */}
                    <p className="text-center text-xs text-gray-500 mt-8">
                        New to CySKILLS-AI? <a href="#" className="font-semibold text-blue-800 hover:underline">Request access</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
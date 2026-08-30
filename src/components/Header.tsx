import React from "react";
import { Search, ChevronDown, Menu } from "lucide-react";
import Flag from "../assets/flag.png";
import Bell from "../assets/bell.png";
import { useSidebar } from "../context/SidebarContext";

export default function Header() {
    const { toggleSidebar } = useSidebar();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const search = formData.get("search");
        console.log("Searching for:", search);
    };

    const handleNotifications = () => {
        console.log("Notifications clicked");
    };

    const handleLanguage = () => {
        console.log("Language switch clicked");
    };

    return (
        <header className="flex items-center justify-between border-b border-[#F3F5F7] bg-white px-4 sm:px-6 py-3.5 sm:py-4">
            {/* Mobile Menu Toggle & Search */}
            <div className="flex items-center gap-3 flex-1 max-w-md">
                <button
                    type="button"
                    onClick={toggleSidebar}
                    className="flex lg:hidden items-center justify-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Toggle navigation menu"
                >
                    <Menu className="h-6 w-6" />
                </button>

                <form onSubmit={handleSearch} className="w-full">
                    <div className="relative">
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            name="search"
                            placeholder="Search"
                            className="w-full rounded-3xl border border-[#E1E4E9] py-2 pl-9 pr-4 text-xs sm:text-sm outline-none transition focus:border-gray-700 focus:ring-2 focus:ring-gray-100"
                        />
                    </div>
                </form>
            </div>

            {/* Buttons */}
            <div className="ml-3 sm:ml-6 flex items-center gap-2 sm:gap-3 shrink-0">
                <button
                    onClick={handleNotifications}
                    aria-label="Notifications"
                    className="rounded-full p-2 border-2 border-[#EFF5FF] transition hover:bg-gray-100 cursor-pointer"
                >
                    <img
                        src={Bell}
                        alt="Notifications"
                        className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
                    />
                </button>

                <button
                    onClick={handleLanguage}
                    aria-label="Change language"
                    className="flex items-center gap-1.5 sm:gap-2 rounded-3xl bg-[#F7F8FA] px-2.5 sm:px-4 py-1.5 sm:py-2 transition hover:bg-gray-100 cursor-pointer"
                >
                    <img
                        src={Flag}
                        alt="Language flag"
                        className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
                    />
                    <span className="text-xs sm:text-sm font-medium font-inter text-[#7F8089]">Eng</span>
                    <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-500" />
                </button>
            </div>
        </header>
    );
}
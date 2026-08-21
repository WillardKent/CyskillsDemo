import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Flag from "../assets/flag.png";
import Bell from "../assets/bell.png";

export default function Header() {
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const search = formData.get("search");

        console.log("Searching for:", search);
    };

    const handleLogin = () => {
        console.log("Login clicked");
    };

    const handleSignup = () => {
        console.log("Sign up clicked");
    };
    return (

        <header className="flex items-center justify-between border-b border-[#F3F5F7] bg-white px-6 py-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="w-full max-w-md">
                <div className="relative">
                    <Search
                        size={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        className="w-full rounded-3xl border border-[#E1E4E9] py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-700 focus:ring-2 focus:ring-gray-100"
                    />
                </div>
            </form>

            {/* Buttons */}
            <div className="ml-6 flex items-center gap-3">
                <button
                    onClick={handleLogin}
                    className="rounded-full  p-2 border-2 border-[#EFF5FF]   transition hover:bg-gray-200"
                >
                    <img
                        src={Bell}
                        alt="Profile"
                        className="h-6 w-6 rounded-full"
                    />
                </button>

                <button
                    onClick={handleSignup}
                    className="flex items-center gap-2 rounded-3xl bg-[#F7F8FA] px-4 py-2  transition hover:bg-gray-200"
                >
                    <img
                        src={Flag}
                        alt="Profile"
                        className="h-9 w-9 rounded-full"
                    />
                    <span className="text-sm font-medium font-inter text-[#7F8089]">Eng</span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
            </div>
        </header>

    );

}
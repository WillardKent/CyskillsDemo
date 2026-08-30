import Logo from "../assets/cyskill.png";
import Profile from "../assets/profile.png";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { navigationConfig } from "../config/navigation";
import type { Page } from "../config/navigation";
import { useSidebar } from "../context/SidebarContext";

type SidenavProps = {
    currentPage: Page;
    onNavigate: (page: Page) => void;
};

type ActiveIndicatorProps = {
    active: boolean;
};

function ActiveIndicator({ active }: ActiveIndicatorProps) {
    if (!active) return null;
    return (
        <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-blue-600" />
    );
}

export default function Sidenav({ currentPage, onNavigate }: SidenavProps) {
    const { user, logout } = useAuth();
    const { isOpen, closeSidebar } = useSidebar();
    const roleConfig = navigationConfig[user?.role ?? "mesy"];
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    const handleNavigate = (page: Page) => {
        onNavigate(page);
        closeSidebar();
    };

    const mainNavClass = "relative flex w-full items-center gap-3 rounded-md px-5 py-5 text-white transition hover:bg-white/5 cursor-pointer";
    const subNavClass = "relative flex w-full items-center gap-3 rounded-md px-5 py-4 text-left text-white transition hover:bg-white/5 cursor-pointer";

    const getEditionColor = (label: string) => {
        if (label === "Gov Edition") return "text-[#1FA855]";
        if (label === "Graduate Edition") return "text-[#3B82F6]";
        if (label === "HEI Edition") return "text-[#F59E0B]";
        return "text-[#F59E0B]";
    };

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    onClick={closeSidebar}
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity lg:hidden"
                    aria-hidden="true"
                />
            )}

            {/* Sidebar Container */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 flex h-full w-64 flex-col bg-[#120D0E] py-6 transition-transform duration-300 ease-in-out lg:static lg:h-screen lg:shrink-0 lg:translate-x-0 overflow-y-auto ${
                    isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
                }`}
            >
                {/* Logo & Mobile Close Button */}
                <div className="mx-2 mt-2 flex items-center justify-between rounded-md bg-[#FFFFFF]/5 py-4 pr-3">
                    <div className="ml-5 flex items-center gap-3">
                        <img
                            src={Logo}
                            alt="Cyskills"
                            className="h-10 w-10"
                        />

                        <div className="flex flex-col leading-tight">
                            <span className="font-inter text-sm font-semibold text-[#F7F8FA]">
                                CySKILLS-AI
                            </span>

                            <span className={`text-xs ${getEditionColor(roleConfig.editionLabel)}`}>
                                {roleConfig.editionLabel}
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={closeSidebar}
                        className="flex lg:hidden rounded-md p-1.5 text-gray-400 hover:bg-white/10 hover:text-white"
                        aria-label="Close navigation sidebar"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Profile */}
                <div className="mt-6 w-full border-y-2 border-y-[#67676733]/20 py-2">
                    <button
                        type="button"
                        onClick={() => {
                            const profilePageMap: Record<string, string> = {
                                graduate: "graduate-profile",
                                hei: "hei-profile",
                                mesy: "mesy-profile",
                            };
                            const profilePage = profilePageMap[user?.role ?? "graduate"] ?? "graduate-profile";
                            handleNavigate(profilePage as Page);
                        }}
                        className={`flex w-full items-center gap-3 px-5.5 py-4 cursor-pointer transition hover:bg-white/5 ${
                            currentPage === "graduate-profile" || currentPage === "hei-profile" || currentPage === "mesy-profile"
                                ? "bg-white/5"
                                : ""
                        }`}
                    >
                        <img
                            src={Profile}
                            alt="Profile"
                            className="h-10.5 w-10.5 rounded-full object-cover"
                        />

                        <div className="flex flex-col leading-tight text-left">
                            <span className="font-inter text-sm font-medium text-[#F7F8FA]">
                                {user?.name ?? "User"}
                            </span>

                            <span className="font-inter text-xs font-normal text-white">
                                {user?.title ?? "Role"}
                            </span>
                        </div>
                    </button>
                </div>

                {/* Navigation Sections */}
                <div className="flex-1 overflow-y-auto">
                    {roleConfig.sections.map((section, idx) => (
                        <div key={idx}>
                            {section.label && (
                                <div className="px-5 py-0.5 mt-2">
                                    <span className="font-inter text-xs font-normal text-white/60">
                                        {section.label}
                                    </span>
                                </div>
                            )}
                            <div>
                                {section.items.map((item) => {
                                    const isChildActive = item.children?.some((c) => c.id === currentPage) ?? false;
                                    const isSelfActive = currentPage === item.id;
                                    const isExpanded = openMenuId === item.id || isChildActive;

                                    if (item.children && item.children.length > 0) {
                                        return (
                                            <div key={item.id} className="flex flex-col gap-1">
                                                <div className="relative">
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            handleNavigate(item.id as Page);
                                                            setOpenMenuId(openMenuId === item.id ? null : item.id);
                                                        }}
                                                        className={`${mainNavClass} ${isSelfActive ? "bg-white/5" : ""}`}
                                                    >
                                                        <ActiveIndicator active={isSelfActive} />
                                                        <item.icon className="h-5 w-5 shrink-0" />
                                                        <span className="flex-1 text-left text-sm font-normal">{item.label}</span>
                                                        {isExpanded ? (
                                                            <ChevronUp className="h-4 w-4 text-gray-400" />
                                                        ) : (
                                                            <ChevronDown className="h-4 w-4 text-gray-400" />
                                                        )}
                                                    </button>
                                                </div>

                                                <div
                                                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                                        isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                                    }`}
                                                >
                                                    <div className="min-h-0 flex flex-col gap-1">
                                                        {item.children.map((child) => (
                                                            <button
                                                                key={child.id}
                                                                type="button"
                                                                onClick={() => handleNavigate(child.id as Page)}
                                                                className={`${subNavClass} ${currentPage === child.id ? "bg-white/5" : ""}`}
                                                            >
                                                                <ActiveIndicator active={currentPage === child.id} />
                                                                <child.icon className="h-5 w-5 shrink-0" />
                                                                <span className="flex-1 text-left text-sm font-normal leading-5">
                                                                    {child.label}
                                                                </span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div key={item.id} className="relative">
                                            <button
                                                type="button"
                                                onClick={() => handleNavigate(item.id as Page)}
                                                className={`${mainNavClass} ${isSelfActive ? "bg-white/5" : ""}`}
                                            >
                                                <ActiveIndicator active={isSelfActive} />
                                                <item.icon className="h-5 w-5 shrink-0" />
                                                <span className="text-sm font-normal">{item.label}</span>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                {roleConfig.bottomItems && roleConfig.bottomItems.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-1">
                        {roleConfig.bottomItems.map((item) => (
                            <div key={item.id} className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (item.id === "logout") {
                                            closeSidebar();
                                            logout();
                                        } else {
                                            handleNavigate(item.id as Page);
                                        }
                                    }}
                                    className={`${mainNavClass} ${currentPage === item.id ? "bg-white/5" : ""}`}
                                >
                                    <ActiveIndicator active={currentPage === item.id} />
                                    <item.icon className="h-5 w-5 shrink-0" />
                                    <span className="text-sm font-normal">{item.label}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </aside>
        </>
    );
}
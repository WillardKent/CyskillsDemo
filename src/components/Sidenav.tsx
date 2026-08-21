import Logo from "../assets/cyskill.png";
import Profile from "../assets/profile.png";

import {
    School,
    Map,
    Cpu,
    BookLock,
    FolderOpen,
    ChevronDown,
    ChevronUp,
    Settings,
    Home,
    Minus,
} from "lucide-react";

import { useState } from "react";
import type { Page } from "../App";

type SidenavProps = {
    currentPage: Page;
    onNavigate: (page: Page) => void;
};

type ActiveIndicatorProps = {
    active: boolean;
};

function ActiveIndicator({
    active,
}: ActiveIndicatorProps) {
    if (!active) return null;

    return (
        <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-blue-600" />
    );
}

export default function Sidenav({
    currentPage,
    onNavigate,
}: SidenavProps) {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [isRegionalOpen, setIsRegionalOpen] = useState(false);

    const mainNavClass =
        "relative flex w-full items-center gap-3 rounded-md px-5 py-5 text-white transition hover:bg-white/5";

    const subNavClass =
        "relative flex w-full items-center gap-3 rounded-md px-5 py-4 text-left text-white transition hover:bg-white/5";

    return (
        <aside className="flex h-screen w-64 shrink-0 flex-col bg-[#120D0E] py-6">

            {/* Logo */}
            <div className="mx-2 mt-2 w-auto rounded-md bg-[#FFFFFF]/5 py-4">
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

                        <span className="text-xs text-[#1FA855]">
                            Gov Edition
                        </span>
                    </div>
                </div>
            </div>

            {/* Profile */}
            <div className="mt-6 w-full border-y-2 border-y-[#67676733]/20 py-2">
                <div className="flex items-center gap-3 px-5.5 py-4">
                    <img
                        src={Profile}
                        alt="Profile"
                        className="h-10.5 w-10.5"
                    />

                    <div className="flex flex-col leading-tight">
                        <span className="font-inter text-sm font-medium text-[#F7F8FA]">
                            Maria Papadopoulou
                        </span>

                        <span className="font-inter text-xs font-normal text-white">
                            DHE · Policy Analyst
                        </span>
                    </div>
                </div>
            </div>

            {/* OVERVIEW */}
            <div className="px-5 py-0.5">
                <span className="font-inter text-xs font-normal text-white">
                    OVERVIEW
                </span>
            </div>

            <div>

                {/* National Dashboard */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => {
                            onNavigate("national-dashboard");
                            setIsDashboardOpen(!isDashboardOpen);
                            setIsRegionalOpen(false);
                        }}
                        className={`${mainNavClass} ${currentPage === "national-dashboard"
                            ? "bg-white/5"
                            : ""
                            }`}
                    >
                        <ActiveIndicator
                            active={
                                currentPage === "national-dashboard"
                            }
                        />

                        <Home className="h-5 w-5 shrink-0" />

                        <span className="flex-1 text-left text-sm font-normal">
                            National Dashboard
                        </span>

                        {isDashboardOpen ? (
                            <ChevronUp className="h-4 w-4" />
                        ) : (
                            <ChevronDown className="h-4 w-4" />
                        )}
                    </button>
                </div>

                {/* National Dashboard Submenu */}
                <div
                    className={`grid overflow-hidden transition-all duration-400 ease-in-out ${isDashboardOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                        }`}
                >
                    <div className="min-h-0">

                        {/* Supply by Programme Domain */}
                        <button
                            type="button"
                            onClick={() =>
                                onNavigate("programme-domain")
                            }
                            className={`${subNavClass} ${currentPage === "programme-domain"
                                ? "bg-white/5"
                                : ""
                                }`}
                        >
                            <ActiveIndicator
                                active={
                                    currentPage ===
                                    "programme-domain"
                                }
                            />

                            <Minus className="h-5 w-5 shrink-0" />

                            <span className="flex-1 text-left text-sm font-normal leading-5">
                                Supply by programme domain
                            </span>
                        </button>

                        {/* ESCO Skill Mapping Review */}
                        <button
                            type="button"
                            onClick={() =>
                                onNavigate("esco-skill-review")
                            }
                            className={`${subNavClass} ${currentPage === "esco-skill-review"
                                ? "bg-white/5"
                                : ""
                                }`}
                        >
                            <ActiveIndicator
                                active={
                                    currentPage ===
                                    "esco-skill-review"
                                }
                            />

                            <Minus className="h-5 w-5 shrink-0" />

                            <span className="flex-1 text-left text-sm font-normal leading-5">
                                ESCO Skill Mapping Review
                            </span>
                        </button>
                    </div>
                </div>

                {/* HEI Benchmarking */}
                <button
                    type="button"
                    onClick={() =>
                        onNavigate("hei-benchmarking")
                    }
                    className={`${mainNavClass} ${currentPage === "hei-benchmarking"
                        ? "bg-white/5"
                        : ""
                        }`}
                >
                    <ActiveIndicator
                        active={
                            currentPage === "hei-benchmarking"
                        }
                    />

                    <School className="h-5 w-5 shrink-0" />

                    <span className="text-sm font-normal">
                        HEI Benchmarking
                    </span>
                </button>

                {/* Regional Comparison */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => {
                            onNavigate("regional-comparison");
                            setIsRegionalOpen(!isRegionalOpen);
                            setIsDashboardOpen(false);
                        }}
                        className={`${mainNavClass} ${currentPage === "regional-comparison"
                            ? "bg-white/5"
                            : ""
                            }`}
                    >
                        <ActiveIndicator
                            active={
                                currentPage ===
                                "regional-comparison"
                            }
                        />

                        <Map className="h-5 w-5 shrink-0" />

                        <span className="flex-1 text-left text-sm font-normal">
                            Regional Comparison
                        </span>

                        {isRegionalOpen ? (
                            <ChevronUp className="h-4 w-4" />
                        ) : (
                            <ChevronDown className="h-4 w-4" />
                        )}
                    </button>
                </div>

                {/* Regional Comparison Submenu */}
                <div
                    className={`grid overflow-hidden transition-all duration-350 ease-in-out ${isRegionalOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                        }`}
                >
                    <div className="min-h-0">

                        {/* District-Level Skills */}
                        <button
                            type="button"
                            onClick={() =>
                                onNavigate("district-skills")
                            }
                            className={`${subNavClass} ${currentPage === "district-skills"
                                ? "bg-white/5"
                                : ""
                                }`}
                        >
                            <ActiveIndicator
                                active={
                                    currentPage ===
                                    "district-skills"
                                }
                            />

                            <Minus className="h-5 w-5 shrink-0" />

                            <span className="flex-1 text-left text-sm font-normal leading-5">
                                District-Level Skills & Vacancy Summary
                            </span>
                        </button>

                        {/* Official Indicators */}
                        <button
                            type="button"
                            onClick={() =>
                                onNavigate(
                                    "official-indicators"
                                )
                            }
                            className={`${subNavClass} ${currentPage === "official-indicators"
                                ? "bg-white/5"
                                : ""
                                }`}
                        >
                            <ActiveIndicator
                                active={
                                    currentPage ===
                                    "official-indicators"
                                }
                            />

                            <Minus className="h-5 w-5 shrink-0" />

                            <span className="flex-1 text-left text-sm font-normal leading-5">
                                Official Indicators
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* ACTION */}
            <div className="px-5 py-0.5">
                <span className="font-inter text-xs font-normal text-white">
                    ACTION
                </span>
            </div>

            <div>

                {/* Policy Monitoring */}
                <button
                    type="button"
                    onClick={() =>
                        onNavigate("policy-monitoring")
                    }
                    className={`${mainNavClass} ${currentPage === "policy-monitoring"
                        ? "bg-white/5"
                        : ""
                        }`}
                >
                    <ActiveIndicator
                        active={
                            currentPage === "policy-monitoring"
                        }
                    />

                    <BookLock className="h-5 w-5 shrink-0" />

                    <span className="text-sm font-normal">
                        Policy Monitoring
                    </span>
                </button>

                {/* Scenario Exploration */}
                <button
                    type="button"
                    onClick={() =>
                        onNavigate("scenario-exploration")
                    }
                    className={`${mainNavClass} ${currentPage === "scenario-exploration"
                        ? "bg-white/5"
                        : ""
                        }`}
                >
                    <ActiveIndicator
                        active={
                            currentPage ===
                            "scenario-exploration"
                        }
                    />

                    <Cpu className="h-5 w-5 shrink-0" />

                    <span className="text-sm font-normal">
                        Scenario Exploration
                    </span>
                </button>

                {/* Reporting Centre */}
                <button
                    type="button"
                    onClick={() =>
                        onNavigate("reporting-centre")
                    }
                    className={`${mainNavClass} ${currentPage === "reporting-centre"
                        ? "bg-white/5"
                        : ""
                        }`}
                >
                    <ActiveIndicator
                        active={
                            currentPage === "reporting-centre"
                        }
                    />

                    <FolderOpen className="h-5 w-5 shrink-0" />

                    <span className="text-sm font-normal">
                        Reporting Centre
                    </span>
                </button>
            </div>

            {/* Settings */}
            <button
                type="button"
                onClick={() => onNavigate("settings")}
                className={`${mainNavClass} mt-auto ${currentPage === "settings"
                    ? "bg-white/5"
                    : ""
                    }`}
            >
                <ActiveIndicator
                    active={currentPage === "settings"}
                />

                <Settings className="h-5 w-5 shrink-0" />

                <span className="text-sm font-normal">
                    Settings
                </span>
            </button>

        </aside>
    );
}
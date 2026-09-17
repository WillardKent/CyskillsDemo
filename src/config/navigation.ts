import type { LucideIcon } from "lucide-react";
import {
    Settings,
    Minus,
    ArrowRightFromLine,
} from "lucide-react";

import Home from "../assets/icons/home.png";
import Book from "../assets/icons/book.png";
import Bookmark from "../assets/icons/bookmark.png";
import Building from "../assets/icons/building.png";
import ChartColumn from "../assets/icons/chartcolumn.png";
import Edit from "../assets/icons/edit.png";
import Folder from "../assets/icons/folder.png";
import Maps from "../assets/icons/maps.png";
import Marketing from "../assets/icons/marketing.png";
import Policy from "../assets/icons/policy.png";
import Smallsearch from "../assets/icons/smallsearch.png";
import Tie from "../assets/icons/tie.png";
import Zap from "../assets/icons/zap.png";
import Ai from "../assets/icons/ai.png";
import type { UserRole } from "../auth/authTypes";

// ─── Page type ────────────────────────────────────────────────
// Union of all valid page IDs across every role.
// Add new page IDs here as you build them.

export type Page =
    // MESY pages
    | "national-dashboard"
    | "programme-domain"
    | "oja-job-vacancy"
    | "supply-demand-matrix"
    | "indemand-skill-matrix"
    | "occupational-demand-forecast"
    | "hei-benchmarking"
    | "district-skills"
    | "regional-comparison"
    | "official-indicators"
    | "policy-monitoring"
    | "scenario-exploration"
    | "reporting-centre"
    | "settings"
    // Graduate pages
    | "graduate-dashboard"
    | "skill-improved"
    | "career-paths"
    | "skill-insight"
    | "skill-insight-detail"
    | "jobs-opportunities"
    | "job-detail"
    | "market-insight"
    | "ai-assistant"
    | "saved-jobs"
    | "graduate-settings"
    | "graduate-profile"
    // HEI pages
    | "hei-dashboard"
    | "curriculum-market-alignment"
    | "skills-mismatch-map"
    | "graduate-employability"
    | "emerging-skills-forecast"
    | "program"
    | "curriculum-planner"
    | "hei-ai-assistant"
    | "reports"
    | "hei-settings"
    | "hei-profile"
    // MESY pages (profile)
    | "mesy-profile"
    | "logout";

// ─── Path mappings ────────────────────────────────────────────

/** Maps every Page ID to its URL path. */
export const PAGE_PATH_MAP: Record<Page, string> = {
    // MESY
    "national-dashboard": "/national-dashboard",
    "programme-domain": "/programme-domain",
    "oja-job-vacancy": "/oja-job-vacancy",
    "supply-demand-matrix": "/supply-demand-matrix",
    "indemand-skill-matrix": "/indemand-skill-matrix",
    "occupational-demand-forecast": "/occupational-demand-forecast",
    "hei-benchmarking": "/hei-benchmarking",
    "district-skills": "/district-skills",
    "regional-comparison": "/regional-comparison",
    "official-indicators": "/official-indicators",
    "policy-monitoring": "/policy-monitoring",
    "scenario-exploration": "/scenario-exploration",
    "reporting-centre": "/reporting-centre",
    "settings": "/settings",
    // Graduate
    "graduate-dashboard": "/graduate-dashboard",
    "skill-improved": "/skill-improved",
    "career-paths": "/career-paths",
    "skill-insight": "/skill-insight",
    "skill-insight-detail": "/skill-insight-detail",
    "jobs-opportunities": "/jobs-opportunities",
    "job-detail": "/job-detail",
    "market-insight": "/market-insight",
    "ai-assistant": "/ai-assistant",
    "saved-jobs": "/saved-jobs",
    "graduate-settings": "/graduate-settings",
    "graduate-profile": "/graduate-profile",
    // HEI
    "hei-dashboard": "/hei-dashboard",
    "curriculum-market-alignment": "/curriculum-market-alignment",
    "skills-mismatch-map": "/skills-mismatch-map",
    "graduate-employability": "/graduate-employability",
    "emerging-skills-forecast": "/emerging-skills-forecast",
    "program": "/program",
    "curriculum-planner": "/curriculum-planner",
    "hei-ai-assistant": "/hei-ai-assistant",
    "reports": "/reports",
    "hei-settings": "/hei-settings",
    "hei-profile": "/hei-profile",
    // Profile
    "mesy-profile": "/mesy-profile",
    "logout": "/logout",
};

/** Maps URL paths back to Page IDs. */
export const PATH_PAGE_MAP: Record<string, Page> = Object.fromEntries(
    Object.entries(PAGE_PATH_MAP).map(([page, path]) => [path, page as Page])
) as Record<string, Page>;

// ─── Nav item types ───────────────────────────────────────────
import type { ComponentType } from "react";

export type NavIcon = LucideIcon | ComponentType<{ className?: string }> | string;

export type NavItem = {
    id: Page;
    label: string;
    icon: NavIcon;
    path: string;
    children?: NavItem[];
};

export type NavSection = {
    label: string; // "OVERVIEW", "ACTION", etc.
    items: NavItem[];
};

export type RoleNavConfig = {
    editionLabel: string;
    sections: NavSection[];
    bottomItems: NavItem[];
};

// ─── MESY (Government) navigation ────────────────────────────

const mesyNav: RoleNavConfig = {
    editionLabel: "Gov Edition",
    sections: [
        {
            label: "OVERVIEW",
            items: [
                {
                    id: "national-dashboard",
                    label: "National Dashboard",
                    icon: Home,
                    path: "/national-dashboard",
                    children: [
                        {
                            id: "programme-domain",
                            label: "Supply by programme domain",
                            icon: Minus,
                            path: "/programme-domain",
                        },
                        {
                            id: "oja-job-vacancy",
                            label: "OJA Job Vacancy Explorer",
                            icon: Minus,
                            path: "/oja-job-vacancy",
                        },
                        {
                            id: "supply-demand-matrix",
                            label: "Supply & Demand Alignment Matrix (D1 Forecast)",
                            icon: Minus,
                            path: "/supply-demand-matrix",
                        },
                        {
                            id: "indemand-skill-matrix",
                            label: "In-Demand Skills Matrix (D2 & OJA Integration)",
                            icon: Minus,
                            path: "/indemand-skill-matrix",
                        },
                        {
                            id: "occupational-demand-forecast",
                            label: "Occupational Demand Forecast (D1 Indicator)",
                            icon: Minus,
                            path: "/occupational-demand-forecast",
                        },
                    ],
                },
                {
                    id: "hei-benchmarking",
                    label: "HEI Benchmarking",
                    icon: Building,
                    path: "/hei-benchmarking",
                },
                {
                    id: "regional-comparison",
                    label: "Regional Comparison",
                    icon: Maps,
                    path: "/regional-comparison",
                    children: [
                        {
                            id: "district-skills",
                            label: "District-Level Skills & Vacancy Summary",
                            icon: Minus,
                            path: "/district-skills",
                        },
                        {
                            id: "official-indicators",
                            label: "Official Indicators",
                            icon: Minus,
                            path: "/official-indicators",
                        },
                    ],
                },
            ],
        },
        {
            label: "ACTION",
            items: [
                {
                    id: "policy-monitoring",
                    label: "Policy Monitoring",
                    icon: Policy,
                    path: "/policy-monitoring",
                },
                {
                    id: "scenario-exploration",
                    label: "Scenario Exploration",
                    icon: Ai,
                    path: "/scenario-exploration",
                },
                {
                    id: "reporting-centre",
                    label: "Reporting Centre",
                    icon: Folder,
                    path: "/reporting-centre",
                },
            ],
        },
    ],
    bottomItems: [
        {
            id: "settings",
            label: "Settings",
            icon: Settings,
            path: "/settings",
        },
        {
            id: "logout",
            label: "Sign Out",
            icon: ArrowRightFromLine,
            path: "/logout",
        },
    ],
};

// ─── Graduate navigation ─────────────────────────────────────

const graduateNav: RoleNavConfig = {
    editionLabel: "Graduate Edition",
    sections: [
        {
            label: "OVERVIEW",
            items: [
                {
                    id: "graduate-dashboard",
                    label: "Dashboard",
                    icon: Home,
                    path: "/graduate-dashboard",
                    children: [
                        {
                            id: "skill-improved",
                            label: "Skill Improved",
                            icon: Minus,
                            path: "/skill-improved",
                        },
                    ],
                },
                {
                    id: "career-paths",
                    label: "Career Paths",
                    icon: Tie,
                    path: "/career-paths",
                },
                {
                    id: "skill-insight",
                    label: "Skill Insight",
                    icon: Zap,
                    path: "/skill-insight",
                },
                {
                    id: "jobs-opportunities",
                    label: "Jobs & Opportunities",
                    icon: Smallsearch,
                    path: "/jobs-opportunities",
                },
                {
                    id: "market-insight",
                    label: "Market Insights",
                    icon: Marketing,
                    path: "/market-insight",
                },
                {
                    id: "ai-assistant",
                    label: "AI Assistant",
                    icon: Ai,
                    path: "/ai-assistant",
                },
            ],
        },
        {
            label: "ACTION",
            items: [
                {
                    id: "saved-jobs",
                    label: "Saved Jobs",
                    icon: Bookmark,
                    path: "/saved-jobs",
                },
            ],
        },
    ],
    bottomItems: [
        {
            id: "graduate-settings",
            label: "Settings",
            icon: Settings,
            path: "/graduate-settings",
        },
        {
            id: "logout",
            label: "Sign Out",
            icon: ArrowRightFromLine,
            path: "/logout",
        },
    ],
};

// ─── HEI navigation ──────────────────────────────────────────

const heiNav: RoleNavConfig = {
    editionLabel: "HEI Edition",
    sections: [
        {
            label: "OVERVIEW",
            items: [
                {
                    id: "hei-dashboard",
                    label: "Dashboard",
                    icon: Building,
                    path: "/hei-dashboard",
                    children: [
                        {
                            id: "curriculum-market-alignment",
                            label: "Curriculum–Market Alignment",
                            icon: Minus,
                            path: "/curriculum-market-alignment",
                        },
                        {
                            id: "skills-mismatch-map",
                            label: "Skills Mismatch Map",
                            icon: Minus,
                            path: "/skills-mismatch-map",
                        },
                        {
                            id: "graduate-employability",
                            label: "Graduate Employability",
                            icon: Minus,
                            path: "/graduate-employability",
                        },
                        {
                            id: "emerging-skills-forecast",
                            label: "Emerging Skills Forecast",
                            icon: Minus,
                            path: "/emerging-skills-forecast",
                        },

                    ],
                },
                {
                    id: "program",
                    label: "Program",
                    icon: Book,
                    path: "/program",
                },
                {
                    id: "curriculum-planner",
                    label: "Curriculum Planner",
                    icon: Edit,
                    path: "/curriculum-planner",
                },
                {
                    id: "hei-ai-assistant",
                    label: "Ai Assistant",
                    icon: Ai,
                    path: "/hei-ai-assistant",
                },
                {
                    id: "reports",
                    label: "Reports",
                    icon: ChartColumn,
                    path: "/reports",
                },
            ],
        },

    ],
    bottomItems: [
        {
            id: "hei-settings",
            label: "Settings",
            icon: Settings,
            path: "/hei-settings",
        },

        {
            id: "logout",
            label: "Sign Out",
            icon: ArrowRightFromLine,
            path: "/logout",
        },
    ],
};

// ─── Export ───────────────────────────────────────────────────

export const navigationConfig: Record<UserRole, RoleNavConfig> = {
    mesy: mesyNav,
    graduate: graduateNav,
    hei: heiNav,
};

/**
 * Returns the default (first) page ID for a given role.
 * Used to set the initial page after login.
 */
export function getDefaultPage(role: UserRole): Page {
    const config = navigationConfig[role];
    const firstSection = config.sections[0];
    if (firstSection && firstSection.items.length > 0) {
        return firstSection.items[0].id;
    }
    return "settings";
}

/**
 * Returns the default path for a given role.
 */
export function getDefaultPath(role: UserRole): string {
    return PAGE_PATH_MAP[getDefaultPage(role)];
}

/**
 * Returns all valid page IDs for a given role (flat list).
 */
export function getRolePages(role: UserRole): Page[] {
    const config = navigationConfig[role];
    const pages: Page[] = [];

    for (const section of config.sections) {
        for (const item of section.items) {
            pages.push(item.id);
            if (item.children) {
                for (const child of item.children) {
                    pages.push(child.id);
                }
            }
        }
    }

    for (const item of config.bottomItems) {
        pages.push(item.id);
    }

    return pages;
}


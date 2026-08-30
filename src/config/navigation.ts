import type { LucideIcon } from "lucide-react";
import {
    Home,
    School,
    Map,
    Cpu,
    BookLock,
    FolderOpen,
    Settings,
    Minus,
    Briefcase,
    GraduationCap,
    Target,
    BarChart3,
    Building2,
    TrendingUp,
    ArrowRightFromLine
} from "lucide-react";
import type { UserRole } from "../auth/authTypes";

// ─── Page type ────────────────────────────────────────────────
// Union of all valid page IDs across every role.
// Add new page IDs here as you build them.

export type Page =
    // MESY pages
    | "national-dashboard"
    | "programme-domain"
    | "esco-skill-review"
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

// ─── Nav item types ───────────────────────────────────────────

export type NavItem = {
    id: Page;
    label: string;
    icon: LucideIcon;
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
                    children: [
                        {
                            id: "programme-domain",
                            label: "Supply by programme domain",
                            icon: Minus,
                        },
                        {
                            id: "esco-skill-review",
                            label: "ESCO Skill Mapping Review",
                            icon: Minus,
                        },
                    ],
                },
                {
                    id: "hei-benchmarking",
                    label: "HEI Benchmarking",
                    icon: School,
                },
                {
                    id: "regional-comparison",
                    label: "Regional Comparison",
                    icon: Map,
                    children: [
                        {
                            id: "district-skills",
                            label: "District-Level Skills & Vacancy Summary",
                            icon: Minus,
                        },
                        {
                            id: "official-indicators",
                            label: "Official Indicators",
                            icon: Minus,
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
                    icon: BookLock,
                },
                {
                    id: "scenario-exploration",
                    label: "Scenario Exploration",
                    icon: Cpu,
                },
                {
                    id: "reporting-centre",
                    label: "Reporting Centre",
                    icon: FolderOpen,
                },
            ],
        },
    ],
    bottomItems: [
        {
            id: "settings",
            label: "Settings",
            icon: Settings,
        },
        {
            id: "logout",
            label: "Sign Out",
            icon: ArrowRightFromLine,
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
                    children: [
                        {
                            id: "skill-improved",
                            label: "Skill Improved",
                            icon: Minus,
                        },
                    ],
                },
                {
                    id: "career-paths",
                    label: "Career Paths",
                    icon: Briefcase,
                },
                {
                    id: "skill-insight",
                    label: "Skill Insight",
                    icon: GraduationCap,
                },
                {
                    id: "jobs-opportunities",
                    label: "Jobs & Opportunities",
                    icon: GraduationCap,
                },
                {
                    id: "market-insight",
                    label: "Market Insights",
                    icon: GraduationCap,
                },
                {
                    id: "ai-assistant",
                    label: "AI Assistant",
                    icon: GraduationCap,
                },
            ],
        },
        {
            label: "ACTION",
            items: [
                {
                    id: "saved-jobs",
                    label: "Saved Jobs",
                    icon: Target,
                },
            ],
        },
    ],
    bottomItems: [
        {
            id: "graduate-settings",
            label: "Settings",
            icon: Settings,
        },
        {
            id: "logout",
            label: "Sign Out",
            icon: ArrowRightFromLine,
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
                    icon: Building2,
                    children: [
                        {
                            id: "curriculum-market-alignment",
                            label: "Curriculum–Market Alignment",
                            icon: Minus,
                        },
                        {
                            id: "skills-mismatch-map",
                            label: "Skills Mismatch Map",
                            icon: Minus,
                        },
                        {
                            id: "graduate-employability",
                            label: "Graduate Employability",
                            icon: Minus,
                        },
                        {
                            id: "emerging-skills-forecast",
                            label: "Emerging Skills Forecast",
                            icon: Minus,
                        },

                    ],
                },
                {
                    id: "program",
                    label: "Program",
                    icon: BarChart3,
                },
                {
                    id: "curriculum-planner",
                    label: "Curriculum Planner",
                    icon: TrendingUp,
                },
                {
                    id: "hei-ai-assistant",
                    label: "Ai Assistant",
                    icon: TrendingUp,
                },
                {
                    id: "reports",
                    label: "Reports",
                    icon: TrendingUp,
                },
            ],
        },

    ],
    bottomItems: [
        {
            id: "hei-settings",
            label: "Settings",
            icon: Settings,
        },

        {
            id: "logout",
            label: "Sign Out",
            icon: ArrowRightFromLine,
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


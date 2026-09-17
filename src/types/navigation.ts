import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";


export type NavIcon = LucideIcon | ComponentType<{ className?: string }> | string;

// ─── Page type ────────────────────────────────────────────────
// Union of all valid page IDs across every role.
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
    // MESY profile & actions
    | "mesy-profile"
    | "logout";

export interface NavItem {
    id: Page;
    label: string;
    icon: NavIcon;
    children?: NavItem[];
}

export interface NavSection {
    label: string;
    items: NavItem[];
}

export interface RoleNavConfig {
    editionLabel: string;
    sections: NavSection[];
    bottomItems: NavItem[];
}


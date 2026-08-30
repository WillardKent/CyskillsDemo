import {
    Building2,
    GraduationCap,
    Users,
    BriefcaseBusiness,
    ChartNoAxesCombined,
} from "lucide-react";
import type { CoverageStat, ProgressItem } from "../types/mesy";

export const nationalCoverageStats: CoverageStat[] = [
    {
        title: "Programme coverage",
        value: "5 HEIs",
        change: "+3%",
        source: "CYGraduates data",
        icon: Building2,
        iconColor: "text-[#1A62F8]",
        changeColor: "text-[#1A62F8]",
    },
    {
        title: "Total Graduates",
        value: "1,250",
        change: "+12%",
        source: "Graduate data",
        icon: GraduationCap,
        iconColor: "text-[#10B981]",
        changeColor: "text-[#10B981]",
    },
    {
        title: "Students",
        value: "3,450",
        change: "+5%",
        source: "Student data",
        icon: Users,
        iconColor: "text-[#F59E0B]",
        changeColor: "text-[#F59E0B]",
    },
    {
        title: "Employment Rate",
        value: "82%",
        change: "+7%",
        source: "Employment data",
        icon: BriefcaseBusiness,
        iconColor: "text-[#8B5CF6]",
        changeColor: "text-[#8B5CF6]",
    },
    {
        title: "Graduate Performance",
        value: "89%",
        change: "+4%",
        source: "Performance data",
        icon: ChartNoAxesCombined,
        iconColor: "text-[#EF4444]",
        changeColor: "text-[#EF4444]",
    },
];

export const programmeDomainSupplyData: ProgressItem[] = [
    {
        label: "ICT & Engineering",
        percentage: 90,
        gradient: "bg-[linear-gradient(225deg,#68DBF2_0.01%,#1A62F8_100%)]",
    },
    {
        label: "Business & Law",
        percentage: 75,
        gradient: "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Education & Social",
        percentage: 48,
        gradient: "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Health & Life Science",
        percentage: 100,
        gradient: "bg-[linear-gradient(225deg,#F27868_0.01%,#F55050_100%)]",
    },
];

export const nationalEmploymentData: ProgressItem[] = [
    {
        label: "Employed",
        percentage: 85,
        gradient: "bg-[linear-gradient(225deg,#68DBF2_0.01%,#1A62F8_100%)]",
    },
    {
        label: "Self-employed",
        percentage: 60,
        gradient: "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Unemployed",
        percentage: 25,
        gradient: "bg-[linear-gradient(225deg,#F27868_0.01%,#F55050_100%)]",
    },
];

export const mesyPolicyTabs = [
    { id: "eu-skills", label: "EU Skills Agenda 2030" },
    { id: "eu-digital", label: "EU Digital Decade" },
    { id: "national-recovery", label: "National Recovery Plan" },
    { id: "cyprus-strategy", label: "Cyprus 2035 Strategy" },
];

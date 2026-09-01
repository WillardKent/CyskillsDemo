import {
    createRootRouteWithContext,
    createRoute,
    createRouter,
    Outlet,
    useNavigate as useTanstackNavigate,
} from "@tanstack/react-router";
import { useEffect } from "react";

import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import LoginPage from "./pages/LoginPage";
import ComingSoon from "./pages/ComingSoon";
import { useAuth } from "./auth/useAuth";
import { getDefaultPath, PAGE_PATH_MAP } from "./config/navigation";
import { NavigationProvider, useAppNavigation } from "./context/NavigationContext";
import GraduateRegister from "./pages/graduate/GraduateRegister";
import HeiRegister from "./pages/hei/HeiRegister";

// ─── MESY page imports ───────────────────────────────────────
import NationalDashboard from "./pages/mesy/national/NationalDashboard";
import EscoSkillReview from "./pages/mesy/national/EscoSkillReview";
import ProgrammeDomain from "./pages/mesy/national/ProgrammeDomain";
import HeiBenchmarking from "./pages/mesy/HeiBenchmarking";
import RegionalComparison from "./pages/mesy/regional/RegionalComparison";
import DistrictSummary from "./pages/mesy/regional/DistrictSummary";
import OfficialIndicator from "./pages/mesy/regional/OfficialIndicator";
import PolicyMonitoring from "./pages/mesy/PolicyMonitoring";
import ReportingCentre from "./pages/mesy/ReportingCentre";
import ScenarioExploration from "./pages/mesy/ScenarioExploration";
import MesySetting from "./pages/mesy/MesySetting";

// ─── Graduate page imports ───────────────────────────────────────
import GraduateDashboard from "./pages/graduate/GraduateDashboard";
import CareerPaths from "./pages/graduate/CareerPaths";
import GraduateAiAssistant from "./pages/graduate/GraduateAiAssistant";
import GraduateSettings from "./pages/graduate/GraduateSettings";
import JobsOpportunities from "./pages/graduate/JobsOpportunities";
import MarketInsights from "./pages/graduate/MarketInsights";
import SaveJobs from "./pages/graduate/SaveJobs";
import SkillImproved from "./pages/graduate/SkillImproved";
import SkillInsight from "./pages/graduate/SkillInsight";
import SkillInsightDetail from "./pages/graduate/SkillInsightDetail";
import JobDetail from "./pages/graduate/JobDetail";
import GraduateProfile from "./pages/graduate/GraduateProfile";
import HeiProfile from "./pages/hei/HeiProfile";
import MesyProfile from "./pages/mesy/MesyProfile";

// ─── HEI page imports ───────────────────────────────────────
import HeiDashboard from "./pages/hei/HeiDashboard";
import CurriculumMarket from "./pages/hei/heidashboard/CurriculumMarket";
import GraduateEmployability from "./pages/hei/heidashboard/GraduateEmployability";
import SkillMismatchMap from "./pages/hei/heidashboard/SkillMismatchMap";
import EmergingSkillsForecast from "./pages/hei/heidashboard/EmergingSkillsForecast";
import CurriculumPlanner from "./pages/hei/CurriculumPlanner";
import HeiAiAssistant from "./pages/hei/HeiAiAssistant";
import HeiProgram from "./pages/hei/HeiProgram";
import HeiReports from "./pages/hei/HeiReports";
import HeiSettings from "./pages/hei/HeiSettings";

import type { Page } from "./config/navigation";
import { useNavigate } from "@tanstack/react-router";

// ─── Wrapper components ──────────────────────────────────────
// These bridge the router with existing component prop interfaces
// so we don't need to modify the page components themselves.

function SkillInsightRoute() {
    const { selectLearningPath } = useAppNavigation();
    return <SkillInsight onSelectPath={selectLearningPath} />;
}

function SkillInsightDetailRoute() {
    const { selectedLearningPath } = useAppNavigation();
    const navigate = useNavigate();
    return (
        <SkillInsightDetail
            data={selectedLearningPath}
            onNavigate={(page: Page) => navigate({ to: PAGE_PATH_MAP[page] })}
        />
    );
}

function JobsOpportunitiesRoute() {
    const { selectJob } = useAppNavigation();
    return <JobsOpportunities onSelectJob={selectJob} />;
}

function JobDetailRoute() {
    const { selectedJob, savedJobs, toggleSaveJob } = useAppNavigation();
    const navigate = useNavigate();
    return (
        <JobDetail
            data={selectedJob}
            onNavigate={(page: Page) => navigate({ to: PAGE_PATH_MAP[page] })}
            savedJobs={savedJobs}
            onToggleSave={toggleSaveJob}
        />
    );
}

function SaveJobsRoute() {
    const { savedJobs, selectJob } = useAppNavigation();
    return <SaveJobs savedJobs={savedJobs} onSelectJob={selectJob} />;
}

function HeiProgramRoute() {
    const navigate = useNavigate();
    return (
        <HeiProgram
            onNavigate={(page: Page) => navigate({ to: PAGE_PATH_MAP[page] })}
        />
    );
}

function GraduateProfileRoute() {
    const { user } = useAuth();
    return (
        <GraduateProfile
            name={user?.name ?? "User"}
            headline={user?.title ?? "Graduate"}
            profileImageUrl={user?.avatar ?? ""}
            status="Active"
            academicBackground={{
                university: "University of Malaya",
                degree: "Bachelor of Computer Science",
                graduationYear: 2025,
                iscedField: "Information and Communication Technologies",
            }}
            skills={["Python", "React", "TypeScript", "Machine Learning", "Data Analysis"]}
        />
    );
}

function HeiProfileRoute() {
    const { user } = useAuth();
    return (
        <HeiProfile
            name="University of Cyprus"
            subtitle="HEI"
            profileImageUrl={user?.avatar ?? ""}
            institutionDetails={{
                institutionType: "Public University",
                country: "Cyprus",
                contactEmail: "admin@ucy.ac.cy",
                established: "1990",
                website: "www.ucy.ac.cy",
                phone: "+357 22 892000",
            }}
            summary={{
                faculties: 8,
                programs: 78,
                departments: 32,
                activeUsers: 145,
            }}
            facultiesAndPrograms={[
                "Faculty of Engineering",
                "Faculty of Letters",
                "Faculty of Economics and Management",
                "Faculty of Pure and Applied Sciences",
            ]}
        />
    );
}

function MesyProfileRoute() {
    const { user } = useAuth();
    return (
        <MesyProfile
            name={user?.name ?? "User"}
            subtitle="Government of the Republic of Cyprus"
            profileImageUrl={user?.avatar ?? ""}
            ministryInfo={{
                ministryName: "Ministry of Education, Sport and Youth",
                role: "Policy Analyst",
                contactEmail: "admin@.ac.cy",
                department: "Higher Education and Research",
                accessLevel: "Analyst",
                phone: "+357 22 892000",
            }}
            summary={{
                dataSourcesAccessed: 32,
                dataRequests: 78,
                activeSessions: 145,
            }}
        />
    );
}

// ─── Root Layout ─────────────────────────────────────────────
// Renders a bare <Outlet /> so both auth and non-auth routes share the same root.

function RootLayout() {
    return <Outlet />;
}

// ─── Authenticated Layout ────────────────────────────────────
// Wraps all app pages behind an auth guard.
// If not authenticated, redirects to /login.

function AuthenticatedLayout() {
    const { isAuthenticated, isLoading } = useAuth();
    const navigate = useTanstackNavigate();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            navigate({ to: "/login" });
        }
    }, [isLoading, isAuthenticated, navigate]);

    // Show loading screen while checking session
    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#FCFCFC]">
                <div className="flex flex-col items-center gap-3">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[#1A62F8]" />
                    <span className="font-inter text-sm text-[#5C6472]">Loading...</span>
                </div>
            </div>
        );
    }

    // While redirecting
    if (!isAuthenticated) {
        return null;
    }

    return (
        <NavigationProvider>
            <div className="flex h-screen overflow-hidden bg-[#FCFCFC]">
                {/* Sidebar */}
                <Sidenav />

                {/* Right side */}
                <div className="flex min-w-0 flex-1 flex-col">
                    {/* Header */}
                    <Header />

                    {/* Main content */}
                    <main className="flex-1 overflow-y-auto p-2 min-[450px]:p-4 sm:p-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </NavigationProvider>
    );
}

// ─── Login Route Component ───────────────────────────────────
// If already authenticated, redirect to the default dashboard.

function LoginRouteComponent() {
    const { isAuthenticated, user, isLoading } = useAuth();
    const navigate = useTanstackNavigate();

    useEffect(() => {
        if (!isLoading && isAuthenticated && user) {
            navigate({ to: getDefaultPath(user.role) });
        }
    }, [isLoading, isAuthenticated, user, navigate]);

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#FCFCFC]">
                <div className="flex flex-col items-center gap-3">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[#1A62F8]" />
                    <span className="font-inter text-sm text-[#5C6472]">Loading...</span>
                </div>
            </div>
        );
    }

    if (isAuthenticated) return null;
    return <LoginPage />;
}

// ─── Register Route Components ───────────────────────────────

function GraduateRegisterRoute() {
    const { isAuthenticated, user, isLoading } = useAuth();
    const navigate = useTanstackNavigate();

    useEffect(() => {
        if (!isLoading && isAuthenticated && user) {
            navigate({ to: getDefaultPath(user.role) });
        }
    }, [isLoading, isAuthenticated, user, navigate]);

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#FCFCFC]">
                <div className="flex flex-col items-center gap-3">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[#1A62F8]" />
                    <span className="font-inter text-sm text-[#5C6472]">Loading...</span>
                </div>
            </div>
        );
    }

    if (isAuthenticated) return null;
    return <GraduateRegister onBackToLogin={() => navigate({ to: "/login" })} />;
}

function HeiRegisterRoute() {
    const { isAuthenticated, user, isLoading } = useAuth();
    const navigate = useTanstackNavigate();

    useEffect(() => {
        if (!isLoading && isAuthenticated && user) {
            navigate({ to: getDefaultPath(user.role) });
        }
    }, [isLoading, isAuthenticated, user, navigate]);

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#FCFCFC]">
                <div className="flex flex-col items-center gap-3">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[#1A62F8]" />
                    <span className="font-inter text-sm text-[#5C6472]">Loading...</span>
                </div>
            </div>
        );
    }

    if (isAuthenticated) return null;
    return <HeiRegister onBackToLogin={() => navigate({ to: "/login" })} />;
}

// ─── Route Definitions ───────────────────────────────────────

const rootRoute = createRootRouteWithContext()({
    component: RootLayout,
});

// Index route — redirects based on auth state
function IndexRedirect() {
    const { user, isAuthenticated, isLoading } = useAuth();
    const navigate = useTanstackNavigate();

    useEffect(() => {
        if (!isLoading) {
            if (isAuthenticated && user) {
                navigate({ to: getDefaultPath(user.role) });
            } else {
                navigate({ to: "/login" });
            }
        }
    }, [isLoading, isAuthenticated, user, navigate]);

    return (
        <div className="flex h-screen items-center justify-center bg-[#FCFCFC]">
            <div className="flex flex-col items-center gap-3">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[#1A62F8]" />
                <span className="font-inter text-sm text-[#5C6472]">Loading...</span>
            </div>
        </div>
    );
}

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: IndexRedirect,
});

// ─── Auth routes (no layout shell) ───────────────────────────

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/login",
    component: LoginRouteComponent,
});

const registerRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/register",
    component: GraduateRegisterRoute,
});

const heiRegisterRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/register/hei",
    component: HeiRegisterRoute,
});

// ─── Authenticated layout route ──────────────────────────────
// All app pages are children of this layout route.

const appLayoutRoute = createRoute({
    getParentRoute: () => rootRoute,
    id: "app",
    component: AuthenticatedLayout,
});

// ─── MESY routes ─────────────────────────────────────────────

const nationalDashboardRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/national-dashboard",
    component: NationalDashboard,
});

const programmeDomainRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/programme-domain",
    component: ProgrammeDomain,
});

const escoSkillReviewRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/esco-skill-review",
    component: EscoSkillReview,
});

const heiBenchmarkingRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/hei-benchmarking",
    component: HeiBenchmarking,
});

const regionalComparisonRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/regional-comparison",
    component: RegionalComparison,
});

const districtSkillsRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/district-skills",
    component: DistrictSummary,
});

const officialIndicatorsRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/official-indicators",
    component: OfficialIndicator,
});

const policyMonitoringRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/policy-monitoring",
    component: PolicyMonitoring,
});

const scenarioExplorationRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/scenario-exploration",
    component: ScenarioExploration,
});

const reportingCentreRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/reporting-centre",
    component: ReportingCentre,
});

const settingsRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/settings",
    component: MesySetting,
});

// ─── Graduate routes ─────────────────────────────────────────

const graduateDashboardRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/graduate-dashboard",
    component: GraduateDashboard,
});

const skillImprovedRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/skill-improved",
    component: SkillImproved,
});

const careerPathsRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/career-paths",
    component: CareerPaths,
});

const skillInsightRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/skill-insight",
    component: SkillInsightRoute,
});

const skillInsightDetailRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/skill-insight-detail",
    component: SkillInsightDetailRoute,
});

const jobsOpportunitiesRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/jobs-opportunities",
    component: JobsOpportunitiesRoute,
});

const jobDetailRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/job-detail",
    component: JobDetailRoute,
});

const marketInsightRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/market-insight",
    component: MarketInsights,
});

const aiAssistantRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/ai-assistant",
    component: GraduateAiAssistant,
});

const savedJobsRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/saved-jobs",
    component: SaveJobsRoute,
});

const graduateSettingsRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/graduate-settings",
    component: GraduateSettings,
});

const graduateProfileRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/graduate-profile",
    component: GraduateProfileRoute,
});

// ─── HEI routes ──────────────────────────────────────────────

const heiDashboardRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/hei-dashboard",
    component: HeiDashboard,
});

const curriculumMarketRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/curriculum-market-alignment",
    component: CurriculumMarket,
});

const skillsMismatchRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/skills-mismatch-map",
    component: SkillMismatchMap,
});

const graduateEmployabilityRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/graduate-employability",
    component: GraduateEmployability,
});

const emergingSkillsRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/emerging-skills-forecast",
    component: EmergingSkillsForecast,
});

const programRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/program",
    component: HeiProgramRoute,
});

const curriculumPlannerRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/curriculum-planner",
    component: CurriculumPlanner,
});

const heiAiAssistantRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/hei-ai-assistant",
    component: HeiAiAssistant,
});

const reportsRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/reports",
    component: HeiReports,
});

const heiSettingsRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/hei-settings",
    component: HeiSettings,
});

const heiProfileRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/hei-profile",
    component: HeiProfileRoute,
});

// ─── Profile routes ──────────────────────────────────────────

const mesyProfileRoute = createRoute({
    getParentRoute: () => appLayoutRoute,
    path: "/mesy-profile",
    component: MesyProfileRoute,
});

// ─── Catch-all route ─────────────────────────────────────────

const catchAllRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "$",
    component: () => <ComingSoon pageName="This page" />,
});

// ─── Route Tree ──────────────────────────────────────────────

const appRouteTree = appLayoutRoute.addChildren([
    // MESY
    nationalDashboardRoute,
    programmeDomainRoute,
    escoSkillReviewRoute,
    heiBenchmarkingRoute,
    regionalComparisonRoute,
    districtSkillsRoute,
    officialIndicatorsRoute,
    policyMonitoringRoute,
    scenarioExplorationRoute,
    reportingCentreRoute,
    settingsRoute,
    // Graduate
    graduateDashboardRoute,
    skillImprovedRoute,
    careerPathsRoute,
    skillInsightRoute,
    skillInsightDetailRoute,
    jobsOpportunitiesRoute,
    jobDetailRoute,
    marketInsightRoute,
    aiAssistantRoute,
    savedJobsRoute,
    graduateSettingsRoute,
    graduateProfileRoute,
    // HEI
    heiDashboardRoute,
    curriculumMarketRoute,
    skillsMismatchRoute,
    graduateEmployabilityRoute,
    emergingSkillsRoute,
    programRoute,
    curriculumPlannerRoute,
    heiAiAssistantRoute,
    reportsRoute,
    heiSettingsRoute,
    heiProfileRoute,
    // Profiles
    mesyProfileRoute,
]);

const routeTree = rootRoute.addChildren([
    indexRoute,
    loginRoute,
    registerRoute,
    heiRegisterRoute,
    appRouteTree,
    catchAllRoute,
]);

// ─── Router ──────────────────────────────────────────────────

export const router = createRouter({ routeTree });

// Type-safe router registration
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

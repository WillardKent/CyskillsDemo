import { useState, useEffect } from "react";

import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import LoginPage from "./pages/LoginPage";
import ComingSoon from "./pages/ComingSoon";
import { useAuth } from "./auth/useAuth";
import { getDefaultPage } from "./config/navigation";
import type { Page } from "./config/navigation";
import type { LearningPathData } from "./types/learningPath";
import type { JobData } from "./types/jobData";

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

export default function App() {
    const { user, isAuthenticated, isLoading } = useAuth();

    const [currentPage, setCurrentPage] = useState<Page>("national-dashboard");
    const [selectedLearningPath, setSelectedLearningPath] = useState<LearningPathData | null>(null);

    const handleSelectLearningPath = (path: LearningPathData) => {
        setSelectedLearningPath(path);
        setCurrentPage("skill-insight-detail");
    };

    const [selectedJob, setSelectedJob] = useState<JobData | null>(null);
    const [savedJobs, setSavedJobs] = useState<JobData[]>([]);

    const handleSelectJob = (job: JobData) => {
        setSelectedJob(job);
        setCurrentPage("job-detail");
    };

    const toggleSaveJob = (job: JobData) => {
        setSavedJobs((prev) => {
            const exists = prev.some(
                (j) => j.title === job.title && j.company === job.company
            );
            return exists
                ? prev.filter((j) => !(j.title === job.title && j.company === job.company))
                : [...prev, job];
        });
    };

    // Set the default page for the user's role when they log in
    useEffect(() => {
        if (user) {
            setCurrentPage(getDefaultPage(user.role));
        }
    }, [user]);

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

    // Show login page if not authenticated
    if (!isAuthenticated) {
        return <LoginPage />;
    }

    const renderPage = () => {
        switch (currentPage) {
            // ─── MESY pages ──────────────────────────
            case "national-dashboard":
                return <NationalDashboard />;
            case "programme-domain":
                return <ProgrammeDomain />;
            case "esco-skill-review":
                return <EscoSkillReview />;
            case "hei-benchmarking":
                return <HeiBenchmarking />;
            case "regional-comparison":
                return <RegionalComparison />;
            case "district-skills":
                return <DistrictSummary />;
            case "official-indicators":
                return <OfficialIndicator />;
            case "policy-monitoring":
                return <PolicyMonitoring />;
            case "scenario-exploration":
                return <ScenarioExploration />;
            case "reporting-centre":
                return <ReportingCentre />;
            case "settings":
                return <MesySetting />;

            // ─── Graduate pages (placeholders) ───────
            case "graduate-dashboard":
                return <GraduateDashboard />;
            case "skill-improved":
                return <SkillImproved />;
            case "career-paths":
                return <CareerPaths />;
            case "skill-insight":
                return <SkillInsight onSelectPath={handleSelectLearningPath} />;
            case "skill-insight-detail":
                return <SkillInsightDetail data={selectedLearningPath} onNavigate={setCurrentPage} />;
            case "jobs-opportunities":
                return <JobsOpportunities onSelectJob={handleSelectJob} />;
            case "job-detail":
                return <JobDetail data={selectedJob} onNavigate={setCurrentPage} savedJobs={savedJobs} onToggleSave={toggleSaveJob} />;
            case "market-insight":
                return <MarketInsights />;
            case "ai-assistant":
                return <GraduateAiAssistant />;
            case "saved-jobs":
                return <SaveJobs savedJobs={savedJobs} onSelectJob={handleSelectJob} />;
            case "graduate-settings":
                return <GraduateSettings />;
            case "graduate-profile":
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

            // ─── HEI pages (placeholders) ────────────
            case "hei-dashboard":
                return <HeiDashboard />;
            case "curriculum-market-alignment":
                return <CurriculumMarket />;
            case "skills-mismatch-map":
                return <SkillMismatchMap />;
            case "graduate-employability":
                return <GraduateEmployability />;
            case "emerging-skills-forecast":
                return <EmergingSkillsForecast />;
            case "program":
                return <HeiProgram onNavigate={setCurrentPage} />;
            case "curriculum-planner":
                return <CurriculumPlanner />;
            case "hei-ai-assistant":
                return <HeiAiAssistant />;
            case "reports":
                return <HeiReports />;
            case "hei-settings":
                return <HeiSettings />;
            case "hei-profile":
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

            // ─── MESY profile ────────────────────────
            case "mesy-profile":
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

            default:
                return <ComingSoon pageName="This page" />;
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-[#FCFCFC]">
            {/* Sidebar */}
            <Sidenav
                currentPage={currentPage}
                onNavigate={setCurrentPage}
            />

            {/* Right side */}
            <div className="flex min-w-0 flex-1 flex-col">
                {/* Header */}
                <Header />

                {/* Main content */}
                <main className="flex-1 overflow-y-auto p-2 min-[450px]:p-4 sm:p-6">
                    {renderPage()}
                </main>
            </div>
        </div>
    );
}

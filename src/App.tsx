import { useState } from "react";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";

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
export type Page =
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
  | "settings";

export default function App() {
  const [currentPage, setCurrentPage] =
    useState<Page>("national-dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "national-dashboard":
        return <NationalDashboard />;

      case "programme-domain":
        return <ProgrammeDomain />;

      case "esco-skill-review":
        return <EscoSkillReview />;

      // Temporary placeholders
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
        return <ScenarioExploration />

      case "reporting-centre":
        return <ReportingCentre />

      case "settings":
        return <MesySetting />

      default:
        return <NationalDashboard />;
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
        <main className="flex-1 overflow-y-auto p-4">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
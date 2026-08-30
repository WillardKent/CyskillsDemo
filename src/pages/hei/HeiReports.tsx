import { useState } from "react";
import HeaderBanner from "../../elements/HeaderBanner";
import Tabs from "../../elements/Tabs";
import AvailableReports from "./heireporttab/AvailableReports";
import ScheduledReports from "./heireporttab/ScheduledReports";
import ReportsHistory from "./heireporttab/ReportsHistory";



export default function HeiReports() {

    const [activeTab, setActiveTab] = useState("available-reports");

    const tabs = [
        {
            id: "available-reports",
            label: "Available Reports",
        },
        {
            id: "scheduled-reports",
            label: "Scheduled",
        },
        {
            id: "reports-history",
            label: "History",
        },

    ];

    return (
        <>


            <div className="flex flex-col w-full gap-2">

                <HeaderBanner breadcrumb="Reports"
                    title="Reports"
                    description="Institutional-level reports for accreditation, strategy, and governance."

                />

                <Tabs
                    tabs={tabs}
                    value={activeTab}
                    onChange={setActiveTab}
                />

                {activeTab === "available-reports" && (
                    <>
                        <AvailableReports />
                    </>
                )}

                {activeTab === "scheduled-reports" && (
                    <>
                        <ScheduledReports />
                    </>
                )}

                {activeTab === "reports-history" && (
                    <>
                        <ReportsHistory />
                    </>
                )}





            </div >

        </>
    );
}
import { useState } from "react";
import InfoBanner from "../../elements/InfoBanner";
import HeaderBanner from "../../elements/HeaderBanner";
import Tabs from "../../elements/Tabs";
import CurriculumAllRecommendation from "./curriculumplannertab/CurriculumAllRecommendation";
import CurriculumAddCourse from "./curriculumplannertab/CurriculumAddCourse";
import CurriculumRemoveReplace from "./curriculumplannertab/CurriculumRemoveReplace";
import CurriculumRestructure from "./curriculumplannertab/CurriculumRestructure";
import CurriculumUpdateCourse from "./curriculumplannertab/CurriculumUpdateCourse";


export default function CurriculumPlanner() {
    const [activeTab, setActiveTab] = useState("all-recom");

    const tabs = [
        {
            id: "all-recom",
            label: "All Recommendations (7)",
        },
        {
            id: "add-course",
            label: "Add Courses (3)",
        },
        {
            id: "update-course",
            label: "Update Courses (2)",
        },
        {
            id: "remove-replace",
            label: "Remove / Replace (2)",
        },
        {
            id: "restructure",
            label: "Restructure (1)",
        },
    ];


    return (
        <>


            <div className="flex flex-col w-full gap-2">

                <HeaderBanner breadcrumb="Curriculum Planner"
                    title="Curriculum Planning & Decision Support"
                    description="AI-translated insights into actionable curriculum changes — reviewed and approved by you"
                    buttons={[
                        {
                            text: "Export Plan",
                            variant: "blue",
                            onClick: () => console.log("Year clicked"),
                        }]}
                />



                <InfoBanner title={`Human-in-the-loop validation required
All AI-generated recommendations below require review and approval from your curriculum committee before implementation. CySKILLS-AI provides intelligence 
— your faculty makes the decision.
`}
                    buttons={[
                        {
                            text: "Learn about our governance framework →",
                            variant: "text",
                            onClick: () => { },
                        },
                    ]} />


                <Tabs
                    tabs={tabs}
                    value={activeTab}
                    onChange={setActiveTab}
                />

                {activeTab === "all-recom" && (
                    <>
                        <CurriculumAllRecommendation />
                    </>
                )}

                {activeTab === "add-course" && (
                    <>
                        <CurriculumAddCourse />
                    </>
                )}

                {activeTab === "update-course" && (
                    <>
                        <CurriculumUpdateCourse />
                    </>
                )}

                {activeTab === "remove-replace" && (
                    <>
                        <CurriculumRemoveReplace />
                    </>
                )}
                {activeTab === "restructure" && (
                    <>
                        <CurriculumRestructure />
                    </>
                )}


            </div >

        </>
    );
}
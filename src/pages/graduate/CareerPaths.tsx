
import InfoBanner from "../../elements/InfoBanner";
import HeaderBanner from "../../elements/HeaderBanner";
import CareerExplorer from "../../elements/CareerCard";

import type { CareerItem } from "../../elements/CareerCard"; // Adjust import path if needed

export const sampleCareerData: CareerItem[] = [
    {
        id: "1",
        title: "Data Analyst",
        matchPercentage: 78,
        category: "Data & Analytics",
        openings: 423,
        description: "Transform raw data into business insights. Strong demand in finance, logistics, and tech sectors.",
        skills: ["Python", "SQL", "Power BI", "Statistics"],
        avgSalary: "€24,000–€36,000",
        skillsGap: 3,
        timeline: [
            {
                yearTitle: "Year 1 – Build the Foundation",
                items: [
                    "Learn Excel and SQL.",
                    "Understand basic statistics and data analysis.",
                    "Practice cleaning and organizing datasets.",
                    "Create simple charts and reports."
                ]
            },
            {
                yearTitle: "Year 2 – Develop Technical Skills",
                items: [
                    "Learn Python for data analysis.",
                    "Master Power BI or Tableau.",
                    "Work with larger and more complex datasets.",
                    "Build real-world data analysis projects."
                ]
            },
            {
                yearTitle: "Year 3 – Become a Professional Analyst",
                items: [
                    "Analyze business problems using data.",
                    "Create advanced dashboards and reports.",
                    "Improve data storytelling and presentation skills.",
                    "Build a strong professional portfolio."
                ]
            },
            {
                yearTitle: "Year 4 – Specialize & Grow",
                items: [
                    "Choose a specialization such as Finance, Marketing, Product, or Business Analytics.",
                    "Learn advanced analytics techniques.",
                    "Work with stakeholders and support business decisions.",
                    "Take on more complex projects."
                ]
            },
            {
                yearTitle: "Year 5+ – Advance Your Career",
                items: [
                    "Move toward Senior Data Analyst or Analytics Consultant roles.",
                    "Lead analytical projects and mentor junior analysts.",
                    "Develop strategic and leadership skills.",
                    "Potentially progress into Analytics Manager or Data Scientist roles."
                ]
            }
        ]
    },
    {
        id: "2",
        title: "Data Engineer",
        matchPercentage: 65,
        category: "Data & Analytics",
        openings: 215,
        description: "Build and maintain the systems that allow data to be collected, processed, and stored efficiently.",
        skills: ["Python", "SQL", "AWS", "Spark"],
        avgSalary: "€45,000–€65,000",
        skillsGap: 5,
        timeline: [
            {
                yearTitle: "Year 1 – Core Programming & Databases",
                items: [
                    "Master SQL and relational database design.",
                    "Become proficient in Python or Java.",
                    "Understand basic cloud computing concepts."
                ]
            },
            {
                yearTitle: "Year 2 – Big Data Tools",
                items: [
                    "Learn Apache Spark and Kafka.",
                    "Build basic ETL (Extract, Transform, Load) pipelines.",
                    "Familiarize yourself with NoSQL databases."
                ]
            }
        ]
    },
    {
        id: "3",
        title: "Business Intelligence Developer",
        matchPercentage: 82,
        category: "Data Science",
        openings: 156,
        description: "Design and develop strategies to assist business users in quickly finding the information they need to make better business decisions.",
        skills: ["Tableau", "DAX", "SQL", "Data Modeling"],
        avgSalary: "€35,000–€50,000",
        skillsGap: 2,
        timeline: [
            {
                yearTitle: "Year 1 – Reporting Fundamentals",
                items: [
                    "Master data visualization principles.",
                    "Build complex SQL queries for reporting.",
                    "Create interactive dashboards."
                ]
            }
        ]
    }
];


export default function CareerPaths() {



    return (
        <>


            <div className="flex flex-col w-full gap-2">

                <HeaderBanner breadcrumb="Career Paths"
                    title="Career Paths"
                    description="Explore roles matched to your profile across sectors"

                />



                <InfoBanner title={` Based on your profile, Data & Analytics roles have the highest match rate (avg 72%). You're currently 6–8 weeks of focused learning away from being highly competitive.`} />


                <CareerExplorer data={sampleCareerData} />

            </div >

        </>
    );
}
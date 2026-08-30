import type { CareerItem, SkillGapItem } from "../types/graduate";
import type { JobData } from "../types/jobData";
import type { LearningPathData } from "../types/learningPath";

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
                    "Create simple charts and reports.",
                ],
            },
            {
                yearTitle: "Year 2 – Develop Technical Skills",
                items: [
                    "Learn Python for data analysis.",
                    "Master Power BI or Tableau.",
                    "Work with larger and more complex datasets.",
                    "Build real-world data analysis projects.",
                ],
            },
            {
                yearTitle: "Year 3 – Become a Professional Analyst",
                items: [
                    "Analyze business problems using data.",
                    "Create advanced dashboards and reports.",
                    "Improve data storytelling and presentation skills.",
                    "Build a strong professional portfolio.",
                ],
            },
            {
                yearTitle: "Year 4 – Specialize & Grow",
                items: [
                    "Choose a specialization such as Finance, Marketing, Product, or Business Analytics.",
                    "Learn advanced analytics techniques.",
                    "Work with stakeholders and support business decisions.",
                    "Take on more complex projects.",
                ],
            },
            {
                yearTitle: "Year 5+ – Advance Your Career",
                items: [
                    "Move toward Senior Data Analyst or Analytics Consultant roles.",
                    "Lead analytical projects and mentor junior analysts.",
                    "Develop strategic and leadership skills.",
                    "Potentially progress into Analytics Manager or Data Scientist roles.",
                ],
            },
        ],
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
                    "Understand basic cloud computing concepts.",
                ],
            },
            {
                yearTitle: "Year 2 – Big Data Tools",
                items: [
                    "Learn Apache Spark and Kafka.",
                    "Build basic ETL (Extract, Transform, Load) pipelines.",
                    "Familiarize yourself with NoSQL databases.",
                ],
            },
        ],
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
                    "Create interactive dashboards.",
                ],
            },
        ],
    },
];

export const sampleSkillGaps: SkillGapItem[] = [
    {
        title: "SQL",
        demandText: "Demanded in 73% of Finance job postings",
        userLevelText: "You have: None",
        tagLabel: "High Gap",
        tagVariant: "danger",
        marketDemandValue: 95,
        userLevelValue: 67,
    },
    {
        title: "Power BI / Tableau",
        demandText: "Demanded in 58% of Business postings",
        userLevelText: "You have: Basic familiarity",
        tagLabel: "High Gap",
        tagVariant: "danger",
        marketDemandValue: 59,
        userLevelValue: 25,
    },
];

export const sampleLearningPaths: LearningPathData[] = [
    {
        title: "SQL for Data Analytics",
        platform: "Coursera",
        duration: "4 weeks (4 hrs/wk)",
        purpose: "Fill core data analyst skill gap",
        level: "Beginner to Intermediate",
        matchScoreGain: "+14%",
        tagLabel: "High Impact",
        tagVariant: "success",
        skills: ["SQL", "Relational Databases", "Aggregations", "Joins"],
    },
    {
        title: "Data Visualization with Power BI",
        platform: "Microsoft Learn",
        duration: "3 weeks (3 hrs/wk)",
        purpose: "Build dashboard portfolio",
        level: "Intermediate",
        matchScoreGain: "+11%",
        tagLabel: "Recommended",
        tagVariant: "info",
        skills: ["Power BI", "DAX", "Data Modeling", "Reporting"],
    },
];

export const sampleJobs: JobData[] = [
    {
        title: "Junior Data Analyst",
        company: "Deloitte Cyprus",
        description: "Join our Analytics & Cognitive team in Nicosia to deliver data-driven solutions for leading European clients.",
        tags: ["SQL", "Python", "Power BI", "Statistics"],
        tagLabel: "High Match 88%",
        tagVariant: "success",
        postedAgo: "2 days ago",
        salary: "€26,000–€32,000 / yr",
        workType: "Hybrid · Nicosia",
        companyDescription: "Deloitte is a leading global provider of audit and assurance, consulting, financial advisory, risk advisory, and tax services.",
        jobDescription: "We are seeking a high-performing Junior Data Analyst to support our expanding data consultancy team.",
        responsibilities: [
            "Extract, clean, and transform data from diverse enterprise sources.",
            "Build automated dashboards and management reports using Power BI.",
            "Collaborate with senior consultants on client-facing analytics deliverables.",
        ],
        qualifications: [
            "BSc in Computer Science, Statistics, Mathematics, or related quantitative field.",
            "Demonstrated proficiency in SQL and Python/R.",
            "Strong analytical mindset and fluent English communication skills.",
        ],
    },
    {
        title: "Associate BI Specialist",
        company: "PwC Cyprus",
        description: "Transform business data into actionable executive insights within our Deals & Consulting advisory practice.",
        tags: ["Power BI", "Tableau", "DAX", "Excel"],
        tagLabel: "Matched 76%",
        tagVariant: "info",
        postedAgo: "5 days ago",
        salary: "€24,000–€30,000 / yr",
        workType: "On-site · Limassol",
        companyDescription: "PwC is the largest professional services firm in Cyprus offering advisory, assurance, and tax solutions.",
        jobDescription: "Exciting opportunity for a fresh graduate to step into business intelligence consulting.",
        responsibilities: [
            "Design, build, and maintain interactive business intelligence dashboards.",
            "Write efficient DAX queries and optimize data models.",
        ],
        qualifications: [
            "Degree in Business Analytics, Computer Science, or MIS.",
            "Hands-on project experience with Power BI or Tableau.",
        ],
    },
];

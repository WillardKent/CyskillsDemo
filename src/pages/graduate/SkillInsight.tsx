
import HeaderBanner from "../../elements/HeaderBanner";
import StatCard from "../../elements/StatCard";
import LearningPathCard from "../../elements/LearningPathCard";
import Card from "../../elements/Card";
import type { LearningPathData } from "../../types/learningPath";

interface SkillInsightProps {
    onSelectPath: (path: LearningPathData) => void;
}

export default function SkillInsight({ onSelectPath }: SkillInsightProps) {

    const skilldatacard = [
        {
            title: "Skills you have",
            value: "6",
            source: "Covers 34% of job requirements",
        },
        {
            title: "Critical Skill Gaps",
            value: "3",
            source: "Causing 60% of application rejections",
        },
        {
            title: "Top skills to gain",
            value: "12",
            source: "Based on 4,302 Data Analyst job postings",
        }
    ];

    const learningPaths: LearningPathData[] = [
        {
            title: "Power BI fundamentals",
            platform: "Coursera",
            duration: "2 weeks",
            purpose: "Closes Data Analytics gap",
            level: "Beginner",
            matchScoreGain: "73%",
            tagLabel: "78% Match",
            tagVariant: "success",
            skills: [
                "Connecting data sources and building your first report",
                "Data modeling and relationships between tables",
                "DAX formulas for calculated fields and measures",
                "Designing dashboards recruiters expect to see",
            ],
        },
        {
            title: "SQL for Data Analysis",
            platform: "Udemy",
            duration: "3 weeks",
            purpose: "Closes SQL gap",
            level: "Intermediate",
            matchScoreGain: "65%",
            tagLabel: "72% Match",
            tagVariant: "success",
            skills: [
                "Writing complex queries with JOINs and subqueries",
                "Aggregation functions and GROUP BY clauses",
                "Window functions for advanced analytics",
                "Database design and normalization principles",
            ],
        },
        {
            title: "Python for Data Science",
            platform: "DataCamp",
            duration: "4 weeks",
            purpose: "Closes Python gap",
            level: "Beginner",
            matchScoreGain: "80%",
            tagLabel: "85% Match",
            tagVariant: "success",
            skills: [
                "Data manipulation with pandas and NumPy",
                "Data visualization with matplotlib and seaborn",
                "Statistical analysis and hypothesis testing",
                "Machine learning basics with scikit-learn",
            ],
        },
    ];

    const skills = ["Python", "Python", "Python", "Python", "Python", "Python"];

    return (
        <>
            <div className="flex flex-col w-full gap-2">

                <HeaderBanner breadcrumb="Skill Insight"
                    title="Skill Gap & Learning"
                    description="What to learn, in what order, to become competitive for Data Analyst roles."
                    buttons={[
                        {
                            text: "Get AI Assistant",
                            variant: "blue",
                            onClick: () => console.log("Year clicked"),
                        }]}
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {skilldatacard.map((stat) => (
                        <StatCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                            desc={stat.source}
                        />
                    ))}
                </div>
                <div className="flex w-full flex-col gap-4 xl:flex-row">

                    <Card
                        title="What skills do you need to improve?"
                        description="For your top match: Data Analyst"
                        onViewAll={() => { }} >

                        <div className="flex flex-col gap-4">
                            {learningPaths.map((path, index) => (
                                <LearningPathCard
                                    key={index}
                                    title={path.title}
                                    platform={path.platform}
                                    duration={path.duration}
                                    purpose={path.purpose}
                                    tagLabel={path.tagLabel}
                                    tagVariant={path.tagVariant}
                                    buttons={[
                                        {
                                            text: "Detail",
                                            variant: "blue",
                                            onClick: () => onSelectPath(path),
                                        },
                                    ]}
                                />
                            ))}
                        </div>

                    </Card>
                    <Card
                        title="Your Best Job Match"
                        description="Apply now — you're already a strong fit"
                        onViewAll={() => { }} >

                        <div className="flex flex-col gap-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="border border-[#F7F8FA] rounded-lg p-3">
                                    <h1 className="text-base font-medium text-[#12151B] pl-3 border-l-2 border-l-[#1FA855]">
                                        {skill}</h1>
                                </div>
                            ))}
                        </div>
                    </Card>

                </div>

            </div >

        </>
    );
}

import InfoBanner from "../../elements/InfoBanner";
import StatCard from "../../elements/StatCard";
import Card from "../../elements/Card";
import SkillCard from "../../elements/SkillCard";
import JobCardMini from "../../elements/JobCardMini";
import MiniCard from "../../elements/MiniCard";
import HeaderBanner from "../../elements/HeaderBanner";





export default function GraduateDashboard() {

    const coverageStats = [
        {
            title: "Data Analyst",
            value: "78%",
            change: "Match score",
            source: "Your Python + Statistics skills align directly. 423 active jobs in Cyprus",

        },
        {
            title: "Business Intelligence Analyst",
            value: "68%",
            change: "Match score",
            source: "Power BI + SQL. 197 jobs available. Fast-growing sector in finance.",
        },
        {
            title: "Junior Data Scientist",
            value: "54%",
            change: "Match score",
            source: "ML skills + portfolio. High demand",
        }
    ];

    return (
        <>


            <div className="flex flex-col w-full gap-2">

                <HeaderBanner breadcrumb="Dashboard"
                    title="Hello Andreas, Find Your Career Fit"
                    description="This dashboard helps you explore your career fit, understand your strengths, and identify opportunities for growth."
                    buttons={[
                        {
                            text: "Get AI Assistant",
                            variant: "blue",
                            onClick: () => console.log("Year clicked"),
                        }]}
                />



                <InfoBanner title={`You're 3 skills away from being " highly competitive" for Data Analyst roles. Learning SQL + Power BI would raise your match score to 94%. Estimated time: 6–8 weeks.`} />


                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {coverageStats.map((stat) => (
                        <StatCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                            change={stat.change}
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
                            <SkillCard title="SQL"
                                demandText="Demanded in 73% of Finance job postings"
                                userLevelText="You have: None"
                                tagLabel="High Gap"
                                tagVariant="danger"
                                marketDemandValue={95}
                                userLevelValue={67} />

                            <SkillCard title="Power BI / Tableau"
                                demandText="Demanded in 58% of Business postings"
                                userLevelText="You have: Basic familiarity"
                                tagLabel="High Gap"
                                tagVariant="danger"
                                marketDemandValue={59}
                                userLevelValue={25} />
                        </div>

                    </Card>
                    <Card
                        title="Your Best Job Match"
                        description="Apply now — you're already a strong fit"
                        onViewAll={() => { }} >

                        <div className="flex flex-col gap-8">
                            <JobCardMini title="Junior Data Analyst"
                                location="Deloitte Cyprus"
                                workingSetup="Hybrid"
                                rate="€24,000–€30,000/yr"
                                tagLabel="78% Match"
                                tagVariant="success"
                                buttons={[
                                    {
                                        text: "Apply",
                                        variant: "blue",
                                        onClick: () => console.log("Year clicked"),
                                    },
                                ]} />

                            <JobCardMini title="Junior Data Analyst"
                                location="Deloitte Cyprus"
                                workingSetup="Hybrid"
                                rate="€24,000–€30,000/yr"
                                tagLabel="78% Match"
                                tagVariant="success"
                                buttons={[
                                    {
                                        text: "Apply",
                                        variant: "blue",
                                        onClick: () => console.log("Year clicked"),
                                    },
                                ]} />
                        </div>
                    </Card>

                </div>
                <div className="bg-white border border-[#F7F8FA]">
                    <div className="px-6 py-5 border-b border-[#F7F8FA]">
                        <h1 className="text-[#111827] text-lg font-medium">Improve Your Skills</h1>
                    </div>
                    <div className="px-6 pb-5 pt-2 grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                        <MiniCard
                            value="Time-indexed vacancy data"
                            desc="See your full skill gap report and get specific course recommendations"
                        />

                        <MiniCard
                            value="Explore Career path"
                            desc="Discover Demand Role"
                        />
                        <MiniCard
                            value="Ask AI Advisor"
                            desc="See your full skill gap report and get specific course recommendations"
                        />
                    </div>
                </div>

            </div >

        </>
    );
}
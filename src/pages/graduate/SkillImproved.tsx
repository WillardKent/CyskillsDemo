
import HeaderBanner from "../../elements/HeaderBanner";
import StatCard from "../../elements/StatCard";
import SkillCard from "../../elements/SkillCard";


export default function SkillImproved() {

    const skillcarddata = [
        {
            title: "Skills to improve",
            value: "3"

        },
        {
            title: "High priority",
            value: "2"

        },
        {
            title: "Est. improvement",
            value: "6-8 Week"

        },
    ];

    return (
        <>


            <div className="flex flex-col w-full gap-2">

                <HeaderBanner breadcrumb="Dashboard / Skill improvement"
                    title="Skill improvement"
                    description="Understand your skill gaps and get recommendations to improve your career match."

                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {skillcarddata.map((stat) => (
                        <StatCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                        />
                    ))}
                </div>


                <div className="flex flex-col gap-4">
                    <div className="bg-white border  border-[#F7F8FA] py-5 px-6 rounded-lg">
                        <SkillCard title="SQL"
                            demandText="Demanded in 73% of Finance job postings"
                            userLevelText="You have: None"
                            tagLabel="High Gap"
                            tagVariant="danger"
                            marketDemandValue={95}
                            userLevelValue={67} />
                    </div>
                    <div className="bg-white border  border-[#F7F8FA] py-5 px-6 rounded-lg">
                        <SkillCard title="Power BI / Tableau"
                            demandText="Demanded in 58% of Business postings"
                            userLevelText="You have: Basic familiarity"
                            tagLabel="High Gap"
                            tagVariant="danger"
                            marketDemandValue={59}
                            userLevelValue={25} />
                    </div>
                    <div className="bg-white border  border-[#F7F8FA] py-5 px-6 rounded-lg">
                        <SkillCard title="SQL"
                            demandText="Demanded in 73% of Finance job postings"
                            userLevelText="You have: None"
                            tagLabel="High Gap"
                            tagVariant="danger"
                            marketDemandValue={95}
                            userLevelValue={67} />
                    </div>
                    <div className="bg-white border  border-[#F7F8FA] py-5 px-6 rounded-lg">
                        <SkillCard title="Power BI / Tableau"
                            demandText="Demanded in 58% of Business postings"
                            userLevelText="You have: Basic familiarity"
                            tagLabel="High Gap"
                            tagVariant="danger"
                            marketDemandValue={59}
                            userLevelValue={25} />
                    </div>
                </div>


            </div >

        </>
    );
}
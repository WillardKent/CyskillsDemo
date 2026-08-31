
import InfoBanner from "../../../elements/InfoBanner";
import ProgressCard from "../../../elements/ProgressCard";
import ConfidenceCard from "../../../elements/ConfidenceCard";
import FooterBanner from "../../../elements/FooterBanner";
import StatCard from "../../../elements/StatCard";
import {
    Building2,
    GraduationCap,
    Users,
    BriefcaseBusiness,
    ChartNoAxesCombined,
} from "lucide-react";



const programmeDomainData = [
    {
        label: "ICT & Engineering",
        percentage: 90,
        gradient:
            "bg-[linear-gradient(225deg,#68DBF2_0.01%,#1A62F8_100%)]",
    },
    {
        label: "Business & Law",
        percentage: 75,
        gradient:
            "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Education & Social",
        percentage: 48,
        gradient:
            "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Health & Life Science",
        percentage: 100,
        gradient:
            "bg-[linear-gradient(225deg,#F27868_0.01%,#F55050_100%)]",
    },
];

const employmentData = [
    {
        label: "Employed",
        percentage: 85,
        gradient:
            "bg-[linear-gradient(225deg,#68DBF2_0.01%,#1A62F8_100%)]",
    },
    {
        label: "Self-employed",
        percentage: 60,
        gradient:
            "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Unemployed",
        percentage: 25,
        gradient:
            "bg-[linear-gradient(225deg,#F27868_0.01%,#F55050_100%)]",
    },
];

export default function NationalDashboard() {

    const coverageStats = [
        {
            title: "Programme coverage",
            value: "5 HEIs",
            change: "+3%",
            source: "CYGraduates data",
            icon: Building2,
            iconColor: "text-[#1A62F8]",
            changeColor: "text-[#1A62F8]",
        },
        {
            title: "Total Graduates",
            value: "1,250",
            change: "+12%",
            source: "Graduate data",
            icon: GraduationCap,
            iconColor: "text-[#10B981]",
            changeColor: "text-[#10B981]",
        },
        {
            title: "Students",
            value: "3,450",
            change: "+5%",
            source: "Student data",
            icon: Users,
            iconColor: "text-[#F59E0B]",
            changeColor: "text-[#F59E0B]",
        },
        {
            title: "Employment Rate",
            value: "82%",
            change: "+7%",
            source: "Employment data",
            icon: BriefcaseBusiness,
            iconColor: "text-[#8B5CF6]",
            changeColor: "text-[#8B5CF6]",
        },
        {
            title: "Graduate Performance",
            value: "89%",
            change: "+4%",
            source: "Performance data",
            icon: ChartNoAxesCombined,
            iconColor: "text-[#EF4444]",
            changeColor: "text-[#EF4444]",
        },
    ];

    return (
        <>


            <div className="flex flex-col w-full gap-2">

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {coverageStats.map((stat) => (
                        <StatCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                            change={stat.change}
                            desc={stat.source}
                            icon={stat.icon}
                            iconColor={stat.iconColor}
                            changeColor={stat.changeColor}
                        />
                    ))}
                </div>



                <InfoBanner title="Phase A data scope:&nbsp;" info="This dashboard reflects CYGraduates-based supply data only. Vacancy and demand-side figures are illustrative and marked accordingly. National shortfall claims and active vacancy counts require validated demand data not yet available." />

                <div className="flex w-full flex-col gap-4 xl:flex-row">
                    <ProgressCard
                        title="Supply by programme domain"
                        items={programmeDomainData}
                    />

                    <ProgressCard
                        title="Graduate employment"
                        items={employmentData}
                    />
                </div>

                <div className="">
                    <ConfidenceCard
                    />
                </div>

                <div className="">
                    <FooterBanner paragraph="AI Insight (supply-side only): ICT & Engineering programmes show the highest graduate output (3,210 p.a.) and ESCO mapping coverage at 84%. Three HEIs have curriculum alignment confidence scores below the 65% review threshold. Cross-referencing with demand data will be possible once vacancy or employer survey sources are confirmed."
                    />
                </div>
            </div>

        </>
    );
}
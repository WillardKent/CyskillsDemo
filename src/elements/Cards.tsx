import {
    Building2,
    GraduationCap,
    Users,
    BriefcaseBusiness,
    ChartNoAxesCombined,
} from "lucide-react";

export default function Card() {
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {coverageStats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={index}
                        className="flex h-37.5 w-full flex-col justify-between rounded-lg border border-[#F7F8FA] bg-white p-4"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between gap-3">
                            <span className="font-inter text-sm font-normal text-[#12151B]">
                                {stat.title}
                            </span>

                            <div className="shrink-0 rounded-sm border border-[#EFF5FF] bg-[#F7F8FA] p-2">
                                <Icon
                                    className={`size-4 ${stat.iconColor}`}
                                />
                            </div>
                        </div>

                        {/* Value */}
                        <div className="flex items-end gap-2">
                            <span className="font-inter text-2xl font-medium text-[#12151B]">
                                {stat.value}
                            </span>

                            <span
                                className={`font-inter text-xs font-medium ${stat.changeColor}`}
                            >
                                {stat.change}
                            </span>
                        </div>

                        {/* Source */}
                        <span className="font-inter text-xs font-normal text-[#5C6472]">
                            {stat.source}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
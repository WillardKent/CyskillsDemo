import { useState } from "react";
import { ChevronDown, ArrowUp } from "lucide-react";
import ProgressBar from "./ProgressBar";
import Button from "./Button";
export type TrendBarRole = {
    role: string;
    salary: number;
};

export type TrendBarCategory = {
    label: string;
    roles: TrendBarRole[];
};

interface TrendBarProps {
    title?: string;
    subtitle?: string;
    categories: TrendBarCategory[];
    defaultCategory?: string;
    experienceLevel?: string;
    maxSalary?: number;
}

export default function TrendBar({
    title = "Salary Benchmarks by Role",
    subtitle = "Estimated annual salary range by experience level",
    categories,
    defaultCategory,
    experienceLevel = "Freshgraduate",
    maxSalary = 100000,
}: TrendBarProps) {
    const [activeCategory, setActiveCategory] = useState(
        defaultCategory || categories[0]?.label
    );

    const activeCategoryData = categories.find(
        (category) => category.label === activeCategory
    );

    const formatSalary = (salary: number) => {
        return `€${Math.round(salary / 1000)}K`;
    };

    const getProgressValue = (salary: number) => {
        return (salary / maxSalary) * 100;
    };

    const highestRole = activeCategoryData?.roles.reduce(
        (highest, current) =>
            current.salary > highest.salary ? current : highest,
        activeCategoryData.roles[0]
    );

    return (
        <div className="w-full rounded-lg border border-[#F7F8FA] bg-white">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between py-5 px-6 border-b border-[#F7F8FA]">
                <div className="flex flex-col gap-2">
                    <h2 className="text-base lg:text-lg font-medium text-[#12151B]">
                        {title}
                    </h2>

                    <p className="mt-1 text-xs font-normal text-[#5C6472]">
                        {subtitle}
                    </p>
                </div>


                <Button text={experienceLevel}
                    icon={ChevronDown}
                    variant="white"
                    onClick={() => console.log("Year clicked")} />
                {/* Experience Dropdown */}

            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 py-5 px-6 ">
                {categories.map((category) => {
                    const isActive =
                        category.label === activeCategory;

                    return (
                        <button
                            key={category.label}
                            onClick={() =>
                                setActiveCategory(category.label)
                            }
                            className={`
                                rounded-full
                                border
                                px-3.75
                                py-2.5
                                text-sm
                                font-medium
                                transition-all
                                duration-200
                                ${isActive
                                    ? "border-[#3264C8] bg-[#1A62F8] text-white shadow-md"
                                    : "border-[#E1E4E9] bg-white text-[#5C6472] hover:border-[#3264C8] hover:text-[#3264C8]"
                                }
                            `}
                        >
                            {category.label}
                        </button>
                    );
                })}
            </div>

            {/* Chart Title */}
            <div className="pb-5 px-6 ">
                <p className="font-inter text-xs font-medium text-[#4D5563]">
                    Role
                </p>

                {/* Legend */}
                <div className="mt-3 flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#3264C8]" />

                        <span className="font-inter text-[11px] text-[#7B8494]">
                            Selected level ({experienceLevel})
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#DCE1E8]" />

                        <span className="font-inter text-[11px] text-[#7B8494]">
                            Other levels
                        </span>
                    </div>
                </div>
            </div>

            {/* Salary Bars */}
            <div className="px-6">
                {activeCategoryData?.roles.map((item) => (
                    <ProgressBar
                        key={item.role}
                        label={item.role}
                        value={getProgressValue(item.salary)}
                        endLabel={formatSalary(item.salary)}
                        labelWidth="w-32"
                        barHeight="h-2.5"
                    />
                ))}
            </div>

            {/* Salary Scale */}
            <div className="px-6 ml-36 mr-16 py-5 flex justify-between">
                {[0, 20000, 40000, 60000, 80000, 100000].map(
                    (salary) => (
                        <span
                            key={salary}
                            className="font-inter text-xs font-medium text-[#5B6472]"
                        >
                            {formatSalary(salary)}
                        </span>
                    )
                )}
            </div>

            {/* Footer Insight */}
            {highestRole && (

                <div className="flex items-center gap-3 rounded-lg border border-[#F7F8FA] bg-white px-6 py-5 mx-6 mb-5">
                    <div className="flex p-2.5 items-center justify-center rounded-lg border border-[#EFF5FF] bg-[#F7F8FA] text-base min-[401px]:text-lg lg:text-xl font-semibold text-[#1A62F8]">
                        <ArrowUp
                            size={20}
                            className="mr-1"
                        />

                        39%
                    </div>

                    <div>
                        <p className="text-base lg:text-lg font-medium text-[#12151B]">
                            {highestRole.role} has the highest median
                            salary for {experienceLevel} roles
                        </p>

                        <p className="mt-1 text-xs font-normal text-[#5C6472]">
                            +32% higher than the overall average
                        </p>
                    </div>
                </div>


            )}
        </div>
    );
}
import { useMemo, useState } from "react";
import { ChevronDown, ArrowUp } from "lucide-react";
import Button from "./Button";
export type TrendData = {
    label: string;
    values: number[];
};

export type TrendChartProps = {
    title?: string;
    subtitle?: string;
    description?: string;
    periods: string[];
    skills: TrendData[];
    defaultSkill?: string;
    dateRange?: string;
    yAxisMax?: number;
    yAxisSteps?: number;
    footerText?: string;
    footerSubtext?: string;
    percvalue?: number;
};

type HoveredPoint = {
    skill: string;
    value: number;
    index: number;
};

export default function TrendChart({
    title = "Skill Demand Trend — Top 6 Skills",
    subtitle = "Top skills based on current job posting demand",
    description,
    periods,
    skills,
    defaultSkill,
    dateRange = "Last 6 Months",
    yAxisMax = 5000,
    yAxisSteps = 5,
    footerText,
    footerSubtext,
    percvalue,
}: TrendChartProps) {
    const [activeSkill, setActiveSkill] = useState(
        defaultSkill || skills[0]?.label
    );

    const [hoveredPoint, setHoveredPoint] =
        useState<HoveredPoint | null>(null);

    const activeSkillData = skills.find(
        (skill) => skill.label === activeSkill
    );

    const chartWidth = 1000;
    const chartHeight = 300;

    /*
     * Controls the horizontal position
     * of the lines, circles, periods,
     * and tooltip together.
     */
    const pointOffsetX = 50;

    const padding = {
        top: 30,
        right: 60,
        bottom: 55,
        left: 70,
    };

    const innerWidth =
        chartWidth -
        padding.left -
        padding.right -
        pointOffsetX;

    const innerHeight =
        chartHeight -
        padding.top -
        padding.bottom;

    /*
     * Base X position
     */
    const getX = (index: number) => {
        if (periods.length === 1) {
            return padding.left;
        }

        return (
            padding.left +
            (index / (periods.length - 1)) *
            innerWidth
        );
    };

    /*
     * Actual X position used by
     * circles, lines, periods,
     * hover areas and tooltip.
     */
    const getPointX = (index: number) => {
        return getX(index) + pointOffsetX;
    };

    const getY = (value: number) => {
        return (
            padding.top +
            innerHeight -
            (value / yAxisMax) * innerHeight
        );
    };

    const yLabels = useMemo(() => {
        return Array.from(
            { length: yAxisSteps },
            (_, index) => {
                return (
                    yAxisMax -
                    (yAxisMax / (yAxisSteps - 1)) *
                    index
                );
            }
        );
    }, [yAxisMax, yAxisSteps]);

    const formatNumber = (value: number) => {
        if (value >= 1000) {
            return `${(value / 1000).toFixed(1)}k`;
        }

        return value.toString();
    };

    /*
     * Lines now use the same X position
     * as the circles.
     */
    const getPoints = (values: number[]) => {
        return values
            .map(
                (value, index) =>
                    `${getPointX(index)},${getY(value)}`
            )
            .join(" ");
    };

    const latestValue =
        activeSkillData?.values[
        activeSkillData.values.length - 1
        ];

    const handleMouseEnter = (
        skill: string,
        value: number,
        index: number
    ) => {
        setHoveredPoint({
            skill,
            value,
            index,
        });
    };

    /*
     * Tooltip positioning
     */
    const tooltipHeight = 62;

    const hoveredY = hoveredPoint
        ? getY(hoveredPoint.value)
        : 0;

    const showTooltipBelow =
        hoveredY < padding.top + tooltipHeight;

    return (
        <div className="w-full rounded-lg border border-[#F7F8FA] bg-white font-inter">
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

                <Button text={dateRange}
                    icon={ChevronDown}
                    variant="white"
                    onClick={() => console.log("Year clicked")} />

            </div>

            {/* Skill Tabs */}
            <div className="flex flex-wrap gap-2 py-5 px-6 ">
                {skills.map((skill) => {
                    const isActive =
                        skill.label === activeSkill;

                    return (
                        <button
                            key={skill.label}
                            onClick={() => {
                                setActiveSkill(skill.label);
                                setHoveredPoint(null);
                            }}
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
                            {skill.label}
                        </button>
                    );
                })}
            </div>

            {/* Chart Label */}
            <p className="text-sm font-medium text-[#414957] pb-5 px-6 ">
                {description}
            </p>

            {/* Chart */}
            <div className="w-full overflow-x-auto px-6">
                <div className="min-w-175">
                    <svg
                        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                        className="h-auto w-full overflow-visible"
                    >
                        {/* Grid Lines */}
                        {yLabels.map((value) => {
                            const y = getY(value);

                            return (
                                <g key={value}>
                                    <line
                                        x1={padding.left}
                                        x2={
                                            chartWidth -
                                            padding.right +
                                            30
                                        }
                                        y1={y}
                                        y2={y}
                                        stroke="#DCE1E8"
                                        strokeWidth="1"
                                    />

                                    <text
                                        x={padding.left - 15}
                                        y={y + 4}
                                        textAnchor="end"
                                        fontSize="13"
                                        fontWeight="400"
                                        fill="#9AA2B1"
                                    >
                                        {formatNumber(value)}
                                    </text>
                                </g>
                            );
                        })}

                        {/* X Axis */}
                        <line
                            x1={padding.left}
                            x2={
                                chartWidth -
                                padding.right
                            }
                            y1={
                                chartHeight -
                                padding.bottom
                            }
                            y2={
                                chartHeight -
                                padding.bottom
                            }
                            stroke="#DCE1E8"
                        />

                        {/* X Labels */}
                        {periods.map((period, index) => (
                            <text
                                key={period}
                                x={getPointX(index)}
                                y={
                                    chartHeight -
                                    padding.bottom +
                                    28
                                }
                                textAnchor="middle"
                                fontSize="13"
                                fontWeight="400"
                                fill="#9AA2B1"
                            >
                                {period}
                            </text>
                        ))}

                        {/* Inactive Lines */}
                        {skills
                            .filter(
                                (skill) =>
                                    skill.label !==
                                    activeSkill
                            )
                            .map((skill) => (
                                <g key={skill.label}>
                                    <polyline
                                        points={getPoints(
                                            skill.values
                                        )}
                                        fill="none"
                                        stroke="#D7DCE4"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    {skill.values.map(
                                        (value, index) => {
                                            const isHovered =
                                                hoveredPoint?.skill ===
                                                skill.label &&
                                                hoveredPoint?.index ===
                                                index;

                                            return (
                                                <g key={index}>
                                                    {/* Invisible hover area */}
                                                    <circle
                                                        cx={getPointX(
                                                            index
                                                        )}
                                                        cy={getY(
                                                            value
                                                        )}
                                                        r="14"
                                                        fill="transparent"
                                                        className="cursor-pointer"
                                                        onMouseEnter={() =>
                                                            handleMouseEnter(
                                                                skill.label,
                                                                value,
                                                                index
                                                            )
                                                        }
                                                        onMouseLeave={() =>
                                                            setHoveredPoint(
                                                                null
                                                            )
                                                        }
                                                    />

                                                    {/* Visible point */}
                                                    <circle
                                                        cx={getPointX(
                                                            index
                                                        )}
                                                        cy={getY(
                                                            value
                                                        )}
                                                        r={
                                                            isHovered
                                                                ? 7
                                                                : 5
                                                        }
                                                        fill={
                                                            isHovered
                                                                ? "#2F6BFF"
                                                                : "#D7DCE4"
                                                        }
                                                        pointerEvents="none"
                                                    />
                                                </g>
                                            );
                                        }
                                    )}
                                </g>
                            ))}

                        {/* Active Line */}
                        {activeSkillData && (
                            <g>
                                <polyline
                                    points={getPoints(
                                        activeSkillData.values
                                    )}
                                    fill="none"
                                    stroke="#2F6BFF"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                {activeSkillData.values.map(
                                    (value, index) => {
                                        const isHovered =
                                            hoveredPoint?.skill ===
                                            activeSkillData.label &&
                                            hoveredPoint?.index ===
                                            index;

                                        return (
                                            <g key={index}>
                                                {/* Invisible hover area */}
                                                <circle
                                                    cx={getPointX(
                                                        index
                                                    )}
                                                    cy={getY(value)}
                                                    r="14"
                                                    fill="transparent"
                                                    className="cursor-pointer"
                                                    onMouseEnter={() =>
                                                        handleMouseEnter(
                                                            activeSkillData.label,
                                                            value,
                                                            index
                                                        )
                                                    }
                                                    onMouseLeave={() =>
                                                        setHoveredPoint(
                                                            null
                                                        )
                                                    }
                                                />

                                                {/* Visible active point */}
                                                <circle
                                                    cx={getPointX(
                                                        index
                                                    )}
                                                    cy={getY(value)}
                                                    r={
                                                        isHovered
                                                            ? 7
                                                            : 6
                                                    }
                                                    fill="#2F6BFF"
                                                    pointerEvents="none"
                                                />
                                            </g>
                                        );
                                    }
                                )}
                            </g>
                        )}

                        {/* Hover Tooltip */}
                        {hoveredPoint && (
                            <g
                                pointerEvents="none"
                                transform={`
                                    translate(
                                        ${getPointX(
                                    hoveredPoint.index
                                )},
                                        ${getY(
                                    hoveredPoint.value
                                )}
                                    )
                                `}
                            >
                                {showTooltipBelow ? (
                                    <>
                                        {/* Tooltip below */}
                                        <path
                                            d="
                                                M -8 20
                                                L 0 12
                                                L 8 20
                                                Z
                                            "
                                            fill="#2F6BFF"
                                        />

                                        <rect
                                            x="-45"
                                            y="20"
                                            width="90"
                                            height="42"
                                            rx="21"
                                            fill="#2F6BFF"
                                        />

                                        <text
                                            x="0"
                                            y="41"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            fontSize="15"
                                            fontWeight="600"
                                            fill="#FFFFFF"
                                        >
                                            {formatNumber(
                                                hoveredPoint.value
                                            )}
                                        </text>
                                    </>
                                ) : (
                                    <>
                                        {/* Tooltip above */}
                                        <rect
                                            x="-45"
                                            y="-62"
                                            width="90"
                                            height="42"
                                            rx="21"
                                            fill="#2F6BFF"
                                        />

                                        <path
                                            d="
                                                M -8 -20
                                                L 0 -12
                                                L 8 -20
                                                Z
                                            "
                                            fill="#2F6BFF"
                                        />

                                        <text
                                            x="0"
                                            y="-41"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            fontSize="15"
                                            fontWeight="600"
                                            fill="#FFFFFF"
                                        >
                                            {formatNumber(
                                                hoveredPoint.value
                                            )}
                                        </text>
                                    </>
                                )}
                            </g>
                        )}
                    </svg>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-3 rounded-lg border border-[#F7F8FA] bg-white px-6 py-5 mx-6 mb-5">
                <div className="flex p-2.5 items-center justify-center rounded-lg border border-[#EFF5FF] bg-[#F7F8FA] text-base min-[401px]:text-lg lg:text-xl font-semibold text-[#1A62F8]">
                    <ArrowUp
                        size={20}
                        className="mr-1"
                    />

                    {percvalue}%
                </div>

                <div>
                    <p className="text-base lg:text-lg font-medium text-[#12151B]">
                        {footerText ||
                            `${activeSkill} demand increased over the selected period`}
                    </p>

                    <p className="mt-1 text-xs font-normal text-[#5C6472]">
                        {footerSubtext ||
                            `From ${formatNumber(
                                activeSkillData?.values[0] || 0
                            )} to ${formatNumber(
                                latestValue || 0
                            )} job postings`}
                    </p>
                </div>
            </div>
        </div>
    );
}
import { useState } from "react";
import { MoveRight } from "lucide-react";

export type AlignmentData = {
    label: string;

    current: {
        year: string;
        value: number;
    }[];

    forecast: {
        year: string;
        value: number;
    }[];

    projections?: {
        values: number[];
    }[];
};

interface CurriculumMarketAlignmentProps {
    title?: string;
    subtitle?: string;
    data: AlignmentData[];
    defaultActive?: string;
    viewAllText?: string;
    onViewAll?: () => void;
    minValue?: number;
    maxValue?: number;
    yAxisStep?: number;
}

type HoveredPoint = {
    value: number;
    year: string;
    x: number;
    y: number;
};

const colors = {
    // Main active line and points
    primary: "#1A62F8",

    // Light dashed background projections
    projection: "#D7DCE4",

    // Horizontal grid lines
    grid: "#E7E9EE",

    // Current / Forecast divider
    divider: "#C9D2DF",

    // Axis labels
    axisText: "#9AA2B1",

    // Current / Forecast labels
    sectionText: "#9AA2B1",

    // Tooltip bubble
    tooltip: "#1A62F8",
};

export default function CurriculumMarketAlignment({
    title = "Curriculum–Market Alignment",
    subtitle = "Next 1 and 3 years (CEDEFOP + Market)",
    data,
    defaultActive,
    viewAllText = "View All",
    onViewAll,
    minValue = 80,
    maxValue = 200,
    yAxisStep = 20,
}: CurriculumMarketAlignmentProps) {
    const [activeTab, setActiveTab] = useState(
        defaultActive || data[0]?.label
    );

    const [hoveredPoint, setHoveredPoint] =
        useState<HoveredPoint | null>(null);

    const activeData = data.find(
        (item) => item.label === activeTab
    );

    /* ================= CHART DIMENSIONS ================= */

    const chartWidth = 1000;
    const chartHeight = 420;

    const padding = {
        top: 35,
        right: 50,
        bottom: 70,
        left: 90,
    };

    const innerWidth =
        chartWidth - padding.left - padding.right;

    const innerHeight =
        chartHeight - padding.top - padding.bottom;

    /* ================= YEARS ================= */

    const allYears = [
        ...(activeData?.current.map(
            (item) => item.year
        ) || []),

        ...(activeData?.forecast.map(
            (item) => item.year
        ) || []),
    ];

    // Remove duplicate years
    const years = [...new Set(allYears)];

    /* ================= X POSITION ================= */

    const getX = (index: number) => {
        if (years.length === 1) {
            return padding.left;
        }

        return (
            padding.left +
            (index / (years.length - 1)) *
            innerWidth
        );
    };

    /* ================= Y POSITION ================= */

    const getY = (value: number) => {
        return (
            padding.top +
            innerHeight -
            ((value - minValue) /
                (maxValue - minValue)) *
            innerHeight
        );
    };

    /* ================= Y AXIS VALUES ================= */

    const yLabels = [];

    for (
        let value = minValue;
        value <= maxValue;
        value += yAxisStep
    ) {
        yLabels.push(value);
    }

    /* ================= CREATE SVG POINTS ================= */

    const createPoints = (
        items: {
            year: string;
            value: number;
        }[]
    ) => {
        return items
            .map((item) => {
                const index = years.indexOf(item.year);

                return `${getX(index)},${getY(
                    item.value
                )}`;
            })
            .join(" ");
    };

    /* ================= CURRENT DATA ================= */

    const currentPoints =
        activeData?.current || [];

    /* ================= FORECAST DATA ================= */

    // Connect the last current point
    // to the forecast points
    const forecastPoints = activeData
        ? [
            activeData.current[
            activeData.current.length - 1
            ],
            ...activeData.forecast,
        ]
        : [];

    /* ================= DIVIDER POSITION ================= */

    /*
     * Position divider halfway between:
     *
     * Last Current Year
     * and
     * First Forecast Year
     *
     * This makes it dynamically align
     * with the Current / Forecast sections.
     */

    const dividerX =
        years.length > 1
            ? (getX(0) + getX(1)) / 2
            : chartWidth / 2;

    /* ================= TOOLTIP ================= */

    const tooltipHeight = 55;

    const showTooltipBelow =
        hoveredPoint &&
        hoveredPoint.y <
        padding.top + tooltipHeight;

    return (
        <div className="w-full rounded-lg border border-[#F7F8FA] bg-white font-inter">

            {/* ================= HEADER ================= */}

            <div className="flex flex-col gap-4 border-b border-[#F7F8FA] px-6 py-5 md:flex-row md:items-start md:justify-between">

                <div className="flex flex-col gap-2">
                    <h2 className="text-base lg:text-lg font-medium text-[#12151B]">
                        {title}
                    </h2>

                    <p className="mt-1 text-xs font-normal text-[#5C6472]">
                        {subtitle}
                    </p>
                </div>

                <button
                    onClick={onViewAll}
                    className="flex items-center gap-3 px-5 py-2"
                >
                    <span className="font-inter text-xs font-medium text-[#414957]">
                        {viewAllText}
                    </span>

                    <MoveRight
                        className="h-5 w-6"
                        strokeWidth={1}
                    />
                </button>
            </div>

            {/* ================= TABS ================= */}

            <div className="flex flex-wrap gap-2 px-6 py-5">

                {data.map((item) => {
                    const isActive =
                        item.label === activeTab;

                    return (
                        <button
                            key={item.label}
                            onClick={() => {
                                setActiveTab(item.label);
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
                            {item.label}
                        </button>
                    );
                })}
            </div>


            {/* ================= CHART ================= */}

            <div className="mt-4 w-full overflow-x-auto">
                <div className="min-w-[700px]">

                    <svg
                        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                        className="h-auto w-full overflow-visible"
                    >

                        {/* ================= GRID LINES ================= */}

                        {yLabels.map((value) => {
                            const y = getY(value);

                            return (
                                <g key={value}>
                                    <line
                                        x1={padding.left}
                                        x2={
                                            chartWidth -
                                            padding.right
                                        }
                                        y1={y}
                                        y2={y}
                                        stroke={colors.grid}
                                        strokeWidth="1"
                                    />

                                    <text
                                        x={padding.left - 20}
                                        y={y + 5}
                                        textAnchor="end"
                                        fontSize="14"
                                        fill={colors.axisText}
                                    >
                                        {value}
                                    </text>
                                </g>
                            );
                        })}

                        {/* ================= SECTION LABELS ================= */}

                        <text
                            x={
                                (padding.left +
                                    dividerX) /
                                2
                            }
                            y="25"
                            textAnchor="middle"
                            fontSize="16"
                            fontWeight="400"
                            fill={colors.sectionText}
                        >
                            Current
                        </text>

                        <text
                            x={
                                dividerX +
                                (
                                    chartWidth -
                                    padding.right -
                                    dividerX
                                ) /
                                2
                            }
                            y="25"
                            textAnchor="middle"
                            fontSize="16"
                            fontWeight="400"
                            fill={colors.sectionText}
                        >
                            Forecast
                        </text>

                        {/* ================= CURRENT / FORECAST DIVIDER ================= */}

                        <line
                            x1={dividerX}
                            x2={dividerX}
                            y1={padding.top + 5}
                            y2={
                                chartHeight -
                                padding.bottom
                            }
                            stroke={colors.divider}
                            strokeWidth="1"
                            strokeDasharray="6 8"
                        />

                        {/* ================= BACKGROUND PROJECTIONS ================= */}

                        {activeData?.projections?.map(
                            (
                                projection,
                                projectionIndex
                            ) => {
                                const points =
                                    projection.values
                                        .map(
                                            (
                                                value,
                                                index
                                            ) =>
                                                `${getX(
                                                    index
                                                )},${getY(
                                                    value
                                                )}`
                                        )
                                        .join(" ");

                                return (
                                    <polyline
                                        key={
                                            projectionIndex
                                        }
                                        points={points}
                                        fill="none"
                                        stroke={
                                            colors.projection
                                        }
                                        strokeWidth="2.5"
                                        strokeDasharray="7 7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                );
                            }
                        )}

                        {/* ================= CURRENT SOLID LINE ================= */}

                        {currentPoints.length > 0 && (
                            <polyline
                                points={createPoints(
                                    currentPoints
                                )}
                                fill="none"
                                stroke={colors.primary}
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        )}

                        {/* ================= FORECAST DASHED LINE ================= */}

                        {forecastPoints.length > 1 && (
                            <polyline
                                points={createPoints(
                                    forecastPoints
                                )}
                                fill="none"
                                stroke={colors.primary}
                                strokeWidth="4"
                                strokeDasharray="9 8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        )}

                        {/* ================= CURRENT POINTS ================= */}

                        {currentPoints.map((item) => {
                            const index =
                                years.indexOf(item.year);

                            const x = getX(index);
                            const y = getY(item.value);

                            const isHovered =
                                hoveredPoint?.year ===
                                item.year;

                            return (
                                <g key={item.year}>

                                    {/* Hover area */}

                                    <circle
                                        cx={x}
                                        cy={y}
                                        r="16"
                                        fill="transparent"
                                        className="cursor-pointer"
                                        onMouseEnter={() =>
                                            setHoveredPoint({
                                                value: item.value,
                                                year: item.year,
                                                x,
                                                y,
                                            })
                                        }
                                        onMouseLeave={() =>
                                            setHoveredPoint(
                                                null
                                            )
                                        }
                                    />

                                    {/* Visible point */}

                                    <circle
                                        cx={x}
                                        cy={y}
                                        r={
                                            isHovered
                                                ? 7
                                                : 6
                                        }
                                        fill={
                                            colors.primary
                                        }
                                        pointerEvents="none"
                                    />
                                </g>
                            );
                        })}

                        {/* ================= FORECAST POINTS ================= */}

                        {activeData?.forecast.map(
                            (item) => {
                                const index =
                                    years.indexOf(
                                        item.year
                                    );

                                const x = getX(index);
                                const y = getY(item.value);

                                const isHovered =
                                    hoveredPoint?.year ===
                                    item.year;

                                return (
                                    <g key={item.year}>

                                        {/* Hover area */}

                                        <circle
                                            cx={x}
                                            cy={y}
                                            r="16"
                                            fill="transparent"
                                            className="cursor-pointer"
                                            onMouseEnter={() =>
                                                setHoveredPoint({
                                                    value: item.value,
                                                    year: item.year,
                                                    x,
                                                    y,
                                                })
                                            }
                                            onMouseLeave={() =>
                                                setHoveredPoint(
                                                    null
                                                )
                                            }
                                        />

                                        {/* Visible point */}

                                        <circle
                                            cx={x}
                                            cy={y}
                                            r={
                                                isHovered
                                                    ? 7
                                                    : 6
                                            }
                                            fill={
                                                colors.primary
                                            }
                                            pointerEvents="none"
                                        />
                                    </g>
                                );
                            }
                        )}

                        {/* ================= HOVER TOOLTIP ================= */}

                        {hoveredPoint && (
                            <g
                                pointerEvents="none"
                                transform={`translate(${hoveredPoint.x}, ${hoveredPoint.y})`}
                            >
                                {showTooltipBelow ? (
                                    <>
                                        {/* Pointer */}

                                        <path
                                            d="M -7 15 L 0 8 L 7 15 Z"
                                            fill={
                                                colors.tooltip
                                            }
                                        />

                                        {/* Bubble */}

                                        <rect
                                            x="-40"
                                            y="15"
                                            width="80"
                                            height="40"
                                            rx="20"
                                            fill={
                                                colors.tooltip
                                            }
                                        />

                                        {/* Value */}

                                        <text
                                            x="0"
                                            y="35"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            fontSize="16"
                                            fontWeight="600"
                                            fill="#FFFFFF"
                                        >
                                            {
                                                hoveredPoint.value
                                            }
                                        </text>
                                    </>
                                ) : (
                                    <>
                                        {/* Bubble */}

                                        <rect
                                            x="-40"
                                            y="-55"
                                            width="80"
                                            height="40"
                                            rx="20"
                                            fill={
                                                colors.tooltip
                                            }
                                        />

                                        {/* Pointer */}

                                        <path
                                            d="M -7 -15 L 0 -8 L 7 -15 Z"
                                            fill={
                                                colors.tooltip
                                            }
                                        />

                                        {/* Value */}

                                        <text
                                            x="0"
                                            y="-35"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            fontSize="16"
                                            fontWeight="600"
                                            fill="#FFFFFF"
                                        >
                                            {
                                                hoveredPoint.value
                                            }
                                        </text>
                                    </>
                                )}
                            </g>
                        )}

                        {/* ================= X AXIS LABELS ================= */}

                        {years.map((year, index) => (
                            <text
                                key={year}
                                x={getX(index)}
                                y={
                                    chartHeight -
                                    padding.bottom +
                                    30
                                }
                                textAnchor="middle"
                                fontSize="15"
                                fill={colors.axisText}
                            >
                                {year}
                            </text>
                        ))}
                    </svg>
                </div>
            </div>
        </div>
    );
}
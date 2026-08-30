import { Search, ChevronDown, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Tag } from "./Tag";
import ProgressBar from "./ProgressBar";

// --- Types ---

export type TimelineStep = {
    yearTitle: string;
    items: string[];
};

export type CareerItem = {
    id: string;
    title: string;
    matchPercentage: number;
    category: string;
    openings: number;
    description: string;
    skills: string[];
    avgSalary: string;
    skillsGap: number;
    timeline: TimelineStep[];
};

interface CareerExplorerProps {
    data: CareerItem[];
}

// --- Constants ---

const CAREER_CATEGORIES = [
    { label: "All Sectors", value: "All" },
    { label: "Data & Analytics", value: "Data & Analytics" },
    { label: "Tech", value: "Tech" },
    { label: "Finance", value: "Finance" },
];

const SORT_OPTIONS = [
    { label: "Match Score", value: "matchScore" },
    { label: "Openings", value: "openings" },
    { label: "Skills Gap", value: "skillsGap" },
];

// --- Main Component ---

export default function CareerExplorer({ data }: CareerExplorerProps) {
    const [search, setSearch] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);
    const [sortBy, setSortBy] = useState("matchScore");
    const [showFilters, setShowFilters] = useState(false);

    // Sidebar State
    const [selectedCareer, setSelectedCareer] = useState<CareerItem | null>(null);

    const handleCategoryToggle = (value: string) => {
        if (value === "All") {
            setSelectedCategories(["All"]);
            return;
        }

        setSelectedCategories((prev) => {
            const withoutAll = prev.filter((v) => v !== "All");
            const isSelected = withoutAll.includes(value);
            const updated = isSelected
                ? withoutAll.filter((v) => v !== value)
                : [...withoutAll, value];
            return updated.length === 0 ? ["All"] : updated;
        });
    };

    const filteredData = useMemo(() => {
        const filtered = data.filter((item) => {
            const matchesSearch =
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase());
            const matchesFilter =
                selectedCategories.includes("All") ||
                selectedCategories.includes(item.category);
            return matchesSearch && matchesFilter;
        });

        // Sort
        filtered.sort((a, b) => {
            switch (sortBy) {
                case "matchScore":
                    return b.matchPercentage - a.matchPercentage;
                case "openings":
                    return b.openings - a.openings;
                case "skillsGap":
                    return a.skillsGap - b.skillsGap;
                default:
                    return 0;
            }
        });

        return filtered;
    }, [data, search, selectedCategories, sortBy]);

    return (
        <div className="relative w-full space-y-6 p-5 min-h-screen">
            {/* Search and Filter */}
            <div className="flex items-center gap-2">
                {/* SEARCH */}

                <div className="relative flex-1">
                    <Search
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#141B34]"
                    />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search"
                        className="h-8 w-full rounded-sm border border-[#E5E7EB] bg-white pl-9 pr-9 font-inter text-sm font-normal text-[#7F8089] outline-none placeholder:text-[#7F8089] focus:border-slate-300 focus:ring-1 focus:ring-slate-200"
                    />

                    {search && (
                        <button
                            type="button"
                            onClick={() => setSearch("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                            <X size={15} />
                        </button>
                    )}
                </div>

                {/* FILTER BUTTON */}

                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setShowFilters((prev) => !prev)}
                        className="flex h-8 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 transition hover:bg-slate-50"
                    >
                        <span className="font-inter text-xs font-medium text-[#262C36]">
                            Filter
                        </span>

                        <ChevronDown
                            size={14}
                            className={`text-[#141B34] transition-transform ${showFilters ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {/* FILTER DROPDOWN */}

                    {showFilters && (
                        <div className="absolute right-0 top-12 z-20 w-70 rounded-md border border-slate-100 bg-white p-4 font-inter shadow-lg">
                            <div className="space-y-4">
                                {/* Career Category Checkboxes */}
                                <div>
                                    <label className="mb-1.5 block text-xs font-normal text-[#464855]">
                                        Career
                                    </label>

                                    <div className="space-y-2">
                                        {CAREER_CATEGORIES.map((cat) => (
                                            <label
                                                key={cat.value}
                                                className="flex cursor-pointer items-center gap-2.5 text-sm text-[#262C36]"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedCategories.includes(
                                                        cat.value
                                                    )}
                                                    onChange={() =>
                                                        handleCategoryToggle(
                                                            cat.value
                                                        )
                                                    }
                                                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                {cat.label}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Sort By Dropdown */}
                                <div>
                                    <label className="mb-1.5 block text-xs font-normal text-[#464855]">
                                        Short by
                                    </label>

                                    <select
                                        value={sortBy}
                                        onChange={(e) =>
                                            setSortBy(e.target.value)
                                        }
                                        className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-500 outline-none focus:border-slate-300"
                                    >
                                        {SORT_OPTIONS.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* CLEAR FILTERS */}

                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedCategories(["All"]);
                                    setSortBy("matchScore");
                                }}
                                className="mt-4 text-xs font-medium text-blue-600 transition hover:text-blue-700"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
                {filteredData.map((item) => (
                    <CareerPathCard
                        key={item.id}
                        item={item}
                        onExplore={() => setSelectedCareer(item)}
                    />
                ))}
            </div>

            {/* Empty State */}
            {filteredData.length === 0 && (
                <div className="rounded-lg border border-dashed border-gray-300 py-12 text-center text-sm text-gray-500">
                    No results found.
                </div>
            )}

            {/* Sidebar Overlay */}
            <CareerPathSidebar
                isOpen={!!selectedCareer}
                onClose={() => setSelectedCareer(null)}
                career={selectedCareer}
            />
        </div>
    );
}

// --- Card Component ---

interface CareerPathCardProps {
    item: CareerItem;
    onExplore: () => void;
}

function CareerPathCard({ item, onExplore }: CareerPathCardProps) {
    return (
        <div className="flex flex-col rounded-lg border border-[#F7F8FA] bg-white px-6 py-5">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-lg font-medium text-[#12151B]">{item.title}</h1>
                    <p className="mt-1 text-xs font-normal text-[#5C6472]">
                        {item.category} · {item.openings} openings
                    </p>
                </div>


                <Tag variant="success">
                    {item.matchPercentage}%
                </Tag>

            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {item.description}
            </p>

            {/* Skills Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                    <Tag key={skill} variant="info">
                        {skill}
                    </Tag>
                ))}
            </div>

            <div className="mt-6 flex-1"></div>


            {/* Salary & Skills Gap */}
            <div className="mt-auto">
                <div className="flex justify-between text-xs text-[#414957] mb-2 font-medium">
                    <span>Avg salary: {item.avgSalary}</span>
                </div>
                <ProgressBar
                    value={item.skillsGap * 10}
                    endLabel={`Skill Gap: ${item.skillsGap}`}
                    colorClass="bg-linear-to-r from-[#1A62F8] to-[#68DBF2]"
                    barHeight="h-2"
                    fullWidth
                />
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
                <button
                    onClick={onExplore}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                    Explore Path
                </button>
                <button className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                    See Jobs ({item.openings})
                </button>
            </div>
        </div>
    );
}

// --- Sidebar Component ---

interface CareerPathSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    career: CareerItem | null;
}

function CareerPathSidebar({ isOpen, onClose, career }: CareerPathSidebarProps) {
    if (!isOpen || !career) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40 bg-black/20 transition-opacity"
                onClick={onClose}
            />

            {/* Sidebar Panel */}
            <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-xl flex-col bg-white shadow-xl transition-transform duration-300 font-inter">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between border-b border-gray-100 p-6">
                    <h2 className="text-2xl font-medium text-[#12151B]">
                        {career.title} Career Path
                    </h2>
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 hover:bg-gray-100 transition text-gray-500"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Sidebar Content (Timeline) */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    {career.timeline.map((step, index) => (
                        <div key={index} className="relative">
                            <h3 className="text-xl font-medium text-[#12151B] mb-3">
                                {step.yearTitle}
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-xs font-normal text-[#414957] marker:text-[#414957]">
                                {step.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
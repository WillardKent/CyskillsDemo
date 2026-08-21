import { Search, ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";

export type CardStatus =
    | "Success"
    | "Pending Review"
    | "Under Review";

export type RelatedReport = {
    label: string;
    href?: string;
};


export type MetricCardItem = {
    id: number | string;
    title: string;
    description: string;
    source: string;
    frequency: string;
    lastUpdated: string;
    category: string;
    status: CardStatus;

    // Detail panel fields
    definition?: string;
    calculationMethod?: string;
    relatedReports?: RelatedReport[];
};

type MetricCardGridProps = {
    data: MetricCardItem[];
    onViewDetail?: (item: MetricCardItem) => void;
};

const statusStyles: Record<CardStatus, string> = {
    Success: "bg-[#E7F5EF] text-[#4F8B73]",
    "Pending Review": "bg-[#F8F1E8] text-[#A86B27]",
    "Under Review": "bg-[#EEF3FA] text-[#5576A5]",
};

export default function MetricCardGrid({
    data,
    onViewDetail,
}: MetricCardGridProps) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredData = useMemo(() => {
        return data.filter((item) => {
            const matchesSearch =
                item.title
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                item.description
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                item.source
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesFilter =
                filter === "All" || item.status === filter;

            return matchesSearch && matchesFilter;
        });
    }, [data, search, filter]);

    return (
        <div className="w-full space-y-4">
            {/* Search and Filter */}
            <div className="flex items-center gap-2 rounded-lg bg-white p-2">
                <div className="relative flex-1">
                    <Search
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-md border border-gray-200 py-2 pl-9 pr-3 text-sm outline-none transition focus:border-blue-400"
                    />
                </div>

                <div className="relative">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 pr-8 text-sm text-gray-600 outline-none"
                    >
                        <option value="All">Filter</option>
                        <option value="Success">Success</option>
                        <option value="Pending Review">
                            Pending Review
                        </option>
                        <option value="Under Review">
                            Under Review
                        </option>
                    </select>

                    <ChevronDown
                        size={14}
                        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                </div>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                {filteredData.map((item) => (
                    <MetricCard
                        key={item.id}
                        item={item}
                        onViewDetail={onViewDetail}
                    />
                ))}
            </div>

            {/* Empty State */}
            {filteredData.length === 0 && (
                <div className="rounded-lg border border-dashed border-gray-300 py-12 text-center text-sm text-gray-500">
                    No results found.
                </div>
            )}
        </div>
    );
}

type MetricCardProps = {
    item: MetricCardItem;
    onViewDetail?: (item: MetricCardItem) => void;
};

function MetricCard({
    item,
    onViewDetail,
}: MetricCardProps) {
    return (
        <div className="flex min-h-71.25 flex-col rounded-lg border border-[#E6E9EE] bg-white">
            {/* Top Content */}
            <div className="flex flex-1 flex-col p-5">
                {/* Title + Status */}
                <div className="flex items-start justify-between gap-3">
                    <h3 className="max-w-55 text-base font-semibold leading-6 text-[#343A45]">
                        {item.title}
                    </h3>

                    <span
                        className={`shrink-0 rounded-md px-2.5 py-1 text-xs font-medium ${statusStyles[item.status]
                            }`}
                    >
                        {item.status}
                    </span>
                </div>

                {/* Description */}
                <p className="mt-2 text-xs leading-5 text-[#6B7280]">
                    {item.description}
                </p>

                {/* Metadata */}
                <div className="mt-auto pt-8 text-sm leading-5 text-[#4B5563]">
                    <p>Source: {item.source}</p>
                    <p>Frequency: {item.frequency}</p>
                    <p>Last updated: {item.lastUpdated}</p>
                </div>

                {/* Category */}
                <div className="mt-7">
                    <span className="rounded-md bg-[#EEF3FA] px-2.5 py-1.5 text-xs font-medium text-[#5576A5]">
                        {item.category}
                    </span>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-[#EEF0F3] px-5 py-3">
                <button
                    type="button"
                    onClick={() => onViewDetail?.(item)}
                    className="rounded-md border border-[#D7DCE3] px-3 py-1.5 text-xs font-medium text-[#3D4652] transition hover:bg-gray-50"
                >
                    View Detail
                </button>
            </div>
        </div>
    );
}
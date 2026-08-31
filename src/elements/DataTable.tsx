import { useState } from "react";

import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";

import type {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
} from "@tanstack/react-table";

import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Search,
    X,
} from "lucide-react";

/* ================================================= */
/* TYPES */
/* ================================================= */

export interface FilterOption {
    label: string;
    value: string;
}

export interface TableFilter {
    columnId: string;
    label: string;
    placeholder?: string;
    options: FilterOption[];
}

interface DataTableProps<TData> {
    title?: string;
    desc?: string;

    data: TData[];
    columns: ColumnDef<TData, unknown>[];

    filters?: TableFilter[];

    variant?: "full" | "minimal";
}

/* ================================================= */
/* DATA TABLE */
/* ================================================= */

export default function DataTable<TData>({
    title,
    desc,
    data,
    columns,
    filters = [],
    variant = "full",
}: DataTableProps<TData>) {
    const [sorting, setSorting] =
        useState<SortingState>([]);

    const [globalFilter, setGlobalFilter] =
        useState("");

    const [columnFilters, setColumnFilters] =
        useState<ColumnFiltersState>([]);

    const [showFilters, setShowFilters] =
        useState(false);

    const isMinimal = variant === "minimal";

    const table = useReactTable({
        data,
        columns,

        state: {
            sorting,
            globalFilter,
            columnFilters,
        },

        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        onColumnFiltersChange: setColumnFilters,

        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),

        initialState: {
            pagination: {
                pageSize: 10,
            },
        },
    });

    const pageCount = table.getPageCount();

    const currentPage =
        table.getState().pagination.pageIndex + 1;

    /*
     * Full:
     * Uses pagination.
     *
     * Minimal:
     * Uses all rows before pagination.
     */
    const rows = isMinimal
        ? table.getPrePaginationRowModel().rows
        : table.getRowModel().rows;

    return (
        <div
            className={
                isMinimal
                    ? "w-full"
                    : "relative w-full rounded-lg border border-[#F7F8FA] bg-white"
            }
        >
            {/* ============================================= */}
            {/* HEADER */}
            {/* ============================================= */}

            {!isMinimal && (
                <div className="border-b border-[#F7F8FA] px-6 py-5 font-inter">
                    {title && (
                        <h1 className="text-base lg:text-lg font-medium text-[#12151B]">
                            {title}
                        </h1>
                    )}

                    {desc && (
                        <span className="text-xs font-normal text-[#5C6472]">
                            {desc}
                        </span>
                    )}
                </div>
            )}

            {/* ============================================= */}
            {/* SEARCH + FILTER */}
            {/* ============================================= */}

            {!isMinimal && (
                <div className="flex items-center gap-2 px-6 py-3">
                    {/* SEARCH */}

                    <div className="relative flex-1">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#141B34]"
                        />

                        <input
                            type="text"
                            value={globalFilter}
                            onChange={(e) =>
                                setGlobalFilter(
                                    e.target.value
                                )
                            }
                            placeholder="Search"
                            className="h-8 w-full rounded-sm border border-[#E5E7EB] bg-white pl-9 pr-9 font-inter text-sm font-normal text-[#7F8089] outline-none placeholder:text-[#7F8089] focus:border-slate-300 focus:ring-1 focus:ring-slate-200"
                        />

                        {globalFilter && (
                            <button
                                type="button"
                                onClick={() =>
                                    setGlobalFilter("")
                                }
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                <X size={15} />
                            </button>
                        )}
                    </div>

                    {/* FILTER BUTTON */}

                    {filters.length > 0 && (
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() =>
                                    setShowFilters(
                                        (prev) => !prev
                                    )
                                }
                                className="flex h-8 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 transition hover:bg-slate-50"
                            >
                                <span className="font-inter text-xs font-medium text-[#262C36]">
                                    Filter
                                </span>

                                <ChevronDown
                                    size={14}
                                    className={`text-[#141B34] transition-transform ${showFilters
                                        ? "rotate-180"
                                        : ""
                                        }`}
                                />
                            </button>

                            {/* FILTER DROPDOWN */}

                            {showFilters && (
                                <div className="absolute right-0 top-12 z-20 w-70 rounded-md border border-slate-100 bg-white p-4 font-inter shadow-lg">
                                    <div className="space-y-4">
                                        {filters.map(
                                            (filter) => {
                                                const column =
                                                    table.getColumn(
                                                        filter.columnId
                                                    );

                                                if (!column) {
                                                    return null;
                                                }

                                                return (
                                                    <div
                                                        key={
                                                            filter.columnId
                                                        }
                                                    >
                                                        <label className="mb-1.5 block text-xs font-normal text-[#464855]">
                                                            {
                                                                filter.label
                                                            }
                                                        </label>

                                                        <select
                                                            value={
                                                                (column.getFilterValue() as string) ??
                                                                ""
                                                            }
                                                            onChange={(
                                                                e
                                                            ) => {
                                                                column.setFilterValue(
                                                                    e
                                                                        .target
                                                                        .value
                                                                );

                                                                table.setPageIndex(
                                                                    0
                                                                );
                                                            }}
                                                            className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-500 outline-none focus:border-slate-300"
                                                        >
                                                            <option value="">
                                                                {filter.placeholder ??
                                                                    `All ${filter.label}`}
                                                            </option>

                                                            {filter.options.map(
                                                                (
                                                                    option
                                                                ) => (
                                                                    <option
                                                                        key={
                                                                            option.value
                                                                        }
                                                                        value={
                                                                            option.value
                                                                        }
                                                                    >
                                                                        {
                                                                            option.label
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>

                                    {/* CLEAR FILTERS */}

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setColumnFilters([]);

                                            table.setPageIndex(
                                                0
                                            );
                                        }}
                                        className="mt-4 text-xs font-medium text-blue-600 transition hover:text-blue-700"
                                    >
                                        Clear filters
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* ============================================= */}
            {/* TABLE */}
            {/* ============================================= */}

            <div
                className={
                    isMinimal
                        ? "w-full overflow-x-auto"
                        : "w-full overflow-x-auto px-6"
                }
            >
                <table className="w-full border-collapse font-inter">
                    {/* TABLE HEADER */}

                    <thead>
                        {table
                            .getHeaderGroups()
                            .map((headerGroup) => (
                                <tr
                                    key={
                                        headerGroup.id
                                    }
                                    className="bg-slate-50"
                                >
                                    {headerGroup.headers.map(
                                        (header) => (
                                            <th
                                                key={
                                                    header.id
                                                }
                                                className="h-13 border-b border-[#F7F8FA] bg-[#F9FAFD] px-4 text-left text-xs font-bold text-black"
                                            >
                                                {header.isPlaceholder
                                                    ? null
                                                    : (
                                                        <button
                                                            type="button"
                                                            onClick={
                                                                header.column.getCanSort()
                                                                    ? header.column.getToggleSortingHandler()
                                                                    : undefined
                                                            }
                                                            className={`flex items-center gap-1 ${header.column.getCanSort()
                                                                ? "cursor-pointer"
                                                                : "cursor-default"
                                                                }`}
                                                        >
                                                            {flexRender(
                                                                header
                                                                    .column
                                                                    .columnDef
                                                                    .header,
                                                                header.getContext()
                                                            )}

                                                            {header
                                                                .column
                                                                .getIsSorted() ===
                                                                "asc" && (
                                                                    <ChevronDown
                                                                        size={
                                                                            12
                                                                        }
                                                                        className="rotate-180"
                                                                    />
                                                                )}

                                                            {header
                                                                .column
                                                                .getIsSorted() ===
                                                                "desc" && (
                                                                    <ChevronDown
                                                                        size={
                                                                            12
                                                                        }
                                                                    />
                                                                )}
                                                        </button>
                                                    )}
                                            </th>
                                        )
                                    )}
                                </tr>
                            ))}
                    </thead>

                    {/* TABLE BODY */}

                    <tbody>
                        {rows.length > 0 ? (
                            rows.map((row) => (
                                <tr
                                    key={row.id}
                                    className="transition-colors hover:bg-slate-50"
                                >
                                    {row
                                        .getVisibleCells()
                                        .map((cell) => (
                                            <td
                                                key={
                                                    cell.id
                                                }
                                                className="h-13 border-b border-[#F7F8FA] px-4 text-xs font-semibold text-[#262C36]"
                                            >
                                                {flexRender(
                                                    cell
                                                        .column
                                                        .columnDef
                                                        .cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={
                                        columns.length
                                    }
                                    className="border-b border-slate-100 px-4 py-10 text-center text-sm text-slate-400"
                                >
                                    No results found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* ============================================= */}
            {/* PAGINATION */}
            {/* ============================================= */}

            {!isMinimal && (
                <div className="mt-3 flex items-center justify-between px-6 pb-5 font-inter">
                    {/* PAGE SELECTOR */}

                    <div className="flex items-center gap-2 text-sm font-medium text-[#12151B]">
                        <span>
                            Page
                        </span>

                        <select
                            value={currentPage}
                            onChange={(e) => {
                                table.setPageIndex(
                                    Number(
                                        e.target.value
                                    ) - 1
                                );
                            }}
                            className="rounded-lg border border-[#EAF1FE] bg-white px-3 py-2 pr-4 text-xs outline-none focus:border-slate-300"
                        >
                            {Array.from(
                                {
                                    length: pageCount,
                                },
                                (_, index) => (
                                    <option
                                        key={
                                            index
                                        }
                                        value={
                                            index + 1
                                        }
                                    >
                                        {
                                            index + 1
                                        }
                                    </option>
                                )
                            )}
                        </select>

                        <span>
                            of {pageCount}
                        </span>
                    </div>

                    {/* PAGINATION BUTTONS */}

                    <div className="flex items-center gap-1">
                        {/* PREVIOUS */}

                        <button
                            type="button"
                            onClick={() =>
                                table.previousPage()
                            }
                            disabled={
                                !table.getCanPreviousPage()
                            }
                            className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <ChevronLeft
                                size={14}
                            />
                        </button>

                        {/* PAGE NUMBERS */}

                        {getPageNumbers(
                            currentPage,
                            pageCount
                        ).map((page, index) =>
                            page === "..." ? (
                                <span
                                    key={`dots-${index}`}
                                    className="flex h-8 w-8 items-center justify-center text-xs text-slate-500"
                                >
                                    ...
                                </span>
                            ) : (
                                <button
                                    key={page}
                                    type="button"
                                    onClick={() =>
                                        table.setPageIndex(
                                            Number(
                                                page
                                            ) - 1
                                        )
                                    }
                                    className={`flex h-8 w-8 items-center justify-center rounded-md text-xs transition ${currentPage ===
                                        Number(
                                            page
                                        )
                                        ? "bg-blue-600 text-white"
                                        : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                                        }`}
                                >
                                    {page}
                                </button>
                            )
                        )}

                        {/* NEXT */}

                        <button
                            type="button"
                            onClick={() =>
                                table.nextPage()
                            }
                            disabled={
                                !table.getCanNextPage()
                            }
                            className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <ChevronRight
                                size={14}
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ================================================= */
/* PAGINATION HELPER */
/* ================================================= */

function getPageNumbers(
    currentPage: number,
    pageCount: number
): (number | string)[] {
    if (pageCount <= 5) {
        return Array.from(
            {
                length: pageCount,
            },
            (_, i) => i + 1
        );
    }

    if (currentPage <= 3) {
        return [
            1,
            2,
            3,
            "...",
            pageCount,
        ];
    }

    if (currentPage >= pageCount - 2) {
        return [
            1,
            "...",
            pageCount - 2,
            pageCount - 1,
            pageCount,
        ];
    }

    return [
        1,
        "...",
        currentPage,
        "...",
        pageCount,
    ];
}
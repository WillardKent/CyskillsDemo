import { useState, useMemo } from "react";
import HeaderBanner from "../../elements/HeaderBanner";
import JobCard from "../../elements/JobCard";
import { Bookmark, Search, X } from "lucide-react";
import type { JobData } from "../../types/jobData";

interface SaveJobsProps {
    savedJobs: JobData[];
    onSelectJob: (job: JobData) => void;
}

export default function SaveJobs({ savedJobs, onSelectJob }: SaveJobsProps) {
    const [search, setSearch] = useState("");

    const filteredJobs = useMemo(() => {
        if (!search.trim()) return savedJobs;
        const query = search.toLowerCase();
        return savedJobs.filter(
            (job) =>
                job.title.toLowerCase().includes(query) ||
                job.company.toLowerCase().includes(query) ||
                job.description.toLowerCase().includes(query)
        );
    }, [savedJobs, search]);

    return (
        <>
            <div className="flex flex-col w-full gap-4">

                <HeaderBanner breadcrumb="Saved Jobs"
                    title="Saved Jobs"
                    description={`${savedJobs.length} saved job${savedJobs.length !== 1 ? "s" : ""}`}
                />

                {savedJobs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center gap-3 py-16 font-inter">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F8FA]">
                            <Bookmark size={24} className="text-[#9CA3AF]" />
                        </div>
                        <p className="text-base font-medium text-[#262C36]">No saved jobs yet</p>
                        <p className="text-sm text-[#5C6472]">
                            Jobs you save from the job details page will appear here.
                        </p>
                    </div>
                ) : (
                    <>
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

                        {filteredJobs.length === 0 ? (
                            <div className="rounded-lg border border-dashed border-gray-300 py-12 text-center text-sm text-gray-500">
                                No jobs match your search.
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                                {filteredJobs.map((job, index) => (
                                    <JobCard
                                        key={index}
                                        title={job.title}
                                        company={job.company}
                                        description={job.description}
                                        tags={job.tags}
                                        tagLabel={job.tagLabel}
                                        tagVariant={job.tagVariant}
                                        postedAgo={job.postedAgo}
                                        salary={job.salary}
                                        onClick={() => onSelectJob(job)}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                )}



            </div >

        </>
    );
}
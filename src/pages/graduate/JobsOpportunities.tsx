
import { useState, useMemo } from "react";
import HeaderBanner from "../../elements/HeaderBanner";
import JobCard from "../../elements/JobCard";
import Button from "../../elements/Button";
import { Search, ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import type { JobData } from "../../types/jobData";

interface JobsOpportunitiesProps {
    onSelectJob: (job: JobData) => void;
}

const JOBS_PER_PAGE = 6;

export default function JobsOpportunities({ onSelectJob }: JobsOpportunitiesProps) {

    // ─── Search State ────────────────────────────
    const [searchQuery, setSearchQuery] = useState("");
    const [locationQuery, setLocationQuery] = useState("");

    // ─── Filter State ────────────────────────────
    const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
    const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedPostedDate, setSelectedPostedDate] = useState("all");

    // ─── Pagination State ────────────────────────
    const [currentPage, setCurrentPage] = useState(1);

    // ─── Filter Sidebar Visibility ───────────────
    const [showFilters, setShowFilters] = useState(false);

    // ─── Toggle helpers ──────────────────────────
    const toggleFilter = (
        value: string,
        selected: string[],
        setSelected: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        setSelected(
            selected.includes(value)
                ? selected.filter((v) => v !== value)
                : [...selected, value]
        );
        setCurrentPage(1);
    };

    // ─── Jobs Data ───────────────────────────────
    const jobs: JobData[] = [
        {
            title: "Junior Data Analyst",
            company: "NexaCommerce",
            description: "Analyze, clean, and transform raw data into actionable business insights to support data-driven decision-making.",
            tags: ["Freshgraduate", "Fulltime", "Hybrid"],
            tagLabel: "78% Match",
            tagVariant: "success",
            postedAgo: "Posted 5 days ago",
            salary: "€24K – €30K ",
            workType: "Hybrid",
            companyDescription: "NexaCommerce is a technology company that provides digital solutions to help businesses manage their operations, transactions, and performance. Our platform enables businesses to monitor sales, customer activity, operational performance, and financial data through integrated digital tools and business reports.\n\nOur mission is to help businesses make better decisions through technology and accessible data. As we continue to grow, we are looking for a Junior Data Analyst who is passionate about working with data and turning complex information into meaningful business insights.",
            jobDescription: "As a Junior Data Analyst, you will work with large and diverse datasets to support business and product decisions. You will collaborate closely with product, operations, marketing, and business teams to identify problems, analyze data, and provide actionable recommendations.",
            responsibilities: [
                "Work closely with product, business, marketing, and operations teams to solve day-to-day business problems using data.",
                "Collect, clean, validate, and analyze data from multiple sources.",
                "Write SQL queries to extract and transform data for analysis.",
                "Create and maintain dashboards to monitor company and business performance metrics.",
                "Analyze trends, patterns, and key performance indicators (KPIs) to identify opportunities and potential issues.",
                "Translate business questions into data analysis and measurable insights.",
                "Present findings using clear visualizations and support recommendations with relevant data.",
                "Maintain reusable analysis, reports, dashboards, and documentation.",
                "Communicate complex analytical findings in a simple and understandable way to both technical and non-technical stakeholders.",
            ],
            qualifications: [
                "0–2 years of experience in data analysis, business intelligence, or a related field.",
                "Comfortable writing SQL queries and working with relational databases.",
                "Familiarity with Excel or Google Sheets for data analysis.",
                "Familiarity with data visualization and dashboarding tools such as Looker Studio, Tableau, or Power BI is a plus.",
                "Basic understanding of statistics, data analysis, and business metrics.",
                "Strong analytical and problem-solving skills.",
                "Able to identify patterns and translate data into actionable insights.",
                "Strong written and verbal communication skills.",
                "Willingness and ability to quickly learn new businesses, databases, tools, and analytical techniques.",
                "Able to manage multiple tasks and work independently in a fast-paced environment.",
            ],
        },
        {
            title: "Junior Data Analyst",
            company: "Deloitte Cyprus",
            description: "Analyze, clean, and transform raw data into actionable business insights to support data-driven decision-making.",
            tags: ["Freshgraduate", "Fulltime", "Hybrid"],
            tagLabel: "75% Match",
            tagVariant: "success",
            postedAgo: "Posted 5 days ago",
            salary: "€24K – €30K ",
            workType: "Hybrid",
            companyDescription: "Deloitte Cyprus is a leading professional services firm providing audit, consulting, financial advisory, risk advisory, tax and related services.",
            jobDescription: "As a Junior Data Analyst at Deloitte Cyprus, you will support engagement teams by analyzing client data, preparing reports, and delivering insights that drive strategic business decisions.",
            responsibilities: [
                "Support project teams with data collection, cleaning, and analysis.",
                "Prepare client-facing reports and presentations with data-driven insights.",
                "Build and maintain dashboards using visualization tools.",
                "Assist in developing analytical frameworks for client engagements.",
                "Collaborate with senior analysts and consultants on data strategy.",
                "Document analytical processes and maintain data quality standards.",
            ],
            qualifications: [
                "Bachelor's degree in Data Science, Statistics, Computer Science, or related field.",
                "Strong analytical and quantitative skills.",
                "Proficiency in Excel and SQL.",
                "Experience with Tableau, Power BI, or similar tools is a plus.",
                "Excellent communication and presentation skills.",
                "Ability to work in a fast-paced consulting environment.",
            ],
        },
        {
            title: "Data Engineer",
            company: "TechFlow Solutions",
            description: "Design and build scalable data pipelines and infrastructure to support analytics and machine learning initiatives.",
            tags: ["Fulltime", "Remote"],
            tagLabel: "70% Match",
            tagVariant: "success",
            postedAgo: "Posted 2 days ago",
            salary: "€35K – €45K ",
            workType: "Remote",
            companyDescription: "TechFlow Solutions is a fast-growing tech startup specializing in cloud-native data solutions.",
            jobDescription: "You will design, build, and maintain data pipelines that power our analytics platform.",
            responsibilities: [
                "Build and maintain ETL/ELT pipelines using Python and SQL.",
                "Design data warehouse schemas and optimize query performance.",
                "Implement data quality monitoring and alerting systems.",
                "Collaborate with data scientists on feature engineering.",
            ],
            qualifications: [
                "2+ years of experience in data engineering.",
                "Strong proficiency in Python and SQL.",
                "Experience with cloud platforms (AWS, GCP, or Azure).",
                "Knowledge of Apache Spark, Airflow, or similar tools.",
            ],
        },
        {
            title: "Business Intelligence Analyst",
            company: "FinServe Group",
            description: "Transform complex financial data into clear, actionable dashboards and reports for executive decision-making.",
            tags: ["Fulltime", "Hybrid"],
            tagLabel: "72% Match",
            tagVariant: "success",
            postedAgo: "Posted 1 week ago",
            salary: "€28K – €35K ",
            workType: "Hybrid",
            companyDescription: "FinServe Group is a leading financial services company operating across Europe.",
            jobDescription: "As a BI Analyst, you will create dashboards and reports that drive strategic decisions across the organization.",
            responsibilities: [
                "Design and maintain executive dashboards in Power BI.",
                "Analyze financial and operational KPIs.",
                "Create automated reporting workflows.",
                "Partner with stakeholders to define metrics and KPIs.",
            ],
            qualifications: [
                "Experience with Power BI, Tableau, or Looker.",
                "Strong SQL skills.",
                "Understanding of financial metrics and KPIs.",
                "Excellent presentation skills.",
            ],
        },
        {
            title: "Junior Data Scientist",
            company: "AI Dynamics",
            description: "Apply machine learning and statistical methods to solve business problems and drive product innovation.",
            tags: ["Freshgraduate", "Fulltime", "WFO"],
            tagLabel: "65% Match",
            tagVariant: "success",
            postedAgo: "Posted 3 days ago",
            salary: "€30K – €40K ",
            workType: "WFO",
            companyDescription: "AI Dynamics is a cutting-edge AI company building intelligent automation solutions.",
            jobDescription: "You will work alongside senior data scientists to develop and deploy ML models.",
            responsibilities: [
                "Develop and train machine learning models.",
                "Perform exploratory data analysis and feature engineering.",
                "Deploy models to production using MLOps best practices.",
                "Present findings and model performance to stakeholders.",
            ],
            qualifications: [
                "Degree in Computer Science, Statistics, or related field.",
                "Proficiency in Python and ML frameworks (scikit-learn, TensorFlow).",
                "Understanding of statistics and probability.",
                "Familiarity with version control (Git).",
            ],
        },
        {
            title: "Data Analyst Intern",
            company: "CyprusTech Hub",
            description: "Support the analytics team with data collection, cleaning, and visualization tasks in a collaborative environment.",
            tags: ["Freshgraduate", "Internship", "Hybrid"],
            tagLabel: "82% Match",
            tagVariant: "success",
            postedAgo: "Posted 1 day ago",
            salary: "€12K – €15K ",
            workType: "Hybrid",
            companyDescription: "CyprusTech Hub is an innovation center fostering tech talent in Cyprus.",
            jobDescription: "As an intern, you will learn data analytics fundamentals while contributing to real projects.",
            responsibilities: [
                "Assist with data cleaning and preparation.",
                "Create basic visualizations and reports.",
                "Support senior analysts with ad-hoc analysis.",
                "Document data sources and processes.",
            ],
            qualifications: [
                "Currently enrolled in or recently graduated from a relevant degree program.",
                "Basic knowledge of Excel and SQL.",
                "Eagerness to learn and grow.",
                "Good communication skills.",
            ],
        },
        {
            title: "Senior Data Analyst",
            company: "GlobalBank Cyprus",
            description: "Lead analytics initiatives across the retail banking division, mentoring junior analysts and driving data strategy.",
            tags: ["Fulltime", "WFO"],
            tagLabel: "55% Match",
            tagVariant: "default",
            postedAgo: "Posted 2 weeks ago",
            salary: "€45K – €55K ",
            workType: "WFO",
            companyDescription: "GlobalBank Cyprus is a major retail bank serving over 500,000 customers.",
            jobDescription: "Lead the analytics team in developing insights that drive business growth.",
            responsibilities: [
                "Lead end-to-end analytics projects.",
                "Mentor junior analysts and review their work.",
                "Define data strategy and governance standards.",
                "Present insights to C-level executives.",
            ],
            qualifications: [
                "5+ years of experience in data analytics.",
                "Expert-level SQL and Python skills.",
                "Experience leading a team.",
                "Strong business acumen.",
            ],
        },
        {
            title: "Marketing Data Analyst",
            company: "BrightMedia Agency",
            description: "Analyze marketing campaign performance and customer behavior to optimize ROI across digital channels.",
            tags: ["Part-time", "Remote"],
            tagLabel: "68% Match",
            tagVariant: "success",
            postedAgo: "Posted 4 days ago",
            salary: "€18K – €22K ",
            workType: "Remote",
            companyDescription: "BrightMedia is a digital marketing agency helping brands grow through data-driven strategies.",
            jobDescription: "Analyze campaign data and provide insights to improve marketing performance.",
            responsibilities: [
                "Track and analyze marketing campaign metrics.",
                "Build dashboards for campaign performance monitoring.",
                "Conduct A/B testing analysis.",
                "Provide data-driven recommendations to optimize spend.",
            ],
            qualifications: [
                "Experience with Google Analytics and marketing platforms.",
                "SQL and Excel proficiency.",
                "Understanding of digital marketing metrics.",
                "Analytical mindset with attention to detail.",
            ],
        },
    ];

    // ─── Filtering Logic ─────────────────────────
    const filteredJobs = useMemo(() => {
        return jobs.filter((job) => {
            // Search filter (title, company, description)
            const query = searchQuery.toLowerCase();
            if (query) {
                const matchesSearch =
                    job.title.toLowerCase().includes(query) ||
                    job.company.toLowerCase().includes(query) ||
                    job.description.toLowerCase().includes(query) ||
                    job.tags.some((t) => t.toLowerCase().includes(query));
                if (!matchesSearch) return false;
            }

            // Location search
            if (locationQuery) {
                const locQuery = locationQuery.toLowerCase();
                const matchesLocation =
                    job.workType.toLowerCase().includes(locQuery) ||
                    job.company.toLowerCase().includes(locQuery);
                if (!matchesLocation) return false;
            }

            // Job Location filter
            if (selectedLocation) {
                if (job.workType !== selectedLocation) return false;
            }

            // Job Type filter
            if (selectedJobTypes.length > 0) {
                const jobTags = job.tags.map((t) => t.toLowerCase());
                const hasMatch = selectedJobTypes.some((type) =>
                    jobTags.includes(type.toLowerCase())
                );
                if (!hasMatch) return false;
            }

            // Experience Level filter
            if (selectedExperience.length > 0) {
                const jobTags = job.tags.map((t) => t.toLowerCase());
                const hasMatch = selectedExperience.some((exp) =>
                    jobTags.includes(exp.toLowerCase())
                );
                if (!hasMatch) return false;
            }

            return true;
        });
    }, [searchQuery, locationQuery, selectedJobTypes, selectedExperience, selectedLocation, selectedPostedDate]);

    // ─── Pagination Logic ────────────────────────
    const pageCount = Math.max(1, Math.ceil(filteredJobs.length / JOBS_PER_PAGE));
    const paginatedJobs = filteredJobs.slice(
        (currentPage - 1) * JOBS_PER_PAGE,
        currentPage * JOBS_PER_PAGE
    );

    const handleSearch = () => {
        setCurrentPage(1);
    };

    return (
        <>
            <div className="flex flex-col w-full gap-4">

                <HeaderBanner breadcrumb="Jobs & Opportunities"
                    title="Jobs & Opportunities"
                    description={`${filteredJobs.length} roles matched to your profile · Updated daily`}
                />

                {/* Search Bar */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 flex-1 border border-[#E1E4E9] rounded-lg px-3 py-2.5">
                        <Search size={16} className="text-[#9CA3AF]" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                            placeholder="Search for job titles, skills, and companies."
                            className="w-full text-sm font-inter text-[#262C36] placeholder-[#9CA3AF] outline-none bg-transparent"
                        />
                    </div>
                    <div className="flex items-center gap-2 flex-1 border border-[#E1E4E9] rounded-lg px-3 py-2.5">
                        <Search size={16} className="text-[#9CA3AF]" />
                        <input
                            type="text"
                            value={locationQuery}
                            onChange={(e) => { setLocationQuery(e.target.value); setCurrentPage(1); }}
                            placeholder='City, state, zip code, or "remote"'
                            className="w-full text-sm font-inter text-[#262C36] placeholder-[#9CA3AF] outline-none bg-transparent"
                        />
                    </div>
                    <Button text="Find Jobs" variant="blue" onClick={handleSearch} />
                    <button
                        type="button"
                        onClick={() => setShowFilters((v) => !v)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-inter font-medium transition ${showFilters
                                ? "bg-[#1A62F8] text-white border-[#1A62F8]"
                                : "bg-white text-[#5C6472] border-[#E1E4E9] hover:bg-[#F7F8FA]"
                            }`}
                    >
                        <SlidersHorizontal size={16} />
                        Filters
                    </button>
                </div>

                {/* Main Content */}
                <div className="flex gap-4">

                    {/* Job Cards Grid + Pagination */}
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {paginatedJobs.map((job, index) => (
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

                        {/* No Results */}
                        {filteredJobs.length === 0 && (
                            <div className="flex items-center justify-center py-12">
                                <p className="text-sm text-[#5C6472] font-inter">No jobs found matching your criteria.</p>
                            </div>
                        )}

                        {/* Pagination */}
                        {pageCount > 1 && (
                            <div className="flex items-center justify-between font-inter">
                                {/* Page Selector */}
                                <div className="flex items-center gap-2 text-sm font-medium text-[#12151B]">
                                    <span>Page</span>
                                    <select
                                        value={currentPage}
                                        onChange={(e) => setCurrentPage(Number(e.target.value))}
                                        className="rounded-lg border border-[#EAF1FE] bg-white px-3 py-2 pr-4 text-xs outline-none focus:border-slate-300"
                                    >
                                        {Array.from({ length: pageCount }, (_, i) => (
                                            <option key={i} value={i + 1}>{i + 1}</option>
                                        ))}
                                    </select>
                                    <span>of {pageCount}</span>
                                </div>

                                {/* Pagination Buttons */}
                                <div className="flex items-center gap-1">
                                    {/* Previous */}
                                    <button
                                        type="button"
                                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        <ChevronLeft size={14} />
                                    </button>

                                    {/* Page Numbers */}
                                    {getPageNumbers(currentPage, pageCount).map((page, index) =>
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
                                                onClick={() => setCurrentPage(Number(page))}
                                                className={`flex h-8 w-8 items-center justify-center rounded-md text-xs transition ${currentPage === Number(page)
                                                    ? "bg-blue-600 text-white"
                                                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        )
                                    )}

                                    {/* Next */}
                                    <button
                                        type="button"
                                        onClick={() => setCurrentPage((p) => Math.min(pageCount, p + 1))}
                                        disabled={currentPage === pageCount}
                                        className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        <ChevronRight size={14} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Filter Sidebar */}
                    {showFilters && (
                        <div className="flex flex-col gap-5 w-[280px] shrink-0">

                            {/* Job Location */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm font-semibold text-[#262C36] font-inter">Job Location</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Remote", "WFO", "Hybrid"].map((loc) => (
                                        <button
                                            key={loc}
                                            type="button"
                                            onClick={() => {
                                                setSelectedLocation(selectedLocation === loc ? "" : loc);
                                                setCurrentPage(1);
                                            }}
                                            className={`text-xs font-inter px-2.5 py-1 rounded-md transition ${selectedLocation === loc
                                                ? "bg-[#1A62F8] text-white"
                                                : "text-[#5C6472] bg-[#F7F8FA] hover:bg-[#EBF0FA]"
                                                }`}
                                        >
                                            {loc}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Job Type */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm font-semibold text-[#262C36] font-inter">Job Type</h3>
                                <div className="grid grid-cols-2 gap-1">
                                    {["Fulltime", "Internship", "Part-time", "Contract", "Freelance"].map((type) => (
                                        <label key={type} className="flex items-center gap-1.5 text-xs font-inter text-[#5C6472] cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedJobTypes.includes(type)}
                                                onChange={() => toggleFilter(type, selectedJobTypes, setSelectedJobTypes)}
                                                className="rounded border-[#E1E4E9]"
                                            />
                                            {type}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Experience Level */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm font-semibold text-[#262C36] font-inter">Experience Level</h3>
                                <div className="grid grid-cols-2 gap-1">
                                    {["Freshgraduate", "Mid Level", "Entry Level", "Senior Level"].map((level) => (
                                        <label key={level} className="flex items-center gap-1.5 text-xs font-inter text-[#5C6472] cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedExperience.includes(level)}
                                                onChange={() => toggleFilter(level, selectedExperience, setSelectedExperience)}
                                                className="rounded border-[#E1E4E9]"
                                            />
                                            {level}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Salary */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm font-semibold text-[#262C36] font-inter">Salary</h3>
                                <div className="grid grid-cols-2 gap-1">
                                    {["Under €1,000", "€2,000 – €3,000", "€1,000 – €2,000", "Above €3,000"].map((range) => (
                                        <label key={range} className="flex items-center gap-1.5 text-xs font-inter text-[#5C6472] cursor-pointer">
                                            <input type="checkbox" className="rounded border-[#E1E4E9]" />
                                            {range}
                                        </label>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="text" placeholder="€1,000" className="flex-1 border border-[#E1E4E9] rounded-lg px-3 py-1.5 text-xs font-inter outline-none" />
                                    <span className="text-xs text-[#5C6472]">To</span>
                                    <input type="text" placeholder="€1,000" className="flex-1 border border-[#E1E4E9] rounded-lg px-3 py-1.5 text-xs font-inter outline-none" />
                                </div>
                            </div>

                            {/* Posted Date */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm font-semibold text-[#262C36] font-inter">Posted Date</h3>
                                <select
                                    value={selectedPostedDate}
                                    onChange={(e) => { setSelectedPostedDate(e.target.value); setCurrentPage(1); }}
                                    className="border border-[#E1E4E9] rounded-lg px-3 py-2 text-sm font-inter text-[#5C6472] outline-none"
                                >
                                    <option value="all">All time</option>
                                    <option value="24h">Past 24 hours</option>
                                    <option value="week">Past week</option>
                                    <option value="month">Past month</option>
                                </select>
                            </div>

                        </div>
                    )}
                </div>

            </div>
        </>
    );
}

/* ================================================= */
/* PAGINATION HELPER                                 */
/* ================================================= */

function getPageNumbers(
    currentPage: number,
    pageCount: number
): (number | string)[] {
    if (pageCount <= 5) {
        return Array.from({ length: pageCount }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
        return [1, 2, 3, "...", pageCount];
    }

    if (currentPage >= pageCount - 2) {
        return [1, "...", pageCount - 2, pageCount - 1, pageCount];
    }

    return [1, "...", currentPage, "...", pageCount];
}

import HeaderBanner from "../../elements/HeaderBanner";
import Button from "../../elements/Button";
import { Tag } from "../../elements/Tag";
import { Bookmark } from "lucide-react";
import type { JobData } from "../../types/jobData";
import type { Page } from "../../config/navigation";

interface JobDetailProps {
    data: JobData | null;
    onNavigate: (page: Page) => void;
    savedJobs: JobData[];
    onToggleSave: (job: JobData) => void;
}

export default function JobDetail({ data, onNavigate, savedJobs, onToggleSave }: JobDetailProps) {

    const isSaved = data
        ? savedJobs.some((j) => j.title === data.title && j.company === data.company)
        : false;

    if (!data) {
        return (
            <div className="flex flex-col items-center justify-center gap-4 py-20 font-inter">
                <p className="text-lg text-[#5C6472]">No job selected.</p>
                <button
                    onClick={() => onNavigate("jobs-opportunities")}
                    className="text-sm font-medium text-[#1A62F8] hover:underline"
                >
                    ← Back to Jobs & Opportunities
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col w-full gap-4">
                <HeaderBanner breadcrumb="Jobs & Opportunities / Job Details"
                    title={data.title}
                    description={data.company}
                />


                {/* Work Type Tag */}
                <div>
                    <Tag variant="info">{data.workType}</Tag>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <Button text="Apply Now" variant="blue" />
                    <Button
                        text={isSaved ? "Saved" : "Save"}
                        variant={isSaved ? "blue" : "white"}
                        icon={Bookmark}
                        onClick={() => onToggleSave(data)}
                    />
                </div>

                {/* Full Job Description */}
                <div className="flex flex-col gap-2 font-inter px-6 mt-3">

                    <h2 className="text-xl font-medium text-[#12151B]">Full job description</h2>

                    {/* Company Description */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-base font-medium text-[#000000]">Company Description</h3>
                        {data.companyDescription.split("\n\n").map((paragraph, index) => (
                            <p key={index} className="text-sm leading-6 font-normal text-[#262C36]">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Job Description */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-base font-medium text-[#000000]">Job Description</h3>
                        <p className="text-sm leading-6 font-normal text-[#262C36]">
                            {data.jobDescription}
                        </p>
                        <p className="text-sm leading-6 font-normal text-[#262C36]">You will:</p>
                        <ul className="list-disc pl-6 flex flex-col gap-1">
                            {data.responsibilities.map((item, index) => (
                                <li key={index} className="text-sm leading-6 text-[#262C36]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Qualifications */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-base font-medium text-[#000000]">Qualifications</h3>
                        <ul className="list-disc pl-6 flex flex-col gap-1">
                            {data.qualifications.map((item, index) => (
                                <li key={index} className="text-sm leading-6 font-normal text-[#262C36]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </>
    );
}

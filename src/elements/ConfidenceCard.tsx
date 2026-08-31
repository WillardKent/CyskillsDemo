import { Signal } from "lucide-react";

export default function ConfidenceCard() {
    const stats = [
        {
            value: "72%",
            label: "High conf.",
            color: "text-[#1A62F8]",
        },
        {
            value: "45%",
            label: "Medium conf.",
            color: "text-[#F59E0B]",
        },
        {
            value: "20%",
            label: "Low conf.",
            color: "text-[#EF4444]",
        },
    ];

    return (
        <>
            <div className="flex w-full flex-col bg-white border border-[#F7F8FA] rounded-lg">
                <div className="px-6 py-5 border-b border-[#F7F8FA] ">
                    <span className="font-inter text-base lg:text-lg font-medium text-[#12151B]">
                        Confidence distribution
                    </span>
                </div>

                <div className="flex gap-4 px-6 py-5 font-inter">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-1 items-center gap-3"
                        >
                            <div className="rounded-lg border-[1.5px] border-[#EFF5FF] bg-[#F7F8FA] p-2">
                                <Signal className={`size-8 ${stat.color}`} />
                            </div>

                            <div className="flex flex-col gap-2.5">
                                <span className="text-lg min-[401px]:text-xl lg:text-2xl font-medium text-[#12151B]">
                                    {stat.value}
                                </span>

                                <span className="text-xs font-normal text-[#5C6472]">
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}
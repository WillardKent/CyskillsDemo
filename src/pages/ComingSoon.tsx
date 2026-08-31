import { Construction } from "lucide-react";

type ComingSoonProps = {
    pageName?: string;
};

export default function ComingSoon({ pageName }: ComingSoonProps) {
    return (
        <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center gap-4 rounded-xl border border-[#F3F5F7] bg-white px-12 py-16 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF1FE]">
                    <Construction className="h-8 w-8 text-[#1A62F8]" />
                </div>

                <h2 className="font-inter text-base min-[401px]:text-lg lg:text-xl font-semibold text-[#12151B]">
                    {pageName ?? "This page"} is under development
                </h2>

                <p className="max-w-sm font-inter text-sm text-[#5C6472]">
                    This section is being built and will be available soon.
                    Check back later for updates.
                </p>
            </div>
        </div>
    );
}



type FooterBannerProps = {
    paragraph: string;
};

export default function FooterBanner({
    paragraph
}: FooterBannerProps) {

    return (
        <>
            <div className="flex w-full bg-white border border-[#F7F8FA] rounded-lg p-4">

                <span className="font-inter font-medium text-sm text-[#262C36]">
                    {paragraph}
                </span>

            </div>
        </>
    );
}
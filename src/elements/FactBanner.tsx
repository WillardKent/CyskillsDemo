import Bulb from "../assets/bulb.png"



type FactBannerProps = {
    title?: string,
    info: string
};

export default function FactBanner({
    title,
    info
}: FactBannerProps) {

    return (
        <>
            <div className="flex w-full items-start gap-3 border border-[#F7F8FA] rounded-lg bg-white   p-3">
                <img
                    src={Bulb}
                    alt="bulb"
                    className="size-5"
                />


                <div className="font-inter text-sm leading-4 mr-2">

                    <span className="block font-normal text-[#414957]">
                        {title}
                    </span>
                    <span className="font-normal text-[#414957]">
                        {info}
                    </span>


                </div>
            </div>
        </>
    );
}
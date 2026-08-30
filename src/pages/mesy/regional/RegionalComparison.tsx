import Card from "../../../elements/Card";
import InfoBanner from "../../../elements/InfoBanner";
import HeaderBanner from "../../../elements/HeaderBanner";
import FactBanner from "../../../elements/FactBanner";
import DataTable from "../../../elements/DataTable";
import FooterBanner from "../../../elements/FooterBanner";
import type { ColumnDef } from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";






type DistrictData = {
    district: string;
    vacancy: number;
    skillgap: "ICT / AI" | "Finance / Legal";
    youthunemp: string;
    hei: String;
};

const districtData: DistrictData[] = [
    {
        district: "Nicosia",
        vacancy: 62400,
        skillgap: "ICT / AI",
        youthunemp: "7.2%",
        hei: "UCY,UNIC,OUC,EUC",
    },
    {
        district: "Limasol",
        vacancy: 62400,
        skillgap: "ICT / AI",
        youthunemp: "7.2%",
        hei: "UCY,UNIC,OUC,EUC",
    },
    {
        district: "Larnaca",
        vacancy: 22400,
        skillgap: "ICT / AI",
        youthunemp: "7.2%",
        hei: "UCY,UNIC,OUC,EUC",
    },
    {
        district: "Paphos",
        vacancy: 62400,
        skillgap: "ICT / AI",
        youthunemp: "7.2%",
        hei: "UCY,UNIC,OUC,EUC",
    },
    {
        district: "Famagusta",
        vacancy: 22400,
        skillgap: "ICT / AI",
        youthunemp: "7.2%",
        hei: "UCY,UNIC,OUC,EUC",
    },
    {
        district: "Limassol",
        vacancy: 14800,
        skillgap: "Finance / Legal",
        youthunemp: "7.2%",
        hei: "CUT",
    },
];

const districtColumns: ColumnDef<DistrictData, unknown>[] = [
    {
        accessorKey: "district",
        header: "District",
    },
    {
        accessorKey: "vacancy",
        header: "Active Vacancies",
    },
    {
        accessorKey: "skillgap",
        header: "Top Skill Gap",

        cell: ({ getValue }) => {
            const value = getValue<
                DistrictData["skillgap"]
            >();

            return (
                <span
                    className={`inline-flex rounded-md px-3 py-1.5 font-inter text-xs font-normal ${value === "ICT / AI"
                        ? "bg-[#E1FCEF] text-[#14804A]"
                        : "bg-[#FCF2E6] text-[#AA5B00]"
                        }`}
                >
                    {value}
                </span>
            );
        },
    },
    {
        accessorKey: "youthunemp",
        header: "Youth Unemp.",
    },
    {
        accessorKey: "hei",
        header: "HEIs",
    },

];



const indicatorData = [
    {
        label: "Nicosia",
        percentage: 50,
        gradient:
            "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Limassol",
        percentage: 75,
        gradient:
            "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Larnaca",
        percentage: 65,
        gradient:
            "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Paphos",
        percentage: 100,
        gradient:
            "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Famagusta",
        percentage: 85,
        gradient:
            "bg-[linear-gradient(225deg,#F2D468_0.01%,#F58D50_100%)]",
    },
    {
        label: "Kyrenia",
        percentage: 25,
        gradient:
            "bg-[linear-gradient(225deg,#F27868_0.01%,#F55050_100%)]",
    },
];

export default function RegionalComparison() {



    return (
        <>


            <div className="flex flex-col w-full gap-2">
                <HeaderBanner
                    breadcrumb="Regional Workforce Comparison"
                    title="Regional Workforce Comparison"
                    description="District-level employment, skill supply, and vacancy analysis"
                    buttons={[
                        {
                            text: "View: All Districts ",
                            icon: ChevronDown,
                            variant: "white",
                            onClick: () => console.log("Year clicked"),
                        },
                        {
                            text: "Export Regional Report",
                            icon: ChevronDown,
                            variant: "blue",
                            onClick: () => console.log("Export clicked"),
                        },
                    ]}
                />




                <InfoBanner notif="This module will become active once vacancy data becomes available."
                    title="Regional Workforce Comparison is a future module — "
                    info="designed to be fully activated once vacancy data or employer survey data is available and validated. At the moment, only official contextual indicators (CYSTAT / Eurostat) can be displayed reliably."
                />
                <FactBanner
                    info="Active vacancy data, regional skill demand, and top skill gap indicators are illustrative and depend on data sources that have not yet been confirmed. These figures should not be used for official reporting or policy decision-making."
                />

                <div className="flex w-full flex-col gap-4 xl:flex-row">
                    <Card
                        title="Supply by programme domain">

                        <DataTable
                            data={districtData}
                            columns={districtColumns}
                            variant="minimal"
                        />
                    </Card>

                    <Card
                        title="Graduate employment"
                        description="Youth unemployment per district — source: CYSTAT / Eurostat. This indicator can be displayed independently without vacancy data.">

                        <div className="flex flex-col">
                            {indicatorData.map((item, index) => (
                                <div
                                    key={index}
                                    className="grid w-full grid-cols-4 items-center gap-6  py-5"
                                >
                                    {/* Label */}
                                    <span className="col-span-1 min-w-0 font-inter text-sm font-semibold text-[#12151B]">
                                        {item.label}
                                    </span>

                                    {/* Progress */}
                                    <div className="col-span-3 flex items-center gap-3">
                                        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                                            <div
                                                className={`h-full rounded-full ${item.gradient}`}
                                                style={{
                                                    width: `${item.percentage}%`,
                                                }}
                                            />
                                        </div>

                                        <span className="shrink-0 font-inter text-sm font-normal text-[#414957]">
                                            {item.percentage}%
                                        </span>
                                    </div>
                                </div>
                            ))}

                            <div className="flex w-full items-start gap-3 border border-[#F7F8FA] rounded-lg bg-[#EAF1FE] p-3">
                                <div className="flex size-5 shrink-0 items-center justify-center rounded-md font-inter text-xs font-medium border border-[#1A62F8] text-[#1A62F8]">
                                    i
                                </div>

                                <div className="font-inter text-xs leading-4 mr-2">
                                    <span className="font-normal text-[#1A62F8]">
                                        This data can be used for official reporting because it is sourced directly from CYSTAT and Eurostat, regardless of vacancy data availability.
                                    </span>


                                </div>
                            </div>
                        </div>

                    </Card>
                </div>

                <FooterBanner paragraph="AI Regional Insight (based only on official indicators): Famagusta shows the highest youth unemployment rate (11.2%) without the presence of a local HEI. Investment in regional skill development centers is therefore a reasonable policy recommendation — however, the skill gap dimension can only be confirmed once district-level vacancy or employer demand data becomes available.
years." />
            </div>

        </>
    );
}


import Image from "next/image";
import Link from "next/link";
import { ExpertsSectionProps } from "@/interfaces/ExpertsSection"
import DoctorHomeData from "./DoctorHomeData";
import parse from "html-react-parser";
import RequestCallbackModal from "./RequestCallbackModal";
import DoctorLandingData from "./DoctorLandingData";

export default function ExpertsSection({
    title,
    description,
    button,
    doctordata
}: ExpertsSectionProps) {
    return (
        <section className="px-4 lg:px-6 xl:px-10 2xl:px-24 text-white">
            <div className="w-full bg-gradient-to-br from-[#003368] to-[#0052A9] rounded-[40px] lg:rounded-[80px] px-5 xl:px-10 py-10 lg:py-14 xl:py-20">
                <div className="text-center max-w-5xl mx-auto mb-8 lg:mb-14 section-landing-new-page">
                    <h2 className="text-3xl lg:text-3xl xl:text-4xl font-semibold">{parse(title)}</h2>
                    <div className="text-sm md:text-base xl:text-lg font-thin mt-4 opacity-90 leading-relaxed">
                        {parse(description)}
                    </div>
                </div>
                {button?.url ? 
                <DoctorHomeData experts={doctordata} /> :
                <DoctorLandingData experts={doctordata} />}
                <div className="flex justify-center mt-6">
                    {button?.url ? (
                        <Link
                            href={button?.url}
                            className="block w-fit"
                        >
                            <button id={'learn-more'} className="uppercase text-sm lg:text-lg gap-3 flex justify-between items-center w-full lg:w-fit bg-gradient-to-r from-[#EC6724] to-[#F05432] hover:from-[#EC6724]/80 hover:to-[#F05432]/80 text-white px-4 md:px-5 py-2 xl:px-7 2xl:py-2 rounded-full font-normal shadow-md hover:scale-105 duration-500 cursor-pointer">
                                {button?.title}
                                <Image
                                    className="group-hover:-rotate-45 w-10 h-10 duration-700 bg-white rounded-full p-3"
                                    src="/images/orangearrow.svg"
                                    width={20}
                                    height={20}
                                    alt="arrow"
                                    unoptimized
                                />
                            </button>
                        </Link>
                    ) :
                        <div className="flex justify-center pt-5">
                            <Link
                                href="#book-appointment"
                                className="block text-sm md:text-base relative hover:scale-105 duration-500 cursor-pointer
                                    bg-gradient-to-r from-[#EC6724] to-[#F05432] uppercase w-full lg:w-fit
                                    hover:from-[#EC6724]/80 hover:to-[#F05432]/80 z-20
                                    text-white font-normal px-6 py-3 rounded-full shadow"
                            >
                                {button}
                            </Link>
                        </div>}
                </div>
            </div>
        </section>
    );
}
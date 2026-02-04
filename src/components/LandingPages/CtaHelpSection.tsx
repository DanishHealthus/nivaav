"use client";
import parse from "html-react-parser";
import LandingCallbackForm from "./LandingCallbackForm";

interface Data {
  location_name: string;
  location_place: string
}

interface CtaProps {
  cta_title: string;
  cta_description: string; // HTML string
  cta_button_name: string;
  cta_after_button_text: string;
  clinic: Data[];
}

export default function CtaHelpSection({
  cta_title,
  cta_description,
  cta_button_name,
  cta_after_button_text,
  clinic,
}: CtaProps) {
  const handleScroll = () => {
    setTimeout(() => {
      const el = document.getElementById("book-appointment");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };
  return (
    <section id="book-appointment2" className="px-4 bg-[#F5FAFF] lg:px-6 xl:px-10 2xl:px-24 py-14">
      <div
        className="relative overflow-hidden rounded-[40px] lg:rounded-[60px]
        bg-[#99E3FF]/90 border-2 border-[#99E3FF]/80 p-4 md:p-8 lg:p-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[55%_40%] gap-10 items-center">
          <div className="w-full flex justify-center">
            <div className="relative w-full 2xl:p-6">
              <LandingCallbackForm clinics={clinic} />
            </div>
          </div>
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-[#0B4AA2] mb-4">
              {cta_title}
            </h2>
            <div className="text-base md:text-lg text-[#0F172A] leading-relaxed
             [&_p]:text-xl
              [&_ul]:mt-4 [&_ul]:space-y-3
              [&_li]:flex [&_li]:items-start [&_li]:gap-3
              [&_li]:before:content-['✔']
              [&_li]:before:text-[#F36A2F]
              [&_li]:before:font-bold">
              {parse(cta_description)}
            </div>
            <div className="mt-8">
              <button onClick={handleScroll}
                className="block text-sm md:text-base relative hover:scale-105 duration-500 cursor-pointer
                bg-gradient-to-r from-[#EC6724] to-[#F05432] uppercase w-full lg:w-fit
                hover:from-[#EC6724]/80 hover:to-[#F05432]/80 z-20
                text-white font-normal px-6 py-3 rounded-full shadow"
              >
                {cta_button_name}
              </button>
              <p className="my-5 text-xs md:text-sm text-gray-600">
                {cta_after_button_text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

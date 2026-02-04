"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

interface LocationItem {
  location_name: string;
  location_place: string;
}

interface ClinicsProps {
  data: {
    clinics_title: string;
    clinics_info: string;
    clinics_location_map: {
      url: string;
      alt: string;
    };
    locations_lists: LocationItem[];
  };
}

export default function ClinicsAcrossState({ data }: ClinicsProps) {
  const {
    clinics_title,
    clinics_info,
    clinics_location_map,
    locations_lists,
  } = data;

  return (
    <section id="our-clinics" className="pt-20">
      <div className="px-4 lg:px-6 xl:px-10 2xl:px-24 bg-[#F5FAFF] py-14">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-[#1F3C88]">
            {clinics_title}
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600">
            {clinics_info}
          </p>
        </div>

        {/* Main Card */}
        <div className=" rounded-3xl xl:rounded-[40px] p-1 md:p-6 xl:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[56%_40%] gap-12 items-center">
            
            {/* Left Map Image */}
            <div className="relative w-full h-full overflow-hidden rounded-4xl border border-[#1F3C88]">
              <Image
                src={clinics_location_map.url}
                alt={clinics_location_map.alt || "Clinics Map"}
                width={1500}
                height={1500}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>

            {/* Right Locations List */}
            <div className="flex flex-col gap-3 ">
              {locations_lists.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4
                  bg-white rounded-full px-4 py-3 shadow-sm border border-[#E6F0FF]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFECE3]">
                      <MapPin className="h-4 w-4 text-[#F05432]" />
                    </span>

                    <span className="text-sm md:text-base font-medium text-[#003B73]">
                      {item.location_name}
                    </span>
                  </div>

                  <span className="text-xs md:text-sm font-semibold uppercase text-[#06A1DC]">
                    {item.location_place}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

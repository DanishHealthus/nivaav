"use client";
import Image from "next/image";

interface data { url: string; alt: string }
interface StatItem {
  icon?: data;
  title?: string;
}

interface StatsBarProps {
  stats?: StatItem[];
}

const LandingStatsBar: React.FC<StatsBarProps> = ({ stats }) => {
  return (
    <section className="px-4 lg:px-6 xl:px-10 2xl:px-24">
      <div
        className="w-full  rounded-[60px] grid grid-cols-2 lg:grid-cols-4 justify-center lg:justify-between items-start lg:gap-8 py-10 bg-gradient-to-br from-[#003368] to-[#0052A9] px-3 xl:px-10 2xl:px-20 relative z-30"
      >
        {stats?.map((item, index) => {
          return (
            <div key={index} className="relative h-full text-left p-4 flex flex-col items-center">
              <div className="h-20 lg:h-[90px] flex items-center justify-center mb-5">
                {item.icon && (
                  <Image
                    src={item.icon.url}
                    alt={item.icon.alt}
                    width={100}
                    height={100}
                    className="object-contain p-2 lg:p-0"
                    unoptimized
                  />
                )}
              </div>
              <p className="text-center pt-3 text-base lg:text-sm xl:text-base 2xl:text-xl uppercase font-thin text-white tracking-wide">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LandingStatsBar
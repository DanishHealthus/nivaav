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
    <section className="px-24 ">
      <div
        className="w-full flex rounded-[60px] flex-wrap md:flex-nowrap justify-center lg:justify-between items-start gap-8 pt-5 pb-12 bg-gradient-to-br from-[#003368] to-[#0052A9] px-3 xl:px-10 2xl:px-20 relative z-30"
      >
        {stats?.map((item, index) => {
          return (
            <div key={index} className="relative h-full lg:flex-1 justify-between items-stretch text-left px-4">
              <div className="text-center h-full flex-1 justify-between items-stretch  mt-5">
                {item.icon &&
                  <Image
                    src={item.icon.url}
                    alt={item.icon.alt}
                    width={90}
                    height={90}
                    className="mx-auto pb-5"
                    unoptimized
                  />}
                <p className="text-base lg:text-sm xl:text-base 2xl:text-xl uppercase font-thin text-white tracking-wide">
                  {item.title}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LandingStatsBar
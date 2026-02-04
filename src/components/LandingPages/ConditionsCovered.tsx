"use client";
import Image from "next/image";

interface ConditionItem {
    name: string;
}

interface ConditionBox {
    icon: {
        url: string;
        alt: string;
    };
    title: string;
    list_name: ConditionItem[];
}

interface ConditionsProps {
    conditions_title: string;
    conditions_button_name: string;
    condition_boxs_list: ConditionBox[];
}

export default function ConditionsCovered({
    conditions_title,
    conditions_button_name,
    condition_boxs_list,
}: ConditionsProps) {
    const handleScroll = () => {
        setTimeout(() => {
            const el = document.getElementById("book-appointment");
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100);
    };
    return (
        <section id="conditions" className="px-4 lg:px-6 xl:px-10 2xl:px-24 pt-28">
            <div className="">
                <h2 className="text-center text-2xl md:text-3xl xl:text-4xl font-semibold text-[#1F3C88] mb-12">
                    {conditions_title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {condition_boxs_list.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-4xl border border-[#E6EEF8] shadow-[0_6px_20px_rgba(0,0,0,0.08)] p-6 flex flex-col"
                        >
                            <div className="flex gap-3 items-center justify-start">
                                <div className="w-fit">
                                    <div className="w-14 h-14 rounded-xl bg-[#2D4AA3] flex items-center justify-center mb-4">
                                        <Image
                                            src={item.icon.url}
                                            alt={item.icon.alt || item.title}
                                            width={28}
                                            height={28}
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </div>
                                </div>
                                <h3 className="w-[70%] text-base lg:text-lg font-semibold text-[#0F172A] mb-4">
                                    {item.title}
                                </h3>
                            </div>
                            <ul className="space-y-3 p-3">
                                {item.list_name.map((list, i) => (
                                    <li key={i} className="flex items-start gap-2 text-base text-[#334155]">
                                        <span className="mt-1.5 h-2 w-2 rounded-full bg-[#F36A2F] flex-shrink-0" />
                                        {list.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-12">
                    <button 
                        onClick={handleScroll}
                        className="block text-sm md:text-base relative hover:scale-105 duration-500 cursor-pointer
                            bg-gradient-to-r from-[#EC6724] to-[#F05432] uppercase w-full lg:w-fit
                            hover:from-[#EC6724]/80 hover:to-[#F05432]/80 z-20
                            text-white font-normal px-6 py-3 rounded-full shadow"
                    >
                        {conditions_button_name}
                    </button>
                </div>
            </div>
        </section>
    );
}

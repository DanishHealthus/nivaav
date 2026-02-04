"use client";

import Image from "next/image";
import parse from "html-react-parser";

interface InjuryStage {
    stage_color: string;
    stage_name: string;
    title: string;
    description: string;
}

interface InjuryImage {
    url: string;
    alt: string;
}

interface Props {
    data: {
        injury_title: string;
        injury_description: string;
        injury_image: InjuryImage;
        injury_button_name: string;
        after_button_title: string;
        injury_stage: InjuryStage[];
    };
}

const OsteoarthritisStages = ({ data }: Props) => {
    const {
        injury_title,
        injury_description,
        injury_image,
        injury_button_name,
        after_button_title,
        injury_stage,
    } = data;

    return (
        <section className="px-5 md:px-10 xl:px-24 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-[55%_40%] gap-12 items-start">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#243c9b] leading-tight">
                        {injury_title}
                    </h2>
                    <p className="mt-4 text-gray-600 ">
                        {injury_description}
                    </p>
                    <div className="relative my-10 rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src={injury_image.url}
                            alt={injury_image.alt || "Injury Image"}
                            width={700}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="mt-8">
                        <button className="bg-[#f26b3a] hover:bg-[#e85f2e] text-white font-semibold px-8 py-4 rounded-full transition">
                            {injury_button_name}
                        </button>
                        <p className="text-sm text-gray-500 mt-3">
                            {after_button_title}
                        </p>
                    </div>
                </div>
                <div style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }} className="bg-white rounded-3xl p-6 md:p-10 relative">
                    <div className="">
                        {injury_stage.map((stage, index) => (
                            <div key={index} className="relative flex pb-10 gap-6">
                                {index !== injury_stage.length - 1 && (
                                    <div
                                        className="absolute left-[7px] top-6 w-[2px] h-full hidden sm:block"
                                        style={{
                                            background: `linear-gradient( to bottom,
                                                    ${stage.stage_color},
                                                    ${injury_stage[index + 1]?.stage_color || stage.stage_color}
                                                )`,
                                        }}
                                    />
                                )}

                                <div className="relative z-10 block">
                                    <span
                                        className="w-4 h-4 rounded-full block mt-2"
                                        style={{ backgroundColor: stage.stage_color }}
                                    />
                                </div>
                                <div>
                                    <span
                                        className="text-xs font-bold uppercase tracking-wide"
                                        style={{ color: stage.stage_color }}
                                    >
                                        {stage.stage_name}
                                    </span>
                                    <h3 className="text-lg font-semibold text-[#243c9b] mt-1">
                                        {stage.title}
                                    </h3>
                                    <div className="text-gray-600 text-sm mt-2 space-y-2  [&_ul]:mt-4 [&_ul]:space-y-3
                                        [&_li]:flex [&_li]:items-center [&_li]:gap-2
                                        [&_li]:before:content-['.']
                                        [&_li]:before:font-bold">
                                        {parse(stage.description)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OsteoarthritisStages;

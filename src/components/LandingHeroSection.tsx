import parse from "html-react-parser";
import he from "he";
import RequestCallbackModal from "./RequestCallbackModal";
import LandingCallbackForm from "./LandingPages/LandingCallbackForm";
import Image from "next/image";

interface Inner {
    name: string
}
interface Data {
    title: string,
    description: string,
    button: string,
    clinic: any,
    list: Inner[]
}

export function LandingHeroSection({
    title,
    description,
    button,
    clinic,
    list
}: Data) {
    const decodedTitle = he.decode(title);
    const decodedDescription = he.decode(description);
    const parsedTitle = parse(decodedTitle, {
        replace: (domNode: any) => {
            if (domNode.name === "spam") {
                return (
                    <span className="text-[#06A1DC] font-bold">
                        {domNode.children[0]?.data}
                    </span>
                );
            }
            if (domNode.name === "space") return " ";
        },
    });

    const parsedDescription = parse(decodedDescription, {
        replace: (domNode: any) => {
            if (domNode.name === "spam") {
                return (
                    <span className="text-blue-600 font-semibold">
                        {domNode.children[0]?.data}
                    </span>
                );
            }
            if (domNode.name === "space") return " ";
        },
    });

    return (
        <section id="book-appointment" className="relative home-main-section-landing w-full bg-gradient-to-b from-[#edf8fc] to-[#edf8fc] lg:pt-10 lg:pb-20">
            <img
                src="/images/lpwatermark.webp"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] pointer-events-none z-20"
            />

            <div className="pt-20 px-4 lg:px-10 xl:px-16 2xl:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-10 pt-5 pb-16 lg:py-10">
                    <div className="landing-h3-bold landing-h4-bold md:text-center flex flex-col justify-center">
                        <h1 className="text-[28px] sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-blue-900 leading-tight">
                            {parsedTitle}
                        </h1>
                        <div className="my-4 lg:my-6 section-landing-new-page  text-gray-800 leading-relaxed font-normal space-y-5">
                            {parsedDescription}
                        </div>
                        <div className="text-black text-lg flex md:justify-center section-landing-new-page text-left py-3">
                            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3 text-black">
                                {list.map((item, index) => (
                                    <li
                                        key={index}
                                        className="hover:text-[#06A1DC] capitalize font-sans font-medium transition"
                                    >
                                        {parse(item.name)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {button &&
                            <div className="flex justify-center pt-5">
                                <RequestCallbackModal buttonText={button} id={button} />
                            </div>
                        }
                    </div>
                    <div>
                        <div className="relative z-20 xl:w-4/5 mx-auto flex justify-center">
                            <LandingCallbackForm clinics={clinic} />
                        </div>
                        <div className="flex justify-center pt-8 lg:pt-5">
                            <Image className="relative z-50 " width={250} height={200} alt="google" src="/images/google-logo.png" unoptimized />
                        </div>
                    </div>
                </div>
            </div>
            <Image className="absolute bottom-0 z-10" width={5000} height={5000} alt="bottom" src="/images/bottom.png" unoptimized />
        </section>
    );
}

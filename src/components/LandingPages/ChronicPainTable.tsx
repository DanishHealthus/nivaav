"use client";

interface TableListItem {
    name: string;
}

interface ChronicTableItem {
    table_head_name: string;
    table_list_color: string;
    table_lists: TableListItem[];
}

interface ChronicPainProps {
    chronic_table: ChronicTableItem[];
    chronic_button_name: string;
    chronic_title: string;
}

export default function ChronicPainTable({
    chronic_table,
    chronic_button_name,
    chronic_title,
}: ChronicPainProps) {
    const handleScroll = () => {
        setTimeout(() => {
            const el = document.getElementById("book-appointment");
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100);
    };
    return (
        <section className="px-4 lg:px-6 xl:px-10 2xl:px-24 pt-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="overflow-hidden rounded-[28px] border border-gray-300 shadow-lg bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {chronic_table.map((table, index) => (
                            <div key={index} className="border-b md:border-b-0 md:border-r last:border-r-0 border-gray-300">
                                <div className="bg-gradient-to-br from-[#003368] to-[#0052A9] text-white text-center border-gray-300 font-semibold text-sm md:text-base xl:text-lg py-4 uppercase tracking-wide">
                                    {table.table_head_name}
                                </div>
                                <ul className="divide-y border-gray-300">
                                    {table.table_lists.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex border-gray-300 items-start gap-3 px-5 py-4 text-sm md:text-base text-[#1F2937]"
                                        >
                                            <span
                                                className="mt-2 h-2.5 w-2.5 rounded-full flex-shrink-0"
                                                style={{ backgroundColor: table.table_list_color }}
                                            />
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <button onClick={handleScroll}
                        className="block text-sm md:text-base relative hover:scale-105 duration-500 cursor-pointer
                                    bg-gradient-to-r from-[#EC6724] to-[#F05432] uppercase w-full lg:w-fit
                                    hover:from-[#EC6724]/80 hover:to-[#F05432]/80 z-20
                                    text-white font-normal px-6 py-3 rounded-full shadow"
                    >
                        {chronic_button_name}
                    </button>
                    <p className="mt-3 text-xs md:text-sm text-gray-500">
                        {chronic_title}
                    </p>
                </div>
            </div>
        </section>
    );
}

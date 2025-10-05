"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection({ header, description, faqs }) {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-12 sm:py-16 md:py-20 px-6 sm:px-12 md:px-36 2xl:px-44 flex rounded-b-3xl">
            <div className="flex flex-col md:flex-row w-full items-start md:items-start justify-between gap-10 md:gap-20">

                {/* Left Side */}
                <div className="w-full md:w-[374px] text-left md:text-left">
                    <h2 className="text-[2.13rem] sm:text-3xl md:text-[40px] font-semibold text-brand-navy font-onest leading-[130%] tracking-[-0.67px]">
                        {header.simple}{" "}
                        <span className="italic font-normal font-ptserif">{header.italic}</span>
                    </h2>
                    <p className="mt-4 text-brand-navy text-sm sm:text-base leading-[24px] sm:leading-[27px] font-onest">
                        {description}
                    </p>
                </div>

                {/* Right Side */}
                <div className="space-y-4 w-full md:w-[712px]">
                    {faqs.map((faq) => (
                        <FaqItem
                            key={faq.id}
                            faq={faq}
                            isOpen={openId === faq.id}
                            toggle={() => toggle(faq.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FaqItem({ faq, isOpen, toggle }) {
    const ref = useRef(null);

    return (
        <div className="bg-brand-rose rounded-2xl w-full">
            <button
                onClick={toggle}
                className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left text-brand-navy font-normal text-base sm:text-lg md:text-xl leading-[28px] sm:leading-[32px] md:leading-[34px]"
            >
                {faq.question}
                <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            <div
                ref={ref}
                style={{
                    maxHeight: isOpen ? ref.current?.scrollHeight + "px" : "0px",
                }}
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
            >
                <p className="px-4 sm:px-6 pb-4 text-sm sm:text-base text-brand-navyAlpha leading-6">
                    {faq.answer}
                </p>
            </div>
        </div>
    );
}
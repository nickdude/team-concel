"use client";
import TimelineScroll from "../components/TimelineScroll";

export default function OurHistorySection({ header, description }) {


    return (
        <section className="py-12 sm:py-16 flex flex-col justify-center px-4 sm:px-8 md:px-36 2xl:px-44">

            {/* Header */}
            <h1 className="text-left font-onest text-[2.13rem] sm:text-3xl md:text-4xl font-semibold text-navy leading-[130%] tracking-[-0.67px]">
                {header?.simple}{" "}
                <span className="font-ptserif font-normal italic">
                    {header?.italic}
                </span>
            </h1>

            {/* Description */}
            <p className="font-onest text-brand-navyAlpha font-normal text-sm sm:text-base leading-[27px] mt-3 w-full sm:w-4/5 md:w-[55%]">
                {description}
            </p>

            <div className="flex flex-col md:flex-row flex-wrap gap-5 justify-center mt-8 sm:mt-12">
                <TimelineScroll />
            </div>
        </section>
    );
}
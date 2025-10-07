"use client";
import { useState, useRef } from "react";
import Button from "./Button";
import DropDownButton from "./DropDownButton";

export default function ProcessAccordion({ header, description, processes, buttonLabel, image }) {
    const [openStep, setOpenStep] = useState(1);

    const toggleStep = (id) => {
        if (openStep === id) return;
        setOpenStep(id);
    };

    return (
        <section className="bg-brand-gold flex flex-col sm:flex-row gap-12 sm:gap-28 items-start sm:items-center px-4 sm:px-8 md:px-36 2xl:px-44 py-12 sm:py-20">

            {/* Left Side - Accordion */}
            <div className="flex flex-col w-full sm:w-[443px]">
                <h2 className="text-[2.13rem]  sm:text-3xl md:text-[40px] font-semibold text-brand-navy font-onest leading-[130%] tracking-[-0.67px]">
                    {header?.simple}{" "}
                    <span className="italic font-ptserif font-normal">{header?.italic}</span>
                </h2>

                <div className="mt-6 space-y-3 mb-8">
                    {processes.map((step) => (
                        <AccordionItem
                            key={step.id}
                            step={step}
                            isOpen={openStep === step.id}
                            toggle={() => toggleStep(step.id)}
                        />
                    ))}
                </div>

                <Button label={buttonLabel} width="auto" link="https://topmate.io/john_mathew" />
            </div>

            {/* Right Side - Image Placeholder */}
            <div className="w-full sm:flex-1 bg-gray-200 rounded-xl flex items-center justify-center min-h-[320px] sm:min-h-[500px]">
                <img src={image} alt="Process Illustration" className="w-fit h-fit object-contain" />
            </div>
        </section>
    );
}

function AccordionItem({ step, isOpen, toggle }) {
    const contentRef = useRef(null);

    return (
        <div className="bg-white rounded-lg">
            <button
                onClick={toggle}
                className="w-full flex text-lg leading-[100%] justify-between items-center px-4 sm:px-5 py-4 sm:py-5 text-left font-onest font-normal text-brand-navy"
            >
                <span>
                    {step.id}. {step.title}
                </span>
                <DropDownButton rotated={isOpen} />
            </button>

            <div
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
                }}
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
            >
                <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm leading-6 text-brand-navyDark">
                    {step.description}
                </p>
            </div>
        </div>
    );
}
"use client";
import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Button from "./Button";
import DropDownButton from "./DropDownButton";


export default function ProcessAccordion({ header, description, processes, buttonLabel }) {
    const [openStep, setOpenStep] = useState(1);

    const toggleStep = (id) => {
        if (openStep === id) return;
        setOpenStep(id);
    };


    return (
        <section className="bg-brand-gold h-[999px] flex gap-28 items-center px-20 justify-center">
            {/* Left Side - Accordion */}
            <div className="flex flex-col items-start w-[443px]">
                <h2 className="text-[40px] font-semibold text-brand-navy font-onest leading-[130%] tracking-[-0.67px]">
                    {header?.simple}{" "}
                    <span className="italic font-ptserif font-normal">{header?.italic}</span>
                </h2>

                <div className="mt-8 space-y-3 mb-12">
                    {processes.map((step) => (
                        <AccordionItem
                            key={step.id}
                            step={step}
                            isOpen={openStep === step.id}
                            toggle={() => toggleStep(step.id)}
                        />
                    ))}
                </div>

                <Button label={buttonLabel} width="auto" />
            </div>

            {/* Right Side - Image Placeholder */}
            <div className="flex-1 bg-gray-200 rounded-xl flex items-center justify-center max-w-[674px] h-[799px]">

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
                className="w-full flex text-lg leading-[100%] justify-between items-center px-5 py-5 text-left font-onest font-normal text-brand-navy"
            >
                <span>
                    {step.id}. {step.title}
                </span>
                {isOpen ? (
                    <DropDownButton rotated={true} />
                ) : (
                    <DropDownButton rotated={false} />
                )}
            </button>

            <div
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
                }}
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
            >
                <p className="px-5 pb-5 text-sm leading-6 text-brand-navyDark">{step.description}</p>
            </div>
        </div>
    );
}

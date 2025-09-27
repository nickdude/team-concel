"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        id: 1,
        question: "What makes Team Counsel different from traditional law firms?",
        answer:
            "We focus exclusively on startups and high-growth companies, providing flexible legal solutions that move at your speed.",
    },
    {
        id: 2,
        question: "What are your pricing models?",
        answer:
            "We offer transparent flat-fee, subscription, and fractional counsel pricing—no surprise hourly bills.",
    },
    {
        id: 3,
        question: "How do I know if this is right for me?",
        answer:
            "If you’re a founder, startup, or investor looking for proactive legal strategy instead of reactive lawyering, this is for you.",
    },
    {
        id: 4,
        question: "Which industries do you specialize in?",
        answer:
            "We work with tech, SaaS, fintech, health, consumer, and emerging markets—basically where innovation happens.",
    },
];

export default function FaqSection() {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-20 px-20 flex items-center justify-center">
            <div className="flex gap-40">
                {/* Left Side */}
                <div className="w-[374px]">
                    <h2 className="text-[40px] font-semibold text-brand-navy font-onest leading-[130%] tracking-[-0.67px]">
                        Your questions{" "}
                        <span className="italic font-normal">answered</span>
                    </h2>
                    <p className="mt-4 text-brand-navy text-base leading-[27px] font-onest">
                        Still have questions? Here are some of our most frequently asked
                        questions.
                    </p>
                </div>

                {/* Right Side */}
                <div className="space-y-4 w-[712px]">
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
        <div className="bg-brand-rose rounded-2xl max-w-[712px]">
            <button
                onClick={toggle}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-brand-navy font-normal text-xl leading-[34px]"
            >
                {faq.question}
                <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            <div
                ref={ref}
                style={{
                    maxHeight: isOpen ? ref.current?.scrollHeight + "px" : "0px",
                }}
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
            >
                <p className="px-6 pb-4 text-sm text-brand-navyAlpha leading-6">
                    {faq.answer}
                </p>
            </div>
        </div>
    );
}

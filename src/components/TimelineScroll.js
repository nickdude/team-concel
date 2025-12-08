"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const timelineItems = [
    {
        year: 2021,
        subtitle: "The Launch",
        title: "The Beginning",
        description:
            "Officially launched. Quickly became known for cutting through complexity and making deals happen faster.",
    },
    {
        year: 2022,
        subtitle: "The Rise",
        title: "The Momentum",
        description:
            "Adopted by more customers and scaled to multiple teams across organizations.",
    },
    {
        year: 2023,
        subtitle: "The Scale",
        title: "The Expansion",
        description:
            "Expanded across sectors and regions while maturing product experience.",
    },
    {
        year: 2024,
        subtitle: "The Growth",
        title: "Ecosystem Era",
        description:
            "Became a trusted partner bridging technology, business and law.",
    },
    {
        year: 2025,
        subtitle: "The Now",
        title: "The Future",
        description:
            "Supporting startups & investors, enabling over $20Bn in business deals.",
    },
];

export default function TimelineScroll() {
    const [activeIndex, setActiveIndex] = useState(3);

    const sectionRef = useRef(null);
    const cardContainerRef = useRef(null);
    const yearContainerRef = useRef(null);
    const cardRefs = useRef([]);
    const yearRefs = useRef([]);

    const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -30% 0px" });

    const scrollToCenter = (container, element) => {
        if (!container || !element) return;
        const elLeft = element.offsetLeft;
        const elWidth = element.offsetWidth;
        const cWidth = container.clientWidth;

        container.scrollTo({
            left: elLeft - cWidth / 2 + elWidth / 2,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const t = setTimeout(() => {
            scrollToCenter(cardContainerRef.current, cardRefs.current[activeIndex]);
            scrollToCenter(yearContainerRef.current, yearRefs.current[activeIndex]);
        }, 100);
        return () => clearTimeout(t);
    }, []);

    const syncScrollToIndex = (index) => {
        setActiveIndex(index);
        scrollToCenter(cardContainerRef.current, cardRefs.current[index]);
        scrollToCenter(yearContainerRef.current, yearRefs.current[index]);
    };

    let scrollTimeout = null;
    let raf = null;

    const handleCardScroll = () => {
        if (raf) cancelAnimationFrame(raf);

        raf = requestAnimationFrame(() => {
            if (scrollTimeout) clearTimeout(scrollTimeout);

            scrollTimeout = setTimeout(() => {
                const container = cardContainerRef.current;
                const center = container.scrollLeft + container.clientWidth / 2;

                let nearest = 0;
                let minDist = Infinity;

                cardRefs.current.forEach((card, index) => {
                    if (!card) return;
                    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                    const dist = Math.abs(center - cardCenter);
                    if (dist < minDist) {
                        minDist = dist;
                        nearest = index;
                    }
                });

                syncScrollToIndex(nearest);
            }, 20); // ⬅️ adjust for more/less delay
        });
    };


    return (
        <motion.section
            ref={sectionRef}
            className="w-full bg-[#F4F1EB]"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="mx-auto max-w-7xl px-4 md:px-8">


                {/* Scrollable Years */}
                <div
                    ref={yearContainerRef}
                    className="relative flex overflow-x-auto gap-12 md:gap-20 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollBehavior: "smooth" }}
                >
                    <div className="flex-shrink-0 w-[50vw]" />

                    {timelineItems.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <motion.button
                                key={item.year}
                                ref={(el) => (yearRefs.current[index] = el)}
                                className="snap-center flex flex-col items-center"
                                onClick={() => syncScrollToIndex(index)}
                            >
                                <span
                                    className={`text-[84.6px] md:text-[82px] tracking-tight font-bold transition-all ${isActive
                                        ? "text-brand-navy"
                                        : "text-slate-400 opacity-30 scale-50"
                                        }`}
                                    style={{
                                        fontFamily: '"PT Serif", serif',
                                        letterSpacing: "-2px",
                                    }}
                                >
                                    {item.year}
                                </span>

                                {/* Dot underline - animated */}
                                <div className="flex flex-col items-center">
                                    {/* Point */}
                                    <motion.div
                                        className="h-2 w-2 rounded-full mt-1"
                                        animate={{
                                            backgroundColor: isActive ? "#1B2B4B" : "rgba(0,0,0,0)",
                                            scale: isActive ? 1 : 0.2,
                                        }}
                                        transition={{ type: "spring", stiffness: 240, damping: 18 }}
                                    />

                                    {/* Line below point */}
                                    <motion.div
                                        className="w-px h-10 bg-[#1B2B4B]/60"
                                        animate={{
                                            scaleY: isActive ? 1 : 0, // line grows from 0 to full height
                                            opacity: isActive ? 1 : 0,
                                        }}
                                        style={{ transformOrigin: "top" }} // make line grow from the top
                                        transition={{ type: "spring", stiffness: 240, damping: 18 }}
                                    />
                                </div>

                            </motion.button>
                        );
                    })}

                    <div className="flex-shrink-0 w-[50vw]" />
                </div>


                {/* Scrollable Cards */}
                <div
                    ref={cardContainerRef}
                    className="relative flex overflow-x-auto gap-6 scrollbar-hide snap-x snap-mandatory pb-6"
                    onScroll={handleCardScroll}
                    style={{ scrollBehavior: "smooth" }}
                >
                    <div className="flex-shrink-0 w-[50vw]" />

                    {timelineItems.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <motion.div
                                key={item.year}
                                ref={(el) => (cardRefs.current[index] = el)}
                                className="snap-center cursor-pointer flex-shrink-0"
                                animate={{
                                    scale: isActive ? 1 : 0.86,
                                    opacity: isActive ? 1 : 0.42,
                                    y: isActive ? 0 : 24,
                                }}
                                transition={{ type: "spring", stiffness: 190, damping: 20 }}
                                onClick={() => syncScrollToIndex(index)}
                            >
                                <div className="w-[290px] sm:w-[350px] md:w-[440px] bg-white rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(31,35,60,0.18)]">

                                    <div className="relative w-full h-[200px] md:h-[250px]">
                                        <Image
                                            src="/assets/history/history.png"
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="p-6 md:p-8 text-left">
                                        <p className="text-[11px] uppercase tracking-[0.20em] text-slate-500 font-semibold mb-2">
                                            {item.subtitle}
                                        </p>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#1B2B4B] mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm md:text-base leading-relaxed text-slate-600">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}

                    <div className="flex-shrink-0 w-[50vw]" />
                </div>
            </div>
        </motion.section>
    );
}

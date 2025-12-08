"use client";
import { useEffect, useRef, useState } from "react";
import JourneyCard from "./JourneyCard";

export default function OurJourneySection({ header, description }) {
    // years to display on top
    const years = [2021, 2022, 2023, 2024, 2025];

    // journey items - map these to years (only some years may have cards)
    const journeyItems = [
        {
            year: 2021,
            image: "/assets/journey/launch.png",
            title: "The Launch",
            description:
                "Officially launched. Quickly became known for cutting through legal complexity and making deals faster.",
        },
        {
            year: 2022,
            image: "/assets/journey/team.png",
            title: "The Growth",
            description:
                "Expanded across sectors and stages. Became a trusted ecosystem partner bridging law and entrepreneurship.",
        },
        {
            year: 2023,
            image: "/assets/journey/launch.png",
            title: "The Launch",
            description:
                "Officially launched. Quickly became known for cutting through legal complexity and making deals faster.",
        },
        {
            year: 2024,
            image: "/assets/journey/team.png",
            title: "The Growth",
            description:
                "Expanded across sectors and stages. Became a trusted ecosystem partner bridging law and entrepreneurship.",
        },
        {
            year: 2025,
            image: "/assets/journey/pactsafe.png",
            title: "The Now",
            description:
                "Supporting 25+ startups, 80+ investors, and $20Bn+ in deals. Same mission — make law an enabler, not a bottleneck.",
        },
    ];

    const refs = useRef([]);
    refs.current = [];
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    const addToRefs = (el) => {
        if (el && !refs.current.includes(el)) refs.current.push(el);
    };

    const [activeYear, setActiveYear] = useState(journeyItems[0]?.year || years[0]);
    const [visibleMap, setVisibleMap] = useState({});
    const [overlayLeft, setOverlayLeft] = useState("50%");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const year = entry.target.getAttribute("data-year");
                    if (entry.isIntersecting) {
                        setActiveYear(Number(year));
                        setVisibleMap((s) => ({ ...s, [year]: true }));
                        entry.target.classList.add("in-view");
                    } else {
                        setVisibleMap((s) => ({ ...s, [year]: false }));
                        entry.target.classList.remove("in-view");
                    }
                });
            },
            {
                root: null,
                // center detection for horizontal snap container
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0.5,
            }
        );

        // observe each card's wrapper element
        refs.current.forEach((r) => {
            if (r) observer.observe(r);
        });

        return () => observer.disconnect();
    }, [journeyItems]);

    // Position the large year overlay above the active card
    useEffect(() => {
        const updateOverlay = () => {
            const idx = journeyItems.findIndex((j) => j.year === activeYear);
            if (idx !== -1 && refs.current[idx] && wrapperRef.current) {
                const card = refs.current[idx];
                const wrapper = wrapperRef.current;
                const cardRect = card.getBoundingClientRect();
                const wrapperRect = wrapper.getBoundingClientRect();
                const centerX = cardRect.left + cardRect.width / 2 - wrapperRect.left;
                setOverlayLeft(`${centerX}px`);
            } else {
                setOverlayLeft("50%");
            }
        };

        updateOverlay();
        window.addEventListener("resize", updateOverlay);
        // update on scroll of container too
        const container = containerRef.current;
        if (container) container.addEventListener("scroll", updateOverlay);

        return () => {
            window.removeEventListener("resize", updateOverlay);
            if (container) container.removeEventListener("scroll", updateOverlay);
        };
    }, [activeYear, journeyItems]);

    const handleYearClick = (year) => {
        const idx = journeyItems.findIndex((j) => j.year === year);
        if (idx !== -1 && refs.current[idx] && containerRef.current) {
            const container = containerRef.current;
            const card = refs.current[idx];
            // calculate center position
            const cardRect = card.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const scrollLeft = container.scrollLeft + (cardRect.left + cardRect.width / 2) - (containerRect.left + containerRect.width / 2);
            // smooth scroll to center the card
            container.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }
        setActiveYear(year);
    };

    return (
        <div className="bg-brand-gray flex flex-col justify-center items-center pt-10">
            <div className="w-full flex flex-col justify-center mb-16 px-4 sm:px-8 md:px-36 2xl:px-44">
                <h1 className="text-left font-onest text-[2.13rem] sm:text-3xl md:text-[2.4rem] font-semibold text-navy leading-[130%] tracking-[-0.67px]">
                    {header?.simple} <span className="text-brand-navy font-ptserif font-normal italic">{header?.italic}</span>
                </h1>
                <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 sm:w-[80%] md:w-[55%]">{description}</p>

                {/* Year navigation */}
                <div className="flex items-center justify-center gap-8 mt-8">
                    {years.map((y) => {
                        const hasCard = journeyItems.some((j) => j.year === y);
                        const isActive = activeYear === y;
                        return (
                            <button
                                key={y}
                                onClick={() => handleYearClick(y)}
                                className={`text-sm font-semibold px-2 py-1 transition-colors duration-200 ${isActive ? "text-[#1E3A5F] text-xl" : hasCard ? "text-gray-400 hover:text-[#1E3A5F]" : "text-gray-300"}`}
                                aria-pressed={isActive}
                                aria-disabled={!hasCard}
                            >
                                {y}
                            </button>
                        );
                    })}
                </div>

                {/* Cards row (scrollable on small screens) */}
                <div className="flex justify-center mt-10">
                    <div ref={wrapperRef} className="relative w-full max-w-[1200px]">
                        {/* Large active year overlay (positioned above active card) */}
                        <div style={{ left: overlayLeft }} className="absolute -top-12 pointer-events-none transform -translate-x-1/2">
                            <div className="text-[4.5rem] sm:text-6xl md:text-7xl font-bold text-[#1E3A5F] leading-none">{activeYear}</div>
                        </div>

                        <div ref={containerRef} className="flex gap-10 overflow-x-auto py-10 px-2 snap-x snap-mandatory scrollbar-hide">
                            {journeyItems.map((item, index) => (
                                <div key={item.year} data-year={item.year} ref={addToRefs} className="snap-center" style={{ scrollSnapAlign: "center" }}>
                                    <JourneyCard image={item.image} title={item.title} description={item.description} active={activeYear === item.year} visible={!!visibleMap[item.year]} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
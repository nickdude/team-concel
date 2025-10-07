"use client";
import { useRouter } from "next/navigation";

export default function Button({ label, width, link, own = false }) {
    const router = useRouter();

    const handleClick = () => {
        own ? router.push(link) : window.open(link, "_blank");
    };
    return (
        <button onClick={handleClick} className={`w-${width} bg-brand-blue font-onest text-white px-6 py-3 rounded-full font-medium hover:bg-brand-deepBlue transition flex justify-center items-center space-x-2`}>
            <span>{label}</span>
            <img src="/assets/icons/right-arrow.svg" alt="Right Arrow" className="h-[14px]" />
        </button>
    )
}
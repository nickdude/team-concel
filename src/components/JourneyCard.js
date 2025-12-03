export default function JourneyCard({ image, title, description, className, active }) {
    return (
        <div
            className={`bg-white rounded-3xl overflow-hidden w-[380px] transition-all duration-300 ${active
                ? "shadow-[0_14px_40px_rgba(0,0,0,0.12)] border-t-4 border-[#1E3A5F]"
                : "shadow-[0_8px_20px_rgba(0,0,0,0.05)] opacity-70"
                }`}
        >
            <div
                className={`bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden w-[380px] ${className}`}
            >
                {/* Image Section */}
                <div className="h-[240px] w-full overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1E3A5F]">{title}</h3>
                    <p className="mt-3 text-[#6B7A8F] leading-relaxed text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </div >
    );
}

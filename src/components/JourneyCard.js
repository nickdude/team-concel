export default function JourneyCard({ image, title, description, className, active, visible }) {
    return (
        <div className={`relative`}>
            {/* pointer/connector above active card */}
            {active && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-6 flex flex-col items-center">
                    <div className="w-1 h-6 bg-[#1E3A5F] rounded" />
                    <div className="w-3 h-3 bg-[#1E3A5F] rounded-full mt-1" />
                </div>
            )}

            <div
                className={`bg-white rounded-3xl overflow-hidden w-[360px] transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    } ${active ? "shadow-[0_22px_60px_rgba(0,0,0,0.18)] scale-[1.03] border-t-4 border-[#1E3A5F]" : "shadow-[0_8px_20px_rgba(0,0,0,0.05)]"}`}
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
        </div>
    );
}

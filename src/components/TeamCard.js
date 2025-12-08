"use client";
export default function TeamCard({ image, label, description, notes, linkedin }) {
    return (
        <div className="relative w-80 sm:w-full bg-white rounded-2xl overflow-hidden group cursor-pointer">

            {/* IMAGE FIXED HEIGHT */}
            <div className="relative w-full h-96 overflow-hidden">
                <img
                    src={image}
                    alt="Team Member"
                    className="w-full h-full transition-all duration-300 group-hover:scale-105"
                />

                {/* Hover text overlay only on image */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-md text-white p-6 opacity-0 transition-all duration-300 group-hover:opacity-100 flex items-center z-10">
                    <p className="text-sm font-inter leading-6">
                        {notes}
                    </p>
                </div>
            </div>

            {/* STATIC INFO AREA */}
            <div className="relative z-20 p-4 bg-white">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold font-inter text-navy leading-[34px]">
                        {label}
                    </h2>

                    {/* Make LinkedIn Icon Above Overlay */}
                    <img
                        src="/assets/icons/linkedin.svg"
                        alt="LinkedIn"
                        onClick={() => {
                            if (linkedin) {
                                window.open(linkedin, '_blank');
                            }
                        }}
                        className="w-6 h-6 hover:opacity-80 transition cursor-pointer z-30"
                    />
                </div>

                <p className="font-ptserif text-sm text-navy italic mt-1 leading-6">
                    {description}
                </p>
            </div>
        </div>
    );
}



export default function OurImpactSection({ header, description }) {
    return (
        <div className=" bg-brand-gray flex flex-col justify-center items-center pt-10">
            <div className='w-full flex flex-col justify-center mb-16 px-4 sm:px-8 md:px-36 2xl:px-44'>
                <h1 className='text-left font-onest text-[2.13rem] sm:text-3xl md:text-[2.4rem] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>{header?.simple} <span className='text-brand-navy font-ptserif font-normal italic'>{header?.italic}</span></h1>
                <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 sm:w-[80%] md:w-[55%]">
                    {description}
                </p>
                <div className="bg-brand-grayish w-full h-[69px] rounded-xl flex items-center justify-center mt-10 gap-4">
                    <img src="/assets/icons/growth.svg" alt="Impact Metrics" className="w-auto h-8" />
                    <p>Empowering early-stage startups and investors across 5 countries.</p>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 mt-10">
                    <div className="flex sm:flex-row flex-col gap-4 w-full sm:w-auto">
                        <div className="relative w-1/2 h-[573px] rounded-3xl overflow-hidden flex">
                            <img
                                src="/assets/impact/impact1.png"
                                alt="Impact 1"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                            <div className="relative text-white p-8 w-full flex flex-col justify-between">
                                <p className="text-base font-medium tracking-wider opacity-90">
                                    Startup Acceleration
                                </p>
                                <div>
                                    <h2 className="text-2xl font-onest font-semibold leading-snug">
                                        Supported 25+ founders through Seed–Series A with strategic legal and fundraising counsel.
                                    </h2>

                                    <p className="mt-4 font-onest text-sm opacity-80">
                                        Supported 25+ founders from Seed to Series A.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-1/2 h-[573px] rounded-3xl overflow-hidden flex bg-[#1E3B73]">

                            {/* Content Wrapper */}
                            <div className="relative text-white p-8 w-full flex flex-col justify-between">

                                {/* TOP SECTION */}
                                <div className="flex justify-between items-start">
                                    <p className="text-base font-medium tracking-wider opacity-90">
                                        Global Deals
                                    </p>

                                    {/* ICON */}
                                    <img
                                        src="/assets/icons/globe.svg"
                                        alt="icon"
                                        className="w-40 h-40 opacity-80"
                                    />
                                </div>

                                {/* BOTTOM SECTION */}
                                <div>
                                    <h2 className="text-2xl font-onest font-semibold leading-snug max-w-[400px]">
                                        We helped startups raise over USD 20Bn in deal value <span className="opacity-70">across 7 jurisdictions.</span>
                                    </h2>

                                    <p className="mt-4 font-onest text-sm opacity-80">
                                        20Bn+ deal value | 7 jurisdictions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded-3xl bg-white p-4 flex gap-10 items-center">

                        {/* IMAGE */}
                        <div className="w-1/2 h-[450px] rounded-2xl overflow-hidden">
                            <img
                                src="/assets/impact-image.png"
                                alt="Legal"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* TEXT CONTENT */}
                        <div className="w-1/2 flex flex-col justify-between h-full">

                            {/* Top label */}
                            <p className="text-brand-navy text-base font-medium mb-6 tracking-wide">
                                Simple Law
                            </p>

                            {/* Main heading */}
                            <h2 className="text-[32px] leading-snug font-semibold text-brand-navy max-w-[500px]">
                                We make startup law fast, clean, and practical —
                                <span className="text-[#1B487880] font-normal"> so you can stay focused on building a company that wins.</span>
                            </h2>

                            {/* Sub text */}
                            <p className="mt-6 text-[#8DA3BB] text-[16px] leading-relaxed font-normal max-w-[540px]">
                                Term sheets to ESOPs, we turn legal complexity into clean, actionable guidance for builders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
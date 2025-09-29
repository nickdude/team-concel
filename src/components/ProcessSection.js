import Hr from "./Hr";

export default function ProcessSection({ header, steps, image }) {
    return (
        <section className="py-16 flex flex-col items-center ">
            <div className="flex items-center justify-between mb-20 w-full px-36 2xl:px-44">
                {/* Left Side */}
                <div className="max-w-sm">
                    <h2 className="text-4xl font-onest font-semibold text-brand-navy leading-[130%] tracking-[-0.67px]">
                        {header?.simple} <br />
                        <span className="italic font-ptserif font-normal text-brand-navy">
                            {header?.italic}
                        </span>
                    </h2>

                    <div className="mt-10 space-y-1">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex items-start space-x-6">

                                <div className="flex flex-col items-center">
                                    <span className="text-brand-navy font-semibold text-xl">
                                        {step.number}
                                    </span>
                                    {idx !== steps.length - 1 && (
                                        <span className="w-[2px] h-16 bg-brand-slate"></span>
                                    )}
                                </div>

                                <div>
                                    <h3 className="font-onest font-semibold text-brand-navy text-[22px] leading-[100%] tracking-[-0.3px]">
                                        {step.title}
                                    </h3>
                                    <p className="text-brand-navyAlpha font-onest mt-1 text-base leading-6 ">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative w-[649px] h-[479px] rounded-lg overflow-hidden">
                    <img src="/assets/process.svg" alt="Process" className="object-cover w-full h-full" />
                </div>
            </div>
            <Hr />
        </section>
    );
}

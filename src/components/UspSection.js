import Button from "./Button";

const points = [
    "BigLaw expertise without the high-end pricing",
    "In-house efficiency with external flexibility",
    "Scalable legal support built for growth",
    "Trusted legal partners, not just service providers",
];

export default function UspSection() {
    return (
        <section className="py-16 px-28 flex justify-center">
            <div className="flex gap-44 items-center justify-center">
                {/* Left Side */}
                <div className="max-w-md">
                    <h2 className="text-4xl font-onest font-semibold text-brand-navy leading-[130%] tracking-[-0.67px]">
                        The Fix We Bring <br />
                    </h2>
                    <p className="text-base text-brand-navyAlpha leading-6 font-onest mt-4">
                        From fundraising docs to cross-border compliance, we keep you investor-ready and deal-ready. Legal that moves at the speed of your big idea.
                    </p>
                    <div className="space-y-3 my-10">
                        {points.map((point, idx) => (
                            <div key={idx} className="flex items-center space-x-4">
                                <img src="/assets/icons/check.svg" alt="check" className="w-4 h-4" />
                                <p className="text-base text-brand-navy font-onest leading-[27px] m-0">{point}</p>
                            </div>
                        ))}
                    </div>
                    <Button label="Book My Strategy Call" width="auto" />
                </div>

                {/* Right Side */}
                <div className="w-[674px] h-[575px] rounded-xl bg-white">
                    <img src="/assets/usp.svg" alt="USP 1" className="object-cover w-full h-full rounded-xl" />
                </div>
            </div>
        </section>
    );
}   
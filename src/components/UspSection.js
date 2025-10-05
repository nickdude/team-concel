import Button from "./Button";

export default function UspSection({ header, description, points, uspImage }) {
    return (
        <section className="py-12 sm:py-16 md:py-20 flex justify-center">
            <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-36 2xl:px-44 w-full gap-10 md:gap-20">

                {/* Left Side */}
                <div className="w-full md:max-w-md text-left md:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-onest font-semibold text-brand-navy leading-[130%] tracking-[-0.67px]">
                        {header?.simple} <br /><span className="text-navyAlpha font-ptserif font-normal italic">{header?.italic}</span>
                    </h2>
                    <p className="text-sm sm:text-base text-brand-navyAlpha leading-6 font-onest mt-4">
                        {description}
                    </p>

                    <div className="space-y-3 my-8 sm:my-10">
                        {points.map((point, idx) => (
                            <div key={idx} className="flex items-left space-x-3 sm:space-x-4 justify-start">
                                <img src="/assets/icons/check.svg" alt="check" className="w-4 h-4" />
                                <p className="text-sm sm:text-base text-brand-navy font-onest leading-[27px] m-0">{point}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center md:justify-start">
                        <Button label="Book My Strategy Call" width="auto" />
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-[674px] h-auto max-h-[575px] rounded-xl bg-white overflow-hidden">
                    <img
                        src={uspImage?.src}
                        alt={uspImage?.alt}
                        className="object-cover w-full h-full rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
}
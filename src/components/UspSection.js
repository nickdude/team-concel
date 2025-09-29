import Button from "./Button";

export default function UspSection({ header, description, points, uspImage }) {
    return (
        <section className="py-16 flex justify-center">
            <div className="flex items-center justify-between px-36 2xl:px-44 w-full">
                {/* Left Side */}
                <div className="max-w-md">
                    <h2 className="text-4xl font-onest font-semibold text-brand-navy leading-[130%] tracking-[-0.67px]">
                        {header?.simple} <br />
                    </h2>
                    <p className="text-base text-brand-navyAlpha leading-6 font-onest mt-4">
                        {description}
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
                    <img src={uspImage?.src} alt={uspImage?.alt} className="object-cover w-full h-full rounded-xl" />
                </div>
            </div>
        </section>
    );
}   
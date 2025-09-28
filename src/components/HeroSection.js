import Button from "./Button";
import Label from "./Label";

export default function HeroSection({ label, header, description, logos, tag, subTag, buttonLabel }) {

    return (
        <section className="flex flex-col items-center justify-center gap-12">
            <div className="flex items-center justify-center gap-44">
                <div className="flex flex-col items-left w-[380px]">
                    <Label text={label} />
                    <h1 className='text-left font-onest text-5xl font-semibold text-navy leading-[125%] tracking-[-1px] mt-3'>{header?.simple} <span className='text-navyAlpha font-ptserif font-normal italic'>{header?.italic}</span></h1>
                    <p className="text-base text-brand-deepBlue leading-[27px] font-onest mb-20 mt-5">{description}</p>
                    <div className="flex flex-col items-center gap-6 w-fit">
                        <Button label={buttonLabel} width="fit" />
                        <p className="font-onest font-medium text-[15px] leading-6 underline text-brand-blue">{tag}</p>
                    </div>
                </div>
                <div className="h-[729px]">
                    <img src="/assets/hero.svg" alt="Hero Background" className="h-[729px] object-cover" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10 mb-4">
                <p className="font-semibold text-[13px] leading-7 tracking-[1px]">{subTag}</p>
                <div className="relative w-full overflow-hidden  pt-6">
                    <div className="flex animate-scrollX gap-20">
                        {/* First batch */}
                        {logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-8 object-contain"
                            />
                        ))}
                        {/* Duplicate batch for seamless loop */}
                        {logos.map((logo, index) => (
                            <img
                                key={`dup-${index}`}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-8 object-contain"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}

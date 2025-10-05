import Button from "./Button";
import Hr from "./Hr";
import Label from "./Label";

export default function HeroSection({ label, header, description, logos, tag, subTag, buttonLabel }) {
    return (
        <section className="flex flex-col items-center justify-center gap-8 sm:gap-12 py-10 md:py-0">

            {/* Hero Content */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 sm:px-8 md:px-28 2xl:px-56 h-auto md:h-[90vh] gap-10 md:gap-20">

                {/* Left Side (Text) */}
                <div className="flex flex-col w-full md:w-[380px] text-left">
                    <Label text={label} />
                    <h1 className='text-[2.13rem] sm:text-3xl md:text-5xl font-onest font-semibold text-navy leading-[125%] tracking-[-1px] mt-3 text-left'>
                        {header?.simple}{" "}
                        <span className='text-navyAlpha font-ptserif font-normal italic'>
                            {header?.italic}
                        </span>
                    </h1>
                    <p className="text-base sm:text-base md:text-base text-brand-deepBlue leading-[27px] font-onest mb-8 mt-4">
                        {description}
                    </p>
                    <div className="flex flex-col items-center md:items-start gap-4 sm:gap-6 w-full md:w-fit lg:w-fit 2xl:w-fit mx-auto md:mx-0">
                        <Button label={buttonLabel} width="full" />
                        <p className="font-onest font-medium text-[13px] sm:text-[15px] leading-6 underline text-brand-blue">
                            {tag}
                        </p>
                    </div>
                </div>

                {/* Right Side (Image) */}
                <div className="w-full md:w-auto h-60 sm:h-80 md:h-full">
                    <img src="/assets/hero.svg" alt="Hero Background" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>

            {/* Logos Scroll */}
            <div className="flex flex-col items-center justify-center mt-6 mb-4 w-full">
                <p className="font-semibold text-[12px] sm:text-[13px] leading-6 tracking-[1px] mb-4">{subTag}</p>
                <div className="relative w-full overflow-x-auto py-2">
                    <div className="flex animate-scrollX gap-5 md:gap-20">
                        {logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-6 sm:h-8 object-contain"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Hr />
        </section>
    );
}
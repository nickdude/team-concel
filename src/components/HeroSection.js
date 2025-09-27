import Button from "./Button";
import Label from "./Label";

export default function HeroSection() {
    const logos = [
        {
            "src": "/assets/logos/logo1.svg",
            "alt": "Logo 1"
        },
        {
            "src": "/assets/logos/logo2.svg",
            "alt": "Logo 2"
        },
        {
            "src": "/assets/logos/logo3.svg",
            "alt": "Logo 3"
        },
        {
            "src": "/assets/logos/logo4.svg",
            "alt": "Logo 4"
        },
        {
            "src": "/assets/logos/logo5.svg",
            "alt": "Logo 5"
        },
        {
            "src": "/assets/logos/logo6.svg",
            "alt": "Logo 6"
        },
        {
            "src": "/assets/logos/logo7.svg",
            "alt": "Logo 7"
        },
        {
            "src": "/assets/logos/logo8.svg",
            "alt": "Logo 8"
        }
    ]

    return (
        <section className="flex flex-col items-center justify-center gap-12">
            <div className="flex items-center justify-center gap-44">
                <div className="flex flex-col items-left w-[380px]">
                    <Label text="Startup-First Legal Solutions" />
                    <h1 className='text-left font-onest text-5xl font-semibold text-navy leading-[125%] tracking-[-1px] mt-3'>Legal that moves at the speed of <span className='text-navyAlpha font-ptserif font-normal italic'>Your Big Idea.</span></h1>
                    <p className="text-base text-brand-deepBlue leading-[27px] font-onest mb-20 mt-5">Cut through legal complexity with a startup-native approach that’s fast, compliant, and built for scale. </p>
                    <div className="flex flex-col items-center gap-6 w-fit">
                        <Button label="Book My Strategy Call" width="fit" />
                        <p className="font-onest font-medium text-[15px] leading-6 underline text-brand-blue">Talk to a Legal Strategist</p>
                    </div>
                </div>
                <div className="h-[729px]">
                    <img src="/assets/hero.svg" alt="Hero Background" className="h-[729px] object-cover" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10 mb-4">
                <p className="font-semibold text-[13px] leading-7 tracking-[1px]">Trusted by founders from Seed to Series A</p>
                <div className="relative w-full overflow-hidden  pt-6">
                    <div className="flex animate-scrollX gap-20 w-max">
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

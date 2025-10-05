import Button from "./Button";

export default function BioSection({ header, description, image, funFact, buttonLabel }) {
    return (
        <section className="bg-brand-gold py-12 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-8 md:px-36 2xl:px-44 gap-8 sm:gap-20">

            {/* Left Side */}
            <div className="flex flex-col w-full sm:w-1/3 justify-between">
                <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-brand-navy font-onest leading-[130%] tracking-[-0.67px]">
                    {header?.simple}{" "}
                    <span className="italic font-ptserif font-normal">{header?.italic}</span>
                </h2>

                <div className="mt-6 space-y-3 mb-8">
                    <p className="text-base sm:text-base text-brand-navy leading-[27px] font-onest">
                        {description}
                    </p>
                    <p className="text-base sm:text-base text-brand-navy leading-[27px] font-onest">
                        <span className="font-bold">Fun Fact:</span> {funFact}
                    </p>
                </div>

                <Button label={buttonLabel} width="auto" />
            </div>

            {/* Right Side */}
            <div className="flex-1 bg-gray-200 rounded-xl flex items-center justify-center max-w-[674px] h-[80vh]">
                <img src={image} alt="Bio Image" className="w-full h-auto rounded-xl" />
            </div>
        </section>
    );
}
import Button from "./Button";

export default function BioSection({ header, description, image, funFact, buttonLabel }) {

    return (
        <section className="bg-brand-gold py-20 flex items-center px-36 2xl:px-44 justify-between">
            {/* Left Side - Accordion */}
            <div className="flex flex-col items-start w-1/3 justify-between">
                <h2 className="text-[40px] font-semibold text-brand-navy font-onest leading-[130%] tracking-[-0.67px]">
                    {header?.simple}{" "}
                    <span className="italic font-ptserif font-normal">{header?.italic}</span>
                </h2>

                <div className="mt-8 space-y-3 mb-12">
                    <p className="mt-4 text-brand-navy text-base leading-[27px] font-onest">
                        {description}
                    </p>
                    <p className="mt-4 text-brand-navy text-base leading-[27px] font-onest">
                        <span className="font-bold">Fun Fact:</span> {funFact}
                    </p>
                </div>

                <Button label={buttonLabel} width="auto" />
            </div>

            {/* Right Side - Image Placeholder */}
            <div className="flex-1 bg-gray-200 rounded-xl flex items-center justify-center max-w-[674px] h-[80vh]">
                <img src={image} alt="Bio Image" className="w-full h-auto rounded-xl" />
            </div>
        </section>
    );
}

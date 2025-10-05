import Button from "./Button";

export default function StrategyCall({ header, description, buttonLabel }) {
    return (
        <section className="flex flex-col items-center bg-brand-grayish py-16 sm:py-20 md:py-28 justify-center w-full px-6 sm:px-12 md:px-0">
            <h1 className="text-center font-onest text-2xl sm:text-3xl md:text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px] md:px-60">
                {header?.simple}{" "}
                <span className="text-navyAlpha font-ptserif font-normal italic">
                    {header?.italic}
                </span>{" "}
                {header?.againSimple}
            </h1>

            <p className="text-sm sm:text-base text-brand-navyAlpha leading-6 font-onest mt-3 mb-8 sm:mb-11 text-center max-w-2xl">
                {description}
            </p>

            <div className="flex flex-col items-center md:items-start gap-4 sm:gap-6 w-full md:w-fit lg:w-fit 2xl:w-fit mx-auto md:mx-0">
                <Button label={buttonLabel} width="full" />
            </div>
        </section>
    );
}
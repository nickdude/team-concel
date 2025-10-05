import Button from "./Button";
import Label from "./Label";

export default function SubHeroSection({ label, header, description, buttonLabel }) {
    return (
        <section className="bg-brand-navy py-16 sm:py-24 px-4 sm:px-8 md:px-32 flex flex-col justify-center items-center h-auto">
            <Label text={label} />

            <h1 className='text-center font-onest text-[2.13rem] sm:text-3xl md:text-4xl font-semibold text-white leading-[130%] tracking-[-0.67px] mt-6 w-full sm:w-4/5 md:w-3/5'>
                {header?.simple}
                {/* <br /> */}
                <span className='font-ptserif font-normal italic'>
                    {header?.italic}
                </span>
            </h1>

            <p className="font-onest text-white font-normal text-sm sm:text-base leading-[27px] mt-5 mb-8 w-full sm:w-4/5 md:w-[55%] text-center">
                {description}
            </p>

            <Button label={buttonLabel} width="fit" />
        </section>
    );
}
import Button from "./Button";

export default function StrategyCall() {
    return (
        <section className="flex flex-col items-center bg-brand-grayish py-28 justify-center w-full">
            <h1 className='text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px] px-20'>Complete Legal solutions for <span className='text-navyAlpha font-ptserif font-normal italic'> Emerging Companies</span></h1>
            <p className="text-base text-brand-navyAlpha leading-6 font-onest mb-11 mt-2">We do the heavy lifting in handling legal complexities, compliances, privacy, governance, and  scale.</p>
            <Button label="Book My Strategy Call" width="auto" />
        </section>
    )
}   
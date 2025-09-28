import Button from "./Button";

export default function StrategyCall({ header, description, buttonLabel }) {
    return (
        <section className="flex flex-col items-center bg-brand-grayish py-28 justify-center w-full">
            <h1 className='text-center font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px] px-60'>{header?.simple} <span className='text-navyAlpha font-ptserif font-normal italic'>{header?.italic}</span> {header?.againSimple}</h1>
            <p className="text-base text-brand-navyAlpha leading-6 font-onest mb-11 mt-2">{description}</p>
            <Button label={buttonLabel} width="auto" />
        </section>
    )
}   
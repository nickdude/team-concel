import Button from "./Button";
import CountCard from "./CountCard";

export default function CountSection({ header, description, counts }) {
    return (
        <section className="bg-brand-gold py-24 px-32 2xl:px-96">
            <h1 className='text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>{header?.simple}
                <span className='text-navyAlpha font-ptserif font-normal italic'>{header?.italic}</span></h1>
            <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 w-[73%]">{description}</p>
            <div className="flex justify-between my-12 space-x-3">
                {counts?.map((count, index) => (
                    <CountCard key={index} title={count.label} value={count.number} />
                ))}
            </div>
            <Button label="Book My Strategy Call" width="auto" />
        </section>
    )
}      
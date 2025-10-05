import Button from "./Button";
import CountCard from "./CountCard";

export default function CountSection({ header, description, counts }) {
    return (
        <section className="bg-brand-gold py-16 px-4 sm:px-8 md:px-16 lg:px-36 2xl:px-44">
            <h1 className='text-left font-onest text-[2.13rem] md:text-[2.5rem] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>{header?.simple}
                <span className='text-navyAlpha font-ptserif font-normal italic'>{header?.italic}</span></h1>
            <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 md:w-[73%]">{description}</p>
            <div className="flex justify-between my-12  flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                {counts?.map((count, index) => (
                    <CountCard key={index} title={count.label} value={count.number} />
                ))}
            </div>
            <Button label="Book My Strategy Call" width="auto" />
        </section>
    )
}      
import JomboCountCard from "./JomboCountCard";

export default function JomboCountSection({ header, description, counts }) {

    return (
        <section className="py-24 px-32">
            <h1 className='text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>{header?.simple} <span className='text-navyAlpha font-ptserif font-normal italic'>{header?.italic}</span></h1>
            <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 w-[%]">{description}</p>
            <div className="flex justify-between my-12 space-x-5">
                {counts.map((count, index) => (
                    <JomboCountCard
                        key={index}
                        label={count.label}
                        value={count.value}
                        title={count.title}
                    />
                ))}
            </div>
        </section>
    )
}       
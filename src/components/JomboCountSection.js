import Hr from "./Hr";
import JomboCountCard from "./JomboCountCard";

export default function JomboCountSection({ header, description, counts }) {

    return (
        <section className="pt-10 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col justify-center mb-16 px-4 sm:px-8 md:px-36 2xl:px-44">
                <h1 className='text-left font-onest text-[2.13rem] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>{header?.simple} <span className='font-ptserif font-normal italic'>{header?.italic}</span></h1>
                <p className="font-onest text-brand-navyAlpha font-normal text-base leading-[27px] mt-3 w-[%]">{description}</p>
                <div className="grid grid-cols-2 md:flex justify-between my-12 gap-4 md:space-x-5">
                    {counts.map((count, index) => (
                        <JomboCountCard
                            key={index}
                            label={count.label}
                            value={count.value}
                            title={count.title}
                        />
                    ))}
                </div>
            </div>
            <Hr />
        </section>
    )
}       
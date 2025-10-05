import MiniCard from "./MiniCard";

export default function MiniCardSection({ header, description, cards }) {
    return (
        <div className=" bg-brand-gray flex flex-col justify-center items-center pt-10">
            <div className='w-full flex flex-col justify-center mb-16 px-36 2xl:px-44'>
                <h1 className='text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>{header?.simple} <span className='text-navyAlpha font-ptserif font-normal italic'>{header?.italic}</span></h1>
                <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 w-[55%]">
                    {description}
                </p>
                <div className='w-full flex flex-wrap justify-between py-10 '>
                    {cards?.map((card, index) => (
                        <MiniCard
                            key={index}
                            image={card.image}
                            label={card.label}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
import TeamCard from "./TeamCard";

export default function TeamCardSection({ header, description, cards }) {
    return (
        <section className=" bg-brand-gray flex flex-col justify-center items-center py-12 sm:py-16">
            <div className='w-full flex flex-col justify-center px-4 sm:px-8 md:px-36 2xl:px-44'>
                <h1 className='text-left font-onest text-[2.13rem] sm:text-3xl md:text-[2.4rem] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>{header?.simple} <span className='text-brand-navy font-ptserif font-normal italic'>{header?.italic}</span></h1>
                <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 sm:w-[80%] md:w-[55%]">
                    {description}
                </p>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-10 
                justify-items-center'>
                    {cards?.map((card, index) => (
                        <TeamCard
                            key={index}
                            image={card.image}
                            label={card.label}
                            description={card.description}
                            notes={card.notes}
                            linkedin={card.linkedin}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}
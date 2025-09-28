import Card from "./Card";

export default function CardSection({ header, cards }) {
    return (
        <div className=" bg-brand-gray flex flex-col">
            <h1 className='text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px] px-20'>{header?.simple} <span className='text-navyAlpha font-ptserif font-normal italic'>{header?.italic}</span></h1>
            <div className="flex justify-center py-20 gap-5">
                {cards?.map((card, index) => (
                    <Card key={index} label={card.label} description={card.description} image={card.image} />
                ))}
            </div>
        </div>
    )
}
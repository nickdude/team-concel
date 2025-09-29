import Card from "./Card";
import Hr from "./Hr";

export default function CardSection({ header, cards }) {
    return (
        <div className=" bg-brand-gray flex flex-col justify-center items-center pt-10">
            <div className='w-full flex flex-col justify-center mb-16 px-36 2xl:px-44'>
                <h1 className='text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>{header?.simple} <span className='text-navyAlpha font-ptserif font-normal italic'>{header?.italic}</span></h1>
                <div className='w-full flex flex-wrap justify-between py-10'>
                    {cards?.map((card, index) => (
                        <Card key={index} label={card.label} description={card.description} image={card.image} />
                    ))}
                </div>
            </div>
            <Hr />
        </div>
    )
}
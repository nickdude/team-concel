import Card from "./Card";
import Hr from "./Hr";

export default function CardSection({ header, cards, description }) {
    return (
        <div className="bg-brand-gray flex flex-col justify-center items-center pt-10">
            <div className="w-full flex flex-col justify-center mb-16 px-4 sm:px-8 md:px-20 lg:px-36 2xl:px-44">
                <h1 className="text-left font-onest text-[2.13rem] sm:text-3xl md:text-4xl font-semibold text-navy leading-[130%] tracking-[-0.67px]">
                    {header?.simple}{" "}
                    <span className="font-ptserif font-normal italic">
                        {header?.italic}
                    </span>
                </h1>
                <p className="font-onest text-brand-navyAlpha font-normal text-base leading-[27px] mt-4 ">
                    {description}
                </p>

                <div className="w-full flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-6 py-10 mt-2">
                    {cards?.map((card, index) => (
                        <Card
                            key={index}
                            label={card.label}
                            description={card.description}
                            image={card.image}
                            own={card.own}
                            link={card.link}
                        />
                    ))}
                </div>
            </div>
            <Hr />
        </div>
    );
}
import Hr from "./Hr";
import SolutionCard from "./SolutionCard";

export default function SolutionCardSection({ header, cards }) {

    return (
        <div className="bg-brand-gray flex flex-col justify-center items-center pt-10">
            <div className="w-full flex flex-col justify-center mb-16 px-4 sm:px-8 md:px-20 lg:px-36 2xl:px-44">
                <h1 className="text-left font-onest text-[2.13rem] sm:text-3xl md:text-4xl font-semibold text-navy leading-[130%] tracking-[-0.67px]">
                    {header?.simple}{" "}
                    <span className="text-navyAlpha font-ptserif font-normal italic">
                        {header?.italic}
                    </span>
                </h1>

                <div className="w-full flex flex-col md:flex-row  sm:justify-between gap-6 py-10">
                    {cards?.map((card, index) => (
                        <SolutionCard
                            key={index}
                            label={card.label}
                            description={card.description}
                            image={card.image}
                            solutions={card.solutions}
                        />
                    ))}
                </div>
            </div>
            <Hr />
        </div>
    );
}
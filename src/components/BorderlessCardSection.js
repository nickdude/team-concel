import React from 'react';
import BorderLessCard from './BorderLessCard';
import Hr from './Hr';

export default function BorderlessCardSection({ header, cards }) {
    return (
        <section className="flex flex-col items-center justify-center pt-0 md:pt-10 lg:pt-10 2xl:pt-10">
            <div className="w-full flex flex-col mb-16 px-4 sm:px-8 md:px-20 lg:px-36 2xl:px-44">

                {/* Heading */}
                <h1 className="text-left font-onest text-[2.13rem] sm:text-3xl md:text-4xl font-semibold text-navy leading-[130%] tracking-[-0.67px]">
                    {header?.simple}{' '}
                    <span className="text-navyAlpha font-ptserif font-normal italic">
                        {header?.italic}
                    </span>
                </h1>

                {/* Cards */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-6 py-8 sm:py-12">
                    {cards?.map((card, index) => (
                        <div key={index} className="w-full sm:w-[48%] lg:w-[30%]">
                            <BorderLessCard
                                image={card.image}
                                label={card.label}
                                description={card.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Hr />
        </section>
    );
}
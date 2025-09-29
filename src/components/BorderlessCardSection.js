import React from 'react'
import BorderLessCard from './BorderLessCard'
import Hr from './Hr'

export default function BorderlessCardSection({ header, cards }) {
    return (
        <section className='flex flex-col items-center justify-center pt-10 '>
            <div className='w-full flex flex-col mb-16 px-36 2xl:px-44'>
                <h1 className='text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>{header?.simple} <span className='text-navyAlpha font-ptserif font-normal italic'>{header?.italic}</span></h1>
                <div className='flex flex-wrap justify-between py-12'>
                    {cards?.map((card, index) => (
                        <BorderLessCard key={index} image={card.image} label={card.label} description={card.description} />
                    ))}
                </div>
            </div>
            <Hr />
        </section>

    )
}
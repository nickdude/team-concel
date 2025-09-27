import React from 'react'
import BorderLessCard from './BorderLessCard'

export default function BorderlessCardSection() {
    return (
        <section className='bg-brand-gray'>
            <h1 className='text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px] px-20'>Why Traditional Legal Services <span className='text-navyAlpha font-ptserif font-normal italic'>Don’t Work for Startups?</span></h1>
            <div className='w-full flex flex-wrap gap-10 justify-center py-10 px-4'>
                <BorderLessCard image="/assets/why1.svg" label="Accessibility Gap" description="High-quality legal services are often priced out of reach for early-stage startups." />
                <BorderLessCard image="/assets/why2.svg" label="Inflexible Solutions" description="Generic contracts and rigid service models don't adapt to fast-changing startup needs." />
                <BorderLessCard image="/assets/why3.svg" label="Reactive Legal Support" description="Legal help often arrives too late. Startups need legal partners from Day 1." />
            </div>
        </section>

    )
}
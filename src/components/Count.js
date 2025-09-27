import Button from "./Button";
import CountCard from "./CountCard";

export default function Count() {
    return (
        <section className="bg-brand-gold py-24 px-32">
            <h1 className='text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>India’s First Legal Practice for
                <span className='text-navyAlpha font-ptserif font-normal italic'>Emerging Companies</span></h1>
            <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 w-[73%]">We focus exclusively on startups and investors, helping them handle legal complexities around formation, compliance, privacy, governance, and scale.</p>
            <div className="flex justify-between my-12 space-x-3">
                <CountCard title="Total Deal Value" value="$100 Mn+" />
                <CountCard title="Successful Deals" value="100+" />
                <CountCard title="Satisfied Clients" value="200+" />
                <CountCard title="Countries Served" value="5+" />
            </div>
            <Button label="Book My Strategy Call" width="auto" />
        </section>
    )
}      
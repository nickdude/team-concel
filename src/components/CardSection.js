import Card from "./Card";

export default function CardSection({ label, width }) {
    return (
        <div className=" bg-brand-gray flex flex-col">
            <h1 className='text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px] px-20'>Startup-First <span className='text-navyAlpha font-ptserif font-normal italic'>Legal Solutions</span></h1>
            <div className="flex justify-center py-20 gap-5">
                <Card label="Legal Design & Transformation" description="Investor-ready, compliance-ready, customer-ready frameworks so you never get caught off-guard." image="/assets/solution1.svg" />
                <Card label="Fractional General Counsel" description="Your plug-and-play legal partner — strategy + day-to-day queries without the $200K price tag." image="/assets/solution2.svg" />
                <Card label="Contracts Solutions" description="Contracts that don’t kill deals. Standardized, fast, and startup-native." image="/assets/solution3.svg" />
            </div>
        </div>
    )
}
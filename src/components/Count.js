import Button from "./Button";

export default function Count() {
    return (
        <section className="bg-brand-gold py-24 px-32">
            <h1 className='text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>India’s First Legal Practice for
                <span className='text-navyAlpha font-ptserif font-normal italic'>Emerging Companies</span></h1>
            <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 w-[73%]">We focus exclusively on startups and investors, helping them handle legal complexities around formation, compliance, privacy, governance, and scale.</p>
            <div className="flex justify-between my-12 space-x-3">
                <div className="flex flex-col bg-brand-white w-[301px] rounded-xl p-4">
                    <h2 className="text-[40px] font-bricolage text-brand-navy leading-[48px] tracking-[-0.67px]">$100 Mn+</h2>
                    <p className="font-onest text-brand-navy font-normal text-sm leading-6 mt-1">Total Deal Value</p>
                </div>
                <div className="flex flex-col bg-brand-white w-[301px] rounded-xl p-4">
                    <h2 className="text-[40px] font-bricolage text-brand-navy leading-[48px] tracking-[-0.67px]">100+</h2>
                    <p className="font-onest text-brand-navy font-normal text-sm leading-6 mt-1">Successful Deals</p>
                </div>
                <div className="flex flex-col bg-brand-white w-[301px] rounded-xl p-4">
                    <h2 className="text-[40px] font-bricolage text-brand-navy leading-[48px] tracking-[-0.67px]">200+</h2>
                    <p className="font-onest text-brand-navy font-normal text-sm leading-6 mt-1">Satisfied Clients</p>
                </div>
                <div className="flex flex-col bg-brand-white w-[301px] rounded-xl p-4">
                    <h2 className="text-[40px] font-bricolage text-brand-navy leading-[48px] tracking-[-0.67px]">5+</h2>
                    <p className="font-onest text-brand-navy font-normal text-sm leading-6 mt-1">Countries Served</p>
                </div>
            </div>
            <Button label="Book My Strategy Call" width="auto" />
        </section>
    )
}      
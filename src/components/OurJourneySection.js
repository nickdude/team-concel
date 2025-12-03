import JourneyCard from "./JourneyCard";

export default function OurJourneySection({ header, description }) {
    return (
        <div className=" bg-brand-gray flex flex-col justify-center items-center pt-10">
            <div className='w-full flex flex-col justify-center mb-16 px-4 sm:px-8 md:px-36 2xl:px-44'>
                <h1 className='text-left font-onest text-[2.13rem] sm:text-3xl md:text-[2.4rem] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>{header?.simple} <span className='text-brand-navy font-ptserif font-normal italic'>{header?.italic}</span></h1>
                <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 sm:w-[80%] md:w-[55%]">
                    {description}
                </p>
                <div className="flex justify-center gap-10 mt-10">
                    <JourneyCard
                        image="/assets/journey/launch.png"
                        title="The Launch"
                        description="Officially launched. Quickly became known for cutting through legal complexity and making deals faster."
                        active
                    />

                    <JourneyCard
                        image="/assets/journey/team.png"
                        title="The Growth"
                        description="Expanded across sectors and stages. Became a trusted ecosystem partner bridging law and entrepreneurship."
                        active
                    />

                    <JourneyCard
                        image="/assets/journey/pactsafe.png"
                        title="The Now"
                        description="Supporting 25+ startups, 80+ investors, and $20Bn+ in deals. Same mission — make law an enabler, not a bottleneck."
                        active
                    />
                </div>


            </div>
        </div>
    )
}
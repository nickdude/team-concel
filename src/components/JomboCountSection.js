import JomboCountCard from "./JomboCountCard";

export default function JomboCountSection() {
    return (

        <section className="py-24 px-32">
            <h1 className='text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>Our Global Deal <span className='text-navyAlpha font-ptserif font-normal italic'>Footprint</span></h1>
            <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 w-[55%]">With deals spanning India, Southeast Asia, North America, and beyond, our team brings
                unparalleled expertise to every solution.</p>
            <div className="flex justify-between my-12 space-x-5">
                <JomboCountCard
                    label="Global Impact"
                    value="$100 Mn+"
                    title="In Total Deal Value"
                />

                <JomboCountCard
                    label="Proven Success"
                    value="100+"
                    title="Successful Deals"
                />

                <JomboCountCard
                    label="Trusted Worldwide"
                    value="200+"
                    title="Satisfied Clients"
                />

                <JomboCountCard
                    label="Expanding Reach"
                    value="5+"
                    title="Countries & Growing"
                />

            </div>
        </section>
    )
}       
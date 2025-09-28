import TagCard from "./TagCard";


export default function TagCardSection({ header, description, tags }) {

    return (
        <section className="py-16 px-28 flex flex-col justify-center">
            <h1 className="text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px]">
                {header?.simple}{" "}
                <span className="text-navyAlpha font-ptserif font-normal italic">
                    {header?.italic}
                </span>
            </h1>
            <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 w-[55%]">
                {description}
            </p>

            <div className="flex flex-wrap gap-5 justify-center mt-12">
                {tags.map((card, index) => (
                    <TagCard key={index} icon={card.icon} label={card.label} value={card.value} />
                ))}
            </div>
        </section>
    );
}

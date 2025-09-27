import TagCard from "./TagCard";


export default function TagCardSection() {
    const tagCardsData = [
        {
            icon: "/assets/icons/balance.svg",
            label: "Legal Frameworks",
            value: "Build the right structures for fundraising, ESOPs, cross-border ops, and scale.",
        },
        {
            icon: "/assets/icons/asterisk.svg",
            label: "Legal Processes",
            value: "Standardize the boring stuff so deals move faster and mistakes don’t pile up.",
        },
        {
            icon: "/assets/icons/note.svg",
            label: "Legal Documents",
            value: "From term sheets to shareholder agreement, drafted investor ready, founder friendly.",
        },
        {
            icon: "/assets/icons/notes.svg",
            label: "Legal Operations",
            value: "Keep track of compliance, filings, and governance without drowning in admin.",
        },
        {
            icon: "/assets/icons/contract.svg",
            label: "Legal Strategy",
            value: "Spot risks early, align with your growth roadmap, and make smarter business calls.",
        },
        {
            icon: "/assets/icons/dvr.svg",
            label: "Legal Technology",
            value: "Automate, track, and simplify with tools that replace manual drudgery.",
        },
    ];
    return (
        <section className="py-16 px-28 flex flex-col justify-center">
            <h1 className="text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px]">
                Optimize legal design for{" "}
                <span className="text-navyAlpha font-ptserif font-normal italic">
                    Startup growth
                </span>
            </h1>
            <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 w-[55%]">
                We empower your growth with smart, customized legal strategies that
                drive better deals.
            </p>

            <div className="flex flex-wrap gap-5 justify-center mt-12">
                {tagCardsData.map((card, index) => (
                    <TagCard key={index} icon={card.icon} label={card.label} value={card.value} />
                ))}
            </div>
        </section>
    );
}

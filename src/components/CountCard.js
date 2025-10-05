export default function CountCard({ title, value }) {
    return (
        <div className="flex flex-col bg-brand-white md:w-[20vw] rounded-xl p-4">
            <h2 className="text-[2.5rem] font-bricolage text-brand-navy leading-[48px] tracking-[-0.67px]">{value}</h2>
            <p className="font-onest text-brand-navy font-normal text-sm leading-6 mt-1">{title}</p>
        </div>
    );
}

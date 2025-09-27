export default function CountCard({ title, value }) {
    return (
        <div className="flex flex-col bg-brand-white w-[301px] rounded-xl p-4">
            <h2 className="text-[40px] font-bricolage text-brand-navy leading-[48px] tracking-[-0.67px]">{value}</h2>
            <p className="font-onest text-brand-navy font-normal text-sm leading-6 mt-1">{title}</p>
        </div>
    );
}

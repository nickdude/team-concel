import Label from "./Label";

export default function JomboCountCard({ label, title, value }) {
    return (
        <div className="flex flex-col bg-brand-white w-[25vw] rounded-xl p-6">
            <Label text={label} />
            <h2 className="text-[52px] font-bricolage text-brand-blue leading-[48px] tracking-[-0.67px] mt-20">{value}</h2>
            <p className="font-onest text-brand-navy font-normal text-sm leading-6 mt-6">{title}</p>
        </div>
    );
}
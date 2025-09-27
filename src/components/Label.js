export default function Label({ text }) {
    return (
        <span className="bg-brand-gold w-fit text-brand-navy font-onest text-xs leading-[14px] px-4 py-3 rounded-lg font-bold tracking-[0.5px] uppercase">
            {text}
        </span>
    );
}
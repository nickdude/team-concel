export default function DropDownButton({ rotated }) {
    return (
        <div className="bg-brand-white shadow-around p-2 rounded-xl">
            <img src="/assets/icons/dropdown-arrow.svg" alt="chevron-up" className={`w-6 h-6 ${rotated ? "rotate-180" : ""}`} />
        </div>
    );
}

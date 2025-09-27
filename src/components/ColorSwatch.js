export default function ColorSwatch({ name, hex, className }) {
    return (
        <div
            className={`h-24 w-full rounded-xl flex flex-col items-center justify-center font-semibold ${className}`}
        >
            <span>{name}</span>
            <span className="text-xs">{hex}</span>
        </div>
    );
}

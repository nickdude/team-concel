import ColorSwatch from "./ColorSwatch";

export default function ColorGrid() {
    const colors = [
        { name: "blue", hex: "#0383D0", className: "bg-brand-blue text-white" },
        { name: "navy", hex: "#1B4878", className: "bg-brand-navy text-white" },
        { name: "deepBlue", hex: "#1F558E", className: "bg-brand-deepBlue text-white" },
        { name: "white", hex: "#FFFFFF", className: "bg-brand-white text-black border" },
        { name: "navyAlpha", hex: "#1B4878B2", className: "bg-brand-navyAlpha text-white" },
        { name: "gold", hex: "#FCD183", className: "bg-brand-gold text-black" },
        { name: "beige", hex: "#EBDBCB", className: "bg-brand-beige text-black" },
        { name: "sand", hex: "#D9BCA2", className: "bg-brand-sand text-black" },
        { name: "amber", hex: "#E9AF35", className: "bg-brand-amber text-black" },
        { name: "grayish", hex: "#CDD8DD", className: "bg-brand-grayish text-black" },
    ];

    return (
        <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Brand Colors</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {colors.map((c) => (
                    <ColorSwatch key={c.name} name={c.name} hex={c.hex} className={c.className} />
                ))}
            </div>
        </section>
    );
}

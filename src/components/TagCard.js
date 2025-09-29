export default function TagCard({ icon, label, value }) {

    return (
        <div className="flex bg-brand-white w-[30%] rounded-xl p-4 max-w-[400px]">
            <img src={icon} alt="tag" className="w-10 h-10 mr-6" />
            <div className="flex flex-col">
                <h2 className="text-xl font-onest text-brand-navy leading-[34px]">{label}</h2>
                <p className="font-onest text-brand-navyAlpha font-normal text-sm leading-6 mt-1">{value}</p>
            </div>
        </div>
    );
}   
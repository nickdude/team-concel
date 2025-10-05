import Button from "./Button";

export default function SolutionCard({ label, description, image, solutions }) {
    return (
        <div className="flex flex-col items-start bg-white p-4 sm:p-6 justify-between rounded-2xl space-y-4 sm:space-y-6 shadow-md font-onest w-full sm:w-[48%] lg:w-[27.5vw]">

            {/* Header */}
            <div className="flex items-center text-brand-navy gap-2 sm:gap-3 justify-start">
                <img src={image} alt={label} className="w-8 h-8 sm:w-10 sm:h-10" />
                <h2 className="text-lg sm:text-[1.4rem] font-semibold">{label}</h2>
            </div>

            {/* Description */}
            <p className="text-brand-navyAlpha text-sm leading-6">{description}</p>

            {/* Solutions List */}
            <ul className="mt-3 sm:mt-4 space-y-2 text-base leading-6 sm:leading-7 text-brand-navy">
                {solutions?.map((solution, index) => (
                    <li key={index} className="flex items-center">
                        <img src="/assets/icons/check.svg" alt="Check" className="w-4 h-4 mr-2" />
                        <span>{solution}</span>
                    </li>
                ))}
            </ul>

            {/* Button */}
            <Button label="Secure Your Deal Today" width="full" />
        </div>
    );
}
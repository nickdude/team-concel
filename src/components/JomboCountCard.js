import Label from "./Label";

export default function JomboCountCard({ label, title, value }) {
    return (
        <div className="flex flex-col bg-brand-white w-full sm:w-[40%] md:w-[25%] rounded-xl p-4 sm:p-6 md:mb-6">
            <Label text={label} />

            {/* Value */}
            <h2 className="text-3xl sm:text-4xl md:text-[52px] font-bricolage text-brand-blue leading-[1.1] sm:leading-[48px] tracking-[-0.67px] mt-5 sm:mt-10">
                {value}
            </h2>

            {/* Title */}
            <p className="font-onest text-brand-navy font-normal text-sm sm:text-base leading-6 mt-3 sm:mt-6">
                {title}
            </p>
        </div>
    );
}
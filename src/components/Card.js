import Button from "./Button";

export default function Card({ image, label, description, link, own }) {
    return (
        <div className="flex flex-col w-full sm:w-[48%] lg:w-[31.5%] space-y-4 items-start rounded-3xl bg-white">
            {/* Image */}
            <img
                src={image}
                alt={label}
                className="w-full h-auto rounded-t-3xl object-cover"
            />

            {/* Content */}
            <div className="px-5 pt-2 pb-6 space-y-4">
                <div className="space-y-2 min-h-[14vh] 2xl:min-h-[10vh]">
                    <h1 className="font-onest font-medium text-lg sm:text-xl text-brand-navy leading-7">
                        {label}
                    </h1>
                    <p className="font-onest text-sm sm:text-base text-brand-navyAlpha leading-6">
                        {description}
                    </p>
                </div>

                <Button label="Learn More" width="full" link={link} own={own} />
            </div>
        </div>
    );
}
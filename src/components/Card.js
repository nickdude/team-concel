import Button from "./Button";

export default function Card({ image, label, description }) {
    return (
        <div className="flex flex-col w-[25vw] space-y-4 items-start rounded-3xl bg-white">
            <img src={image} alt={label} className="w-full h-auto rounded-t-3xl" />
            <div className="px-5 pt-2 pb-6 space-y-4">
                <div className="space-y-2 min-h-[14vh] 2xl:min-h-[10vh]">
                    <h1 className="font-onest font-medium text-xl text-brand-navy leading-7 ">
                        {label}
                    </h1>
                    <p className="font-onest text-sm text-brand-navyAlpha leading-6">
                        {description}
                    </p>
                </div>

                <Button label="Learn More" width="full" />
            </div>
        </div>
    )
}
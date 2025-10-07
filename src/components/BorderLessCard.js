export default function BorderLessCard({ image, label, description }) {
    return (
        <div className="flex flex-col space-y-3 md:w-[25vw] items-start">
            <img src={image} alt={label} className="w-[382px] h-auto" />
            <h1 className="font-onest font-medium text-xl text-navy leading-7">{label}</h1>
            <h1 className="font-onest text-sm text-brand-navyAlpha leading-6">{description}</h1>
        </div>
    )
}
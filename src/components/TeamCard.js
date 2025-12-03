export default function TeamCard({ image, label, description }) {
    return (
        <div className="w-full h-[487px] bg-white rounded-2xl">
            <div className="w-full rounded-t-2xl">
                <img src={image} alt="Team Member" />
            </div>
            <div>
                <div className="flex w-full items-center justify-between">
                    <h2 className="text-lg font-semibold font-inter text-navy leading-[34px] mt-4 px-4">{label}</h2>
                    <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mt-2 mx-4" />
                </div>
                <p className="font-ptserif text-sm text-navy italic font-normal leading-6 mt-1 px-4">{description}</p>
            </div>
        </div>
    );
}   
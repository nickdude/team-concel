export default function BlogCard({ description, authorImage, authorName, authorTitle, color }) {

    return (
        <div className={`flex flex-col min-w-[300px] md:min-w-[558px] space-y-0 md:space-y-8 items-start rounded-3xl bg-brand-${color} border border-brand-grayish px-6 pt-6 justify-between`}>
            <img src="/assets/icons/qoute.svg" alt="qoute" className="w-fit h-7 object-cover" />
            <p className="text-brand-darkBlue text-[15px] font-onest leading-[165%]">{description}</p>
            <div className="flex items-center space-x-4 mt-auto py-8 border-t border-brand-darkBlueAlpha w-full">
                <img src={authorImage} alt="blog" className="rounded-md w-12 object-cover" />
                <div className="flex flex-col font-onest text-[15px] leading-6 space-y-1">
                    <h1 className="font-onest text-base text-brand-darkBlue leading-5 font-semibold">{authorName}</h1>
                    <p className="font-onest text-sm text-brand-darkBlue leading-4">
                        {authorTitle}</p>
                </div>
            </div>
        </div>
    )
}
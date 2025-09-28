export default function BlogCard({ description, authorImage, authorName, authorTitle, color }) {

    return (
        <div className={`flex flex-col min-w-[474px] h-[431px] space-y-4 items-start rounded-3xl bg-brand-${color} border border-brand-sand p-6`}>
            <img src="/assets/icons/qoute.svg" alt="qoute" className="w-6 h-7 rounded-t-3xl object-cover" />
            <p className="text-brand-darkBlue text-[15px] font-onest leading-[165%]">{description}</p>
            <div className="flex items-center space-x-4 mt-auto py-10 border-t border-brand-darkBlueAlpha w-full">
                <img src={authorImage} alt="blog" className="rounded-md w-20 object-cover" />
                <div className="flex flex-col font-onest text-[15px] leading-6 space-y-2">
                    <h1 className="font-onest text-base text-brand-darkBlue leading-5 font-semibold">{authorName}</h1>
                    <p className="font-onest text-sm text-brand-darkBlue leading-4">
                        {authorTitle}</p>
                </div>
            </div>
        </div>
    )
}
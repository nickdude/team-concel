import BlogCard from "./BlogCard";

export default function BlogCardSection() {
    return (
        <section className='bg-brand-gray p-10 space-y-8'>
            <h1 className='text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px] px-20'>What Leading Founders and Investors Are <br /><span className='text-navyAlpha font-ptserif font-normal italic'>Saying About Team Counsel</span></h1>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </section>
    );
}

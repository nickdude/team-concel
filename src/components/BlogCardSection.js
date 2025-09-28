import BlogCard from "./BlogCard";

export default function BlogCardSection({ header, blogs }) {
    return (
        <section className='bg-brand-gray p-10 space-y-8'>
            <h1 className='text-left font-onest text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px] px-20'>{header?.simple} <br /><span className='text-navyAlpha font-ptserif font-normal italic'>{header?.italic}</span></h1>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                {blogs?.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                ))}
            </div>
        </section>
    );
}

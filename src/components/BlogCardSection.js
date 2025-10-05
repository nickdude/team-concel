import BlogCard from "./BlogCard";

export default function BlogCardSection({ header, blogs }) {
    return (
        <section className='bg-brand-gray space-y-6 sm:space-y-8 py-12 sm:py-16 md:py-20'>
            <h1 className='text-left font-onest text-[2.5rem] font-semibold text-navy leading-[130%] tracking-[-0.67px] px-6 sm:px-12 md:px-36 2xl:px-44'>{header?.simple} <br /><span className='text-navyAlpha font-ptserif font-normal italic'>{header?.italic}</span></h1>
            <div className="p-10 flex space-x-4 overflow-x-auto scrollbar-hide">
                {blogs?.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                ))}
            </div>
        </section>
    );
}

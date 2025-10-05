// import MiniCard from "./MiniCard";

// export default function MiniCardSection({ header, description, cards }) {
//     return (
//         <div className="bg-brand-gray flex flex-col justify-center items-center pt-10">
//             <div className='w-full flex flex-col justify-center mb-16 px-4 sm:px-8 md:px-36 2xl:px-44'>

//                 {/* Header */}
//                 <h1 className='text-left font-onest text-2xl sm:text-3xl md:text-[40px] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>
//                     {header?.simple}{" "}
//                     <span className='text-navyAlpha font-ptserif font-normal italic'>{header?.italic}</span>
//                 </h1>

//                 {/* Description */}
//                 <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 w-full sm:w-[80%] md:w-[55%]">
//                     {description}
//                 </p>

//                 {/* Cards */}
//                 <div className='w-full flex flex-wrap justify-between py-10 gap-4'>
//                     {cards?.map((card, index) => (
//                         <div key={index} className="w-full sm:w-[48%] lg:w-[30%]">
//                             <MiniCard
//                                 image={card.image}
//                                 label={card.label}
//                                 description={card.description}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }


import MiniCard from "./MiniCard";

export default function MiniCardSection({ header, description, cards }) {
    return (
        <div className=" bg-brand-gray flex flex-col justify-center items-center pt-10">
            <div className='w-full flex flex-col justify-center mb-16 px-4 sm:px-8 md:px-36 2xl:px-44'>
                <h1 className='text-left font-onest text-[2.13rem] sm:text-3xl md:text-[2.4rem] font-semibold text-navy leading-[130%] tracking-[-0.67px]'>{header?.simple} <span className='text-navyAlpha font-ptserif font-normal italic'>{header?.italic}</span></h1>
                <p className="font-onest text-brand-navy font-normal text-base leading-[27px] mt-3 sm:w-[80%] md:w-[55%]">
                    {description}
                </p>
                <div className='w-full flex flex-wrap justify-between py-10 gap-4'>
                    {cards?.map((card, index) => (
                        <MiniCard
                            key={index}
                            image={card.image}
                            label={card.label}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
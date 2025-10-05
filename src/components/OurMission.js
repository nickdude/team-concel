import Button from "./Button";
import Hr from "./Hr";

export default function OurMission({ header, points, description, image, buttonLabel }) {
    return (
        <section className="py-12 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-8 md:px-36 2xl:px-44 gap-8 sm:gap-20">

            {/* Left Side */}
            <div className="flex flex-col w-full sm:w-1/3 justify-between">
                <h2 className="text-[2.13rem] sm:text-3xl md:text-[40px] font-semibold text-brand-navy font-onest leading-[130%] tracking-[-0.67px]">
                    {header?.simple}{" "}
                    <span className="italic font-ptserif font-normal">{header?.italic}</span>
                </h2>

                <div className="mt-6 space-y-3 mb-8">
                    <p className="text-base text-brand-navy leading-[27px] font-onest">
                        {description}
                    </p>

                    {points && points.length > 0 && (
                        <ul className="list-inside mt-4 space-y-2">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-start">
                                    <img src="/assets/icons/check.svg" alt="Checkmark" className="inline-block w-4 h-4 mr-2 mt-1" />
                                    <li className="text-brand-navy text-base leading-[27px] font-onest">{point}</li>
                                </div>
                            ))}
                        </ul>
                    )}
                </div>

                <Button label={buttonLabel} width="auto" />
            </div>

            {/* Right Side */}
            <div className="w-full sm:flex-1 bg-gray-200 rounded-xl flex items-center justify-center h-auto">
                <img src={image} alt="Mission Image" className="w-full h-auto object-cover rounded-xl" />
            </div>
        </section>
    );
}


// import Button from "./Button";

// export default function OurMission({ header, points, description, image, buttonLabel }) {
//     return (
//         <section className="py-20 flex items-center px-36 2xl:px-44 justify-between">
//             {/* Left Side - Accordion */}
//             <div className="flex flex-col items-start w-1/3 justify-between">
//                 <h2 className="text-[40px] font-semibold text-brand-navy font-onest leading-[130%] tracking-[-0.67px]">
//                     {header?.simple}{" "}
//                     <span className="italic font-ptserif font-normal">{header?.italic}</span>
//                 </h2>

//                 <div className="mt-8 space-y-3 mb-12">
//                     <p className="mt-4 text-brand-navy text-base leading-[27px] font-onest">
//                         {description}
//                     </p>
//                     {points && points.length > 0 && (
//                         <ul className="list-inside mt-4 space-y-2">
//                             {points.map((point, index) => (<div key={index} className="flex items-start justify-center">
//                                 <img src="/assets/icons/check.svg" alt="Checkmark" className="inline-block w-4 h-4 mr-2 mt-1" />
//                                 <li key={index} className="text-brand-navy text-base leading-[27px] font-onest">
//                                     {point}
//                                 </li>
//                             </div>
//                             ))}
//                         </ul>
//                     )}
//                 </div>

//                 <Button label={buttonLabel} width="auto" />
//             </div>

//             {/* Right Side - Image Placeholder */}
//             <div className="flex-1 bg-gray-200 rounded-xl flex items-center justify-center max-w-[674px] h-[80vh]">
//                 <img src={image} alt="Bio Image" className="w-full h-full object-cover rounded-xl" />
//             </div>
//         </section>
//     );
// }

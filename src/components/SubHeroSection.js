import Button from "./Button";
import Label from "./Label";

export default function SubHeroSection({ label, header, description, buttonLabel }) {
    return (
        <section className="bg-brand-navy h-[628px] py-24 px-32 flex flex-col justify-center items-center">
            <Label text={label} />
            <h1 className='text-center font-onest text-[40px] font-semibold text-white leading-[130%] tracking-[-0.67px] mt-6 w-3/5'>{header?.simple}<br /><span className='font-ptserif font-normal italic'>{header?.italic}</span></h1>
            <p className="font-onest text-brand-white font-normal text-base leading-[27px] mt-5 mb-12 w-[55%] text-center">{description}</p>
            <Button label={buttonLabel} width="fit" />
        </section>
    )
}   
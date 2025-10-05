import Link from "next/link";
import siteData from "@/data/siteData";

export default function Footer() {
    const { about, contacts, mainLinks, social, copyright } = siteData?.footer;

    return (
        <footer className="bg-brand-navy text-white py-12">
            <div className="max-w-full mx-auto flex flex-col justify-between px-6 sm:px-12 md:px-36 2xl:px-44">

                {/* Logo */}
                <div className="mb-8 flex justify-start md:justify-start">
                    <img src="/assets/logo-white.svg" alt="Logo" className="h-12" />
                </div>

                {/* Grid Sections */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-16 md:gap-36 w-full">
                    {/* About */}
                    <div className="space-y-7 font-onest text-sm leading-[21px] text-left md:text-left">
                        <h3 className="font-bold text-brand-whiteAlpha">{about.title}</h3>
                        <p>{about.description}</p>
                    </div>

                    {/* Contacts */}
                    <div className="space-y-7 font-onest text-sm leading-[21px] text-left md:text-left">
                        <h3 className="font-bold text-brand-whiteAlpha">{contacts.title}</h3>
                        <ul className="space-y-4">
                            {contacts.items.map((item, idx) => (
                                <li key={idx} className={item.underline ? "underline" : ""}>{item.label}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Main Links */}
                    <div className="space-y-7 font-onest text-sm leading-[21px] text-left md:text-left">
                        <h3 className="font-bold text-brand-whiteAlpha">{mainLinks.title}</h3>
                        <ul className="space-y-4">
                            {mainLinks.links.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="underline hover:text-brand-gold transition">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-7 text-left md:text-left">
                        <h3 className="font-bold text-brand-whiteAlpha">{social.title}</h3>
                        <div className="flex justify-start md:justify-start space-x-3">
                            {social.links.map((link, idx) => (
                                <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer">
                                    <img src={link.icon} alt={link.label} className="h-10 w-10 sm:h-12 sm:w-12" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 border-t-[0.8px] border-brand-whiteAlpha pt-6">
                    <div className="text-sm text-brand-white font-onest flex flex-col md:flex-row justify-between items-start w-full md:w-1/2 mx-auto">
                        <p className="text-left md:text-left">{copyright.text}</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href={copyright.terms.href} className="hover:underline transition">{copyright.terms.label}</Link>
                            <Link href={copyright.privacy.href} className="hover:underline transition">{copyright.privacy.label}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

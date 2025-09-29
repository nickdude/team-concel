import Link from "next/link";
import siteData from "@/data/siteData";

export default function Footer() {
    const { about, contacts, mainLinks, social, copyright } = siteData?.footer;

    return (
        <footer className="bg-brand-navy text-white py-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col justify-between">

                {/* Logo */}
                <div className="mb-8">
                    <img src="/assets/logo-white.svg" alt="Logo" className="h-12" />
                </div>

                {/* Grid Sections */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-36 w-full">
                    {/* About */}
                    <div className="space-y-7 font-onest text-sm leading-[21px]">
                        <h3 className="font-bold text-brand-whiteAlpha">{about.title}</h3>
                        <p>{about.description}</p>
                    </div>

                    {/* Contacts */}
                    <div className="space-y-7 font-onest text-sm leading-[21px]">
                        <h3 className="font-bold text-brand-whiteAlpha">{contacts.title}</h3>
                        <ul className="space-y-4">
                            {contacts.items.map((item, idx) => (
                                <li key={idx} className={item.underline ? "underline" : ""}>{item.label}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Main Links */}
                    <div className="space-y-7 font-onest text-sm leading-[21px]">
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
                    <div className="space-y-7">
                        <h3 className="font-bold text-brand-whiteAlpha">{social.title}</h3>
                        <div className="flex space-x-1">
                            {social.links.map((link, idx) => (
                                <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer">
                                    <img src={link.icon} alt={link.label} className="h-12 w-12" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 border-t-[0.8px] border-brand-whiteAlpha pt-6">
                    <div className="text-sm text-brand-white font-onest flex flex-col md:flex-row justify-between items-center w-1/2">
                        <p>{copyright.text}</p>
                        <div className="space-x-8 mt-4 md:mt-0">
                            <Link href={copyright.terms.href} className="hover:underline transition">{copyright.terms.label}</Link>
                            <Link href={copyright.privacy.href} className="hover:underline transition">{copyright.privacy.label}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


// import Link from "next/link";

// export default function Footer() {
//     return (
//         <footer className="bg-brand-navy text-white py-12">
//             <div className="max-w-7xl mx-auto px-4 flex flex-col justify-between">

//                 <div className="mb-8">
//                     <img src="/assets/logo-white.svg" alt="Logo" className="h-12" />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-36 w-full">
//                     <div className="space-y-7 font-onest text-sm leading-[21px]">
//                         <h3 className="font-bold text-brand-whiteAlpha">About</h3>
//                         <p>BigLaw-quality legal services for early-stage startups and investors—without the BigLaw price tag.</p>
//                     </div>
//                     <div className="space-y-7 font-onest text-sm leading-[21px]">
//                         <h3 className="font-bold text-brand-whiteAlpha">Contacts</h3>
//                         <ul className="space-y-4">
//                             <li className="underline">+91-9535539996</li>
//                             <li className="underline">connect@teamcounsel.in</li>
//                             <li>HD-460, WeWork, Prestige Atlanta, 80 Feet Road, Koramangala, Bangalore – 560034</li>
//                         </ul>
//                     </div>
//                     <div className="space-y-7 font-onest text-sm leading-[21px]">
//                         <h3 className="font-bold text-brand-whiteAlpha">Main Links</h3>
//                         <ul className="space-y-4">
//                             <li className="underline">Page 1</li>
//                             <li className="underline">Page 2</li>
//                             <li className="underline">Page 3</li>
//                             <li className="underline">Page 4</li>
//                         </ul>
//                     </div>
//                     <div className="space-y-7">
//                         <h3 className="font-bold text-brand-whiteAlpha">Social</h3>
//                         <div className="flex space-x-1">
//                             <img src="/assets/icons/git.svg" alt="Facebook" className="h-12 w-12" />
//                             <img src="/assets/icons/in.svg" alt="Twitter" className="h-12 w-12" />
//                             <img src="/assets/icons/twit.svg" alt="Instagram" className="h-12 w-12" />
//                             <img src="/assets/icons/inst.svg" alt="LinkedIn" className="h-12 w-12" />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="mt-8 border-t-[0.8px] border-brand-whiteAlpha pt-6">
//                     <div className="text-sm text-brand-white font-onest flex flex-col md:flex-row justify-between items-center w-1/2">
//                         <p>© 2025 Team Counsel All Rights Reserved.</p>
//                         <div className="space-x-8 mt-4 md:mt-0">
//                             <Link href="#" className="hover:underline transition">Terms & Conditions</Link>
//                             <Link href="#" className="hover:underline transition">Privacy Policy</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer >
//     );
// }

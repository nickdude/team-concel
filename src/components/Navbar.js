import Link from "next/link";
import SolutionsDropdown from "./SolutionsDropdown";
import Button from "./Button";

export default function Navbar() {
    return (
        <header className="w-full border-b">
            {/* Top strip */}
            <div className="bg-brand-beige text-brand-navy text-xs leading-5 font-normal text-center py-1">
                <span>Now get a FREE legal consultation </span>
                <Link href="/contact" className="text-brand-navy font-normal underline hover:font-semibold">
                    Contact Us
                </Link>
            </div>

            {/* Main Navbar */}
            <nav className="flex items-center w-[100vw]">
                <div className="flex items-center justify-evenly px-6 py-4 bg-white w-[45vw]">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src="/assets/logo.svg" alt="Logo" className="h-8" />
                    </div>

                    {/* Nav Links */}
                    <nav className="hidden md:flex space-x-6 text-brand-navy font-medium font-onest text-[13.13px] leading-[21px]">
                        <Link href="/practice" className="hover:text-brand-blue">
                            Practice
                        </Link>
                        <div className="relative group">
                            <SolutionsDropdown />
                        </div>
                        <Link href="/about" className="hover:text-brand-blue">
                            About Us
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center justify-end px-28 py-4 bg-white w-[55vw]">
                    <Button label="Contact Us" />
                </div>
            </nav>

        </header>
    );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import SolutionsDropdown from "./SolutionsDropdown";
import Button from "./Button";
import siteData from "@/data/siteData";

const navbarItems = siteData?.navbar;

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="w-full border-b sticky top-0 z-50 ">
            {/* Top strip */}
            <div className="bg-brand-beige text-brand-navy text-xs leading-5 font-normal text-center py-1">
                <span>Now get a FREE legal consultation </span>
                <Link
                    href="/contact"
                    className="text-brand-navy font-normal underline hover:font-semibold"
                >
                    Contact Us
                </Link>
            </div>

            {/* Main Navbar */}
            <nav className="flex items-center w-[100vw] 2xl:px-28 bg-brand-white">
                <div className="flex items-center sm:justify-evenly justify-between px-6 py-4 bg-white w-full md:w-[45vw]">
                    {/* Logo */}
                    <Link className="flex items-center space-x-2" href="/">
                        <img src="/assets/logo.svg" alt="Logo" className="h-8" />
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex space-x-6 text-brand-navy font-medium font-onest text-[13.13px] leading-[21px]">
                        {navbarItems.map((item, idx) =>
                            item.type === "link" ? (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className="hover:text-brand-blue"
                                >
                                    {item.label}
                                </Link>
                            ) : item.type === "dropdown" ? (
                                <div key={idx} className="relative group">
                                    <SolutionsDropdown item={item} />
                                </div>
                            ) : null
                        )}
                    </div>

                    <div className="md:hidden flex items-end justify-end bg-white ">
                        <Button label="Contact Us" />
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-brand-navy text-3xl"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Right Section (Desktop Only) */}
                <div className="hidden md:flex items-center justify-end px-28 py-4 bg-white w-[55vw]">
                    <Button label="Contact Us" link="https://topmate.io/john_mathew" />
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white px-6 py-4 flex flex-col space-y-4 text-brand-navy font-medium font-onest text-sm">
                    {navbarItems.map((item, idx) =>
                        item.type === "link" ? (
                            <Link
                                key={idx}
                                href={item.href}
                                className="hover:text-brand-blue"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ) : item.type === "dropdown" ? (
                            <div key={idx}>
                                <SolutionsDropdown item={item} />
                            </div>
                        ) : null
                    )}
                    {/* <Button label="Contact Us" /> */}
                </div>
            )}
        </header>
    );
}
"use client";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function SolutionsDropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            {/* Button */}
            <Menu.Button className="inline-flex items-center hover:text-brand-blue font-medium">
                Solutions
                <ChevronDownIcon
                    className="ml-1 h-4 w-4 transition-transform ui-open:rotate-180"
                    aria-hidden="true"
                />
            </Menu.Button>

            {/* Dropdown Menu */}
            <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left rounded-lg bg-white shadow-lg border focus:outline-none">
                <div className="py-1">
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                href="/legal-design-transformation"
                                className={`block px-4 py-2 text-sm ${active ? "bg-gray-100 text-brand-blue" : "text-gray-700"
                                    }`}
                            >
                                Legal Design Transformation
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                href="/contract-as-a-service"
                                className={`block px-4 py-2 text-sm ${active ? "bg-gray-100 text-brand-blue" : "text-gray-700"
                                    }`}
                            >
                                Contract As A Service (CAAS)
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                href="/fractional-general-counsel"
                                className={`block px-4 py-2 text-sm ${active ? "bg-gray-100 text-brand-blue" : "text-gray-700"
                                    }`}
                            >
                                Fractional General Counsel Solutions
                            </Link>
                        )}
                    </Menu.Item>

                </div>
            </Menu.Items>
        </Menu>
    );
}

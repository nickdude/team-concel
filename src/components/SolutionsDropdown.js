"use client";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function SolutionsDropdown({ item }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            {/* Button */}
            <Menu.Button className="inline-flex items-center hover:text-brand-blue font-medium">
                {item.label}
                <ChevronDownIcon
                    className="ml-1 h-4 w-4 transition-transform ui-open:rotate-180"
                    aria-hidden="true"
                />
            </Menu.Button>

            {/* Dropdown Menu */}
            <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg border focus:outline-none">
                <div className="py-1">
                    {item.subItems.map((subItem) => (
                        <Menu.Item key={subItem.href}>
                            {({ active }) => (
                                <Link
                                    href={subItem.href}
                                    className={`block px-4 py-2 text-sm transition-colors ${active
                                        ? "bg-gray-100 text-brand-blue"
                                        : "text-gray-700"
                                        }`}
                                >
                                    {subItem.label}
                                </Link>
                            )}
                        </Menu.Item>
                    ))}
                </div>
            </Menu.Items>
        </Menu>
    );
}

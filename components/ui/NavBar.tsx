"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data";

const NavBar = () => {
    return (
        <nav className="w-full bg-transparent py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center lg:ml-28">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/brandNavlogo.svg"
                            alt="BrandNav Logo"
                            width={155}
                            height={46}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Center Navigation Links - Only on large screens */}
                <div className="hidden lg:flex items-center space-x-8 -ml-[140px] text-[14px] font-bold">
                    {navItems.slice(0, 4).map((item, idx) => (
                        <Link
                            key={`nav-${idx}`}
                            href={item.link}
                            className="text-[#0D2052] hover:text-[#0085FF] text-sm font-[400] flex items-center space-x-1"
                        >
                            <span>{item.name}</span>
                            {(item.name === "Products" ||
                                item.name === "Resources") && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            )}
                        </Link>
                    ))}
                </div>

                {/* Right Side Buttons - Only on large screens */}
                <div className="hidden lg:flex items-center space-x-4 mr-24">
                    <Link
                        href={navItems[4].link}
                        className="bg-white text-[#0D2052] hover:text-[#0085FF] text-sm font-medium border border-[#287DFF] px-4 py-2 rounded-md"
                    >
                        {navItems[4].name}
                    </Link>
                    <Link
                        href={navItems[5].link}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:text-black"
                    >
                        {navItems[5].name}
                    </Link>
                </div>

                {/* Mobile Menu Button - Only Icon, no menu functionality */}
                <button
                    className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#0085FF]"
                    aria-label="Menu icon"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;

import Image from "next/image";
import React from "react";

function Footer() {
    return (
        <footer className="max-w-7xl mx-2 lg:mx-[100px] mt-9 ">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                {/* Brand Section */}
                <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold text-[#2F327D] mb-3 ">
                        BrandNav.io
                    </h2>
                    <p className="text-[#212529] mt-3 font-normal">
                        BrandNav is an Ecom Leads Database <br />
                        with tons of amazing filters. Now you <br /> can get
                        access to stores with just <br />
                        simple click.
                    </p>
                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-5">
                        <Image
                            src="/facebook.svg"
                            alt="Facebook"
                            width={24}
                            height={24}
                            className="cursor-pointer hover:opacity-80"
                        />
                        <Image
                            src="/twitter.svg"
                            alt="Twitter"
                            width={24}
                            height={24}
                            className="cursor-pointer hover:opacity-80"
                        />
                        <Image
                            src="/instagram.svg"
                            alt="Instagram"
                            width={24}
                            height={24}
                            className="cursor-pointer hover:opacity-80"
                        />
                        <Image
                            src="/github.svg"
                            alt="Github"
                            width={24}
                            height={24}
                            className="cursor-pointer hover:opacity-80"
                        />
                    </div>
                </div>

                {/* Navigation Columns */}
                <div className="flex flex-wrap lg:flex-nowrap lg:flex-row justify-between ml-2 lg:ml-14">
                    {/* First Row Items */}
                    <div className="w-1/2 lg:w-auto mb-6 lg:mb-0">
                        <h3 className="font-semibold text-base mb-4">Blogs</h3>
                        <ul className="space-y-3">
                            <li className="text-[#0084FF] text-[14px] cursor-pointer hover:underline">
                                All Blogs
                            </li>
                            <li className="text-[#0084FF] text-[14px] cursor-pointer hover:underline whitespace-nowrap">
                                Cold Emailing
                            </li>
                        </ul>
                    </div>

                    <div className="w-1/2 lg:w-auto mb-6 lg:mb-0 lg:ml-[60px]">
                        <h3 className="font-semibold text-base mb-4">
                            Documentation
                        </h3>
                        <ul className="space-y-3">
                            <li className="text-[#0084FF] text-[14px] cursor-pointer hover:underline whitespace-nowrap">
                                Getting Started
                            </li>
                        </ul>
                    </div>

                    {/* Second Row Items */}
                    <div className="w-1/2 lg:w-auto lg:ml-[60px]">
                        <h3 className="font-semibold text-base mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            <li className="text-[#0084FF] text-[14px] cursor-pointer hover:underline whitespace-nowrap ">
                                Latest Updates
                            </li>
                            <li className="text-[#0084FF] text-[14px] cursor-pointer hover:underline whitespace-nowrap">
                                Roadmap
                            </li>
                            <li className="text-[#0084FF] text-[14px] cursor-pointer hover:underline whitespace-nowrap">
                                About Us
                            </li>
                            <li className="text-[#0084FF] text-[14px] cursor-pointer hover:underline whitespace-nowrap">
                                Reports
                            </li>
                        </ul>
                    </div>

                    <div className="w-1/2 lg:w-auto lg:ml-[60px]">
                        <h3 className="font-semibold text-base mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li className="text-[#0084FF] text-[14px] cursor-pointer hover:underline whitespace-nowrap">
                                Terms & Conditions
                            </li>
                            <li className="text-[#0084FF] text-[14px] cursor-pointer hover:underline whitespace-nowrap">
                                Privacy Policy
                            </li>
                            <li className="text-[#0084FF] text-[14px] cursor-pointer hover:underline whitespace-nowrap">
                                Refund Policy
                            </li>
                            <li className="text-[#0084FF] text-[14px] cursor-pointer hover:underline whitespace-nowrap">
                                Contact Us
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-gray-200 pb-4 ">
                <p className="text-gray-500">
                    © 2022 BrandNav. All rights reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;

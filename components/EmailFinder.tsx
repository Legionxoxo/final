import Image from "next/image";
import React from "react";

function EmailFinder() {
    return (
        <div className="max-h-fit w-full">
            <div className="text-left lg:text-center mt-[140px] mx-2 lg:mx-[145px]">
                <h1 className="text-[#2F327D] font-bold text-[28px] lg:text-[36px]">
                    Pinpoint your ideal customer with{" "}
                    <span className="lg:break-before-auto lg:block">
                        relevant data attributes
                    </span>
                </h1>
            </div>
            {/* features 1 */}
            <div className="mx-2">
                <h2 className="text-[#007DF2] text-[18px] lg:text-[24px] font-semibold mt-12 lg:text-center">
                    Screener attributes
                </h2>
                <div className="mx-2">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 lg:mt-14">
                        {/* Row 1 - 4 columns in large screens */}
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src="finance.svg"
                                alt="feature1"
                                width={120}
                                height={120}
                                className="lg:-mt-7"
                            />
                            <h2 className="text-[#2F327D] font-semibold lg:text-[20px] text-[15px] -mt-1 mb-6">
                                Financials
                            </h2>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src="company.svg"
                                alt="feature1"
                                width={120}
                                height={120}
                                className="mt-5 lg:-mt-0"
                            />
                            <h2 className="text-[#2F327D] font-semibold lg:text-[20px] text-[15px] -mt-1 mb-6 text-center">
                                Company Name &{" "}
                                <span className="block">Website</span>
                            </h2>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src="location.svg"
                                alt="feature1"
                                width={120}
                                height={120}
                            />
                            <h2 className="text-[#2F327D] font-semibold lg:text-[20px] text-[15px] -mt-1 mb-6 text-center">
                                Company <span className="block">Location</span>
                            </h2>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src="country.svg"
                                alt="feature1"
                                width={120}
                                height={120}
                                className="-mt-6 lg:-mt-7"
                            />
                            <h2 className="text-[#2F327D] font-semibold lg:text-[20px] text-[15px] -mt-1 mb-6">
                                Country Code
                            </h2>
                        </div>
                    </div>

                    {/* Row 2 - 3 columns in large screens */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src="count.svg"
                                alt="feature1"
                                width={120}
                                height={120}
                                className="lg:ml-48"
                            />
                            <h2 className="text-[#2F327D] font-semibold lg:text-[20px] text-[15px] -mt-1 mb-6 lg:ml-48">
                                Employee Count
                            </h2>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src="industry.svg"
                                alt="feature1"
                                width={120}
                                height={120}
                                className="lg:ml-12"
                            />
                            <h2 className="text-[#2F327D] font-semibold lg:text-[20px] text-[15px] -mt-1 mb-6 lg:ml-12">
                                Industry
                            </h2>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src="more.svg"
                                alt="feature1"
                                width={120}
                                height={120}
                                className="ml-48 lg:ml-0 lg:mr-40 "
                            />
                            <h2 className="text-[#2F327D] whitespace-nowrap font-semibold lg:text-[20px] text-[15px] -mt-1 mb-6 text-center ml-48 lg:ml-0 lg:mr-40">
                                and 20+ More
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature 2  */}
            <div className="mx-2 ">
                <h2 className="text-[#007DF2] text-[18px] lg:text-[24px] font-semibold mt-16 lg:text-center">
                    Enricher attributes
                </h2>

                <div className="flex flex-wrap lg:flex-row lg:flex-nowrap justify-between items-center mt-8 lg:mt-14">
                    {/* first row */}
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <Image
                            src="/phone.svg"
                            alt="phone"
                            width={120}
                            height={120}
                        />

                        <h2 className="text-[#2F327D] font-semibold lg:text-[20px] text-[15px] -mt-4 mb-10">
                            Phone
                        </h2>
                    </div>

                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <Image
                            src="/email.svg"
                            alt="phone"
                            width={120}
                            height={120}
                        />

                        <h2 className="text-[#2F327D] font-semibold lg:text-[20px] text-[15px] -mt-4 mb-10">
                            Email
                        </h2>
                    </div>
                    {/* 2nd  */}
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <Image
                            src="/jobtitle.svg"
                            alt="phone"
                            width={120}
                            height={120}
                        />

                        <h2 className="text-[#2F327D] font-semibold lg:text-[20px] text-[15px] -mt-4 mb-10">
                            Job title
                        </h2>
                    </div>

                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <Image
                            src="/linkedin.svg"
                            alt="phone"
                            width={120}
                            height={120}
                        />

                        <h2 className="text-[#2F327D] font-semibold lg:text-[20px] text-[15px] -mt-4 mb-10">
                            Linkedin
                        </h2>
                    </div>
                </div>
            </div>
            <div className="mb-24 lg:mb-32"></div>
        </div>
    );
}

export default EmailFinder;

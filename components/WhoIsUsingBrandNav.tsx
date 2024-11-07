import Image from "next/image";
import React from "react";

function WhoIsUsingBrandNav() {
    return (
        <div className="w-full max-h-fit ">
            {/* Text */}
            <div className="mt-8 mx-2 lg:mx-0 text-left lg:text-center lg:mt-28">
                <h1 className="text-[#2F327D] font-bold text-[27px] lg:text-4xl ">
                    Who is using BrandNav?
                </h1>
                <p className="text-[#595B97] font-medium text-[15px] lg:text-base mt-4">
                    BrandNav has become irreplaceable tool for businesses
                </p>
            </div>

            {/* Points 1 - 3 */}
            <div className="mt-12 lg:mx-[162px]">
                <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:space-x-[62px]">
                    {/* First Item */}
                    <div className="flex flex-col lg:items-center lg:justify-center mb-10 lg:mb-0">
                        <Image
                            src="/uses2.svg"
                            alt="use"
                            width={120}
                            height={120}
                            className="-ml-2 lg:-ml-0"
                        />
                        <h2 className="text-[#2F327D] font-semibold text-xl mt-3 text-left lg:text-center mx-3 lg:mx-0">
                            Sales & Marketing Teams
                        </h2>
                        <p className="text-[#595B97] font-normal text-base mt-2 text-left lg:text-center mx-3 lg:mx-0 mb-6 lg:mb-0">
                            Sales and marketing teams are using BrandNav to
                            efficiently locate and verify prospect contact
                            information and identify key decision-makers.
                        </p>
                    </div>

                    {/* Second Item */}
                    <div className="flex flex-col items-start mb-10 lg:mb-0 lg:items-center lg:justify-center">
                        <Image
                            src="/uses1.svg"
                            alt="use"
                            width={120}
                            height={120}
                            className="-ml-2 lg:-ml-00 "
                        />
                        <h2 className="text-[#2F327D] font-semibold text-xl mt-3 text-left lg:text-center mx-3 lg:mx-0 ">
                            Software & IT Companies
                        </h2>
                        <p className="text-[#595B97] font-normal text-base mt-2 text-left lg:text-center mx-3 lg:mx-0 mb-6 lg:mb-0">
                            IT companies are using BrandNav to build lists for
                            outreach, identify target organizations, and verify
                            email addresses of leads to improve email
                            deliverability.
                        </p>
                    </div>

                    {/* Third Item */}
                    <div className="flex flex-col items-start lg:items-center lg:justify-center">
                        <Image
                            src="/uses3.svg"
                            alt="use"
                            width={120}
                            height={120}
                            className="-ml-2 lg:-ml-0"
                        />
                        <h2 className="text-[#2F327D] font-semibold text-xl mt-3 text-left lg:text-center mx-3 lg:mx-0">
                            Service Providers
                        </h2>
                        <p className="text-[#595B97] font-normal text-base mt-2 text-left lg:text-center mx-3 lg:mx-0 mb-6 lg:mb-0">
                            Service providers are using BrandNav to locate
                            accurate email addresses, build a list of contacts,
                            and improve the efficiency of their sales process.
                        </p>
                    </div>
                </div>
            </div>

            {/* Points 4-6 */}
            <div className="lg:mt-[100px] lg:mb-[165px]">
                <div className="mt-12 lg:mx-[162px]">
                    <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:space-x-[62px] ">
                        <div className="flex flex-col items-start lg:items-center lg:justify-center">
                            <Image
                                src="/uses4.svg"
                                alt="use"
                                width={120}
                                height={120}
                                className="-ml-2 lg:-ml-0"
                            />
                            <h2 className="text-[#2F327D] font-semibold text-xl mt-3 mx-3 lg:mx-0">
                                Recruiters
                            </h2>
                            <p className="text-[#595B97] font-normal text-base mt-2 lg:text-center mx-3 lg:mx-0 mb-10 lg:mb-0">
                                Recruiters are using BrandNav to locate and
                                verify the email addresses of job candidates,
                                build a talent pool, and streamline their hiring
                                process.
                            </p>
                        </div>

                        <div className="flex flex-col lg:items-center">
                            <Image
                                src="/uses5.svg"
                                alt="use"
                                width={120}
                                height={120}
                                className="-ml-2 lg:-ml-0"
                            />
                            <h2 className="text-[#2F327D] font-semibold text-xl mt-3 mx-3 lg:mx-0">
                                Backlinks Outreach
                            </h2>
                            <p className="text-[#595B97] font-normal text-base mt-2 lg:text-center mx-3 lg:mx-0 mb-10 lg:mb-0">
                                SEO link builders are using BrandNav to locate
                                and verify the email addresses of potential link
                                partners, and build outreach lists for
                                link-building purposes.
                            </p>
                        </div>
                        <div className="flex flex-col lg:items-center">
                            <Image
                                src="/uses6.svg"
                                alt="use"
                                width={120}
                                height={120}
                                className="-ml-2 lg:-ml-0"
                            />
                            <h2 className="text-[#2F327D] font-semibold text-xl mt-2 mx-3 lg:mx-0">
                                Investors
                            </h2>
                            <p className="text-[#595B97] font-normal text-base mt-2 text-left lg:text-center mx-3 lg:mx-0 mb-10 lg:mb-0">
                                Investors are using BrandNav to quickly find and
                                verify contact information for key executives
                                and decision-makers and streamline their
                                workflow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-10 lg:mb-0"></div>
        </div>
    );
}

export default WhoIsUsingBrandNav;

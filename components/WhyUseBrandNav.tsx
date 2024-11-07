import Image from "next/image";
import React from "react";

function WhyUseBrandNav() {
    return (
        <div className="w-full max-h-fit lg:mt-20 lg:mx-[86px] mt-20 ">
            <div className="lg:text-center text-left ml-4 lg:ml-0 " id="blog">
                <h1 className="text-[#2F327D] font-bold lg:text-[36px] text-[30px]">
                    Why should you use BrandNav?
                </h1>
                <p className="text-[#595B97] font-medium text-[16px] mt-[15px]">
                    Optimize your workflow for faster results and higher revenue
                </p>
            </div>

            {/* Container for the image and text */}
            <div className="lg:ml-[86px] mt-8">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mt-[42px]">
                    <div className="lg:mr-10 lg:order-1 order-3 mt-6 lg:mt-0">
                        <Image
                            src="/point1.svg"
                            alt="point1"
                            height={407}
                            width={473}
                        />
                    </div>

                    {/* Container for whyuse1 Image and Text */}
                    <div className="flex flex-col items-start lg:items-center lg:order-2 order-1 lg:mt-0 mt-8 ml-3">
                        {/* whyuse1 Image */}
                        <Image
                            src="/whyuse1.svg"
                            alt="use"
                            width={51}
                            height={51}
                            className="self-start lg:self-center mt-0 lg:mt-[154px] lg:-ml-96"
                        />

                        {/* Text Container */}
                        <div className="text-left lg:text-left mt-4 lg:mt-2">
                            <h1 className="font-semibold text-[#2F327D] text-[26px] lg:mt-2">
                                Enrich any CSV
                            </h1>
                            <p className="mt-2 text-[#595B97]">
                                BrandNav transforms your CSV files by adding
                                valuable
                                <span className="lg:block">
                                    contact, firmographics, and technographics
                                    data. With
                                </span>
                                <span className="lg:block">
                                    just a few clicks, you can enhance your data
                                    with
                                </span>
                                enriched information and unlock new insights and
                                <span className="lg:block">opportunities.</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* point2 */}

                <div className="flex flex-col lg:flex-row items-start lg:mt-[42px] mx-4 lg:mx-0 mt-8">
                    {/* Text Container */}
                    <div className="flex flex-col items-start lg:flex-col lg:mt-16">
                        {/* Sync1 Image */}
                        <Image
                            src="/sync1.svg"
                            alt="use"
                            width={50}
                            height={50}
                            className="mt-[20px] lg:mt-[154px]"
                        />

                        {/* Heading and Paragraph */}
                        <div className="text-left mt-2 lg:mt-2">
                            <h1 className="font-semibold text-[#2F327D] text-[26px] lg:mt-2">
                                Fresh data updates everyday
                            </h1>
                            <p className="mt-2 text-[#595B97] ">
                                BrandNav updates its data every day, providing
                                the most
                                <span className="lg:block">
                                    recent and accurate information to its
                                    users. With a
                                </span>
                                <span className="lg:block lg:break-after-auto">
                                    constant stream of new information, BrandNav
                                    ensures
                                </span>
                                that users have access to the latest contact,
                                <span className="lg:block lg:break-after-auto">
                                    firmographics, and technographics data for
                                    better
                                </span>
                                <span className="lg:block lg:break-after-auto ">
                                    decision-making.
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Point2 Image Container */}
                    <div className="w-full lg:w-auto lg:ml-10 mt-4 lg:mt-0">
                        <Image
                            src="/points2.svg"
                            alt="point2"
                            width={473}
                            height={407}
                            className="w-full -mt-8 lg:-mt-0"
                        />
                    </div>
                </div>

                {/* point 3 */}

                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mt-[42px]">
                    {/* Image Container */}
                    <div className="lg:mr-10 lg:order-1 order-3 mt-6 lg:mt-0">
                        <Image
                            src="/point3.svg"
                            alt="point3"
                            height={407}
                            width={473}
                        />
                    </div>

                    {/* Container for whyuse3 Image and Text */}
                    <div className="flex flex-col items-start lg:items-center lg:order-2 order-1 lg:mt-0 mt-8 ml-3">
                        {/* whyuse3 Image */}
                        <div className="lg:-mt-24">
                            <Image
                                src="/whyuse3.svg"
                                alt="use"
                                width={50}
                                height={50}
                                className="self-start lg:self-center mt-0 lg:mt-[154px]"
                            />

                            {/* Text Container */}
                            <div className="text-left lg:text-left mt-4 lg:mt-2">
                                <h1 className="font-semibold text-[#2F327D] text-[26px] lg:mt-2">
                                    Advanced search with 25+ unique{" "}
                                    <span className="lg:block">filters</span>
                                </h1>
                                <p className="mt-2 text-[#595B97] mr-2">
                                    BrandNav offers over 25+ filters to help
                                    users build highly
                                    <span className="lg:block">
                                        segmented lists for better prospecting.
                                        With BrandNav, you
                                    </span>
                                    <span className="lg:block lg:break-after-auto">
                                        can create highly targeted lists that
                                        are tailored to your
                                    </span>
                                    specific needs, streamlining your workflow
                                    and maximizing
                                    <span className="lg:block break-after-auto">
                                        your productivity.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUseBrandNav;

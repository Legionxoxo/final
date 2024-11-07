import React from "react";
import Rating from "./ui/Rating";
import Image from "next/image";

function FooterBanner() {
    return (
        <div className="w-full max-h-fit rounded-background">
            <div className="text-center" id="pricing">
                <h1 className="text-[#FFFFFF] font-bold text-[30px] lg:text-4xl mt-12 mx-[40px] lg:mx-[200px]  ">
                    Want to see{" "}
                    <span className="whitespace-nowrap -ml-2 lg:-ml-0">
                        BrandNav in action?
                    </span>
                </h1>
                <p className="text-[#F2F2F2] font-semibold text-base lg:text-xl mt-5">
                    Try BrandNav for free today!
                </p>
                <div className="mt-7 flex flex-col items-center space-y-4 pb-14 mx-7">
                    <button className="bg-[#0084FF] border border-transparent rounded-md px-6 py-2 text-white font-semibold w-full lg:w-48  ">
                        Grab free leads
                    </button>

                    <div className="mb-6 hidden lg:flex">
                        <Rating textColor="text-white" />
                    </div>
                    {/* Mobile rating */}
                    <div className="lg:hidden mx-10 flex items-center justify-center flex-row space-x-1 whitespace-nowrap text-white">
                        <Image
                            src="/debitcard.svg"
                            alt="card"
                            height={14}
                            width={14}
                            className="fill-current -ml-3 "
                        />
                        <div className="text-[12px] text-white">
                            <span>
                                No credit card required{" "}
                                <span className="mx-2">|</span>{" "}
                            </span>
                        </div>
                        <div>
                            <div className="flex items-center space-x-1">
                                <Image
                                    src="/singlestar.svg"
                                    alt="review"
                                    height={14}
                                    width={14}
                                />
                                <div className="text-[12px] text-white">
                                    <span>4.8/5 G2 Rating</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBanner;

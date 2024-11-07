import Image from "next/image";
import React from "react";

function Testimonial() {
    return (
        <div className="w-full max-h-fit">
            <div className="bg-[#E1F1FE]">
                {/* Text */}
                <div className="mx-2 pt-8">
                    <h1 className="text-[#2F327D] font-bold text-[28px] lg:text-4xl text-left lg:text-center">
                        Don&apos;t just take our word for it
                    </h1>
                    <div className="flex lg:items-center lg:justify-center mt-6 space-x-2 lg:space-x-4 lg:mb-4 mx-2 lg:mx-0">
                        <p className="text-[#595B97] font-medium text-base lg:text-xl">
                            Excellent
                        </p>
                        <div className="flex lg:items-center lg:justify-center lg:space-x-4">
                            <Image
                                src="/5stars.svg"
                                alt="stars"
                                height={20}
                                width={100}
                            />
                            <span className="text-[#595B97] font-medium lg:text-xl">
                                4.8/5 G2 Rating
                            </span>
                        </div>
                    </div>
                </div>

                {/* Review card */}
                <div className="pt-5 lg:pt-0 pb-16 lg:pb-0">
                    <div className="flex lg:flex-row flex-col lg:items-center lg:justify-center lg:space-x-10 lg:pb-20">
                        <Image
                            src="/review1.svg"
                            alt="review"
                            width={450}
                            height={287}
                        />
                        <Image
                            src="/review2.svg"
                            alt="review"
                            width={450}
                            height={287}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;

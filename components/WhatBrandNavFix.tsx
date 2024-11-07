import Image from "next/image";
import React from "react";

function WhatBrandNavFix() {
    return (
        <div className="max-h-fit w-full">
            <div className="lg:text-center text-left mx-2">
                <h1 className="text-[#2F327D] font-bold text-[30px] lg:text-[36px]">
                    Fix data accuracy problems{" "}
                    <span className="lg:block">with BrandNav</span>
                </h1>
            </div>
            {/* Images */}
            <div className="flex lg:justify-center lg:items-center lg:space-x-8 mt-16 flex-col lg:flex-row ">
                <div className="order-1 lg:order-1 mr-8 lg:mr-0">
                    <Image
                        src="/before.svg"
                        alt="fix"
                        height={200}
                        width={450}
                        className="lg:-mt-8"
                    />
                    <h1 className="text-[#F04148] font-semibold text-lg text-center lg:text-center -mt-20 lg:-mt-24 mb-5 lg:mb-0 ">
                        Before
                    </h1>
                </div>

                <div className="order-2 lg:order-2 ml-8 lg:ml-0">
                    <Image
                        src="/after.svg"
                        alt="fix"
                        height={400}
                        width={530}
                        className="lg:-mt-7"
                    />
                    <h1 className="text-[#2196F3] font-semibold text-lg lg:ml-40 text-center lg:text-left lg:-mt-4 mr-20 lg:mr-0 mb-20 lg:mb-0">
                        After
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default WhatBrandNavFix;

import Image from "next/image";
import React from "react";

function BannerDark() {
    return (
        <div className="max-h-fit w-full dark-banner">
            <div className="flex items-center lg:justify-start ">
                <div className="flex flex-col-reverse sm:flex-row items-center">
                    {/* Dark Banner Image */}
                    <div className="flex items-center justify-center lg:mt-10">
                        <Image
                            src="/darkbanner.svg"
                            alt="banner"
                            height={752}
                            width={408}
                            className="flex items-start justify-center ml-2 lg:ml-40"
                        />
                    </div>
                    {/* Text next to the image */}
                    <div className="z-20 text-white text-center ml-2 lg:ml-[50px] my-20">
                        <h1 className="lg:text-[40px] font-semibold  text-[30px] text-center  ">
                            Not convinced yet?
                        </h1>
                        <br />
                        <h1 className="lg:text-[44px] font-bold text-[32px] text-center -ml-3 lg:-ml-0">
                            Take it for a
                            <span className="text-[#49A7FF]"> FREE</span> spin
                        </h1>
                        <br />
                        <h1 className="lg:text-4xl font-semibold text-[30px] text-center -mb-8 lg:-mb-0">
                            before committing
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerDark;

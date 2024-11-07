import React from "react";
import NavBar from "./ui/NavBar";
import Image from "next/image";
import Rating from "./ui/Rating";

function Hero() {
    return (
        <div className="w-fullmax-h-fit pt-2 hero-background ">
            <NavBar />
            {/* Hero text */}

            <div className="text-left lg:text-center lg:mb-8 px-4 sm:px-0">
                <h1 className="text-[30px] lg:text-5xl font-medium text-[#0D2052] leading-tight lg:leading-normal lg:mt-5">
                    <span className="block lg:inline">Weapons to Grow</span>
                    <span className="block lg:break-after-column">
                        your Business
                    </span>
                </h1>
                <div className="mt-5 lg:mt-[20px] lg:px-[30px]">
                    <span className="text-[#666666] text-sm lg:text-base">
                        Turbocharge your business growth.
                    </span>
                    <br />
                    <span className="text-[#666666] text-sm lg:text-base">
                        Our products help ignite sales and entrepreneurship.
                    </span>
                </div>
            </div>

            {/* Start button */}
            <div
                className="flex items-center justify-center mt-[34px]"
                id="Login"
            >
                <div className="h-[98px] w-full sm:w-[397px] text-center mx-4 sm:mx-0 flex items-center justify-center">
                    <button
                        className="w-full lg:w-[229px] h-[62px] border rounded-xl flex items-center justify-center"
                        style={{
                            background:
                                "linear-gradient(to right, #52A8FF 0%, #0084FF 24%, #0084FF 100%)",
                        }}
                    >
                        <span className="font-medium text-white text-[20px]">
                            Start for free
                        </span>
                    </button>
                </div>
            </div>

            {/* tools */}
            <div className="container mx-auto py-8 lg:mx-14">
                {/* Large screen layout */}
                <div className="hidden lg:block">
                    <div className="flex flex-col sm:flex-row mx-20 items-center sm:items-start space-y-4 sm:space-y-0 space-x-1">
                        {/* Left Image */}
                        <Image
                            src="/verifiercard.svg"
                            alt="chart"
                            height={256}
                            width={300}
                            className="lg:-mt-2"
                        />
                        {/* Middle Column with Rating and Two Middle Images */}
                        <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:mx-4">
                            <div className="mb-4 sm:mb-32 hidden sm:block">
                                <Rating />
                            </div>
                            {/* Middle images */}
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-1">
                                <Image
                                    src="/screenercard.svg"
                                    alt="chart"
                                    height={256}
                                    width={208}
                                    className=""
                                />
                                <Image
                                    src="/blacklistshieldcard.svg"
                                    alt="chart"
                                    height={256}
                                    width={208}
                                />
                            </div>
                        </div>
                        {/* Right Image */}
                        <div className="mb-10">
                            <Image
                                src="/enrichercard.svg"
                                alt="chart"
                                height={256}
                                width={300}
                                className="lg:-mt-2"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile layout */}
                <div className="lg:hidden flex flex-col space-y-4">
                    <Image
                        src="/verifiercard.svg"
                        alt="chart"
                        height={256}
                        width={300}
                        className="w-full"
                    />
                    <Image
                        src="/screenercard.svg"
                        alt="chart"
                        height={256}
                        width={208}
                        className="w-full"
                    />
                    <Image
                        src="/blacklistshieldcard.svg"
                        alt="chart"
                        height={256}
                        width={208}
                        className="w-full"
                    />
                    <Image
                        src="/enrichercard.svg"
                        alt="chart"
                        height={256}
                        width={300}
                        className="w-full"
                    />
                </div>
            </div>

            {/* companies */}
            <div className="flex items-center justify-center -mt-20">
                <div className="w-[700px] h-[174px] mt-[100px] text-center">
                    <span className="text-[#666666] font-medium">
                        Modern companies are using
                        <span className="text-[#666666] font-bold">
                            {" "}
                            BrandNav
                        </span>
                    </span>

                    <div className="flex justify-center flex-wrap mt-8 mb-10 md:mt-[33px]">
                        <div className="grid grid-cols-2 gap-2 md:gap-4 w-full md:flex md:flex-wrap md:justify-center">
                            <div className="flex justify-center items-center">
                                <Image
                                    src="/logo1.svg"
                                    alt="logo"
                                    height={18}
                                    width={153}
                                    className="mx-1 md:mx-2"
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <Image
                                    src="/logo2.svg"
                                    alt="logo"
                                    height={18}
                                    width={113}
                                    className="mx-1 md:mx-2"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="/logo3.svg"
                                    alt="logo"
                                    height={25}
                                    width={63}
                                    className="mx-1 md:mx-2"
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <Image
                                    src="/logo4.svg"
                                    alt="logo"
                                    height={22}
                                    width={35}
                                    className="mx-1 md:mx-2"
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <Image
                                    src="/logo5.svg"
                                    alt="logo"
                                    height={30}
                                    width={50}
                                    className="mx-1 md:mx-2 ml-52 lg:ml-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

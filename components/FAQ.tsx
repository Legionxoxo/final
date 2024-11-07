import Image from "next/image";
import React from "react";

function FAQ() {
    return (
        <div className="w-full max-h-fit">
            <div className="lg:mt-14 mt-14 mx-2">
                <h1 className="text-[#2F327D] font-bold text-[30px] lg:text-4xl text-left lg:text-center tracking-wide">
                    Got a Question?
                    <span className="lg:mt-4 block "> Get Your Answers</span>
                </h1>
            </div>
            {/* FAQ Card */}
            <div className="flex items-center flex-col mt-5 mb-10">
                <Image
                    src="/faq.svg"
                    alt="faq"
                    width={990}
                    height={348}
                    className="h-500 w-500"
                />
            </div>
        </div>
    );
}

export default FAQ;

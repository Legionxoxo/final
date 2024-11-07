import Image from "next/image";
import React from "react";

function ChooseYourWeapon() {
    return (
        /* needs fixing */
        <div className="max-h-fit w-full mt-32 hidden sm:block">
            <div className="flex items-center justify-center" id="resource">
                <div>
                    <div className="flex items-center justify-center ">
                        <div className="h-[60px] w-[600px] text-center">
                            <span className="text-[#2F327D] font-bold text-[32px]">
                                Choose your Weapon
                            </span>
                            <br />
                            <span className="text-[#595B97] font-medium mt-[25px]">
                                BrandNav is a multi-dimensional platform
                                designed for revenue growth.
                            </span>
                        </div>
                    </div>

                    {/* card box */}
                    <div className="mt-12 mb-24">
                        <Image
                            src="/chosecard.svg"
                            alt="card"
                            height={600}
                            width={978}
                        />
                    </div>
                    {/* */}
                </div>
            </div>
        </div>
    );
}

export default ChooseYourWeapon;

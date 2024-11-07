import Image from "next/image";
import React from "react";

interface RatingProps {
    className?: string;
    textColor?: string;
}

const Rating: React.FC<RatingProps> = ({
    className = "",
    textColor = "text-gray-400",
}) => {
    return (
        <div className={`w-full ${className}`}>
            <div className="flex items-center justify-center space-x-2 whitespace-nowrap mb-4">
                <Image src="/debitcard.svg" alt="card" height={16} width={16} />
                <div className="text-[14px]">
                    <span className={textColor}>
                        No credit card required <span className="mx-2"> |</span>
                    </span>
                </div>
                <Image src="/5stars.svg" alt="stars" height={13} width={65} />
                <div className="text-[14px]">
                    <span className={textColor}>4.8/5 G2 Rating</span>
                </div>
            </div>
        </div>
    );
};

export default Rating;

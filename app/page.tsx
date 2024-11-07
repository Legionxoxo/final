import BannerDark from "@/components/BannerDark";
import ChooseYourWeapon from "@/components/ChooseYourWeapon";
import EmailFinder from "@/components/EmailFinder";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FooterBanner from "@/components/FooterBanner";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import WhatBrandNavFix from "@/components/WhatBrandNavFix";
import WhoIsUsingBrandNav from "@/components/WhoIsUsingBrandNav";
import WhyUseBrandNav from "@/components/WhyUseBrandNav";

export default function Home() {
    return (
        <main
            className="  overflow-clip bg-[#edeff8] 
     "
        >
            <div className="flex items-center justify-self-center">
                <div className="w-[360px] lg:max-w-7xl lg:w-full mx-4 lg:mx-0">
                    <Hero />
                    <ChooseYourWeapon />
                    <BannerDark />
                    <WhyUseBrandNav />
                    <EmailFinder />
                    <WhatBrandNavFix />
                    <WhoIsUsingBrandNav />
                    <Testimonial />
                    <FAQ />
                    <FooterBanner />
                    <Footer />
                </div>
            </div>
        </main>
    );
}

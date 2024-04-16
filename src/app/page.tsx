import BannerWrapper from "@/components/BannerWrapper";
import CopyCodeMainSection from "@/components/CopyCodeMainSection";
import CtaBoxsMain from "@/components/CtaBoxsMain";
import FaqMain from "@/components/FaqMain";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LogoSliderMain from "@/components/LogoSliderMain";
import StackersMain from "@/components/StickersMain";
import TokenBoxsMain from "@/components/TokenBoxsMain";
import WhatIsCatMain from "@/components/WhatIsCatMain";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-[1280px] m-auto">
        <BannerWrapper />
      </div>
      <div className="max-w-[1280px] m-auto">
        <WhatIsCatMain />
      </div>
      <div className="max-w-[1280px] m-auto">
        <CtaBoxsMain />
      </div>
      <StackersMain />
      <div className="max-w-[1280px] m-auto">
        <FaqMain />
      </div>
      <div className="max-w-[1280px] m-auto">
        <TokenBoxsMain />
      </div>
      <div className="max-w-[1280px] m-auto">
        <CopyCodeMainSection />
      </div>
      <div className="max-w-[1280px] m-auto">
        <LogoSliderMain />
      </div>
      <div className="max-w-[1280px] m-auto">
        <Footer />
      </div>
    </div>
  );
}

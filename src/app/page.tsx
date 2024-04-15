import CopyCodeMainSection from "@/components/CopyCodeMainSection";
import CtaBoxsMain from "@/components/CtaBoxsMain";
import FaqMain from "@/components/FaqMain";
import Header from "@/components/Header";
import LogoSliderMain from "@/components/LogoSliderMain";
import StackersMain from "@/components/StickersMain";
import TokenBoxsMain from "@/components/TokenBoxsMain";
import WhatIsCatMain from "@/components/WhatIsCatMain";

export default function Home() {
  return (
    <div>
      <Header />
      <StackersMain />
      <CopyCodeMainSection />
      {/* <BannerWrapper /> */}
      <WhatIsCatMain />
      <CtaBoxsMain />
      <FaqMain />
      <TokenBoxsMain />
      <LogoSliderMain />
    </div>
  );
}

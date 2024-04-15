import BannerWrapper from "@/components/BannerWrapper";
import CopyCodeMainSection from "@/components/CopyCodeMainSection";
import Header from "@/components/Header";
import StackersMain from "@/components/StickersMain";

export default function Home() {
  return (
    <div>
      <Header />
      <BannerWrapper />
      <StackersMain />
      <CopyCodeMainSection />
    </div>
  );
}

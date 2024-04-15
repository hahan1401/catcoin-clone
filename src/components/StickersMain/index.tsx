import Link from "next/link";
import AnimateButton from "../AnimateButton";
import SectionHeader from "../SectionHeader";
import Slider from "../Slider";

const data = new Array(15)
  .fill(0)
  .map((_, index) => `/cats-slider/img${index + 1}.png`);

const StackersMain = () => {
  return (
    <div className="text-center py-[30px] sm:py-[60px]">
      <SectionHeader title="Trending $CAT stickers" />
      <Slider data={data} />

      <Link
        href={"https://catcoin.com/stickers.php"}
        target="_blank"
        className="flex justify-center w-full mt-10"
      >
        <AnimateButton title="See more Stickers" />
      </Link>
    </div>
  );
};

export default StackersMain;

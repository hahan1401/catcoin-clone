import Link from "next/link";
import AnimateButton from "../AnimateButton";
import SectionHeader from "../SectionHeader";
import "./styles.scss";

const images = new Array(15)
  .fill(0)
  .map((_, index) => `/cats-slider/img${index + 1}.png`)
  .map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));

const StackersMain = () => {
  return (
    <div className="text-center py-[30px] sm:py-[60px] stickers-main-wrapper">
      <SectionHeader title="Trending $CAT stickers" />
      <Banner images={images} />

      <div className="inline-block">
        <Link
          href={"https://catcoin.com/stickers.php"}
          target="_blank"
          className="flex justify-center w-full mt-10"
        >
          <AnimateButton title="See more Stickers" />
        </Link>
      </div>
    </div>
  );
};

const Banner = ({ images }) => {
  return (
    <div className="inner">
      <div className="wrapper">
        <section>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
        <section>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
        <section>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default StackersMain;

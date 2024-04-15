import Image from "next/image";
import "./styles.css";

const data = new Array(9).fill(0).map((_, index) => `/img/${index}.png`);

const images = new Array(9)
  .fill(0)
  .map((_, index) => `/img/${index + 1}.png`)
  .map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));

const LogoSliderMain = () => {
  const renderItem = (src: string) => {
    return (
      <div className="slide w-[120px] h-[40px] m-5">
        <Image
          src={src}
          alt="thumbnail"
          width={120}
          height={40}
          style={{
            objectFit: "contain",
            width: 120,
            height: 40,
          }}
        />
      </div>
    );
  };
  return (
    <div className="py-[30px] sm:py-[60px]">
      <p className="text-center">Loved by the community</p>
      {/* <Slider
        data={data}
        addPrefix={true}
        addSurfix={true}
        renderChildren={renderItem}
      /> */}
      <Banner images={images} speed={5000} />
    </div>
  );
};

export default LogoSliderMain;

const Banner = ({ images, speed = 1000 }) => {
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
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

export { Banner };

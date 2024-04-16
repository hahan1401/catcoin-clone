import "./styles.scss";

const images = new Array(9)
  .fill(0)
  .map((_, index) => `/img/${index + 1}.png`)
  .map((image) => ({
    id: crypto.randomUUID(),
    image,
  }));

const LogoSliderMain = () => {
  return (
    <div className="py-[30px] sm:py-[60px] logo-slider-main-wrapper">
      <p className="text-center">Loved by the community</p>
      {/* <Slider
        data={data}
        addPrefix={true}
        addSurfix={true}
        renderChildren={renderItem}
      /> */}
      <Banner images={images} />
    </div>
  );
};

export default LogoSliderMain;

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

export { Banner };

import Image from "next/image";

const BannerWrapper = () => {
  return (
    <div className="">
      <div className="flex w-full justify-center">
        <Image src={"/cc.png"} width={100} height={100} alt="" />
      </div>
      <h2>$CAT the most memeable memecoin on Blockchain</h2>
    </div>
  );
};

export default BannerWrapper;

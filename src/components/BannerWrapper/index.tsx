import Image from "next/image";
import Link from "next/link";
import {
  Binance,
  Chart,
  Secondbtc,
  Telegram,
  Twitter,
  Uniswap,
} from "../ui/icons";
import { Pancakeswap } from "../ui/icons/components/Pancakeswap";

const BannerWrapper = () => {
  return (
    <div className="max-w-[650px] m-auto text-center py-[30px] md:py-[60px]">
      <div className="flex w-full justify-center">
        <Image src={"/cc.png"} width={100} height={100} alt="" />
      </div>
      <h2 className="text-4xl leading-[40px] md:text-[52px] md:leading-[60px] font-bold my-5">
        $CAT the most memeable memecoin on Blockchain
      </h2>
      <p className="mb-[65px]">
        The dogs have had their day, it’s time for $CAT to take reign.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href={
            "https://app.uniswap.org/swap?outputCurrency=0x59f4f336bf3d0c49dbfba4a74ebd2a6ace40539a"
          }
          target="_blank"
        >
          <button className="text-lg leading-[21px] text-primary py-5 font-bold flex items-center gap-5 border-primary border-2 rounded-[40px] pl-5 pr-[65px] relative">
            Buy now
            <Uniswap className="text-[40px]  text-black absolute right-2 top-1/2 -translate-y-1/2" />
          </button>
        </Link>
        <Link
          href={
            "https://pancakeswap.finance/swap?outputCurrency=0x59f4f336bf3d0c49dbfba4a74ebd2a6ace40539a"
          }
          target="_blank"
        >
          <button className="text-lg text-primary py-5 font-bold flex items-center gap-5 border-primary border-2 rounded-[40px] pl-5 pr-[65px] relative">
            Buy now
            <Pancakeswap className="text-4xl text-black absolute right-2 top-1/2 -translate-y-1/2" />
          </button>
        </Link>
        <Link
          href={
            "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=7hWcHohzwtLddDUG81H2PkWq6KEkMtSDNkYXsso18Fy3&outputSymbol=7hWcHo&fixed=in"
          }
          target="_blank"
        >
          <button className="text-lg text-primary py-5 font-bold flex items-center gap-5 border-primary border-2 rounded-[40px] pl-5 pr-[65px] relative">
            Buy now
            <Image
              className=" absolute right-2 top-1/2 -translate-y-1/2"
              src={"/solan.png"}
              width={96}
              alt=""
              height={108}
              style={{
                width: 36,
              }}
            />
          </button>
        </Link>
      </div>

      <div className="mt-[30px] flex justify-center flex-wrap gap-8">
        <Link
          href={
            "https://www.dextools.io/app/en/ether/pair-explorer/0xe87e0be74368c8e153771dd4b2dee3ad3626fc4f?t=1713193852431"
          }
          className="flex items-center gap-3"
        >
          <span className="text-primary text-sm leading-[14px] font-bold">
            ETH Chart
          </span>
          <Chart className="text-lg" />
        </Link>
        <Link
          target="_blank"
          href={
            "https://www.dextools.io/app/en/bnb/pair-explorer/0x63230caefc0f8220536db18136b83b5098b5acbc?t=1713193854095"
          }
          className="flex items-center gap-3"
        >
          <span className="text-primary text-sm leading-[14px] font-bold">
            BNB Chart
          </span>
          <Chart className="text-lg" />
        </Link>
        <Link
          target="_blank"
          href={
            "https://www.dextools.io/app/en/solana/pair-explorer/GYKDfe5xuvAwvq5ECWC7cNCRkGU3Pjgb87pgWah5QmHZ?t=1713193853906"
          }
          className="flex items-center gap-3"
        >
          <span className="text-primary text-sm leading-[14px] font-bold">
            SOL Chart
          </span>
          <Chart className="text-lg" />
        </Link>
      </div>

      <div className="mt-[35px] flex justify-center flex-wrap gap-2">
        <Link target="_blank" href={"https://twitter.com/catcoin"}>
          <Twitter className="text-5xl opacity-70 hover:opacity-100" />
        </Link>
        <Link href={"https://t.me/catcoincash"} target="_blank">
          <Telegram className="text-5xl opacity-70 hover:opacity-100" />
        </Link>
      </div>

      <div className="mt-5">
        <p className="text-2xl leading-[24px]">Buy From Exchanges</p>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mt-[35px]">
        <Link href={"#"} target="_blank">
          <button className="text-lg text-primary py-[15px] font-bold flex items-center gap-5 border-primary border-2 rounded-[40px] pl-[15px] pr-[65px] relative">
            Okx
            <Image
              className=" absolute right-3 top-1/2 -translate-y-1/2"
              src={"/okx.png"}
              width={96}
              alt=""
              height={108}
              style={{
                width: 26,
              }}
            />
          </button>
        </Link>
        <Link href={"#"} target="_blank">
          <button className="text-lg leading-[21px] text-primary py-[15px] font-bold flex items-center gap-5 border-primary border-2 rounded-[40px] pl-[15px] pr-[65px] relative">
            Binance
            <Binance className="text-3xl text-black absolute right-3 top-1/2 -translate-y-1/2" />
          </button>
        </Link>
        <Link href={"#"} target="_blank">
          <button className="text-lg leading-[21px] text-primary py-[15px] font-bold flex items-center gap-5 border-primary border-2 rounded-[40px] pl-[15px] pr-[65px] relative">
            Secondbtc
            <Secondbtc className="text-3xl  text-black absolute right-2 top-1/2 -translate-y-1/2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BannerWrapper;

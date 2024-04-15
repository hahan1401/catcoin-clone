import Image from "next/image";
import Link from "next/link";
import AnimateButton from "../AnimateButton";
import SectionHeader from "../SectionHeader";
import SelectCode from "./SelectCode";

const CopyCodeMainSection = () => {
  return (
    <div className="py-[30px] sm:py-[60px] flex flex-col items-center px-5">
      <SectionHeader title="Trade on ETH and BSC" />
      <p className="">CATCOIN contract addresses</p>
      <div className="mt-9 flex gap-6 flex-wrap">
        <Link
          href={
            "https://etherscan.io/token/0x59f4f336bf3d0c49dbfba4a74ebd2a6ace40539a"
          }
          target="_blank"
        >
          <AnimateButton title="Etherscan (ETH)" />
        </Link>
        <Link
          href={
            "https://bscscan.com/token/0x59f4f336bf3d0c49dbfba4a74ebd2a6ace40539a"
          }
          target="_blank"
        >
          <AnimateButton title="BscScan (BSC)" />
        </Link>
        <Link
          href={
            "https://solscan.io/token/7hWcHohzwtLddDUG81H2PkWq6KEkMtSDNkYXsso18Fy3#txs"
          }
          target="_blank"
        >
          <AnimateButton title="SOL SCAN (SOL)" />
        </Link>
      </div>

      <div className="mt-[30px]">
        <SelectCode />
      </div>

      <div className="flex gap-4 mt-2.5">
        <Link
          href={"https://coinmarketcap.com/currencies/catcoin/"}
          target="_blank"
          className="w-[130px] h-[52px]"
        >
          <Image width={130} height={52} src={"/coinmarketcap.png"} alt="" />
        </Link>
        <Link
          href={"https://www.coingecko.com/en/coins/catcoin"}
          target="_blank"
          className="w-[130px] h-[52px]"
        >
          <Image width={130} height={52} src={"/coingecko.png"} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default CopyCodeMainSection;

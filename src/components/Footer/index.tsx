import { Pancakeswap, Telegram, Twitter, Uniswap } from "../ui/icons";

const Footer = () => {
  return (
    <div className={`flex flex-col sm:flex-row justify-between p-2.5 md:p-5`}>
      <div className="">
        <p className="text-[20px] font-bold">CATCOIN</p>
      </div>
      <div className=" flex">
        <Twitter className="w-[30px] h-[30px] opacity-[0.7]" />
        <Telegram className="w-[30px] h-[30px] opacity-[0.7]" />
        <Uniswap className="w-[30px] h-[30px] opacity-[0.7]" />
        <Pancakeswap className="w-[30px] h-[30px] opacity-[0.7]" />
      </div>
    </div>
  );
};

export default Footer;

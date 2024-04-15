import { Image1, Image2, Image3 } from "../ui/icons";

const TokenBoxsMain = () => {
  return (
    <div className="text-center py-[30px] sm:py-[60px]">
      <div className="">
        <div className="">
          <p className="text-[52px] font-bold mb-[40px]">Tokenomics</p>
        </div>
        <div className="">
          <p>
            No Taxes, No Bullshit. It’s that simple. LP tokens are burnt, and
            contract ownership is renounced.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-[40px] gap-[2%] px-[20px]">
        <div className="col-span-1 bg-yellow-500 bg-opacity-20 py-[50px] px-[30px] rounded-[30px]">
          <div className=" flex justify-center flex-col items-center">
            <div className="w-[80px] h-[80px] bg-white rounded-[10px] flex items-center justify-center">
              <Image1 className="text-[24px] text-[#cca349]" />
            </div>
            <p className="text-[24px] font-medium mt-4">Total Supply</p>
          </div>
          <div className="mt-[30px]">
            <p>50,000,000,000,000,000</p>
          </div>
        </div>
        <div className="col-span-1 bg-yellow-500 bg-opacity-20 py-[50px] px-[30px] rounded-[30px]">
          <div className=" flex justify-center flex-col items-center">
            <div className="w-[80px] h-[80px] bg-white rounded-[10px] flex items-center justify-center">
              <Image2 className="text-[24px] text-[#cca349]" />
            </div>
            <p className="text-[24px] font-medium mt-4">Circulating Supply</p>
          </div>
          <div className="mt-[30px]">
            <p>50,000,000,000,000,000</p>
          </div>
        </div>
        <div className="col-span-1 bg-yellow-500 bg-opacity-20 py-[50px] px-[30px] rounded-[30px]">
          <div className=" flex justify-center flex-col items-center">
            <div className="w-[80px] h-[80px] bg-white rounded-[10px] flex items-center justify-center">
              <Image3 className="text-[24px] text-[#cca349]" />
            </div>
            <p className="text-[24px] font-medium mt-4">Liquidity locked</p>
          </div>
          <div className="mt-[30px]">
            <p>50,000,000,000,000,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenBoxsMain;

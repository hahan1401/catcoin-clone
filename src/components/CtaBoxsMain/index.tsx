const CtaBoxsMain = () => {
  return (
    <div className="py-[60px] max-w-[1280px]">
      <div className="grid  xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  px-[20px] gap-[8%]">
        <div className="col-span-1 bg-gradient-to-b shadow-md from-gradientFrom to-gradientTo rounded-[10px] ">
          <div className="h-[150px] w-[150px] rounded-[10px] bg-white shadow-md mt-[-50px] mx-auto mb-[50px] flex items-end p-[15px] text-[54px] font-light">
            <p className="leading-none">01</p>
          </div>
          <div className="px-[40px] pb-[40px]  text-center">
            <p className="text-[24px] font-medium">{"Utility"}</p>
            <p className="mt-[20px] max-w-[400px] mr-auto mb-[0px] ml-auto">
              {
                "As the true community coin , $CATs utility comes in the form of its strong community and thriving ecosystem of integrations."
              }
            </p>
          </div>
        </div>
        <div className="col-span-1 bg-gradient-to-b shadow-md from-gradientFrom to-gradientTo mt-10 sm:mt-0">
          <div className="text-center ">
            <div className="h-[150px] w-[150px] rounded-[10px] bg-white shadow-md mt-[-50px] mx-auto mb-[50px] flex items-end p-[15px] text-[54px] font-light">
              <p className="leading-none">02</p>
            </div>
            <div className="px-[40px] pb-[40px] text-center">
              <p className="text-[24px] font-medium">{"DISTRIBUTION"}</p>
              <p className="mt-[20px] max-w-[400px] mr-auto mb-[0px] ml-auto">
                {
                  "The distribution strategy of CAT is very Organic and can be verified on the blockchain. Anyone can invest any amount."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBoxsMain;

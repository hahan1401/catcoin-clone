import Link from "next/link";
import AnimateButton from "../AnimateButton";

const Header = () => {
  return (
    <div className={`flex flex-col sm:flex-row justify-between p-2.5 md:p-5`}>
      <Link href={"/"} className="text-xl font-bold md:py-3 md:px-4.5">
        CATCOIN
      </Link>
      <div className="flex gap-2.5 h-[45px] mt-2.5 md:mt-0 flex-1 sm:flex-0 justify-between sm:justify-end">
        <Link className="flex justify-between" href={"#"}>
          <AnimateButton title="How to Buy" />
        </Link>
        <Link className="flex justify-between" href={"#"}>
          <AnimateButton title="Tweet" />
        </Link>
      </div>
    </div>
  );
};

export default Header;

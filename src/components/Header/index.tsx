import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div
      className={`flex flex-col sm:flex-row justify-between p-2.5 md:p-5 ${styles.headerWrapper}`}
    >
      <Link href={"/"} className="text-xl font-bold md:py-3 md:px-4.5">
        CATCOIN
      </Link>
      <div className="flex gap-2.5 h-[45px] mt-2.5 md:mt-0 flex-1 sm:flex-0 justify-between sm:justify-end">
        <Link className="flex justify-between" href={"#"}>
          <button className="text-sm md:text-lg font-bold relative py-3 px-4.5">
            How to Buy{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="fa-solid fa-arrow-right"
            />
          </button>
        </Link>
        <Link className="flex justify-between" href={"#"}>
          <button className="text-sm md:text-lg font-bold relative py-3 px-4.5">
            Tweet
            <FontAwesomeIcon
              icon={faArrowRight}
              className="fa-solid fa-arrow-right"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

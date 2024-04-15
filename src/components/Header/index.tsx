import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={`flex justify-between p-5 ${styles.headerWrapper}`}>
      <Link href={"/"} className="text-xl font-bold py-3 px-4.5">
        CATCOIN
      </Link>
      <div className="flex gap-2.5 h-[45px]">
        <Link className="flex justify-between" href={"#"}>
          <button className="text-lg font-bold relative py-3 px-4.5">
            How to Buy{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="fa-solid fa-arrow-right"
            />
          </button>
        </Link>
        <Link className="flex justify-between" href={"#"}>
          <button className="text-lg font-bold relative py-3 px-4.5">
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

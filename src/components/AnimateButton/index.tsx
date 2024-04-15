import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

const AnimateButton = ({ title }: { title: ReactNode }) => {
  return (
    <button
      className={`text-sm md:text-lg font-bold relative py-3 px-4.5 flex gap-2.5 items-center ${styles.button}`}
    >
      {title}
      <FontAwesomeIcon
        icon={faArrowRight}
        className="fa-solid fa-arrow-right"
      />
    </button>
  );
};

export default AnimateButton;

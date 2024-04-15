"use client";

import { useState } from "react";
import { ArrowDown } from "../ui/icons";
import styles from "./select.module.scss";

const SelectCode = () => {
  const [optionValue, setOptionValue] = useState<string>(
    "0x59f4f336bf3d0c49dbfba4a74ebd2a6ace40539a"
  );

  return (
    <div
      className={`${styles.wrapper} rounded-3xl border-primary border-2 overflow-hidden bg-white relative flex items-center w-full max-w-[546px]`}
    >
      <div className="w-[165px] h-full relative">
        <ArrowDown className="absolute z-10 text-xl top-1/2 -translate-y-1/2 right-2" />
        <select
          name="select"
          id="select"
          onChange={(e) => {
            setOptionValue(e.target.value);
            navigator.clipboard.writeText(e.target.value).then(() => {
              alert(`Address Copied: ${e.target.value}`);
            });
          }}
          className="text-lg leading-5 font-bold p-2.5 pr-7 focus-visible:outline-none cursor-pointer"
        >
          <option
            value="0x59f4f336bf3d0c49dbfba4a74ebd2a6ace40539a"
            className="text-lg"
          >
            CA ADDRESS
          </option>
          <option
            value="7hWcHohzwtLddDUG81H2PkWq6KEkMtSDNkYXsso18Fy3"
            className="text-lg"
          >
            SOL ADDRESS
          </option>
        </select>
      </div>
      <input
        type="text"
        readOnly
        value={optionValue}
        onClick={(e) => {
          navigator.clipboard.writeText(optionValue).then(() => {
            alert(`Address Copied: ${optionValue}`);
          });
        }}
        className="flex-1 p-2.5 border-0 focus-visible:outline-none cursor-pointer"
      />
    </div>
  );
};

export default SelectCode;

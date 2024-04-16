"use client";
import { useState } from "react";
import { Plus } from "../ui/icons";
import styles from "./styles.module.scss";

const data = [
  {
    title: "How much Tax to buy ?",
    content:
      "You dont have to worry about purchasing with a specified slippage because we have no taxes; but, during volatile markets, you could need to employ slippage.",
  },
  {
    title: "What is the Ticker of Catcoin?",
    content: "Catcoin Ticker is $CAT",
  },
  {
    title: "How can I Buy Catcoin ( CAT) ?",
    content: "",
  },
];
const FaqMain = () => {
  const [check, setCheck] = useState(null);

  const toggle = (i: any) => {
    if (check === i) {
      return setCheck(null);
    }
    setCheck(i);
  };

  const [a, setA] = useState(false);

  return (
    <div className="py-[60px] max-w-[1280px]">
      <div className="mx-auto max-w-[600px]">
        <div className=" text-center">
          <p className="text-[52px] font-bold">FAQ</p>
          <p className="max-w-[300px] mx-auto mt-[20px] mb-[40px]">
            Have a question? Here's answers to the most commonly asked
            questions.
          </p>
        </div>
        {data?.map((item, i) => {
          return (
            <div
              key={i}
              className="bg-yellow-500 bg-opacity-20 rounded-[20px] my-[10px]"
              onClick={() => {
                toggle(i);
              }}
            >
              <div
                className={`flex justify-between p-[20px] cursor-pointer items-center `}
              >
                <div className="">
                  <p className="text-[20px] font-medium">{item?.title}</p>
                </div>
                <Plus
                  className={check === i ? `${styles.Icon}` : `${styles.Icon2}`}
                />
              </div>

              <div
                className={`${styles.content} ${
                  check === i ? "" : styles.closed
                }`}
              >
                {item?.content && <p className="p-5">{item?.content}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqMain;

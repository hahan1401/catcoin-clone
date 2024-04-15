import { ReactNode } from "react";
import ItemDefaul from "./ItemDefaul";
import "./styles.css";

const Slider = ({
  data,
  renderChildren,
  addPrefix,
  addSurfix,
}: {
  data: any[];
  addPrefix?: boolean;
  addSurfix?: boolean;
  renderChildren?: (src: string) => ReactNode;
}) => {
  return (
    <div className="slider">
      <div
        className="slide-track"
        style={{
          ...(addPrefix && addSurfix
            ? {
                backgroundImage:
                  "linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)",
              }
            : {}),
        }}
      >
        {data.map((item) => {
          return (
            <>
              {renderChildren ? (
                renderChildren(item)
              ) : (
                <ItemDefaul src={item} />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;

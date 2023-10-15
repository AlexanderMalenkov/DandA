import React from "react";

import styles from "./Slider.module.css";
import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className={styles.swiperWrapper}>
      <Marquee>
        <div
          style={{
            minWidth: 400,
            minHeight: 400,
            background: "red",
            border: "5px blue solid",
          }}
        >
          1
        </div>
        <div
          style={{
            minWidth: 400,
            minHeight: 400,
            background: "red",
            border: "5px yellow solid",
          }}
        >
          1
        </div>
        <div
          style={{
            minWidth: 400,
            minHeight: 400,
            background: "red",
            border: "5px yellow solid",
          }}
        >
          1
        </div>
        <div
          style={{
            minWidth: 400,
            minHeight: 400,
            background: "red",
            border: "5px yellow solid",
          }}
        >
          1
        </div>
      </Marquee>
    </div>
  );
};

export default Slider;

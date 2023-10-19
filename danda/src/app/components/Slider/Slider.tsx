import React from "react";
import styles from "./Slider.module.css";
import Marquee from "react-fast-marquee";
import SliderItem from "./SliderItem/SliderItem";
import img1 from "../../../../public/img/Slider/SliderFirst/img1.png";
import img2 from "../../../../public/img/Slider/SliderFirst/img2.png";
import img3 from "../../../../public/img/Slider/SliderFirst/img3.png";
import img4 from "../../../../public/img/Slider/SliderFirst/img4.png";
import img5 from "../../../../public/img/Slider/SliderFirst/img5.png";
import img6 from "../../../../public/img/Slider/SliderFirst/img6.png";

import img7 from "../../../../public/img/Slider/SliderSecond/img1.png";
import img8 from "../../../../public/img/Slider/SliderSecond/img2.png";
import img9 from "../../../../public/img/Slider/SliderSecond/img3.png";
import img10 from "../../../../public/img/Slider/SliderSecond/img4.png";
import img11 from "../../../../public/img/Slider/SliderSecond/img5.png";
import img12 from "../../../../public/img/Slider/SliderSecond/img6.png";
const Slider = ({ type }: { type: "first" | "second" }) => {
  return (
    <div className={styles.swiperWrapper}>
      <Marquee className={styles.marquee}>
        {type === "first" ? (
          <div className={styles.gridContainer}>
            <SliderItem
              image={img1}
              width="327"
              height="327"
              description="Potted flowers"
            />
            <SliderItem
              image={img2}
              width="356"
              height="475"
              description="Organic products"
            />
            <SliderItem
              image={img3}
              width="546"
              height="360"
              description="Seasonal Arrangements"
            />
            <SliderItem
              image={img4}
              width="356"
              height="475"
              description="Fresh Flowers"
            />
            <SliderItem
              image={img5}
              width="356"
              height="327"
              description="Floristry Services"
            />
            <SliderItem
              image={img6}
              width="356"
              height="410"
              description="Organic Delicacies"
            />
          </div>
        ) : (
          <div className={styles.gridContainer}>
            <SliderItem
              image={img7}
              width="327"
              height="327"
              description="Organic Wines"
            />
            <SliderItem
              image={img8}
              width="356"
              height="475"
              description="European delicacies"
            />
            <SliderItem
              image={img9}
              width="546"
              height="360"
              description="Meat delicacies"
            />
            <SliderItem
              image={img10}
              width="356"
              height="475"
              description="Coffee"
            />
            <SliderItem
              image={img11}
              width="356"
              height="327"
              description="Sweets and candies"
            />
            <SliderItem
              image={img12}
              width="356"
              height="410"
              description="Сhocolate delights"
            />
          </div>
        )}
      </Marquee>
    </div>
  );
};

export default Slider;

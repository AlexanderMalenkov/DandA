import React from "react";
import styles from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { FreeMode, Loop } from "swiper";

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
import SliderItem from "./SliderItem/SliderItem";

SwiperCore.use([FreeMode, Loop]);

const SliderMobile = ({ type }: { type: "first" | "second" }) => {
  return (
    <div className={styles.slider}>
      <Swiper slidesPerView={1.5} loop={true} freeMode={true}>
        {type === "first" ? (
          <>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <SliderItem
                image={img2}
                width="240"
                height="320"
                description="Organic products"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <SliderItem
                image={img1}
                width="240"
                height="240"
                description="Potted flowers"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <SliderItem
                image={img3}
                width="240"
                height="158"
                description="Seasonal Arrangements"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <SliderItem
                image={img4}
                width="240"
                height="320"
                description="Fresh Flowers"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <SliderItem
                image={img5}
                width="240"
                height="220"
                description="Floristry Services"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <SliderItem
                image={img6}
                width="240"
                height="275"
                description="Organic Delicacies"
              />
            </SwiperSlide>
          </>
        ) : (
          <>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <SliderItem
                image={img8}
                width="240"
                height="320"
                description="European delicacies"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <SliderItem
                image={img7}
                width="240"
                height="240"
                description="Organic Wines"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <SliderItem
                image={img9}
                width="240"
                height="158"
                description="Meat delicacies"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <SliderItem
                image={img10}
                width="240"
                height="320"
                description="Coffee"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <SliderItem
                image={img11}
                width="240"
                height="240"
                description="Sweets and candies"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <SliderItem
                image={img12}
                width="240"
                height="275"
                description="Сhocolate delights"
              />
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </div>
  );
};

export default SliderMobile;

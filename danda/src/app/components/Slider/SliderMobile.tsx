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
    <Swiper
      slidesPerView={1}
      loop={true}
      freeMode={true}
      className={styles.slider}
    >
      <SwiperSlide
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <SliderItem
          image={img1}
          width="327"
          height="327"
          description="Potted flowers"
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        //   marginRight: '80px'
        }}
      >
        <SliderItem
          image={img2}
          width="356"
          height="475"
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
          image={img3}
          width="546"
          height="360"
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
          width="356"
          height="475"
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
          width="356"
          height="327"
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
          width="356"
          height="410"
          description="Organic Delicacies"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderMobile;

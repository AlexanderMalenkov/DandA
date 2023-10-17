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
const Slider = () => {
  return (
    <div className={styles.swiperWrapper}>
      <Marquee className={styles.marquee}>
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
            description="Potted flowers"
          />
          <SliderItem
            image={img4}
            width="356"
            height="475"
            description="Potted flowers"
          />
          <SliderItem
            image={img5}
            width="356"
            height="327"
            description="Potted flowers"
          />
          <SliderItem
            image={img6}
            width="356"
            height="410"
            description="Potted flowers"
          />
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
            description="Potted flowers"
          />
          <SliderItem
            image={img4}
            width="356"
            height="475"
            description="Potted flowers"
          />
          <SliderItem
            image={img5}
            width="356"
            height="327"
            description="Potted flowers"
          />
          <SliderItem
            image={img6}
            width="356"
            height="410"
            description="Potted flowers"
          />
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
            description="Potted flowers"
          />
          <SliderItem
            image={img4}
            width="356"
            height="475"
            description="Potted flowers"
          />
          <SliderItem
            image={img5}
            width="356"
            height="327"
            description="Potted flowers"
          />
          <SliderItem
            image={img6}
            width="356"
            height="410"
            description="Potted flowers"
          />
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
            description="Potted flowers"
          />
          <SliderItem
            image={img4}
            width="356"
            height="475"
            description="Potted flowers"
          />
          <SliderItem
            image={img5}
            width="356"
            height="327"
            description="Potted flowers"
          />
          <SliderItem
            image={img6}
            width="356"
            height="410"
            description="Potted flowers"
          />
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
            description="Potted flowers"
          />
          <SliderItem
            image={img4}
            width="356"
            height="475"
            description="Potted flowers"
          />
          <SliderItem
            image={img5}
            width="356"
            height="327"
            description="Potted flowers"
          />
          <SliderItem
            image={img6}
            width="356"
            height="410"
            description="Potted flowers"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Slider;

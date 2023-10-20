import React from "react";
import { SliderItemProps } from "./SliderItem.props";
import Image from "next/image";
import styles from "./SliderItem.module.css";

const SliderItem = ({ description, width, height, image }: SliderItemProps) => {
  return (
    <div
      style={{
        // marginRight: "24px",
      }}
    >
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          position: "relative",
        }}
      >
        <img
          src={image.src}
          alt="image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit:
              "cover" /* Используйте object-fit, чтобы изображение заполнило родительский блок */,
          }}
        />
      </div>
      <p className={styles.sliderItemText}>{description}</p>
    </div>
  );
};

export default SliderItem;

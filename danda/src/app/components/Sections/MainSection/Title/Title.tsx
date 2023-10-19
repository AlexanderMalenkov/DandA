import React from "react";
import { TitleProps } from "./Title.types";
import styles from "./Title.module.css";

const Title = ({ text }: TitleProps) => {
  return (
    <h1 className={styles.title} data-aos="fade-up">
      {text}
    </h1>
  );
};

export default Title;

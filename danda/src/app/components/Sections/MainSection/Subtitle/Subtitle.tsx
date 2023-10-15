import React from "react";
import { TitleProps } from "../Title/Title.types";
import styles from "./Subtitle.module.css";

const Subtitle = ({ text }: TitleProps) => {
  return <h3 className={styles.subtitle}>{text}</h3>;
};

export default Subtitle;

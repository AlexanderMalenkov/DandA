import React from "react";
import { TitleProps } from "../Sections/MainSection/Title/Title.types";
import styles from "./ContentSubtitle.module.css";

const ContentSubtitle = ({ text, align }: TitleProps) => {
  return <h5 className={styles.subtitle}>{text}</h5>;
};

export default ContentSubtitle;

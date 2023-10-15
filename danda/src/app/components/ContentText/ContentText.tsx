import React from "react";
import { TitleProps } from "../Sections/MainSection/Title/Title.types";
import styles from "./ContentText.module.css";

const ContentText = ({ text }: TitleProps) => {
  return <p className={styles.text}>{text}</p>;
};

export default ContentText;

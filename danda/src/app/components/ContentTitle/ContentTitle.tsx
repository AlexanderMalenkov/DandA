import React from "react";
import styles from "./ContentTitle.module.css";
import { TitleProps } from "../Sections/MainSection/Title/Title.types";

const ContentTitle = ({ text, align }: TitleProps) => {
  return <h2 className={styles.title} style={{
    textAlign: align ?? 'center'
  }}>{text}</h2>;
};

export default ContentTitle;

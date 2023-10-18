import React from "react";
import { TitleProps } from "../Sections/MainSection/Title/Title.types";
import styles from "./ContentSubtitle.module.css";

const ContentSubtitle = ({ text, align, color, opacity }: TitleProps) => {
  return (
    <h5 className={styles.subtitle} style={{ color: color ?? "#1e1e1e",
     opacity: opacity ?? 1 }}>
      {text}
    </h5>
  );
};

export default ContentSubtitle;

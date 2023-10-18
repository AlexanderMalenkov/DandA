import React from "react";
import styles from "./ContentTitle.module.css";
import { TitleProps } from "../Sections/MainSection/Title/Title.types";

const ContentTitle = ({ text, align, color }: TitleProps) => {
  return (
    <h2
      className={styles.title}
      style={{
        textAlign: align ?? "center",
        color: color ?? "#1e1e1e",
      }}
    >
      {text}
    </h2>
  );
};

export default ContentTitle;

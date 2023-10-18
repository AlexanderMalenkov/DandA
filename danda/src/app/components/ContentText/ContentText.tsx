import React from "react";
import { TitleProps } from "../Sections/MainSection/Title/Title.types";
import styles from "./ContentText.module.css";

const ContentText = ({ text, color }: TitleProps) => {
  return (
    <p
      className={styles.text}
      style={{
        color: color ?? "#1e1e1e",
      }}
    >
      {text}
    </p>
  );
};

export default ContentText;

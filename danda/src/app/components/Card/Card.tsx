import React from "react";
import styles from "./Card.module.css";
import { CardProps } from "./Card.types";
import Image from "next/image";

export const Card = ({ title, text, icon }: CardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <div>
        {icon}
      </div>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
};

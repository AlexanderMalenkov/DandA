import React from "react";
import styles from "./FeedbackCard.module.css";
import ContentTitle from "../ContentTitle/ContentTitle";
import Image from "next/image";
import { FeedbackCardProps } from "./FeedbackCard.type";

const FeedbackCard = ({ image, name, job, title }: FeedbackCardProps) => {
  return (
    <div className={styles.feedbackCardWrapper}>
      <div>
        <ContentTitle text={title} />
      </div>
      <div className={styles.feedbackCardBrand}>
        <div className={styles.feedbackCardImage} draggable="false">
          <img src={image.src} alt="Profile photo" />
        </div>
        <div>
          <h6 className={styles.title}>{name}</h6>
          <h6 className={styles.subtitle}>{job}</h6>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

import React from "react";
import styles from "./FeedbackCard.module.css";
import ContentTitle from "../ContentTitle/ContentTitle";
import Image from "next/image";
import avatar1 from "./../../../../public/img/Avatars/Avatar1.png"

const FeedbackCard = () => {
  return (
    <div className={styles.feedbackCardWrapper}>
      <div>
        <ContentTitle text="This service has revolutionized my floral business. Their fresh flowers are unmatched in quality, and their organic produce section has expanded my offerings. Thank you!"/>
      </div>
      <div className={styles.feedbackCardBrand}>
       <div className={styles.feedbackCardImage} draggable="false">
        <Image src={avatar1} alt="Profile photo" />
       </div>
        <div>
            <h6 className={styles.title}>
                Name
            </h6>
            <h6 className={styles.subtitle}>
                Profession
            </h6>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

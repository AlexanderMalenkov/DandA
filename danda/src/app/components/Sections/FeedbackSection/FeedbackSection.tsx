import React from "react";
import pageStyles from "./../../../page.module.css";
import styles from "./FeedbackSection.module.css";
import FeedbackCard from "../../FeedbackCard/FeedbackCard";

const FeedbackSection = () => {
  return (
    <>
      <div className={pageStyles.center}>
        <div className={(pageStyles.wrapper, styles.feedbackWrapper)}><FeedbackCard /></div>
      </div>
    </>
  );
};

export default FeedbackSection;

import React from "react";
import pageStyles from "./../../../page.module.css";
import styles from "./FeedbackSection.module.css";
import FeedbackCard from "../../FeedbackCard/FeedbackCard";

import avatar1 from "./../../../../../public/img/Avatars/Avatar1.png";

const FeedbackSection = () => {
  return (
    <>
      <div className={pageStyles.center}>
        <div className={(pageStyles.wrapper, styles.feedbackWrapper)}>
          <FeedbackCard
            image={avatar1}
            name="Sarah"
            job="Floral Shop Owner"
            title="This service has revolutionized my floral business. Their fresh flowers are unmatched in quality, and their organic produce section has expanded my offerings. Thank you!"
          />
        </div>
      </div>
    </>
  );
};

export default FeedbackSection;

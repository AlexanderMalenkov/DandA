import React from "react";
import pageStyles from "./../../../page.module.css";
import styles from "./FeedbackSection.module.css";
import FeedbackCard from "../../FeedbackCard/FeedbackCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "../../../globals.css";

import avatar1 from "./../../../../../public/img/Avatars/Avatar1.png";
import avatar2 from "./../../../../../public/img/Avatars/Avatar2.png";
import avatar3 from "./../../../../../public/img/Avatars/Avatar3.png";
import classNames from "classnames";

SwiperCore.use([Autoplay, Pagination]);

const FeedbackSection = () => {
  return (
    <div
      className={pageStyles.center}
      style={{
        boxSizing: "border-box",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div className={pageStyles.wrapper}>
        <div
         className={styles.feedbackWrapper}
        >
          <Swiper
          className={styles.FeedbackSwiper}
            pagination
            loop
            slidesPerView={1}
            speed={1000}
            autoplay={{ delay: 5000 }}
          >
            <SwiperSlide className={styles.feedbackCardsContainer}>
              <FeedbackCard
                image={avatar1}
                name="Sarah"
                job="Floral Shop Owner"
                title="This service has revolutionized my floral business. Their fresh flowers are unmatched in quality, and their organic produce section has expanded my offerings. Thank you!"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.feedbackCardsContainer}>
              <FeedbackCard
                image={avatar2}
                name="Mark"
                job="Home garderer"
                title="This is my gardening haven. Their seeds and seedlings transformed my balcony into a lush garden, and their fresh produce is a culinary delight. I'm hooked."
              />
            </SwiperSlide>
            <SwiperSlide className={styles.feedbackCardsContainer}>
              <FeedbackCard
                image={avatar3}
                name="Maria"
                job="Floral Shop Owner"
                title="Fresh organic produce has elevated my restaurant's menu.Their global sourcing and prompt deliveries are a game-changer. Batiisoft is now indispensable to my culinary journey."
              />
            </SwiperSlide>
          </Swiper>
          <div className={styles.mobileSection}>
            <FeedbackCard
              image={avatar1}
              name="Sarah"
              job="Floral Shop Owner"
              title="This service has revolutionized my floral business. Their fresh flowers are unmatched in quality, and their organic produce section has expanded my offerings. Thank you!"
            />
            <FeedbackCard
              image={avatar2}
              name="Mark"
              job="Home garderer"
              title="This is my gardening haven. Their seeds and seedlings transformed my balcony into a lush garden, and their fresh produce is a culinary delight. I'm hooked."
            />
            <FeedbackCard
              image={avatar3}
              name="Maria"
              job="Floral Shop Owner"
              title="Fresh organic produce has elevated my restaurant's menu.Their global sourcing and prompt deliveries are a game-changer. Batiisoft is now indispensable to my culinary journey."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;

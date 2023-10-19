import React from "react";
import pageStyles from "./../../../page.module.css";
import styles from "./MediaSection.module.css";
import Image from "next/image";
import ContentTitle from "../../ContentTitle/ContentTitle";
import ContentSubtitle from "../../ContentSubtitle/ContentSubtitle";
import ContentText from "../../ContentText/ContentText";
import { MediaSectionProps } from "./MediaSection.type";
import { AnimationOnScroll } from "react-animation-on-scroll";

const MediaSection = ({
  image,
  title,
  subtitle,
  text1,
  text2,
}: MediaSectionProps) => {
  return (
    <div className={styles.dividerBlock}>
      <div className={pageStyles.center}>
        <div className={pageStyles.wrapper}>
          <div className={styles.mediaBlockContainer}>
            <AnimationOnScroll
              animateOut="animate__fadeOut"
              animateIn="animate__fadeIn"
            >
              <div className={styles.mediaImageContainer}>
                <img
                  src={image.src}
                  alt="flowers image"
                  className={styles.mediaImage}
                />
              </div>
            </AnimationOnScroll>

            <div className={styles.mediaTextContainer}>
              <div>
                <AnimationOnScroll
                  animateOut="animate__fadeOut"
                  animateIn="animate__fadeIn"
                >
                  <ContentSubtitle text={subtitle} opacity="0.4" />
                  <ContentTitle text={title} align="left" />
                </AnimationOnScroll>
              </div>
              <div className={styles.mediaText}>
                <AnimationOnScroll
                  animateOut="animate__fadeOut"
                  animateIn="animate__fadeIn"
                >
                  <ContentText text={text1} />
                  <ContentText text={text2} />
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;

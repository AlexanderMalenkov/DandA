import React from "react";
import pageStyles from "./../../../page.module.css";
import styles from "./MediaSection.module.css";
import Image from "next/image";
import ContentTitle from "../../ContentTitle/ContentTitle";
import ContentSubtitle from "../../ContentSubtitle/ContentSubtitle";
import ContentText from "../../ContentText/ContentText";
import { MediaSectionProps } from "./MediaSection.type";
import classNames from "classnames";

const MediaSectionReversed = ({
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
          <div className={classNames(styles.mediaBlockContainer, styles.reversed)}>
            <div className={styles.mediaImageContainer}>
              <Image
                src={image}
                alt="flowers image"
                className={styles.mediaImage}
              />
            </div>
            <div className={styles.mediaTextContainer}>
              <div>
                <ContentSubtitle text={subtitle} opacity="0.4" />
                <ContentTitle text={title} align="left" />
              </div>
              <div className={styles.mediaText}>
                <ContentText text={text1} />
                <ContentText text={text2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSectionReversed;

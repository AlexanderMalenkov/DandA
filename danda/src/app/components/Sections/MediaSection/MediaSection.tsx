import React from "react";
import pageStyles from "./../../../page.module.css";
import styles from "./MediaSection.module.css";
import media1 from "../../../../../public/img/media1.png";
import Image from "next/image";
import ContentTitle from "../../ContentTitle/ContentTitle";
import ContentSubtitle from "../../ContentSubtitle/ContentSubtitle";
import ContentText from "../../ContentText/ContentText";
import { MediaSectionProps } from "./MediaSection.type";

const MediaSection = ({
  image,
  title,
  subtitle,
  text1,
  text2,
  direction,
}: MediaSectionProps) => {
  return (
    <div className={styles.dividerBlock}>
      <div className={pageStyles.center}>
        <div className={pageStyles.wrapper}>
          <div className={styles.mediaBlockContainer}>
            <div>
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

export default MediaSection;

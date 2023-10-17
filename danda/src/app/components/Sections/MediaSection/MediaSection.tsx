import React from "react";
import pageStyles from "./../../../page.module.css";
import styles from "./MediaSection.module.css";
import media1 from "../../../../../public/img/media1.png";
import Image from "next/image";
import ContentTitle from "../../ContentTitle/ContentTitle";
import ContentSubtitle from "../../ContentSubtitle/ContentSubtitle";
import ContentText from "../../ContentText/ContentText";

const MediaSection = () => {
  return (
    <div className={styles.dividerBlock}>
      <div className={pageStyles.center}>
        <div className={pageStyles.wrapper}>
          <div className={styles.mediaWrapper}>
            <div className={styles.mediaImage}>
              <Image src={media1} alt="flowers image" layout="responsive"/>
            </div>
            <div className={styles.mediaTextBlock}>
              <div>
                <ContentSubtitle text="Flowers & Plants" />
                <div className={styles.mediaTitle}>
                  <ContentTitle
                    text="Sourcing flowers, plants, seeds, and organic produce has never been easier"
                    align="left"
                  />
                </div>
              </div>
              <div className={styles.mediaText}>
                <ContentText
                  text="D&A IMPEX SPÓŁKA is your go-to destination for all things botanical, 
                from cut flowers and indoor plants to seeds, herbs, and gardening essentials."
                />
                <ContentText
                  text="Whether you're a gardening enthusiast or a business owner,
                 we offer global access to a diverse range of botanical products, backed by convenient delivery options."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;

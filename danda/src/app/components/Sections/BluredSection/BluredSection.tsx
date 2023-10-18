import React from "react";
import styles from "./BluredSection.module.css";
import pageStyles from "./../../../page.module.css";
import ContentTitle from "../../ContentTitle/ContentTitle";
import ContentSubtitle from "../../ContentSubtitle/ContentSubtitle";
import ContentText from "../../ContentText/ContentText";
import mediaStyles from "../../Sections/MediaSection/MediaSection.module.css";
import classNames from "classnames";

const BluredSection = () => {
  return (
    <div className={styles.bluredMedia}>
      <div className={pageStyles.center}>
        <div className={pageStyles.wrapper}>
          <div className={styles.bluredContainer}>
            <div className={styles.titleContainer}>
              <div className={styles.titleBlock}>
                <ContentSubtitle text="client’s service" color="#FFFFFF" />
                <ContentTitle
                  color="#FFFFFF"
                  text="Discover our blooms and plants  easily with client’s support"
                  align="left"
                />
              </div>
              <div>
                <div
                  className={classNames(
                    mediaStyles.mediaText,
                    styles.titleBlock
                  )}
                >
                  <ContentText
                    color="#FFFFFF"
                    text="Our wide range of services encompasses sourcing, logistics,
                   compliance, and personal support, making it a one-stop destination for businesses and individuals seeking flowers and plants from across the
                    globe"
                  />
                  <ContentText
                    color="#FFFFFF"
                    text="Whether you need small quantities for retail or large-scale importation of botanicals, D&A has you covered."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BluredSection;

import React from "react";
import styles from "./LargeMediaSecton.module.css";
import pageStyles from "./../../../page.module.css";
import scrollDown from "./../../../components/Sections/MainSection/Subtitle/Subtitle.module.css";
import ContentText from "../../ContentText/ContentText";
import ContentSubtitle from "../../ContentSubtitle/ContentSubtitle";
import ContentTitle from "../../ContentTitle/ContentTitle";
import classNames from "classnames";

const LargeMediaSecton = () => {
  return (
    <div className={styles.largeMedia}>
      <div className={styles.largeMediaImage} />
      <div className={pageStyles.center}>
        <div className={classNames(pageStyles.wrapper, styles.mediaBlock)}>
          <ContentSubtitle text="Delicacies" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <ContentTitle
                text="We offer various high quality European delicacies, including various alcohol products."
                align="left"
              />
            </div>
            <div>
              <div className={styles.mediaText}>
                <ContentText
                  text="We offer a lot of French, Italian, Portuguese, Spanish and other European products with a wide variety of 
                food available from sweets, ham and cheeses to preserve products and wine. Maximum quality
                 in each type of ham with good prices."
                />
              </div>
              <div className={styles.mediaSubtext}>
                <ContentText
                  text="D&A IMPEX SPÓŁKA is also a distributor of premium chocolate, confectioneries and specialty foods from Europe.
               We pride ourselves 
              in offering exceptional products at reasonable prices."
                />
              </div>
              <h3 className={styles.scrollText}>scroll down for more</h3>;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeMediaSecton;

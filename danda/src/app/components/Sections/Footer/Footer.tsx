import React from "react";
import pageStyles from "./../../../page.module.css";
import styles from "./Footer.module.css";
import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#AFB496",
        }}
      >
        <div className={pageStyles.center}>
          <div className={pageStyles.wrapper}>
            <div className={styles.footerWrapper}>
              <Logo />
              <div className={styles.footerContainer}>
                <div>
                  <div className={styles.address}>
                    <h5 className={styles.footerTitle}>Address:</h5>
                    <h6 className={styles.footerSubtitle}>
                      02-001 Warszawa, ul. Aleje Jerozolimskie, nr 85, lok. 21,
                      Polska
                    </h6>
                  </div>
                  <div>
                    <h5 className={styles.footerTitle}>Contact:</h5>
                    <h6 className={styles.footerSubtitle}>+42 056 981 2922</h6>
                    <h6 className={styles.footerSubtitle}>
                      D&A-client@gmail.com
                    </h6>
                  </div>
                </div>
                <div className={styles.footerTextBlock}>
                  <div className={styles.footerText}>
                    <p className={styles.footerTextTitle}>
                      D AND A IMPEX SPÓŁKA
                    </p>
                  </div>
                  <div className={styles.footerText}>
                    <p className={styles.footerTextSubtitle}>
                      Tax number (NIP): 5272890789
                    </p>
                    <p className={styles.footerTextSubtitle}>
                      Reg number (KRS): 0000782587
                    </p>
                    <p className={styles.footerTextSubtitle}>
                      Region: 383146853
                    </p>
                  </div>
                  <p className={styles.footerTextSubtitle}>
                    <span className={styles.footerTextTitle}>Director:</span>{" "}
                    Mirko Mrđa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={pageStyles.center}>
        <div className={pageStyles.wrapper}>
          <div
            className={styles.subfooterBlock}
            style={{
              marginRight: "-40px",
            }}
          >
            <div>
              <p className={styles.subfooterText}>
                © 2023 Relume. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

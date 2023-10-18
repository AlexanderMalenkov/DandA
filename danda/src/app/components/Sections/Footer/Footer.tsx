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
              <div className={styles.footerContainer}>
                <div>
                  <Logo />
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
                  <div className={styles.footerIconsBlock}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22 12.3033C22 6.7467 17.5229 2.24219 12 2.24219C6.47715 2.24219 2 6.7467 2 12.3033C2 17.325 5.65684 21.4874 10.4375 22.2422V15.2116H7.89844V12.3033H10.4375V10.0867C10.4375 7.56515 11.9305 6.17231 14.2146 6.17231C15.3088 6.17231 16.4531 6.36882 16.4531 6.36882V8.8448H15.1922C13.95 8.8448 13.5625 9.62041 13.5625 10.4161V12.3033H16.3359L15.8926 15.2116H13.5625V22.2422C18.3432 21.4874 22 17.3252 22 12.3033Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 3.24219H8C5.23858 3.24219 3 5.48077 3 8.24219V16.2422C3 19.0036 5.23858 21.2422 8 21.2422H16C18.7614 21.2422 21 19.0036 21 16.2422V8.24219C21 5.48077 18.7614 3.24219 16 3.24219ZM19.25 16.2422C19.2445 18.0348 17.7926 19.4867 16 19.4922H8C6.20735 19.4867 4.75549 18.0348 4.75 16.2422V8.24219C4.75549 6.44954 6.20735 4.99768 8 4.99219H16C17.7926 4.99768 19.2445 6.44954 19.25 8.24219V16.2422ZM16.75 8.49219C17.3023 8.49219 17.75 8.04447 17.75 7.49219C17.75 6.93991 17.3023 6.49219 16.75 6.49219C16.1977 6.49219 15.75 6.93991 15.75 7.49219C15.75 8.04447 16.1977 8.49219 16.75 8.49219ZM12 7.74219C9.51472 7.74219 7.5 9.75691 7.5 12.2422C7.5 14.7275 9.51472 16.7422 12 16.7422C14.4853 16.7422 16.5 14.7275 16.5 12.2422C16.5027 11.0479 16.0294 9.90176 15.1849 9.05727C14.3404 8.21278 13.1943 7.73953 12 7.74219ZM9.25 12.2422C9.25 13.761 10.4812 14.9922 12 14.9922C13.5188 14.9922 14.75 13.761 14.75 12.2422C14.75 10.7234 13.5188 9.49219 12 9.49219C10.4812 9.49219 9.25 10.7234 9.25 12.2422Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17.1761 4.24219H19.9362L13.9061 11.0196L21 20.2422H15.4456L11.0951 14.6488L6.11723 20.2422H3.35544L9.80517 12.993L3 4.24219H8.69545L12.6279 9.35481L17.1761 4.24219ZM16.2073 18.6176H17.7368L7.86441 5.78147H6.2232L16.2073 18.6176Z"
                        fill="white"
                      />
                    </svg>
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
      <div className={styles.subfooterBlock}>
        <div>
          <p className={styles.subfooterBlock}>
            © 2023 Relume. All rights reserved.
          </p>
        </div>
        <div>
          <p className={styles.subfooterBlock}>Privacy Policy</p>
          <p className={styles.subfooterBlock}>Terms of Service</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

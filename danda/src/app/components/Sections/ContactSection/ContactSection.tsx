import React from "react";
import styles from "./ContactSection.module.css";
import pageStyles from "./../../../page.module.css";

const ContactSection = () => {
  return (
    <div className={styles.contactBackround} id="contacts">
      <div className={pageStyles.center}>
        <div className={pageStyles.wrapper}>
          <div className={styles.contactWrapper}>
            <div>
              <h3 className={styles.title}>Contact us</h3>
              <p className={styles.subtitle}>
                Please do not hesitate to contact us with any questions or
                concerns; we are here to assist you
              </p>
            </div>
            <div className={styles.contactCardContainer}>
              <div className={styles.contactCardWrapper}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                  >
                    <path
                      d="M19.9995 20L6.11951 7.5C6.69478 7.17941 7.34099 7.00754 7.99951 7H31.9995C32.658 7.00754 33.3042 7.17941 33.8795 7.5L19.9995 20ZM20.9995 23.135C20.7245 23.381 20.3685 23.517 19.9995 23.517C19.6305 23.517 19.2745 23.381 18.9995 23.135L4.20451 9.8C4.07474 10.187 4.00558 10.5918 3.99951 11V29C4.00003 29.6405 4.15436 30.2715 4.44951 30.84L11.4095 23.47C11.5435 23.322 11.7058 23.2023 11.8867 23.1179C12.0676 23.0334 12.2635 22.9859 12.463 22.9781C12.6625 22.9704 12.8615 23.0025 13.0484 23.0727C13.2353 23.1429 13.4064 23.2497 13.5515 23.3868C13.6966 23.5239 13.8128 23.6886 13.8935 23.8712C13.9741 24.0539 14.0175 24.2508 14.021 24.4504C14.0245 24.65 13.9882 24.8483 13.9141 25.0337C13.84 25.2191 13.7297 25.3878 13.5895 25.53L6.72951 32.79C7.13873 32.9281 7.56762 32.999 7.99951 33H31.9995C32.4314 32.999 32.8603 32.9281 33.2695 32.79L26.4095 25.53C26.2694 25.3878 26.159 25.2191 26.0849 25.0337C26.0108 24.8483 25.9745 24.65 25.978 24.4504C25.9816 24.2508 26.0249 24.0539 26.1056 23.8712C26.1862 23.6886 26.3025 23.5239 26.4476 23.3868C26.5927 23.2497 26.7637 23.1429 26.9506 23.0727C27.1375 23.0025 27.3365 22.9704 27.536 22.9781C27.7355 22.9859 27.9315 23.0334 28.1124 23.1179C28.2933 23.2023 28.4555 23.322 28.5895 23.47L35.5495 30.84C35.8447 30.2715 35.999 29.6405 35.9995 29V11C35.9935 10.5918 35.9244 10.187 35.7945 9.8L20.9995 23.135Z"
                      fill="#FFFDF6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.contactCardTitle}>Email</h4>
                  <p className={styles.contactCardSubtitle}>
                    Send us an email. We aim to respond to all inquiries within
                    8 hours
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <a
                    className={styles.contactCardLink}
                    href="mailto:D&A-client@gmail.com"
                  >
                    D&A-client@gmail.com
                  </a>
                </div>
              </div>
              <div className={styles.contactCardWrapper}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M14.2332 7.78245C14.8757 8.42466 15.5205 9.06503 16.1601 9.71016C17.2881 10.848 17.2903 12.1752 16.1667 13.3042C15.3608 14.1142 14.5596 14.9289 13.7379 15.7225C13.5208 15.9319 13.5036 16.1044 13.6136 16.3683C14.1531 17.664 14.9331 18.8114 15.8107 19.8904C17.5747 22.059 19.5696 23.9837 21.9487 25.4772C22.4583 25.797 23.0219 26.0299 23.5526 26.3179C23.8256 26.4659 24.0128 26.4188 24.2314 26.1929C25.0351 25.3621 25.8583 24.5495 26.6796 23.7356C27.7553 22.6697 29.1055 22.6675 30.1859 23.7377C31.5061 25.0455 32.8205 26.3596 34.1294 27.6783C35.2274 28.7844 35.2186 30.136 34.1144 31.2501C33.3684 32.003 32.58 32.7176 31.8746 33.5064C30.8478 34.6545 29.5598 35.0262 28.0864 34.945C25.9449 34.8273 23.9693 34.1168 22.0668 33.1921C17.8378 31.1368 14.2226 28.2884 11.1983 24.6884C8.96214 22.0268 7.11411 19.1301 5.89879 15.8584C5.31105 14.2761 4.89071 12.6554 5.01864 10.9412C5.09759 9.88341 5.4949 8.98352 6.27453 8.24154C7.11155 7.44436 7.9091 6.60587 8.73369 5.79517C9.81341 4.73336 11.164 4.73555 12.2463 5.79809C12.9144 6.45382 13.5712 7.12051 14.2332 7.78245Z"
                      fill="#FFFDF6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.contactCardTitle}>Phone</h4>
                  <p className={styles.contactCardSubtitle}>
                    Call our customer service hotline during our business hours
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <a
                    className={styles.contactCardLink}
                    href="tel:+42 056 981 2922"
                  >
                    +42 056 981 2922
                  </a>
                </div>
              </div>
              <div className={styles.contactCardWrapper}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                  >
                    <path
                      d="M20.7791 3.33203C14.1225 3.33203 8.70703 8.74753 8.70703 15.404C8.70703 23.665 19.5103 35.7925 19.9703 36.3047C20.4023 36.7859 21.1566 36.785 21.588 36.3047C22.0478 35.7925 32.8511 23.665 32.8511 15.404C32.851 8.74753 27.4356 3.33203 20.7791 3.33203ZM20.7791 21.4779C17.43 21.4779 14.7054 18.7532 14.7054 15.404C14.7054 12.0549 17.4301 9.33033 20.7791 9.33033C24.1281 9.33033 26.8528 12.055 26.8528 15.4041C26.8528 18.7532 24.1281 21.4779 20.7791 21.4779Z"
                      fill="#FFFDF6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.contactCardTitle}>Office</h4>
                  <p className={styles.contactCardSubtitle}>
                    Come visit us and chat with a customer service
                    representative
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <a
                    className={styles.contactCardLink}
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "02-001 Warszawa, ul. Aleje Jerozolimskie, nr 85, lok. 21"
                      );
                    }}
                  >
                    02-001 Warszawa, ul. Aleje Jerozolimskie, nr 85, lok. 21
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

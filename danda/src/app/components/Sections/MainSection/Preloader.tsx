import React from "react";
import styles from "./MainSection.module.css";

const Preloader = () => {
  return (
    <main data-aos="fade" data-aos-duration="10000">
      <div className={styles.main}>
        <div className={styles.titles}>
          <h1 className={styles.preloaderText}>D&A</h1>
        </div>
      </div>
    </main>
  );
};

export default Preloader;

import React from "react";
import styles from "./MainSection.module.css";
import Title from "./Title/Title";

const Preloader = () => {
  return (
    <main data-aos="fade" data-aos-duration="10000">
      <div className={styles.main}>
        <div className={styles.titles}>
          <Title text="D&A"/>
        </div>
      </div>
    </main>
  );
};

export default Preloader;

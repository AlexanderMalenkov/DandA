import React from "react";
import styles from "./MainSection.module.css";
import Title from "./Title/Title";
import Subtitle from "./Subtitle/Subtitle";

const MainSection = () => {
  return (
    <main>
      <div className={styles.main}>
        <div className={styles.titles}>
          <Title text="Bring nature to your doorstep" />
          <div className={styles.scrollButton}>
            <Subtitle text="scroll down" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;

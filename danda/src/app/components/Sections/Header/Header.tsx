import React from "react";
import pageStyles from "./../../../page.module.css";
import styles from "./Header.module.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div
        style={{
          position: "fixed",
          top: 22,
          left: 42,
        }}
      >
        <Logo />
      </div>

      <div
        style={{
          position: "fixed",
          top: 22,
          right: 42,
        }}
      >
        <p className={styles.headerText}>Contact us</p>
      </div>
    </header>
  );
};

export default Header;

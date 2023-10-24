"use client";

import React, { useEffect, useState } from "react";
import pageStyles from "./../../../page.module.css";
import styles from "./Header.module.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <header
      style={{
        mixBlendMode: "revert",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 22,
          left: 42,
        }}
      >
        <Logo />
      </div>

      <div
        style={{
          position: "absolute",
          top: 25,
          right: 42,
        }}
      >
        <a href="#contacts" className={styles.headerText}>
          Contact us
        </a>
      </div>
    </header>
  );
};

export default Header;

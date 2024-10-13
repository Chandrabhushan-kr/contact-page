import React from "react";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="do some coding logo" />
          </div>
          <div className={styles.nav}>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Contact</a>
          </div>
    </div>
  );
};

export default Navigation;

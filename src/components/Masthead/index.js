import React from "react";
import styles from "./styles.module.scss";

export default function Masthead() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.text}>
        <div className={styles.smallText}>Welcome to the</div>
        <div className={styles.title}>FruitMarket</div>
      </div>
    </div>
  );
}

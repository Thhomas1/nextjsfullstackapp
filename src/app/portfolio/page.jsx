import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Algunos ejemplos</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.items}>
          <span className={styles.title}>Ejemplos</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.items}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/application" className={styles.items}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

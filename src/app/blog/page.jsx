import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (<div className={styles.container}>
    <Link href="/testId" className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
        src="https://images.pexels.com/photos/4349739/pexels-photo-4349739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={400}
        height={250}
        className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
      </div>
    </Link>
  </div>
  );
};

export default Blog;

import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'

function Button({text,url}) {
  return (
    // !CAMBIAR ACA ABAJO {url}
    <Link href="">
    <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button
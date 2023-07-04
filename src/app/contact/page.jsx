import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pongamonos en contacto</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Nombre" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="Mensaje"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <Button
            url="https://www.linkedin.com/in/thomas-romero-05a508245/"
            text="Enviar"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;

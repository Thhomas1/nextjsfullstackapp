import React from "react";
import styles from "./page.module.css";
import Image from "next/image"
import Button from "@/components/Button/Button";

const About = () => {
  return ( <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/6804073/pexels-photo-6804073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      fill={true} 
      alt="" 
      className={styles.img}
      />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Stores</h1>
        <h2 className={styles.imgDesc}>Creando experiencias digitales galardonadas hechas a mano</h2>
      </div>
    </div>
    <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Quienes somos?</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Quae dolorem recusandae quos voluptate distinctio quaerat 
           praesentium soluta sit error quam eaque doloremque explicabo
            ab sunt sed, labore veniam enim nostrum, ullam numquam magni
             facere. Nulla, dolor beatae velit vitae, porro quo molestias
              assumenda cum ab nemo expedita accusamus
              <br />
              <br />
               Enim amet
               corrupti, aperiam cumque adipisci architecto dolore quos
                delectus laboriosam nulla autem impedit explicabo.
                 Tenetur eum facilis omnis pariatur minus alias iusto veniam,
                  quaerat et amet ducimus.</p>
      </div>
      <div className={styles.item}>
      <h1 className={styles.title}>Que hacemos?</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Quae dolorem recusandae quos voluptate distinctio quaerat 
           praesentium soluta sit error quam eaque doloremque explicabo
            ab sunt sed, labore veniam enim nostrum, ullam numquam magni
             facere. Nulla, dolor beatae velit vitae, porro quo molestias
              assumenda cum ab nemo expedita accusamus
              <br />
              <br /> - Websites dinamicas - Media queries Mobiles - Maestros del Script
              </p>
          <Button></Button>
      </div>
    </div>
  </div>
  );
};

export default About;

import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          El mejor diseño para tus productos digitales.
        </h1>
        <p className={styles.desc}>
          Convertimos tu idea en realidad por medio de un equipo profesional en
          la industria tech.
        </p>
        <Button url="/portfolio" text="Nuestros trabajos" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );

  // 1:45:45 Fetch data on the client side
  // Blog todavia queda Css pero porque lo cambiamos despues
}

// Si uno quiere usar imagenes externas <Image width={500} height={500} src="https://images.pexels.com/photos/12546141/pexels-photo-12546141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={styles.img} />

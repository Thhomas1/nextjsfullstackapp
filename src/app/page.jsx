import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image src={Hero} alt="" className={styles.img} />
    </div>
  );

  // 47:20 Next.js Image
  // Si uno quiere usar imagenes externas       <Image width={500} height={500} src="https://images.pexels.com/photos/12546141/pexels-photo-12546141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={styles.img} />

}

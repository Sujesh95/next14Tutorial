import Image from "next/image";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative thoughts agency.</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          deserunt aperiam adipisci iure est debitis eveniet.
        </p>
        <div className={styles.buttonsContainer}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brand}>
          <Image
            src="/brands.png"
            fill
            alt="brands image"
            className={styles.branding}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/hero.gif"
          alt="Home page image"
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default HomePage;

import Image from "next/image";
import styles from "./home.module.css";
import HydrationTest from "@/components/HydrationTest";
import dynamic from "next/dynamic";

const HydrationTestWithoutSSR = dynamic(
  () => import("@/components/HydrationTest"),
  { ssr: false }
);

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Added the below code to test hydration issue check */}
      {/* <HydrationTestWithoutSSR /> */}
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

import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.imgContainer}>
      <Image
        src="https://images.pexels.com/photos/18201732/pexels-photo-18201732/free-photo-of-ice-creams-in-glasses-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="About image"
        fill
      />
    </div>
  );
};

export default AboutPage;

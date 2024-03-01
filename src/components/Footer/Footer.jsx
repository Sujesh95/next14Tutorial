import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Sujeshdev</div>
      <div className={styles.text}>
        Sujesh creative thoughts agency &copy; All rights reserved
      </div>
    </div>
  );
};

export default Footer;

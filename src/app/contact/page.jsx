import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact page",
  description: "Next.js contact page",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/contact.png"
          alt="Contact image"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and surname" />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Phone number (Optional)" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

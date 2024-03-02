import Image from "next/image";
import styles from "./SinglePost.module.css";

const SinglePostPage = ({ params }) => {
  console.log(params);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/1774927/pexels-photo-1774927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Single post image"
          className={styles.image}
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/8088489/pexels-photo-8088489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Avatar image"
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Sujesh</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01-03-2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          molestias culpa minus rem qui natus a error, unde quo tenetur!
          Voluptatibus praesentium quam quidem rerum nemo odit doloribus
          veritatis modi?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

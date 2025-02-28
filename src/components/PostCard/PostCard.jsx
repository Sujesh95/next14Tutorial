import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          {post.img && (
            <Image
              src={post.img}
              alt="Post image"
              fill
              className={styles.image}
            />
          )}
        </div>
        <span className={styles.date}>01.03.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

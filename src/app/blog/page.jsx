import PostCard from "@/components/PostCard/PostCard";
import styles from "./Blog.module.css";

const BlogPage = ({ params, searchParams }) => {
  console.log(params, searchParams);
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;

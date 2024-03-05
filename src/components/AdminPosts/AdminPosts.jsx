import { getPosts } from "@/lib/data";
import styles from "./AdminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/server-actions";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <div className={styles.detail}>
              <Image
                src={post.img || "/noavatar.png"}
                width={50}
                height={50}
                alt="post image"
              />
              <span className={styles.postTitle}>{post.title}</span>
            </div>
            <form action={deletePost.bind(null, post.id)}>
              <button className={styles.postButton}>Delete</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default AdminPosts;

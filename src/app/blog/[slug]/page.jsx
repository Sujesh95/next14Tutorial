import Image from "next/image";
import styles from "./SinglePost.module.css";
import PostUser from "@/components/PostUser/PostUser";
import { Suspense } from "react";

const getSinglePost = async (slug) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch single post");
  }

  return response.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getSinglePost(slug);

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
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/8088489/pexels-photo-8088489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Avatar image"
            width={50}
            height={50}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01-03-2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;

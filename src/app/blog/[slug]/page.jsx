import Image from "next/image";
import styles from "./SinglePost.module.css";
import PostUser from "@/components/PostUser/PostUser";
import { Suspense } from "react";
import { getSinglePost } from "@/lib/data";

// FETCHING SINGLE POST VIA API ROUTES
const getData = async (slug) => {
  const response = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!response.ok) {
    throw new Error("Failed to fetch single post");
  }

  return response.json();
};

/* Fetching metadata for dynamic SEO */
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const { title, description } = await getSinglePost(slug);

  return {
    title,
    description,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // const post = await getSinglePost(slug);

  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {post.img && (
          <Image
            src={post.img}
            alt="Single post image"
            className={styles.image}
            fill
          />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
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

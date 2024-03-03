import PostCard from "@/components/PostCard/PostCard";
import styles from "./Blog.module.css";
import { getPosts } from "@/lib/data";

// FETCHING POSTS VIA API ROUTES
const getData = async () => {
  const response = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return response.json();
};

export const metadata = {
  title: "Posts page",
  description: "Next.js posts page",
};

const BlogPage = async ({ params, searchParams }) => {
  console.log(params, searchParams);

  // const posts = await getPosts();

  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;

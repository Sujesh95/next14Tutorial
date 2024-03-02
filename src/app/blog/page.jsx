import PostCard from "@/components/PostCard/PostCard";
import styles from "./Blog.module.css";

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return response.json();
};

const BlogPage = async ({ params, searchParams }) => {
  console.log(params, searchParams);

  const posts = await getPosts();

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

import styles from "./PostUser.module.css";

const getUser = async (userId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch single post");
  }

  return response.json();
};

const PostUser = async ({ userId }) => {
  const { name } = await getUser(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{name}</span>
    </div>
  );
};

export default PostUser;

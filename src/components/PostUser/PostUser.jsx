import { getSingleUser } from "@/lib/data";
import styles from "./PostUser.module.css";
import Image from "next/image";

// DUMMY PLACEHOLDER SINGLE USER
// const getUser = async (userId) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch single post");
//   }

//   return response.json();
// };

const PostUser = async ({ userId }) => {
  const { username, img } = await getSingleUser(userId);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={img ? img : "/noavatar.png"}
        alt="Avatar image"
        width={50}
        height={50}
      />

      <div className={styles.descContainer}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{username}</span>
      </div>
    </div>
  );
};

export default PostUser;

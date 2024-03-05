import { getUsers } from "@/lib/data";
import styles from "./AdminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/server-actions";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <div className={styles.user} key={user.id}>
            <div className={styles.detail}>
              <Image
                src={"/noavatar.png"}
                width={50}
                height={50}
                alt="user image"
              />
              <span className={styles.userTitle}>{user.username}</span>
            </div>
            <form action={deleteUser.bind(null, user.id)}>
              <button className={styles.userButton}>Delete</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default AdminUsers;

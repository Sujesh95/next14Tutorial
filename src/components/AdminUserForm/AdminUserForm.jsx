"use client";

import { addUser } from "@/lib/server-actions";
import styles from "./AdminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = ({ userId }) => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add new user</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="false">isAdmin?</option>
        <option value="false">User</option>
        <option value="true">Admin</option>
      </select>
      <button>Add user</button>
      {state?.error && state.error}
    </form>
  );
};

export default AdminUserForm;

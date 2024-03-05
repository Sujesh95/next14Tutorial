"use client";

import { addPost } from "@/lib/server-actions";
import styles from "./AdminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add new post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea
        rows={5}
        name="description"
        placeholder="description"></textarea>
      <button>Add post</button>
      {state?.error && state.error}
    </form>
  );
};

export default AdminPostForm;

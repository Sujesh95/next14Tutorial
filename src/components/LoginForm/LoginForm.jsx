"use client";

import { login } from "@/lib/server-actions";
import styles from "./LoginForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/");
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="user name" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login with credentials</button>
      {state?.error}
      <Link href="/register">
        {"Don't Have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;

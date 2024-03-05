import LoginForm from "@/components/LoginForm/LoginForm";
import { handleGithubLogin } from "@/lib/server-actions";
import styles from "./login.module.css";
import { auth } from "@/lib/auth";

const LoginPage = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {!session?.user && (
          <form action={handleGithubLogin}>
            <button className={styles.githubButton}>Login using github</button>
          </form>
        )}

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

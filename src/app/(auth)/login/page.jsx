import { handleGithubLogin } from "@/lib/server-actions";

const LoginPage = async () => {
  return (
    <form action={handleGithubLogin}>
      <button>Login using github</button>
    </form>
  );
};

export default LoginPage;

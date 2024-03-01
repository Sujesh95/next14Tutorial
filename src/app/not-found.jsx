import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <p>Can't find the page</p>
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default NotFound;

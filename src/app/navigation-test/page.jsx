"use client";

import Link from "next/link";

const { useRouter, useSearchParams, usePathname } = require("next/navigation");

const NavigationTestPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log({ pathname });

  console.log({ query: searchParams.get("test") });

  return (
    <>
      <Link href="/">Take me to home</Link>
      <button
        onClick={() => {
          router.push("/");
        }}>
        navigate to home
      </button>
    </>
  );
};

export default NavigationTestPage;

import Link from "next/link";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Links = () => {
  return links.map(({ title, path }) => (
    <Link key={title} href={path}>
      {title}
    </Link>
  ));
};

export default Links;

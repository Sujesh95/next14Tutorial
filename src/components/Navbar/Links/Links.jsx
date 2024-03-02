"use client";

import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import styles from "./Links.module.css";
import Image from "next/image";

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

const session = true;
const admin = true;

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} {...link} />
        ))}

        {session ? (
          <>
            {admin && <NavLink path="/admin" title="Admin" />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink path="/login" title="Login" />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="Menu button"
        width={30}
        height={30}
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.title} {...link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;

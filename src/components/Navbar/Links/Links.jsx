"use client";

import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import styles from "./Links.module.css";
import Image from "next/image";
import { handleGithubLogout } from "@/lib/server-actions";

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

const admin = true;

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} {...link} />
        ))}

        {session?.user ? (
          <>
            {session?.user?.isAdmin && <NavLink path="/admin" title="Admin" />}
            <form action={handleGithubLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
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

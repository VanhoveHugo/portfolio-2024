"use strict";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/components.module.css";

import { IoMenu, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export default function Layout({ path }) {
  useEffect(() => {
    let button = document.querySelector("#headerButton");
    let header = document.querySelector("header");
    button.addEventListener("click", () => {
      header.classList.toggle(styles.headerMobile);
    });

    let desktop = false;
    window.addEventListener("resize", (e) => {
      if (window.innerWidth <= 1000 && desktop === true) return !desktop;
      if (window.innerWidth >= 1000) {
        desktop = true;
        if (header.classList.contains(styles.headerMobile))
          return header.classList.remove(styles.headerMobile);
      }
    });
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className="contain-link">
          <Link href="/">Hugo</Link>
        </div>
        <nav className="contain-link">
          <Link href="/" className={path == "index" ? styles.active : ""}>
            Accueil
          </Link>
          <Link
            href="/portfolio"
            className={path == "portfolio" ? styles.active : ""}
          >
            Portfolio
          </Link>
        </nav>
        <ul>
          <li>
            <Link
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.linkedin.com/in/vanhovehugo/"
            >
              <IoLogoLinkedin />
              <span>Linekdin</span>
            </Link>
          </li>
          <li>
            <Link
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/VanhoveHugo"
            >
              <IoLogoGithub />
              <span>Github</span>
            </Link>
          </li>
        </ul>
      </header>
      <button id="headerButton" className={styles.headerButton}>
        <IoMenu />
      </button>
    </>
  );
}

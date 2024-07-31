"use strict";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components.module.css";
import { motion } from "framer-motion";

export default function Layout({ title, delay, desc, path, img }) {
  return (
    <motion.article
      initial={{ y: 250, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25, delay: delay }}
      className={styles.projet}
    >
      <Link href={`/portfolio/${path}`}>
        <figure>
          <img
            src={img}
            alt={`Une image de mon projet ${title.toLowerCase()}`}
          />
          <figcaption>Voir plus</figcaption>
        </figure>
        <h1>{title}</h1>
        <p>{desc}</p>
      </Link>
    </motion.article>
  );
}

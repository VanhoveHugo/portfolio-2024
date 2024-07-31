"use strict";
import Link from "next/link";
import styles from "../styles/projets.module.css";
import { motion } from "framer-motion";

import { BsFillGrid3X3GapFill } from "react-icons/bs";

export default function Layout({ title, children }) {
  return (
    <>
      <section className={styles.headline}>
        <h1>
          <Link
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/vanhovehugo/"
          >
            Hugo Vanhove
          </Link>
        </h1>
        <p>Développeur</p>
        <p>Étudiant chez MyDigitalSchool Paris</p>
      </section>
      <div className={styles.sectionHeader}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1>{title}</h1>
          <Link href="/portfolio">
            <BsFillGrid3X3GapFill /> Retour aux projets
          </Link>
        </motion.div>
      </div>
    </>
  );
}

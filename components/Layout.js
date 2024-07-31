'use strict'
import Header from './Header'
import styles from '../styles/components.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Layout({ children, path }) {
  return (
    <div className={styles.layout}>
      <Header path={path} />
      <motion.main className={styles.main}>
        <div className={styles.content}>{children}</div>
        <footer className={styles.footer}>
          <p>
            © 2021{" "}
            <Link
              rel="noreferrer noopener"
              className={styles.extern_link}
              target="_blank"
              href="https://www.linkedin.com/in/vanhovehugo/"
            >
              Hugo Vanhove
            </Link>
            , Tous droits réservés.
          </p>
        </footer>
      </motion.main>
    </div>
  );
}

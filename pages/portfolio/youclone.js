"use strict";
import Head from "next/head";
import styles from "../../styles/projets.module.css";
import { motion } from "framer-motion";

import Layout from "../../components/Layout";
import SectionHeader from "../../components/SectionHeader";
import SectionContainer from "../../components/SectionContainer";

import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hugo Vanhove | Youclone</title>
        <meta
          name="description"
          content="Le projet Youclone réalisé par Hugo Vanhove. Un projet dans lequel vous retrouverez une application web."
        />
      </Head>
      <Layout path="portfolio">
        <SectionHeader title="Youclone" />
        <SectionContainer>
          <div className={styles.text}>
            <h2>Application Web</h2>
            <p>
              Dans ce projet vous retrouverez le Front-End de l&apos;application
              web Youtube.
            </p>
            <div className={styles.infos}>
              <p>
                <span>Date</span>6 avr. 2021
              </p>
              <p>
                <span>Projet</span>Personnel
              </p>
              <p>
                <span>Durée</span>2 Jours
              </p>
              <p>
                <span>Technologie</span>TS, ES6, NextJS
              </p>
              <p>
                <Link
                  rel="noreferrer noopener"
                  href="https://youclone.vercel.app/"
                  target="_blank"
                  className={styles.cta}
                >
                  Voir le site
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles.iconcta}
                  href="https://github.com/VanhoveHugo/youclone"
                >
                  <IoLogoGithub />
                </Link>
              </p>
            </div>
            <h3>Fonctionnalité</h3>
            <p>- Intégration API REST</p>
          </div>
          <div className={styles.imgs}>
            <motion.div
              initial={{ y: 400, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              className={styles.img}
            >
              <img
                src="/img/youclone-website-1.webp"
                alt="Une image du site internet Youclone."
              />
            </motion.div>
            <motion.div
              initial={{ y: 400, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className={styles.img}
            >
              <img
                src="/img/youclone-website-2.webp"
                alt="Une image du site internet Youclone."
              />
            </motion.div>
          </div>
        </SectionContainer>
      </Layout>
    </>
  );
}

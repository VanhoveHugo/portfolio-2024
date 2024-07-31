"use strict";
import Head from "next/head";
import styles from "../styles/portfolio.module.css";

import Layout from "../components/Layout";
import Section from "../components/Section";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio de Hugo Vanhove - Développeur Fullstack Junior</title>
        <meta
          name="description"
          content="Le portfolio de Hugo Vanhove, vous pourrez voir tous les projets de ce jeune développeur."
        />
      </Head>

      <Layout path="portfolio">
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
        <section>
          <h2>Projets Web</h2>
          <div className={styles.grid}>
            <Section
              title="YouClone"
              desc="Interface de Youtube"
              path="youclone"
              delay=".1"
              img="/img/youclone.webp"
            />
            <Section
              title="MDAV"
              desc="Application web"
              path="maison-des-ados-virtuelle"
              delay=".4"
              img="/img/mdav.webp"
            />
          </div>
        </section>
      </Layout>
    </>
  );
}

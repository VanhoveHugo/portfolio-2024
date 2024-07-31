"use strict";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/index.module.css";
import Typewriter from "typewriter-effect";

import Layout from "../components/Layout";

import {
  IoDesktopOutline,
  IoCodeSlashOutline,
  IoFolderOpenOutline,
  IoCompassOutline,
  IoHelpBuoyOutline,
  IoRocketOutline,
  IoCloudUploadOutline,
  IoBrush,
  IoConstruct,
  IoBrowsers,
  IoLogoGithub,
} from "react-icons/io5";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <Head>
        <title>Hugo Vanhove - Développeur Fullstack Junior</title>
        <meta
          name="description"
          content="Portfolio de Hugo Vanhove, développeur Javascript spécialisé React et Node avec une aspiration pour la cyber sécurité."
        />
      </Head>
      <Layout path="index">
        <section className={styles.hero}>
          <h1>Hugo Vanhove</h1>
          <span>
            Développeur
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: ["Passionné ❤️", "Node", "React", "Next", "Electron"],
              }}
            />
          </span>
          <Link className={styles.cta} href="/CV_vanhove.pdf" download>
            Télécharger mon cv <IoCloudUploadOutline />
          </Link>
        </section>
        <section className={styles.services}>
          <div className={styles.flex3}>
            <div>
              <h3>Front-End</h3>
              <p>Next, React</p>
              <IoBrush />
            </div>
            <div>
              <h3>Back-End</h3>
              <p>Node, Magento</p>
              <IoConstruct />
            </div>
            <div>
              <h3>Application</h3>
              <p>Flutter, Electron</p>
              <IoBrowsers />
            </div>
          </div>
        </section>
        {/* <section className={styles.projets}>
          <h2>Dernier projet</h2>
          <article className={styles.flex2}>
            <div className={styles.left}>
              <header>
                <h3>Youclone</h3>
                <p>Voici le clone de Youtube que jai réalisé avec NextJS</p>
              </header>
              <footer>
                <Link href="/portfolio/youclone" className={styles.cta}>
                  Voir plus
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles.iconcta}
                  href="https://github.com/VanhoveHugo/youclone"
                >
                  <IoLogoGithub />
                </Link>
              </footer>
            </div>
            <div className={styles.right}>
              <figure>
                <Link
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://youclone.vercel.app/"
                >
                  <Image
                    width={500}
                    height={300}
                    src="/img/youclone-website-1.webp"
                    alt="Une image du site internet Youclone."
                  />
                </Link>
              </figure>
            </div>
          </article>
        </section>

        <section className={styles.process}>
          <h2>Pourquoi moi ?</h2>
          <div className={styles.flex3}>
            <div>
              <h3>Projets web</h3>
              <p>Landing page, site vitrine, application web.</p>
              <IoFolderOpenOutline />
            </div>
            <div>
              <h3>Développement web</h3>
              <p>Création de site, app sur-mesure, et unique.</p>
              <IoCodeSlashOutline />
            </div>
            <div>
              <h3>Référencement</h3>
              <p>Code optimiser pour le référencement naturel.</p>
              <IoCompassOutline />
            </div>
            <div>
              <h3>Cross-plateforme</h3>
              <p>Site compatible avec tous les supports web.</p>
              <IoDesktopOutline />
            </div>
            <div>
              <h3>Accompagnement</h3>
              <p>Gestion de projets, communication rapide.</p>
              <IoHelpBuoyOutline />
            </div>
            <div>
              <h3>Maintenance web</h3>
              <p>Hébérgement, accessibilité, MAJ de sécurité.</p>
              <IoRocketOutline />
            </div>
          </div>
        </section> */}
      </Layout>
    </>
  );
}

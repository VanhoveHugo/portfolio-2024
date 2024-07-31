'use strict'
import Head from 'next/head'
import styles from '../../styles/projets.module.css'
import { motion } from 'framer-motion'

import Layout from '../../components/Layout'
import SectionHeader from '../../components/SectionHeader'
import SectionContainer from '../../components/SectionContainer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hugo Vanhove | Maison Des Ados Virtuelle</title>
        <meta name="description" content="Le projet MDAV réalisé par Hugo Vanhove. Un projet dans lequel vous retrouverez une application web." />
      </Head>
      <Layout path="portfolio">
        <SectionHeader title="Maison Des Ados Virtuelle" />
        <SectionContainer>
          <div className={styles.text}>
            <h2>Application Web</h2>
            <p>Création d&apos;une application web pour l&apos;association Maison Des Ados Virtuelle.</p>
            <div className={styles.infos}>
              <p><span>Date</span>6 avr. 2021</p>
              <p><span>Projet</span>Stage</p>
              <p><span>Durée</span>2 mois</p>
              <p><span>Technologie</span>HTML, SASS, Javascript, Node.js</p>
            </div>
            <h3>Fonctionnalités</h3>
            <p>- Espace Administration</p>
            <p>- Système d&apos;inscription / connexion</p>
            <p>- Gestion de planning personnalisé</p>
            <p>- Réservation de rendez-vous</p>
            <p>- Blogging</p>
            <br />
            <h3>Librairies</h3>
            <p>- Express / Cors / Path</p>
            <p>- Multer / fs</p>
            <p>- Mongoose</p>
            <p>- socket.io</p>
            <br />
            <h3>Base de données</h3>
            <p>- MongoDB</p>
          </div>
          <div className={styles.imgs} >
            <motion.div 
              initial={{y: 400, opacity: 0}}
              animate={{y:0, opacity:1}}
              transition={{duration: .25,delay: .2}}
              className={styles.img} >
              <img src="/img/mdav-website-1.webp" alt="Une image du site internet que j'ai réalisé pour mon stage avec l'association Maison Des Ados Virtuelle" />
            </motion.div>
          </div>
        </SectionContainer>
        <SectionContainer>
          <div className={styles.text}>
            <h2>Espace Administration</h2>
            <p>Création de l&apos;application avec les langages : HTML, SASS et Node</p>
            <br />
            <h3>Modifications</h3>
            <p>- Rôles des utilisateurs</p>
            <p>- Les Partenaires ( qui sont afficher sur la page d&apos;accueil )</p>
            <p>- Gestion des candidatures pour le staff</p>
            <p>- Rédaction d&apos;article avec un <Link rel="noreferrer noopener" href="https://alex-d.github.io/Trumbowyg/" target="_blank" className={styles.extern_link}>WYSIWYG</Link></p>
            <p>- Blogging</p>
          </div>
          <div className={styles.imgs} >
            <div className={styles.img} >
                <img src="/img/mdav-website-2.webp" layout="responsive" alt="Une image de l'espace administrateur que j'ai réalisé pour le site de l'association Maison Des Ados Virtuelle" />
            </div>
            <div className={styles.img} >
                <img src="/img/mdav-website-3.webp" layout="responsive" alt="Une image de l'espace blogging que j'ai réalisé pour le site de l'association Maison Des Ados Virtuelle" />
            </div>
          </div>
        </SectionContainer>
      </Layout>
    </>
  )
}
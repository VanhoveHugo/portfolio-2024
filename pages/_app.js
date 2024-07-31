"use strict";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";

import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const url = `https://www.hugov.fr${router.route}`;

  useEffect(() => {
    console.log(
      `------------

Email:
vanhovehugo1@gmail.com

------------`
    );
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="canonical" href="https://www.hugov.fr" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="script-src 'self' 'unsafe-eval'"
        />
      </Head>
      <DefaultSeo
        openGraph={{
          type: "website",
          title: "Hugo Vanhove - Développeur Fullstack Junior",
          description:
            "Portfolio de Hugo Vanhove, développeur Javascript spécialisé React et Node avec une aspiration pour la cyber sécurité.",
          locale: "fr",
          url: url,
        }}
      />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;

import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "./navbar/navbar";
import Main from "./component/main";
import Skill from "./component/skill";
import Projects from "./component/projects";
import Footer from "./component/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Agung Firmansyah</title>
        <meta name="description" content="Agung's portofolio website" />
        <meta
          name="google-site-verification"
          content="p8ibS5xrc9VaOO8OrevBYujLOGsw35Uf0VMzyIMQAR4"
        />
        <meta
          name="keywords"
          content="fullstack web developer, software engineer, Agung Firmansyah, Purbalingga, Web Developer, Javascript, React, Node JS, Go, Python, Indonesia"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="author" content="Agung Firmansyah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white-wdew transisition duration-700 dark:bg-gray-700 font-poppins w-full relative">
        <Navbar />
        <Main />
        <Projects />
        <Skill />
        <Footer name="Agung Firmansyah" />
      </main>
    </>
  );
};

export default Home;

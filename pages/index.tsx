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
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
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

// import { Inter } from "next/font/google";
import Head from "next/head";
import Hero from "./hero";
import About from "./about";
import TechStack from "./techStack";
import Projects from "./projects";
import Contact from "./contact";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Agung Aji Pradana</title>
      </Head>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
}

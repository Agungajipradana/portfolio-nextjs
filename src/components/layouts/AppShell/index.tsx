import React from "react";
import Navbar from "../Navbar";
import Hero from "../../../pages/hero";
import About from "../../../pages/about";
import TechStack from "../../../pages/techStack";
import Projects from "../../../pages/projects";
import Footer from "../Footer";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <>
      <div className="max-h-min">
        <Navbar />
        {children}
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default AppShell;

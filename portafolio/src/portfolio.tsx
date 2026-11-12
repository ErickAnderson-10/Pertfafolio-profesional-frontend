import { useState } from "react";
import { Navbar } from "./main/components/Navbar";
import { Hero } from "./main/components/Hero";
import { About } from "./main/components/About";
import { Projects } from "./main/components/Projects";
import { Skills } from "./main/components/Skills";
import { Education } from "./main/components/Education";
import { Footer } from "./main/components/Footer";
import { Contact } from "./main/components/Contact";

export const Portfolio = () => {
  const [dark, setDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div
      className={
        dark
          ? "dark min-h-screen bg-[#0b0d12] text-slate-100"
          : "min-h-screen bg-white text-slate-900"
      }
    >
      <Navbar
        dark={dark}
        setDark={setDark}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

import Image from "next/image";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
     <Hero/>
     <Work/>
     <Skills/>
     <About/>
     <Contact/>
    </>
  );
}

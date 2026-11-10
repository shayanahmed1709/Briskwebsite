import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import ThreatIntel from "@/components/ThreatIntel";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="industries">
          <Industries />
        </section>
        <section id="threat-intelligence">
          <ThreatIntel />
        </section>
        <section id="case-studies">
          <CaseStudies />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

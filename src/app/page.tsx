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
    <main>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Industries />
      <ThreatIntel />
      <CaseStudies />
      <Contact />
    </main>
  );
}

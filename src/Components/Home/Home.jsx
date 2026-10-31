import Hero from "../Hero/Hero.jsx";
import AboutFeatureSection from "../About/AboutFeatureSection.jsx";
import Experience from "../Experience/Experience.jsx";
import ServicesSection from "./ServicesSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";
import TechnologyShowcase from "./TechnologyShowcase.jsx";
import ContactSection from "./ContactSection.jsx";

function Home() {
  return (
    <>
      <Hero />
      <AboutFeatureSection />
      <TechnologyShowcase />
      <Experience />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}

export default Home;
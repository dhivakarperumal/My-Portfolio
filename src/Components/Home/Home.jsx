import Hero from "../Hero/Hero.jsx";
import AboutFeatureSection from "../About/AboutFeatureSection.jsx";
import TechnologyShowcase from "./TechnologyShowcase.jsx";
import ProjectsSection from "../Projects/ProjectsSection.jsx";

function Home() {
  return (
    <>
      <Hero />
      <AboutFeatureSection />
      <TechnologyShowcase />
      <ProjectsSection />
    </>
  );
}

export default Home;
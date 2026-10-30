import AboutIntro from "./components/AboutIntro.jsx";
import AboutPrinciples from "./components/AboutPrinciples.jsx";
import "./About.css";

function AboutFeatureSection() {
  return (
    <section className="about-section" aria-label="About Dhivakar">
      <AboutIntro />
      <AboutPrinciples />
    </section>
  );
}

export default AboutFeatureSection;

import AboutIntro from "./components/AboutIntro.jsx";
import AboutPrinciples from "./components/AboutPrinciples.jsx";
import Skills from "./Skills.jsx";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <AboutIntro />
      <AboutPrinciples />
      <Skills />
    </section>
  );
}

export default About;

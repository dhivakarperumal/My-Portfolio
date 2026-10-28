import { ArrowRight, BriefcaseBusiness, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../public/Images/tab.png";

function About() {
  return (
    <section className="about-section">
      <div className="about-decoration about-decoration-left" />
      <div className="about-decoration about-decoration-right" />
      <div className="page-container about-content">
        <div className="about-copy">
          <p className="about-eyebrow">ABOUT ME</p>
          <h1>Crafting <span>Digital</span><br />Experiences That Matter</h1>
          <p className="about-description">
            I&apos;m Dhivakar P, a Full Stack Developer with 2.5 years of experience
            in creating scalable web and mobile applications. I love solving
            real-world problems through clean code, intuitive UI/UX and reliable
            backend systems.
          </p>
          <div className="about-actions">
            <a href="/resume.pdf" download className="about-primary-button">
              Download Resume <Download size={17} />
            </a>
            <Link to="/contact" className="about-secondary-button">
              More About Me <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-image-frame about-image-frame-back" />
          <div className="about-image-frame about-image-frame-main">
            <div className="about-image-glow" />
            <img src={logo} alt="Dhivakar P" />
          </div>
          <div className="about-opportunity">
            <span><Sparkles size={14} /></span>
            <strong>Open to<br />Opportunities</strong>
          </div>
          <blockquote className="about-quote">
            “Building ideas into digital reality through code, creativity and consistent learning.”
            <cite>— Dhivakar P</cite>
          </blockquote>
          <div className="about-experience-badge">
            <BriefcaseBusiness size={19} />
            <span><strong>2.5+</strong><small>Years Experience</small></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

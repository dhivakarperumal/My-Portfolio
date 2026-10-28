import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../public/Images/tab.png";

const highlights = [
  "2.5+ years of development experience",
  "Responsive web and mobile applications",
  "Clean, scalable, and maintainable code",
];

function AboutPreview() {
  return (
    <section className="about-preview-section">
      <div className="about-preview-grid" />
      <div className="about-preview-glow about-preview-glow-left" />
      <div className="about-preview-glow about-preview-glow-right" />
      <div className="page-container about-preview-content">
        <div className="about-preview-visual">
          <div className="about-preview-orbit" />
          <div className="about-preview-orbit about-preview-orbit-inner" />
          <div className="about-preview-card">
            <img src={logo} alt="Dhivakar P" />
          </div>
          <span className="about-preview-badge"><strong>2.5+</strong> Years Experience</span>
        </div>

        <div className="about-preview-copy">
          <p className="about-eyebrow">ABOUT ME</p>
          <h2>Building digital experiences with <span>purpose.</span></h2>
          <p>
            I&apos;m Dhivakar P, a Full Stack Developer who enjoys turning ideas
            into reliable, user-friendly products. I combine thoughtful design
            with practical engineering to build applications that make an impact.
          </p>
          <ul>
            {highlights.map((highlight) => (
              <li key={highlight}><CheckCircle2 size={18} /> {highlight}</li>
            ))}
          </ul>
          <div className="about-preview-actions">
            <Link to="/about" className="about-preview-primary">
              Discover More <ArrowRight size={17} />
            </Link>
            <a href="/resume.pdf" download className="about-preview-secondary">
              Resume <Download size={16} />
            </a>
          </div>
          <div className="about-preview-signature">Turning ideas into meaningful digital experiences.</div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;

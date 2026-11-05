import { ArrowRight, BriefcaseBusiness, Code2, Heart, Mail, Users } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../public/Images/tab.png";

const technologies = [
  { label: "React", icon: "R", className: "hero-tech-react" },
  { label: "Node.js", icon: "JS", className: "hero-tech-node" },
  { label: "React Native", icon: "RN", className: "hero-tech-native" },
  { label: "MySQL", icon: "DB", className: "hero-tech-mysql" },
];

const stats = [
  { value: "2.5+", label: "Years Experience", icon: BriefcaseBusiness },
  { value: "15+", label: "Projects Completed", icon: Code2 },
  { value: "10+", label: "Happy Clients", icon: Users },
  { value: "100%", label: "Commitment", icon: Heart },
];

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="hero-glow hero-glow-left" aria-hidden="true" />
      <div className="hero-glow hero-glow-right" aria-hidden="true" />

      <div className="page-container hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow"><span aria-hidden="true" /> Available for Freelance &amp; Full-time</p>
          <h1>Full Stack<br /><span>Developer</span></h1>
          <p className="hero-description">
            I build modern, responsive and scalable <strong>web &amp; mobile applications</strong>
            {" "}that solve real-world problems and create great user experiences.
          </p>

          <div className="hero-actions">
            <Link to="/#projects" className="hero-primary-button">
              <span>View My Work</span><ArrowRight size={19} />
            </Link>
            <Link to="/contact" className="hero-secondary-button">
              <Mail size={18} /><span>Contact Me</span>
            </Link>
          </div>

          <div className="hero-stats">
            {stats.map(({ value, label, icon: Icon }) => (
              <div className="hero-stat" key={label}>
                <Icon size={25} aria-hidden="true" />
                <div><strong>{value}</strong><span>{label}</span></div>
              </div>
            ))}
          </div>

          <div className="hero-socials">
            <span>Follow Me</span>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://wa.me/918940450960" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="mailto:dhivakarp305@gmail.com" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Developer tools and technologies">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="hero-profile">
            <div className="hero-profile-glow" aria-hidden="true" />
            <img src={logo} alt="Dhivakar P brand logo" />
          </div>
          <div className="hero-profile-caption">
            <Code2 size={26} aria-hidden="true" />
            <span><strong>Clean Code</strong><small>Modern Solutions</small></span>
          </div>
          <p className="hero-profile-note">Turning Ideas into<br />Real Products</p>
          {technologies.map((technology) => (
            <div className={`hero-tech-card ${technology.className}`} key={technology.label}>
              <strong>{technology.icon}</strong>
              <span>{technology.label}</span>
            </div>
          ))}
          <div className="hero-experience-badge">
            <span><BriefcaseBusiness size={21} aria-hidden="true" /></span>
            <p><strong>2.5+ Years</strong><small>of Experience</small></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
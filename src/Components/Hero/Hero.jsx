import { BriefcaseBusiness, Code2, Download, Heart, Mail, Users } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../public/Images/tab.png";

const technologies = [
  { label: "React", icon: "⚛", className: "hero-tech-react" },
  { label: "Express.js", icon: "ex", className: "hero-tech-express" },
  { label: "Node.js", icon: "⌘", className: "hero-tech-node" },
  { label: "MySQL", icon: "◆", className: "hero-tech-mysql" },
  { label: "TypeScript", icon: "TS", className: "hero-tech-typescript" },
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
      <div className="hero-grid-pattern" />
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="page-container hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">HELLO, I&apos;M</p>
          <h1>DHIVAKAR <span>P</span></h1>
          <h2>Full Stack Developer</h2>
          <p className="hero-description">
            Passionate Full Stack Developer with 2.5 years of experience building modern,
            responsive web and mobile applications using React.js, React Native, Node.js,
            Express.js and MySQL.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="hero-primary-button">
              <Mail size={17} /> Contact Me
            </Link>
          </div>

          <div className="hero-socials" aria-label="Social links">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://wa.me/918940450960" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="mailto:dhivakarp305@gmail.com" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Dhivakar P developer profile">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-profile">
            <img src={logo} alt="Dhivakar P logo" />
          </div>
          <div className="hero-profile-caption">Turning Ideas into<br />Real Applications</div>
          {technologies.map((technology) => (
            <div className={`hero-tech-card ${technology.className}`} key={technology.label}>
              <strong>{technology.icon}</strong>
              <span>{technology.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-stats">
          {stats.map(({ value, label, icon: Icon }) => (
            <div className="hero-stat" key={label}>
              <Icon size={28} />
              <div><strong>{value}</strong><span>{label}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
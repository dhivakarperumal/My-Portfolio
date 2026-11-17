import { ArrowRight, BriefcaseBusiness, Code2, Heart, Mail, Users } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { mobileAppCount } from "../../Datas/projectStats.js";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import heroImage from "../../../public/Images/Modern Portrait with Orange Desk Glow.png";

const technologies = [
  { label: "React", icon: SiReact, color: "#61dafb", className: "hero-tech-react" },
  { label: "JavaScript", icon: SiJavascript, color: "#f7df1e", className: "hero-tech-javascript" },
  { label: "Express.js", icon: SiExpress, color: "#f8fafc", className: "hero-tech-express" },
  { label: "Node.js", icon: SiNodedotjs, color: "#83cd29", className: "hero-tech-node" },
  { label: "React Native", icon: SiReact, color: "#61dafb", className: "hero-tech-native" },
  { label: "MongoDB", icon: SiMongodb, color: "#20c968", className: "hero-tech-mongodb" },
  { label: "MySQL", icon: SiMysql, color: "#00a4e4", className: "hero-tech-mysql" },
];

const stats = [
  { value: "2.10", label: "Years Experience", icon: BriefcaseBusiness },
  { value: mobileAppCount, label: "Mobile Apps", icon: Code2 },
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
          <p className="hero-name">Hi, I&apos;m <strong>Dhivakar P</strong></p>
          <h1>Full Stack <span>Developer</span></h1>
          <p className="hero-description">
            Passionate <strong>Full Stack Developer</strong> with 2+ years of
            experience developing responsive web and mobile applications using
            React.js, React Native and JavaScript. Skilled in Node.js, Express.js,
            MySQL, Firebase and REST API integration. Experienced in building
            user-friendly applications, admin dashboards and business management
            systems. Dedicated to writing clean code, solving problems and
            delivering high-quality applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary-button">
              <span>View My Work</span><ArrowRight size={19} />
            </a>
            <a href="#contact" className="hero-secondary-button">
              <Mail size={18} /><span>Contact Me</span>
            </a>
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
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://wa.me/918940450960" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="mailto:dhivakarp305@gmail.com" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Developer tools and technologies">
          <div className="hero-profile">
            <img src={heroImage} alt="Dhivakar P in a tech studio" />
          </div>
          <div className="hero-profile-caption">
            <Code2 size={26} aria-hidden="true" />
            <span><strong>Clean Code</strong><small>Modern Solutions</small></span>
          </div>
          <p className="hero-profile-note">Turning Ideas into<br />Real Products</p>
          {technologies.map(({ label, icon: Icon, color, className }) => (
            <div className={`hero-tech-card ${className}`} key={label}>
              <strong><Icon size={20} style={{ color }} aria-hidden="true" /></strong>
              <span>{label}</span>
            </div>
          ))}
          <div className="hero-experience-badge">
            <span><BriefcaseBusiness size={21} aria-hidden="true" /></span>
            <p><strong>2.10 Years</strong><small>of Experience</small></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
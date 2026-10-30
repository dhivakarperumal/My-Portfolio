import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Send,
  UsersRound,
  Zap,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../../../public/Images/tab.png";

const highlights = [
  { value: "20+", label: "Projects Completed", icon: Code2, accent: "orange" },
  { value: "15+", label: "Technologies", icon: UsersRound, accent: "blue" },
  { value: "2.5+", label: "Years Experience", icon: GraduationCap, accent: "pink" },
  { value: "100%", label: "Continuous Learning", icon: Zap, accent: "green" },
];

function AboutIntro() {
  return (
    <div className="about-hero">
      <div className="about-hero-corner about-hero-corner-top" aria-hidden="true" />
      <div className="about-hero-corner about-hero-corner-bottom" aria-hidden="true" />
      <div className="about-hero-dots" aria-hidden="true" />

      <div className="about-hero-shell">
        <div className="about-portrait-column">
          <div className="about-portrait-orbit" aria-hidden="true" />
          <div className="about-portrait-glow" aria-hidden="true" />
          <span className="about-portrait-note">Build<br />Develop<br />Innovate</span>
          <div className="about-portrait">
            <img src={logo} alt="Dhivakar P personal logo" />
          </div>
          <div className="about-portrait-experience">
            <span><BriefcaseBusiness size={19} /></span>
            <div><strong>2.5+</strong><small>Years Experience</small></div>
          </div>
        </div>

        <div className="about-hero-content">
          <p className="about-hero-eyebrow"><UsersRound size={14} /> ABOUT ME</p>
          <h1>Hi, I&apos;m <span>Dhivakar P</span></h1>
          <h2>Full Stack Developer</h2>
          <p className="about-hero-description">
            I&apos;m a passionate Full Stack Developer with <strong>2.5+ years</strong> of
            experience in building modern, responsive and scalable <b>web and mobile
            applications.</b> I love turning ideas into <b>real-world solutions</b> using
            the latest technologies.
          </p>

          <div className="about-hero-stats">
            {highlights.map(({ value, label, icon: Icon, accent }) => (
              <article className={`about-hero-stat about-hero-stat-${accent}`} key={label}>
                <span><Icon size={23} fill="currentColor" /></span>
                <strong>{value}</strong>
                <small>{label}</small>
              </article>
            ))}
          </div>

          <div className="about-hero-actions">
            <a href="/resume.pdf" download className="about-hero-resume">
              <Send size={17} fill="currentColor" /> Download Resume
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="about-hero-social">
              <FaGithub size={19} /> View GitHub
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="about-hero-social about-hero-linkedin">
              <FaLinkedin size={19} /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      <span className="about-hero-signature" aria-hidden="true">Let&apos;s<br />Build<br />Together</span>
    </div>
  );
}

export default AboutIntro;

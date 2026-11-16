import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Send,
  UsersRound,
  Zap,
} from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import resumePdf from "../../../Datas/DHIVAKAR P.pdf";
import { projectCount } from "../../../Datas/projectStats.js";
import logo from "../../../../public/Images/photo.jpg";
import PageContainer from "../../../CommenComponets/PageContainer.jsx";

const highlights = [
  { value: projectCount, label: "Projects Listed", icon: Code2, accent: "orange" },
  { value: "15+", label: "Technologies", icon: UsersRound, accent: "blue" },
  { value: "2.10", label: "Years Experience", icon: GraduationCap, accent: "pink" },
  { value: "100%", label: "Continuous Learning", icon: Zap, accent: "green" },
];

function AboutIntro() {
  return (
    <div className="about-hero">
      <div className="about-hero-corner about-hero-corner-top" aria-hidden="true" />
      <div className="about-hero-corner about-hero-corner-bottom" aria-hidden="true" />
      <div className="about-hero-dots" aria-hidden="true" />

      <PageContainer fullWidth className="about-hero-container">
        <div className="about-hero-shell">
          <div className="about-portrait-column">
            <div className="about-portrait-orbit" aria-hidden="true" />
            <div className="about-portrait-glow" aria-hidden="true" />
            <span className="about-portrait-note">Build<br />Develop<br />Innovate</span>
            <div className="about-portrait">
              <img src={logo} alt="Dhivakar P" />
            </div>
            <div className="about-portrait-experience">
              <span><BriefcaseBusiness size={19} /></span>
              <div><strong>2.10</strong><small>Years Experience</small></div>
            </div>
          </div>

          <div className="about-hero-content">
            <p className="about-hero-eyebrow"><UsersRound size={14} /> ABOUT ME</p>
            <h1>Hi, I&apos;m <span>Dhivakar P</span></h1>
            <h2>Full Stack Developer</h2>
            <p className="about-hero-description">
              I&apos;m a dedicated Full Stack Developer with <strong>2 years and 10 months of
              professional experience</strong>, specializing in creating modern web applications
              and cross-platform mobile solutions. I enjoy transforming business requirements into
              functional, scalable, and user-friendly applications. Experienced in React.js, React
              Native, JavaScript, Node.js, Express.js, MySQL, and Firebase. Passionate about building
              innovative digital products, optimizing application performance, and delivering
              seamless user experiences through clean and maintainable code.
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
              <a href={resumePdf} download="DHIVAKAR P.pdf" className="about-hero-resume">
                <Send size={17} fill="currentColor" /> Download Resume
              </a>
              <a href="https://github.com/dhivakarperumal" target="_blank" rel="noreferrer" className="about-hero-social">
                <FaGithub size={19} /> View GitHub
              </a>
              <a href="https://www.linkedin.com/in/dhivakar-perumal/" target="_blank" rel="noreferrer" className="about-hero-social about-hero-linkedin">
                <FaLinkedin size={19} /> Connect on LinkedIn
              </a>
              <a href="https://wa.me/918940450960" target="_blank" rel="noreferrer" className="about-hero-social">
                <FaWhatsapp size={19} /> WhatsApp
              </a>
              <a href="https://www.instagram.com/dhivakar/" target="_blank" rel="noreferrer" className="about-hero-social">
                <FaInstagram size={19} /> Instagram
              </a>
              <a href="https://www.facebook.com/fkdidf" target="_blank" rel="noreferrer" className="about-hero-social">
                <FaFacebookF size={19} /> Facebook
              </a>
            </div>
          </div>
        </div>

        <span className="about-hero-signature" aria-hidden="true">Let&apos;s<br />Build<br />Together</span>
      </PageContainer>
    </div>
  );
}

export default AboutIntro;

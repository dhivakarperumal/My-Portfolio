import { ArrowRight, CheckCircle2, Download, Mail, MapPin, Phone, GraduationCap, Cake } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../public/Images/tab.png";
import PageContainer from "../../CommenComponets/PageContainer";

const personalDetails = [
  { label: "Birthday", value: "30 May 2000", icon: Cake },
  { label: "City", value: "Tirupathur", icon: MapPin },
  { label: "Study", value: "Anna University", icon: GraduationCap },
  { label: "Age", value: "24 Years", icon: Cake },
  { label: "Degree", value: "MCA", icon: GraduationCap },
  { label: "Phone", value: "+91 8940450960", icon: Phone },
];

function AboutPreview() {
  return (
    <section className="about-preview-section">
      <div className="about-preview-grid" />
      <div className="about-preview-glow about-preview-glow-left" />
      <div className="about-preview-glow about-preview-glow-right" />
      <PageContainer className="about-preview-content">
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
          <h2>React JS Full Stack Developer <span>&amp; Frontend Developer</span></h2>
          <p>
            Full Stack Developer with 2.3 years of experience in developing responsive,
            interactive, and user-friendly web applications. Skilled in HTML5, CSS3,
            JavaScript, React.js, Bootstrap, and Tailwind CSS for frontend development.
            Experienced in backend development using Node.js and Express.js, with database
            management using MySQL and Firebase.
          </p>
          <p className="about-preview-secondary-copy">
            Proficient in REST API integration, reusable component development, and version
            control using Git and GitHub. Dedicated to writing clean, maintainable code,
            optimizing application performance, and building scalable applications with
            seamless user experiences.
          </p>
          <div className="about-preview-details">
            {personalDetails.map(({ label, value, icon: Icon }) => (
              <div className="about-preview-detail" key={label}>
                <Icon size={15} />
                <span><small>{label}</small><strong>{value}</strong></span>
              </div>
            ))}
            <div className="about-preview-detail about-preview-email">
              <Mail size={15} />
              <span><small>Email</small><strong>dhivakarp305@gmail.com</strong></span>
            </div>
          </div>
          <div className="about-preview-actions">
            <Link to="/about" className="about-preview-primary">
              Discover More <ArrowRight size={17} />
            </Link>
            <a href="/resume.pdf" download className="about-preview-secondary">
              Resume <Download size={16} />
            </a>
            <a href="https://wa.me/+918940450960?text=Hello%20there!" target="_blank" rel="noreferrer" className="about-preview-whatsapp">
              <Phone size={16} /> Chat with Me
            </a>
          </div>
          <div className="about-preview-signature">Turning ideas into meaningful digital experiences.</div>
        </div>
      </PageContainer>
    </section>
  );
}

export default AboutPreview;

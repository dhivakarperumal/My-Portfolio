import { useState } from "react";
import { ArrowUp, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../public/Images/tab.png";
import PageContainer from "./PageContainer";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "Backend Development",
  "UI/UX Design",
];

function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="portfolio-footer">
      <PageContainer fullWidth>
        <section className="portfolio-newsletter">
          <div className="portfolio-newsletter-icon">
            <Mail size={42} strokeWidth={1.7} />
          </div>
          <div className="portfolio-newsletter-copy">
            <h2>
              Stay <span>in the Loop</span>
            </h2>
            <p>Get updates on my latest projects, articles, and developer insights.</p>
          </div>
          <form className="portfolio-newsletter-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <div className="portfolio-email-field">
              <Mail size={20} />
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubmitted(false);
                }}
                placeholder="Enter your email address"
                required
              />
            </div>
            <button type="submit">
              {submitted ? "Subscribed" : "Subscribe"}
              <Send size={20} />
            </button>
          </form>
        </section>

        <section className="portfolio-footer-grid">
          <div className="portfolio-footer-brand">
            <Link to="/" className="portfolio-footer-logo">
              <img src={logo} alt="Dhivakar P" />
              <span>
                <strong>DHIVAKAR <em>P</em></strong>
                <small>FULL STACK DEVELOPER</small>
              </span>
            </Link>
            <p>Building modern web and mobile applications with passion and technology.</p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              {services.map((service) => <li key={service}>{service}</li>)}
            </ul>
          </div>

          <div>
            <h3>Follow Me</h3>
            <ul className="portfolio-social-links">
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn size={22} /> LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub size={22} /> GitHub</a></li>
              <li><a href="https://wa.me/918950678907" target="_blank" rel="noreferrer"><FaWhatsapp size={22} /> WhatsApp</a></li>
              <li><a href="mailto:hello@dhivakar.dev"><Mail size={22} /> Email</a></li>
            </ul>
          </div>
        </section>
      </PageContainer>

      <div className="portfolio-footer-bottom">
        <PageContainer fullWidth className="portfolio-footer-bottom-inner">
          <p>© 2020 Dhivakar P. All rights reserved.</p>
          <p>Designed &amp; Developed with <span aria-label="love">❤️</span> by Dhivakar P</p>
        </PageContainer>
      </div>

     
    </footer>
  );
}

export default Footer;

import { useState } from "react";
import { ArrowUp, Mail, MapPin, Phone, Send } from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../../public/Images/tab.png";
import PageContainer from "./PageContainer";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "Backend Development",
  "UI/UX Design",
];

const contactAddress = "122 Sollaikkolaimedu, Asanambattu Road, Nayakkaneri Post, Ambur Tk, Tirupathur Dist 635802";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/dhivakarperumal", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dhivakar-perumal/", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/dhivakar/", icon: FaInstagram },
  { label: "WhatsApp", href: "https://wa.me/918940450960", icon: FaWhatsapp },
  { label: "Facebook", href: "https://www.facebook.com/fkdidf", icon: FaFacebookF },
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
        <section className="portfolio-footer-grid">
          <div className="portfolio-footer-brand">
            <a href="#home" className="portfolio-footer-logo">
              <img src={logo} alt="Dhivakar P" />
              <span>
                <strong>DHIVAKAR <em>P</em></strong>
                <small>FULL STACK DEVELOPER</small>
              </span>
            </a>
            <p>Building modern web and mobile applications with passion and technology.</p>
            <div className="portfolio-footer-socials" aria-label="Social profiles">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
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
            <h3>Contact Me</h3>
            <ul className="portfolio-contact-links">
              <li><a href="mailto:dhivakarp305@gmail.com"><Mail size={18} /> dhivakarp305@gmail.com</a></li>
              <li><a href="tel:+918940450960"><Phone size={18} /> +91 8940450960</a></li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin size={18} /> {contactAddress}
                </a>
              </li>
            </ul>
          </div>

          <div className="portfolio-footer-newsletter">
            <div className="portfolio-newsletter-copy">
              <h3>Stay <span>in the Loop</span></h3>
              <p>Get updates on my latest projects, articles, and developer insights.</p>
            </div>
            <form className="portfolio-newsletter-form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="footer-email">Email address</label>
              <div className="portfolio-email-field">
                <Mail size={18} />
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
                <Send size={18} />
              </button>
            </form>
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

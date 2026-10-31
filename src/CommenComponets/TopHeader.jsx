import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import PageContainer from "./PageContainer";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedinIn, className: "top-header-linkedin" },
  { label: "GitHub", href: "https://github.com", icon: FaGithub, className: "top-header-github" },
  { label: "WhatsApp", href: "https://wa.me/918940450960", icon: FaWhatsapp, className: "top-header-whatsapp" },
  { label: "Email", href: "mailto:dhivakarp305@gmail.com", icon: Mail, className: "top-header-email" },
];

function TopHeader() {
  return (
    <motion.header
      className="top-header"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageContainer fullWidth className="top-header-inner">
        <div className="top-header-contact">
          <a href="tel:+918940450960">
            <span className="top-header-icon"><Phone size={17} /></span>
            <span><small>Call Me</small><strong>+91 8940450960</strong></span>
          </a>
          <a href="mailto:dhivakarp305@gmail.com">
            <span className="top-header-icon"><Mail size={17} /></span>
            <span><small>Email Me</small><strong>dhivakarp305@gmail.com</strong></span>
          </a>
          <span className="top-header-location">
            <span className="top-header-icon"><MapPin size={17} /></span>
            <span><small>Location</small><strong>Chennai, Tamil Nadu</strong></span>
          </span>
        </div>

        <div className="top-header-actions">
          <div className="top-header-socials">
            {socialLinks.map(({ label, href, icon: Icon, className }) => (
              <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" aria-label={label} className={className}>
                <Icon size={15} />
              </a>
            ))}
          </div>
          <a className="top-header-hire" href="mailto:dhivakarp305@gmail.com">
            Hire Me <Send size={16} />
          </a>
        </div>
      </PageContainer>
    </motion.header>
  );
}

export default TopHeader;

import { useState } from "react";
import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  UserRound,
  Zap,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import PageContainer from "../../CommenComponets/PageContainer.jsx";
import "./ContactSection.css";

const contactDetails = [
  {
    title: "Phone",
    value: "+91 8940450960",
    note: "Mon – Sat, 9 AM – 9 PM",
    href: "tel:+918940450960",
    icon: Phone,
    accent: "orange",
  },
  {
    title: "Email",
    value: "dhivakarp305@gmail.com",
    note: "I’ll respond as soon as I can",
    href: "mailto:dhivakarp305@gmail.com",
    icon: Mail,
    accent: "violet",
  },
  {
    title: "Location",
    value: "Tamil Nadu, India",
    note: "Available for remote work",
    icon: MapPin,
    accent: "blue",
  },
  {
    title: "Freelance",
    value: "Available for projects",
    note: "Let’s discuss your requirements",
    icon: CalendarDays,
    accent: "pink",
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: FaGithub, accent: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedinIn, accent: "linkedin" },
  { label: "WhatsApp", href: "https://wa.me/918940450960", icon: FaWhatsapp, accent: "whatsapp" },
  { label: "Email", href: "mailto:dhivakarp305@gmail.com", icon: SiGmail, accent: "email" },
];

const trustItems = [
  { title: "Your information", detail: "is safe with me", icon: ShieldCheck, accent: "orange" },
  { title: "Quick response", detail: "within 24 hours", icon: Zap, accent: "orange" },
  { title: "Open for freelance", detail: "& full-time opportunities", icon: BriefcaseBusiness, accent: "violet" },
];

function ContactSection() {
  const [messageLength, setMessageLength] = useState(0);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const emailSubject = subject || `Project enquiry from ${name}`;
    const emailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      projectType ? `Project type: ${projectType}` : "",
      "",
      message,
    ].filter((line) => line !== undefined).join("\n");

    window.location.href = `mailto:dhivakarp305@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    setFormStatus("Your email app should open with your message ready to send.");
  };

  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <div className="contact-decoration contact-decoration-left" aria-hidden="true" />
      <div className="contact-decoration contact-decoration-right" aria-hidden="true" />
      <div className="contact-dots contact-dots-left" aria-hidden="true" />
      <div className="contact-dots contact-dots-right" aria-hidden="true" />
      <div className="contact-flight-path" aria-hidden="true"><Send size={36} /></div>

      <PageContainer fullWidth className="contact-shell">
        <header className="contact-heading">
          <span className="contact-eyebrow"><Send size={14} /> Contact Me</span>
          <h2 id="contact-title">Let&apos;s Work <span>Together</span></h2>
          <p>
            Have a project idea, a question or just want to say hello?
            <br className="contact-heading-break" /> Feel free to reach out. I&apos;m
            always open to discussing new opportunities and interesting ideas.
          </p>
        </header>

        <div className="contact-layout">
          <div className="contact-sidebar">
            <div className="contact-details-grid">
              {contactDetails.map(({ title, value, note, href, icon: Icon, accent }) => {
                const content = (
                  <>
                    <span className="contact-detail-icon"><Icon size={22} /></span>
                    <span className="contact-detail-copy">
                      <strong>{title}</strong>
                      <span>{value}</span>
                      <small>{note}</small>
                    </span>
                  </>
                );

                return href ? (
                  <a
                    className={`contact-detail-card is-${accent}`}
                    href={href}
                    key={title}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={`contact-detail-card is-${accent}`} key={title}>
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="contact-social-row">
              <span className="contact-follow-label">Follow Me <i /></span>
              <div className="contact-social-links">
                {socialLinks.map(({ label, href, icon: Icon, accent }) => (
                  <a
                    className={`is-${accent}`}
                    href={href}
                    key={label}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                    aria-label={label}
                  >
                    <Icon size={21} />
                  </a>
                ))}
              </div>
            </div>

            <aside className="contact-idea-card">
              <div className="contact-laptop" aria-hidden="true">
                <div className="contact-laptop-screen">
                  <span><i /><i /><i /></span>
                  <Code2 size={54} />
                </div>
                <div className="contact-laptop-base" />
                <div className="contact-coffee" />
              </div>
              <div className="contact-idea-copy">
                <span>Let&apos;s turn your</span>
                <strong>Ideas into <em>Reality</em></strong>
                <p>I&apos;m excited to hear about your project and help you bring it to life!</p>
              </div>
            </aside>
          </div>

          <div className="contact-form-panel">
            <div className="contact-form-heading">
              <span><MessageSquare size={24} /></span>
              <div>
                <h3>Send Me a Message</h3>
                <p>Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="contact-field">
                <UserRound size={17} />
                <span className="sr-only">Your name</span>
                <input name="name" type="text" placeholder="Your Name *" autoComplete="name" required />
              </label>
              <label className="contact-field">
                <Mail size={17} />
                <span className="sr-only">Your email</span>
                <input name="email" type="email" placeholder="Your Email *" autoComplete="email" required />
              </label>
              <label className="contact-field">
                <Phone size={17} />
                <span className="sr-only">Your phone, optional</span>
                <input name="phone" type="tel" placeholder="Your Phone (Optional)" autoComplete="tel" />
              </label>
              <label className="contact-field">
                <BriefcaseBusiness size={17} />
                <span className="sr-only">Project type</span>
                <select name="projectType" defaultValue="">
                  <option value="" disabled>Project Type</option>
                  <option value="Web development">Web Development</option>
                  <option value="Mobile app">Mobile App</option>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Admin dashboard">Admin Dashboard</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label className="contact-field contact-field-full">
                <Mail size={17} />
                <span className="sr-only">Subject</span>
                <input name="subject" type="text" placeholder="Subject *" required />
              </label>
              <label className="contact-field contact-field-message">
                <MessageSquare size={17} />
                <span className="sr-only">Your message</span>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  maxLength={500}
                  required
                  onChange={(event) => setMessageLength(event.target.value.length)}
                />
                <span className="contact-character-count">{messageLength}/500</span>
              </label>
              <button className="contact-submit" type="submit">
                <Send size={19} /> Send Message
              </button>
              <p className="contact-form-note">
                Submitting opens your email app with the message ready to send.
              </p>
              <p className="contact-form-status" aria-live="polite">{formStatus}</p>
            </form>

            <div className="contact-trust-row">
              {trustItems.map(({ title, detail, icon: Icon, accent }) => (
                <div className={`contact-trust-item is-${accent}`} key={title}>
                  <Icon size={21} />
                  <span><strong>{title}</strong><small>{detail}</small></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default ContactSection;

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Cloud,
  Code2,
  Cpu,
  Database,
  Headphones,
  Handshake,
  Layers3,
  LayoutDashboard,
  Palette,
  Plug,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  UsersRound,
  Webhook,
} from "lucide-react";
import PageContainer from "../../CommenComponets/PageContainer.jsx";
import "./ServicesSection.css";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    tagline: "React & Modern UI",
    description:
      "Creating modern, interactive user interfaces with clean architecture, fluid animations, and high performance.",
    points: ["React.js & Next.js", "Tailwind CSS & Styling", "Modern UI/UX & Motion", "100% Mobile Responsive"],
    icon: LayoutDashboard,
    badge: Code2,
    accent: "orange",
  },
  {
    number: "02",
    title: "Backend Development",
    tagline: "Node & REST APIs",
    description:
      "Building secure, scalable server-side systems, RESTful APIs, and robust data persistence layers.",
    points: ["Node.js & Express.js", "Secure REST APIs & Auth", "JWT, OAuth & Security", "Scalable Server Architecture"],
    icon: Server,
    badge: Settings2,
    accent: "violet",
  },
  {
    number: "03",
    title: "Mobile App Development",
    tagline: "React Native & Android",
    description:
      "Crafting cross-platform mobile apps with smooth native performance, offline support, and intuitive gestures.",
    points: ["React Native Framework", "Android & iOS Apps", "Play Store Deployment", "Smooth 60fps Native UX"],
    icon: Smartphone,
    badge: Sparkles,
    accent: "blue",
  },
  {
    number: "04",
    title: "Full Stack Development",
    tagline: "End-to-End Solutions",
    description:
      "Delivering complete web applications from database modeling to production deployment and monitoring.",
    points: ["Full MERN & PERN Stack", "Frontend & Backend Sync", "Database Schema Design", "Production DevOps & Deploy"],
    icon: Layers3,
    badge: Cpu,
    accent: "cyan",
  },
  {
    number: "05",
    title: "Database & Cloud Services",
    tagline: "Cloud & Scalable DB",
    description:
      "Designing robust databases and cloud architectures optimized for high availability, security, and growth.",
    points: ["MySQL & PostgreSQL", "MongoDB & NoSQL Models", "Firebase & Supabase", "Cloud Hosting & CI/CD"],
    icon: Cloud,
    badge: Database,
    accent: "green",
  },
  {
    number: "06",
    title: "Ecommerce Solutions",
    tagline: "Online Stores & Pay",
    description:
      "Building full-featured ecommerce platforms with secure payment gateways and complete order workflows.",
    points: ["Product Catalog & Search", "Cart & Secure Checkout Flow", "Razorpay / Stripe Gateways", "Order Management System"],
    icon: ShoppingCart,
    badge: BarChart3,
    accent: "pink",
  },
  {
    number: "07",
    title: "API & System Integration",
    tagline: "Webhooks & Services",
    description:
      "Connecting external payment gateways, OTP, WhatsApp, SMS, CRM, and third-party APIs seamlessly.",
    points: ["Payment Gateway APIs", "WhatsApp & SMS Services", "Webhook Event Handling", "Third-Party Microservices"],
    icon: Plug,
    badge: Webhook,
    accent: "indigo",
  },
  {
    number: "08",
    title: "Admin Panel & Dashboards",
    tagline: "Analytics & Control",
    description:
      "Creating custom back-office panels with real-time analytics, user management, and fine-grained permissions.",
    points: ["Interactive Dashboard Panels", "Visual Reports & Charts", "User & Role Access Control", "Data Export & CRUD Actions"],
    icon: BarChart3,
    badge: ShieldCheck,
    accent: "amber",
  },
];

const promises = [
  { title: "Client Focused", description: "Your goals, my priority", icon: Handshake, accent: "orange" },
  { title: "Quality Code", description: "Clean & maintainable", icon: ShieldCheck, accent: "violet" },
  { title: "On-Time Delivery", description: "Committed to deadlines", icon: Rocket, accent: "blue" },
  { title: "Ongoing Support", description: "Always here to help", icon: Headphones, accent: "pink" },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description: "I listen closely to your requirements, target audience, and business goals.",
    icon: UsersRound,
    accent: "orange",
  },
  {
    number: "02",
    title: "Plan & Design",
    description: "Create structured wireframes, tech stack selection, and modern UI/UX.",
    icon: Palette,
    accent: "violet",
  },
  {
    number: "03",
    title: "Develop",
    description: "Build frontend & backend with clean, tested, and high-performance code.",
    icon: Code2,
    accent: "blue",
  },
  {
    number: "04",
    title: "Deliver & Support",
    description: "Deploy production release, optimize speed, and provide ongoing support.",
    icon: Rocket,
    accent: "pink",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="services-decoration services-decoration-left" aria-hidden="true" />
      <div className="services-decoration services-decoration-right" aria-hidden="true" />
      <div className="services-dots services-dots-left" aria-hidden="true" />
      <div className="services-dots services-dots-right" aria-hidden="true" />

      <PageContainer fullWidth className="services-shell">
        <header className="services-heading">
          <span className="services-eyebrow"><Settings2 size={15} /> My Services</span>
          <h2 id="services-title">What I <span>Do</span></h2>
          <p>
            I deliver end-to-end development services to help businesses
            <br className="services-heading-break" /> build modern, scalable, and high-performance web and mobile applications.
          </p>
        </header>

        {/* 4-Cards Per Row Grid Layout */}
        <div className="services-grid">
          {services.map(({ number, title, tagline, description, points, icon: Icon, badge: Badge, accent }, index) => (
            <article
              className={`service-card is-${accent}`}
              key={title}
              style={{ "--card-index": index }}
            >
              {/* Corner Ambient Glow */}
              <div className="service-card-ambient" aria-hidden="true" />

              {/* Card Header */}
              <div className="service-card-top">
                <div className="service-icon-box">
                  <Icon className="service-main-icon" size={22} strokeWidth={1.8} />
                </div>
                <div className="service-top-meta">
                  <span className="service-step-number">{number}</span>
                  <a
                    href="/contact"
                    className="service-corner-btn"
                    aria-label={`Discuss ${title}`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="service-card-body">
                <div className="service-tagline">
                  <Badge size={12} />
                  <span>{tagline}</span>
                </div>

                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>

                {/* Deliverables Checklist */}
                <div className="service-points-section">
                  <span className="service-points-label">Key Highlights</span>
                  <ul className="service-points-list">
                    {points.map((point) => (
                      <li key={point} className="service-point-item">
                        <span className="service-check-badge">
                          <Check size={11} strokeWidth={2.8} />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="service-card-footer">
                <a href="/contact" className="service-cta-btn">
                  <span>Discuss Project</span>
                  <ArrowRight size={14} className="service-cta-arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Value Promises */}
        <div className="services-promises" aria-label="What you can expect">
          {promises.map(({ title, description, icon: Icon, accent }) => (
            <div className={`services-promise is-${accent}`} key={title}>
              <span><Icon size={24} /></span>
              <div>
                <strong>{title}</strong>
                <small>{description}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Work Process */}
        <div className="services-process">
          <div className="services-process-heading">
            <span className="services-eyebrow"><Rocket size={14} /> My Work Process</span>
          </div>
          <div className="services-process-grid">
            {process.map(({ number, title, description, icon: Icon, accent }) => (
              <article className={`services-process-step is-${accent}`} key={number}>
                <span className="services-process-icon"><Icon size={27} /></span>
                <div className="services-process-copy">
                  <span className="services-process-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default ServicesSection;

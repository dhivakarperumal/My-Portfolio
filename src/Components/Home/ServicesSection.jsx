import {
  ArrowRight,
  BarChart3,
  Check,
  Cloud,
  Code2,
  Database,
  Headphones,
  Handshake,
  LayoutDashboard,
  Palette,
  Rocket,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  UsersRound,
} from "lucide-react";
import PageContainer from "../../CommenComponets/PageContainer.jsx";
import "./ServicesSection.css";

const services = [
  {
    title: "Frontend Development",
    description:
      "Creating modern, responsive and interactive user interfaces with clean code and great user experience.",
    points: ["React.js", "Tailwind CSS", "Modern UI/UX", "Responsive Design"],
    icon: LayoutDashboard,
    badge: Code2,
    accent: "orange",
  },
  {
    title: "Backend Development",
    description:
      "Building secure, scalable and efficient server-side applications with modern technologies.",
    points: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    icon: Database,
    badge: Settings2,
    accent: "violet",
  },
  {
    title: "Mobile App Development",
    description:
      "Developing cross-platform mobile applications with modern tools and smooth performance.",
    points: ["React Native", "Android & iOS", "App Deployment", "Performance"],
    icon: Smartphone,
    badge: Sparkles,
    accent: "blue",
  },
  {
    title: "Database & Cloud Services",
    description:
      "Designing robust databases and cloud solutions for availability, security and growth.",
    points: ["MySQL", "MongoDB", "Firebase", "Cloud Deployment"],
    icon: Database,
    badge: Cloud,
    accent: "green",
  },
  {
    title: "Ecommerce Solutions",
    description:
      "Building feature-rich ecommerce websites with secure payments and easy order management.",
    points: ["Product Management", "Cart & Checkout", "Payment Integration", "Admin Dashboard"],
    icon: ShoppingCart,
    badge: BarChart3,
    accent: "pink",
  },
  {
    title: "Admin Panel Development",
    description:
      "Creating custom admin panels to manage your business data with powerful features and analytics.",
    points: ["Dashboard Design", "Data Management", "Reports & Analytics", "User Management"],
    icon: BarChart3,
    badge: Settings2,
    accent: "red",
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
    description: "I listen to your requirements and understand your goals.",
    icon: UsersRound,
    accent: "orange",
  },
  {
    number: "02",
    title: "Plan & Design",
    description: "Create a structured plan and modern UI/UX design.",
    icon: Palette,
    accent: "violet",
  },
  {
    number: "03",
    title: "Develop",
    description: "Build with clean code and best practices.",
    icon: Code2,
    accent: "blue",
  },
  {
    number: "04",
    title: "Deliver & Support",
    description: "Deploy the solution and provide ongoing support.",
    icon: Rocket,
    accent: "pink",
  },
];

function ServicesSection() {
  return (
    <section className="services-section" aria-labelledby="services-title">
      <div className="services-decoration services-decoration-left" aria-hidden="true" />
      <div className="services-decoration services-decoration-right" aria-hidden="true" />
      <div className="services-dots services-dots-left" aria-hidden="true" />
      <div className="services-dots services-dots-right" aria-hidden="true" />

      <PageContainer fullWidth className="services-shell">
        <header className="services-heading">
          <span className="services-eyebrow"><Settings2 size={15} /> My Services</span>
          <h2 id="services-title">What I <span>Do</span></h2>
          <p>
            I provide end-to-end development services to help businesses
            <br className="services-heading-break" /> build modern, scalable and high-performance web and mobile applications.
          </p>
        </header>

        <div className="services-grid">
          {services.map(({ title, description, points, icon: Icon, badge: Badge, accent }) => (
            <article className={`service-tile is-${accent}`} key={title}>
              <div className="service-art" aria-hidden="true">
                <div className="service-art-window">
                  <span className="service-art-dots"><i /><i /><i /></span>
                  <Icon className="service-art-main-icon" strokeWidth={1.6} />
                  <span className="service-art-lines"><i /><i /><i /></span>
                </div>
                <span className="service-art-badge"><Badge size={24} /></span>
                <span className="service-art-spark service-art-spark-one" />
                <span className="service-art-spark service-art-spark-two" />
              </div>
              <div className="service-tile-body">
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                  {points.map((point) => (
                    <li key={point}><Check size={13} />{point}</li>
                  ))}
                </ul>
                <a className="service-tile-link" href="/contact" aria-label={`Discuss ${title}`}>
                  <ArrowRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="services-promises" aria-label="What you can expect">
          {promises.map(({ title, description, icon: Icon, accent }) => (
            <div className={`services-promise is-${accent}`} key={title}>
              <span><Icon size={24} /></span>
              <div><strong>{title}</strong><small>{description}</small></div>
            </div>
          ))}
        </div>

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

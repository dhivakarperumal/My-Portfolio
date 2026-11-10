import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Grid2X2,
  Layers3,
  Monitor,
  Settings,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import { myApps } from "../../Datas/myapp.js";
import myProjects from "../../Datas/myproject.js";
import PageContainer from "../../CommenComponets/PageContainer.jsx";
import "./ProjectsSection.css";

const featuredMobileTitles = [
  "Life Tracking App",
  "Gym & Fitness App",
  "Veetu Rusi Food User App",
  "Kavi Dry Fruits App",
];
const featuredWebIds = [7, 10, 18, 16];

function getImagePath(image = "") {
  return image
    .replace(/^assets\/images\/gallery\//, "/webapp/")
    .replace(/^assets\/MobileApp\//, "/MobileApp/");
}

function makeProjectCard(project, type, index) {
  const technologies = project.cardTechnologies
    ?? project.technology?.split("·").map((technology) => technology.trim()).filter(Boolean)
    ?? [];

  return {
    id: `${type}-${project.id ?? project.title ?? index}`,
    type,
    title: project.cardTitle || project.title,
    subtitle: project.subtitle || project.projectSub,
    image: getImagePath(project.images?.[0]),
    imageAlt: project.imageAlt || project.cardTitle || project.title,
    technologies,
    url: project.playStoreUrl || project.liveUrl,
    description: project.description || "A modern web and mobile application built with high performance and responsive design.",
  };
}

const allProjects = [
  ...myProjects.map((project, index) => makeProjectCard(project, "web", index)),
  ...myApps.map((project, index) => makeProjectCard(project, "mobile", index)),
];

const featuredProjects = [
  ...featuredMobileTitles
    .map((title) => myApps.find((project) => project.title === title))
    .filter(Boolean)
    .map((project, index) => makeProjectCard(project, "mobile", index)),
  ...myProjects
    .filter((project) => featuredWebIds.includes(project.id))
    .map((project, index) => makeProjectCard(project, "web", index)),
];

const filters = [
  { id: "all", label: "All", icon: Grid2X2 },
  { id: "web", label: "Web Apps", icon: Monitor },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "full-stack", label: "Full Stack", icon: Layers3 },
  { id: "ecommerce", label: "Ecommerce", icon: ShoppingCart },
  { id: "admin", label: "Admin Panel", icon: Settings },
];

function matchesFilter(project, filter) {
  const details = `${project.title} ${project.subtitle} ${project.description} ${project.technologies.join(" ")}`.toLowerCase();

  switch (filter) {
    case "web":
      return project.type === "web";
    case "mobile":
      return project.type === "mobile";
    case "full-stack":
      return /node|express|django|laravel/.test(details);
    case "ecommerce":
      return /e-commerce|ecommerce|shopping|store|grocery|food ordering/.test(details);
    case "admin":
      return /admin|dashboard|management|portal/.test(details);
    default:
      return true;
  }
}

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = useMemo(() => {
    const source = showAll ? allProjects : featuredProjects;
    return source.filter((project) => matchesFilter(project, activeFilter));
  }, [activeFilter, showAll]);

  return (
    <section id="projects" className="projects-showcase" aria-labelledby="projects-title">
      <div className="projects-showcase-grid" aria-hidden="true" />
      <div className="projects-showcase-glow projects-showcase-glow-left" aria-hidden="true" />
      <div className="projects-showcase-glow projects-showcase-glow-right" aria-hidden="true" />
      <div className="projects-decoration projects-decoration-left" aria-hidden="true" />
      <div className="projects-decoration projects-decoration-right" aria-hidden="true" />

      <PageContainer fullWidth className="projects-showcase-shell">
        <header className="projects-showcase-heading">
          <div className="projects-showcase-intro">
            <span className="projects-showcase-eyebrow"><Layers3 size={15} /> My Projects</span>
            <h2 id="projects-title">Featured <span>Projects</span></h2>
            <p>
              Here are some of my recent works. Each project is built with passion,
              modern<br className="projects-heading-break" /> technologies and
              real-world problem solving.
            </p>
          </div>
          <div className="projects-completed">
            <span><Layers3 size={23} /></span>
            <strong>20+</strong>
            <small>Projects Completed</small>
          </div>
        </header>

        <div className="projects-filters" aria-label="Filter projects">
          {filters.map(({ id, label, icon: Icon }) => (
            <button
              className={`projects-filter${activeFilter === id ? " is-active" : ""}`}
              type="button"
              key={id}
              onClick={() => setActiveFilter(id)}
              aria-pressed={activeFilter === id}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <article
              className={`project-card is-${project.type}`}
              key={project.id}
              style={{ "--project-index": index }}
            >
              {/* Image & Media Container */}
              <div className="project-card-media">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading={index > 3 ? "lazy" : "eager"}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                {/* Floating Badges */}
                <div className="project-card-badges">
                  <span className="project-badge-pill">
                    {project.type === "mobile" ? (
                      <>
                        <Smartphone size={13} className="project-badge-icon-mobile" />
                        <span>Mobile App</span>
                      </>
                    ) : (
                      <>
                        <Monitor size={13} className="project-badge-icon-web" />
                        <span>Web App</span>
                      </>
                    )}
                  </span>

                  {project.url && (
                    <span className="project-live-pill">
                      <span className="project-live-dot" />
                      Live
                    </span>
                  )}
                </div>

                {/* Hover Overlay Button */}
                {project.url && (
                  <div className="project-card-hover-overlay">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="project-hover-btn"
                    >
                      <span>{project.type === "mobile" ? "View App" : "View Live Site"}</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                )}
              </div>

              {/* Card Content Body */}
              <div className="project-card-body">
                <div className="project-card-main">
                  {project.subtitle && (
                    <span className="project-card-category">
                      {project.subtitle}
                    </span>
                  )}

                  <h3 className="project-card-title">
                    {project.title}
                  </h3>

                  {project.description && (
                    <p className="project-card-desc">
                      {project.description}
                    </p>
                  )}

                  <ul className="project-card-tags">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                    {project.technologies.length > 4 && (
                      <li className="project-tag-more">
                        +{project.technologies.length - 4}
                      </li>
                    )}
                  </ul>
                </div>

                {/* Card Action Footer */}
                <div className="project-card-footer">
                  <a
                    className="project-footer-link"
                    href={project.url || "/contact"}
                    target={project.url ? "_blank" : undefined}
                    rel={project.url ? "noreferrer" : undefined}
                    aria-label={`${project.url ? "Open" : "Contact about"} ${project.title}`}
                  >
                    <span>{project.url ? (project.type === "mobile" ? "Get App" : "Live Demo") : "Details"}</span>
                    <ArrowUpRight size={16} className="project-link-arrow" />
                  </a>

                  <span className="project-footer-type">
                    {project.type === "mobile" ? <Smartphone size={14} /> : <Monitor size={14} />}
                    <span>{project.type === "mobile" ? "React Native" : "Web"}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-more-wrap">
          <button
            type="button"
            className="projects-more-button"
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? "Show Featured Projects" : "View All Projects"}
            <ArrowRight size={17} />
          </button>
        </div>
      </PageContainer>
    </section>
  );
}

export default ProjectsSection;

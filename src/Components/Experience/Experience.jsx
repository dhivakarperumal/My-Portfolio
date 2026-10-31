import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  GraduationCap,
  Heart,
  MapPin,
  Smartphone,
  UsersRound,
} from "lucide-react";
import PageContainer from "../../CommenComponets/PageContainer";
import "./Experience.css";

const experiences = [
  {
    period: "2024 — Present",
    date: "Jan 2024 – Present",
    title: "Full Stack Developer",
    company: "QTechX Solutions",
    location: "Tamil Nadu, India",
    description:
      "Developing and maintaining web and mobile applications using React.js, React Native, Node.js and MySQL. Collaborating with clients to deliver scalable and user-friendly digital solutions.",
    technologies: ["React.js", "React Native", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    icon: BriefcaseBusiness,
    accent: "orange",
    mark: "Q",
  },
  {
    period: "2022 — 2023",
    date: "Jun 2022 – Dec 2023",
    title: "Frontend Developer",
    company: "Freelance Projects",
    location: "Remote",
    description:
      "Worked on multiple web projects for small businesses and startups. Focused on modern UI/UX, responsive design and performance optimization.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
    icon: Code2,
    accent: "violet",
    mark: "</>",
  },
  {
    period: "2021 — 2022",
    date: "Jan 2021 – May 2022",
    title: "React Native Developer",
    company: "Personal & Client Projects",
    location: "Tamil Nadu, India",
    description:
      "Developed Android mobile applications using React Native. Integrated APIs, implemented offline storage and built user-friendly mobile interfaces.",
    technologies: ["React Native", "JavaScript", "REST APIs", "AsyncStorage", "Firebase"],
    icon: Smartphone,
    accent: "blue",
    mark: "RN",
  },
  {
    period: "2020 — 2021",
    date: "Jun 2020 – Dec 2021",
    title: "Web Developer (Intern)",
    company: "Learning & Development",
    location: "Tamil Nadu, India",
    description:
      "Started my journey in web development. Learned core technologies, worked on academic and personal projects and built a strong foundation in frontend development.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git", "GitHub"],
    icon: GraduationCap,
    accent: "pink",
    mark: "✦",
  },
];

const technologyAccents = {
  "React.js": "cyan",
  "React Native": "cyan",
  "Node.js": "green",
  "Express.js": "slate",
  MySQL: "orange",
  "Tailwind CSS": "cyan",
  HTML5: "orange",
  CSS3: "cyan",
  JavaScript: "yellow",
  Bootstrap: "violet",
  "REST APIs": "violet",
  AsyncStorage: "slate",
  Firebase: "orange",
  Git: "pink",
  GitHub: "slate",
};

const highlights = [
  { value: "20+", label: "Projects completed", icon: Code2, accent: "violet" },
  { value: "15+", label: "Happy clients", icon: UsersRound, accent: "blue" },
  { value: "100%", label: "Client satisfaction", icon: Heart, accent: "pink" },
  { value: "Continuous", label: "Learning & growth", icon: GraduationCap, accent: "green" },
];

function Experience() {
  return (
    <section className="experience-page">
      <div className="experience-glow experience-glow-left" />
      <div className="experience-glow experience-glow-right" />
      <div className="experience-dots experience-dots-top" />
      <div className="experience-dots experience-dots-bottom" />

      <PageContainer fullWidth className="experience-container">
        <header className="experience-heading">
          <span className="experience-eyebrow">
            <BriefcaseBusiness size={15} />
            My experience
          </span>
          <h1>
            Professional <span>Experience</span>
          </h1>
          <p>
            My journey in web and mobile development—building real-world projects
            and creating digital solutions that make an impact.
          </p>
        </header>

        <div className="experience-layout">
          <aside className="experience-highlights" aria-label="Career highlights">
            <div className="experience-years">
              <span className="experience-years-icon">
                <BriefcaseBusiness size={25} />
              </span>
              <div>
                <strong>2.5+</strong>
                <span>Years of experience</span>
                <small>Full Stack Developer</small>
              </div>
            </div>

            <div className="experience-highlight-list">
              {highlights.map(({ value, label, icon: Icon, accent }) => (
                <div className="experience-highlight" key={label}>
                  <span className={`experience-highlight-icon is-${accent}`}>
                    <Icon size={20} />
                  </span>
                  <span>
                    <strong>{value}</strong>
                    <small>{label}</small>
                  </span>
                </div>
              ))}
            </div>

            <blockquote className="experience-quote">
              <span aria-hidden="true">“</span>
              Every project is a new opportunity to learn, improve and create
              something better.
              <i />
            </blockquote>
          </aside>

          <div className="experience-timeline">
            {experiences.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  className={`experience-card is-${item.accent}`}
                  key={item.title}
                >
                  <div className="experience-period">
                    <strong>{item.period.split(" — ")[0]}</strong>
                    <span>{item.period.split(" — ")[1]}</span>
                  </div>
                  <span className="experience-timeline-node" aria-hidden="true" />
                  <div className="experience-card-content">
                    <div className="experience-role-icon" aria-hidden="true">
                      <span>{item.mark}</span>
                      <Icon className="experience-role-icon-small" size={14} />
                    </div>
                    <div className="experience-card-main">
                      <div className="experience-card-topline">
                        <div>
                          <h2>{item.title}</h2>
                          <p className="experience-company">{item.company}</p>
                        </div>
                        <div className="experience-meta">
                          <span><CalendarDays size={14} />{item.date}</span>
                          <span><MapPin size={14} />{item.location}</span>
                        </div>
                      </div>
                      <p className="experience-description">{item.description}</p>
                      <ul className="experience-tags" aria-label="Technologies used">
                        {item.technologies.map((technology) => (
                          <li className={`is-${technologyAccents[technology] ?? "slate"}`} key={technology}>
                            {technology}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default Experience;

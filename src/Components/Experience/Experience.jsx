import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  GraduationCap,
  Heart,
  MapPin,
  UsersRound,
} from "lucide-react";
import PageContainer from "../../CommenComponets/PageContainer";
import { mobileAppCount, webAppCount } from "../../Datas/projectStats.js";
import "./Experience.css";

const experiences = [
  {
    period: "2024 — Present",
    date: "Jan 2024 – Present",
    title: "Front-End Developer / Full Stack Developer",
    company: "Q-Techx Solutions",
    location: "Tiruppattur, Tamil Nadu",
    description:
      "Develop responsive web and mobile applications with React.js, React Native, JavaScript, Tailwind CSS and Firebase. Build reusable component-based architectures with real-time database integrations, ensure cross-platform compatibility and performance, and create clean, user-friendly interfaces. Collaborate with the team using Agile practices and Git/GitHub.",
    technologies: ["React.js", "React Native", "JavaScript", "Tailwind CSS", "Firebase", "Git", "GitHub"],
    icon: BriefcaseBusiness,
    accent: "orange",
    mark: "Q",
  },
  {
    period: "2023 — 2023",
    date: "Sep 2023 – Nov 2023",
    title: "Frontend Web Developer",
    company: "Senchola University",
    description:
      "Contributed to an e-commerce website using React, completing tasks on schedule while strengthening frontend development skills. Also explored building a daily test-results reporting interface with HTML, CSS, JavaScript and React.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Python", "Django", "MySQL", "Bootstrap"],
    icon: Code2,
    accent: "violet",
    mark: "S",
  },
  {
    period: "2021 — 2023",
    date: "2021 – 2023",
    title: "Master of Computer Applications (MCA)",
    company: "K.S.R College of Engineering (Autonomous)",
    location: "Tiruchengode, Tamil Nadu",
    description: "GPA: 8.19",
    technologies: [],
    icon: GraduationCap,
    accent: "blue",
    mark: "MCA",
  },
  {
    period: "2018 — 2021",
    date: "2018 – 2021",
    title: "Bachelor of Science in Mathematics (B.Sc Mathematics)",
    company: "Mazharul Uloom College",
    location: "Ambur, Tamil Nadu",
    description: "GPA: 7.4",
    technologies: [],
    icon: GraduationCap,
    accent: "violet",
    mark: "B.Sc",
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
  { value: `${webAppCount} / ${mobileAppCount}`, label: "Web / Mobile Apps", icon: Code2, accent: "violet" },
  { value: "15+", label: "Happy clients", icon: UsersRound, accent: "blue" },
  { value: "100%", label: "Client satisfaction", icon: Heart, accent: "pink" },
  { value: "Continuous", label: "Learning & growth", icon: GraduationCap, accent: "green" },
];

function Experience() {
  return (
    <section id="experience" className="experience-page">
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
                <strong>2.10</strong>
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
                          {item.location && <span><MapPin size={14} />{item.location}</span>}
                        </div>
                      </div>
                      <p className="experience-description">{item.description}</p>
                      {item.technologies.length > 0 && (
                        <ul className="experience-tags" aria-label="Technologies used">
                          {item.technologies.map((technology) => (
                            <li className={`is-${technologyAccents[technology] ?? "slate"}`} key={technology}>
                              {technology}
                            </li>
                          ))}
                        </ul>
                      )}
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

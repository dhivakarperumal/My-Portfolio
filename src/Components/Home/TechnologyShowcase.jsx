import { Code2, Sparkles } from "lucide-react";
import {
  SiAndroid,
  SiAppstore,
  SiApple,
  SiBootstrap,
  SiCss,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import SkillCategoryCard from "./components/SkillCategoryCard.jsx";
import TechnologyOrbit from "./components/TechnologyOrbit.jsx";
import TechnologyStats from "./components/TechnologyStats.jsx";
import "./TechnologyShowcase.css";

const categories = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    highlight: "Development",
    description: "Creating beautiful, responsive and interactive user interfaces.",
    more: "+6 more",
    accent: "#a855f7",
    icon: "laptop",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#f4511e" },
      { name: "CSS3", icon: SiCss, color: "#1687f8" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "React.js", icon: SiReact, color: "#20d8f4" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#22d3ee" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#8b5cf6" },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    highlight: "Development",
    description: "Building secure, scalable and efficient server-side applications.",
    more: "+6 more",
    accent: "#fb4a67",
    icon: "server",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#7ccf36" },
      { name: "Express.js", icon: SiExpress, color: "#f8fafc" },
      { name: "Laravel", icon: SiLaravel, color: "#ff493d" },
      { name: "Python", icon: SiPython, color: "#f2c94c" },
      { name: "PHP", icon: SiPhp, color: "#8797e8" },
      { name: "REST API", icon: Code2, color: "#06d6e8" },
    ],
  },
  {
    id: "mobile",
    number: "03",
    title: "Mobile App",
    highlight: "Development",
    description: "Building cross-platform mobile apps with modern tools.",
    more: "+4 more",
    accent: "#6366f1",
    icon: "cloud",
    skills: [
      { name: "React Native", icon: SiReact, color: "#20d8f4" },
      { name: "Expo", icon: SiExpo, color: "#f8fafc" },
      { name: "Android", icon: SiAndroid, color: "#74c043" },
      { name: "iOS", icon: SiApple, color: "#f8fafc" },
      { name: "Firebase", icon: SiFirebase, color: "#ffb830" },
      { name: "App Store", icon: SiAppstore, color: "#13a5f4" },
    ],
  },
  {
    id: "tools",
    number: "04",
    title: "Database &",
    highlight: "Tools",
    description: "Working with databases, cloud services and development tools.",
    more: "+8 more",
    accent: "#06c9b0",
    icon: "settings",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#13b8ed" },
      { name: "MongoDB", icon: SiMongodb, color: "#20c968" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#70a9d8" },
      { name: "Git", icon: SiGit, color: "#f4511e" },
      { name: "GitHub", icon: SiGithub, color: "#f8fafc" },
      { name: "VS Code", icon: Code2, color: "#1687f8" },
    ],
  },
];

function TechnologyShowcase() {
  return (
    <section className="technology-showcase" aria-labelledby="technology-title">
      <div className="technology-showcase-grid" aria-hidden="true" />
      <div className="technology-showcase-glow technology-showcase-glow-left" aria-hidden="true" />
      <div className="technology-showcase-glow technology-showcase-glow-right" aria-hidden="true" />

      <div className="technology-showcase-shell">
        <header className="technology-showcase-heading">
          <p className="technology-showcase-eyebrow"><Sparkles size={14} /> MY SKILLS <Sparkles size={14} /></p>
          <h2 id="technology-title">Technologies <span>I Work With</span></h2>
          <p>
            I love working with modern technologies to build scalable, high-performance
            <br className="technology-heading-break" /> web and mobile applications.
          </p>
        </header>

        <div className="technology-showcase-layout">
          {categories.map((category) => (
            <SkillCategoryCard category={category} key={category.id} />
          ))}
          <TechnologyOrbit />
        </div>

        <TechnologyStats />
      </div>
    </section>
  );
}

export default TechnologyShowcase;

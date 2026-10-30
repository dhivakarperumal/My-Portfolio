import { Heart, Lightbulb, Rocket, Target } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "My Goal",
    description: "To build impactful digital solutions that solve real problems and create value for users.",
    icon: Target,
    accent: "orange",
  },
  {
    number: "02",
    title: "My Approach",
    description: "Clean code, modern design, user-centric development and continuous learning.",
    icon: Rocket,
    accent: "purple",
  },
  {
    number: "03",
    title: "What I Do",
    description: "Develop web and mobile applications with modern technologies, focusing on performance and great user experience.",
    icon: Lightbulb,
    accent: "blue",
  },
  {
    number: "04",
    title: "My Passion",
    description: "Exploring new technologies, building creative projects and turning ideas into reality.",
    icon: Heart,
    accent: "pink",
  },
];

function AboutPrinciples() {
  return (
    <div className="about-principles-shell">
      <div className="about-principles">
        {principles.map(({ number, title, description, icon: Icon, accent }) => (
          <article className={`about-principle about-principle-${accent}`} key={number}>
            <span className="about-principle-number">{number}</span>
            <span className="about-principle-icon"><Icon size={25} fill="currentColor" /></span>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="about-principle-underline" />
          </article>
        ))}
      </div>
    </div>
  );
}

export default AboutPrinciples;

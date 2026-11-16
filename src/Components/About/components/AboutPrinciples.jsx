import { Heart, Lightbulb, Rocket, Target } from "lucide-react";
import PageContainer from "../../../CommenComponets/PageContainer.jsx";

const principles = [
  {
    number: "01",
    title: "My Vision",
    description: "Building meaningful digital experiences that solve real-world problems and make technology more useful for everyone.",
    icon: Target,
    accent: "orange",
  },
  {
    number: "02",
    title: "My Philosophy",
    description: "Writing clean, scalable code with modern technologies, thoughtful design, and a continuous learning mindset.",
    icon: Lightbulb,
    accent: "purple",
  },
  {
    number: "03",
    title: "My Expertise",
    description: "Developing powerful web and mobile applications using React.js, React Native, Node.js, Express.js, and MySQL.",
    icon: Rocket,
    accent: "blue",
  },
  {
    number: "04",
    title: "My Passion",
    description: "Turning creative ideas into innovative products, exploring emerging technologies, and bringing digital experiences to life.",
    icon: Heart,
    accent: "pink",
  },
];

function AboutPrinciples() {
  return (
    <PageContainer fullWidth className="about-principles-shell">
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
    </PageContainer>
  );
}

export default AboutPrinciples;

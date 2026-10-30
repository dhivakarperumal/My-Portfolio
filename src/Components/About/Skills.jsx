import { Code2, Database, GitBranch, Layers3, Server } from "lucide-react";

const skillGroups = [
  {
    id: "frontend",
    title: "Frontend Development",
    kicker: "01 / BUILDING THE INTERFACE",
    icon: Code2,
    accent: "#a78bfa",
    skills: [["HTML5", 95], ["CSS3 / SCSS", 85], ["JavaScript", 80], ["React JS / React Native", 90], ["Bootstrap / Tailwind", 85]],
  },
  {
    id: "backend",
    title: "Backend Development",
    kicker: "02 / POWERING THE PRODUCT",
    icon: Server,
    accent: "#22d3ee",
    skills: [["Node.js / Python", 80], ["Express.js / Django", 75], ["MySQL / PostgreSQL / MongoDB", 70], ["REST APIs", 85], ["Git / GitHub", 80]],
  },
];

function Skills() {
  return (
    <section className="skills-section" aria-labelledby="skills-title">
      <div className="skills-noise" />
      <div className="skills-orb skills-orb-one" />
      <div className="skills-orb skills-orb-two" />
      <div className="skills-shell">
        <div className="skills-intro">
          <div className="skills-intro-copy">
            <p className="skills-overline"><span /> CAPABILITIES</p>
            <h2 id="skills-title">My technical <em>arsenal</em></h2>
            <p className="skills-lede">Tools I use to shape thoughtful interfaces, reliable systems, and products ready for the real world.</p>
          </div>
          <div className="skills-stat"><strong>10</strong><span>core skills<br />in my toolkit</span></div>
        </div>
        <div className="skills-panels">
          {skillGroups.map(({ id, title, kicker, icon: Icon, accent, skills }) => (
            <article className={`skills-panel skills-panel-${id}`} key={id}>
              <header className="skills-panel-head">
                <div className="skills-panel-icon" style={{ "--panel-accent": accent }}><Icon size={22} /></div>
                <div><p>{kicker}</p><h3>{title}</h3></div>
                <span className="skills-panel-count">0{id === "frontend" ? "1" : "2"}</span>
              </header>
              <div className="skills-panel-list">
                {skills.map(([name, level], index) => (
                  <div className="skill-row" key={name}>
                    <div className="skill-row-top"><span className="skill-row-number">0{index + 1}</span><span className="skill-row-name">{name}</span><strong>{level}%</strong></div>
                    <div className="skill-track" role="progressbar" aria-label={`${name} proficiency`} aria-valuenow={level} aria-valuemin="0" aria-valuemax="100">
                      <span style={{ "--skill-width": `${level}%`, "--panel-accent": accent }} />
                    </div>
                  </div>
                ))}
              </div>
              <footer className="skills-panel-foot">
                {id === "frontend" ? <Layers3 size={15} /> : <Database size={15} />}
                <span>{id === "frontend" ? "Designing for people" : "Engineering for scale"}</span>
                <GitBranch size={14} />
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
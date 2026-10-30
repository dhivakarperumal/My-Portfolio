import { Code2, Layers3, UsersRound, Zap } from "lucide-react";

const stats = [
  { value: "20+", label: "Technologies", icon: Code2, accent: "#f97316" },
  { value: "10+", label: "Projects Completed", icon: Layers3, accent: "#c026d3" },
  { value: "2.5+", label: "Years Experience", icon: UsersRound, accent: "#f43f5e" },
  { value: "Always", label: "Learning New Technologies", icon: Zap, accent: "#22c55e" },
];

function TechnologyStats() {
  return (
    <div className="technology-stats" aria-label="Experience and learning stats">
      {stats.map(({ value, label, icon: Icon, accent }) => (
        <div className="technology-stat" key={label} style={{ "--stat-accent": accent }}>
          <span className="technology-stat-icon"><Icon size={29} fill="currentColor" /></span>
          <span className="technology-stat-copy"><strong>{value}</strong><small>{label}</small></span>
        </div>
      ))}
    </div>
  );
}

export default TechnologyStats;

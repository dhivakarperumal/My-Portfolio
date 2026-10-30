import { Cloud, LaptopMinimal, Server, Settings } from "lucide-react";

const categoryIcons = {
  laptop: LaptopMinimal,
  server: Server,
  cloud: Cloud,
  settings: Settings,
};

function SkillCategoryCard({ category }) {
  const { id, number, title, highlight, description, more, accent, icon, skills } = category;
  const CategoryIcon = categoryIcons[icon];

  return (
    <article
      className={`technology-category technology-category-${id}`}
      style={{ "--category-accent": accent }}
    >
      <header className="technology-category-header">
        <span className="technology-category-number">{number}</span>
        <div className="technology-category-copy">
          <h3>{title} <span>{highlight}</span></h3>
          <p>{description}</p>
        </div>
        <span className="technology-category-more">{more}</span>
      </header>

      <div className="technology-category-skills">
        {skills.map(({ name, icon: Icon, color }) => (
          <div className="technology-skill" key={name}>
            <span className="technology-skill-icon">
              <Icon size={34} color={color} aria-hidden="true" />
            </span>
            <span className="technology-skill-name">{name}</span>
          </div>
        ))}
      </div>

      <span className="technology-category-symbol" aria-hidden="true">
        <CategoryIcon size={16} />
      </span>
    </article>
  );
}

export default SkillCategoryCard;

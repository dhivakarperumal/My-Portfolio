import { ArrowUpRight, Layers3, Smartphone } from "lucide-react";
import ProjectVisual from "./ProjectVisual.jsx";

function ProjectCard({ project, index }) {
  const title = project.cardTitle || project.title;
  const technologies = project.cardTechnologies
    || (project.technology || "Web Development").split(" · ").slice(0, 3);
  const projectUrl = project.liveUrl || project.playStoreUrl;
  const ProjectIcon = project.category === "mobile" ? Smartphone : Layers3;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-violet-500/40 bg-slate-950/95 shadow-[0_12px_36px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/70 hover:shadow-[0_18px_48px_rgba(124,58,237,0.2)]">
      <ProjectVisual project={project} index={index} />

      <div className="relative z-10 flex flex-1 flex-col border-t border-white/15 bg-[linear-gradient(145deg,rgba(8,10,22,.98),rgba(7,9,20,.96))] p-4 backdrop-blur-xl">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-teal-200/20 bg-gradient-to-br from-teal-300 to-emerald-500 text-slate-950 shadow-[0_5px_18px_rgba(20,184,166,.2)]">
            <ProjectIcon size={18} strokeWidth={2.2} />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-[15px] font-bold leading-tight text-white sm:text-base" title={title}>{title}</h3>
            <p className="mt-1 line-clamp-1 text-xs leading-tight text-slate-400" title={project.subtitle}>{project.subtitle}</p>
          </div>
          {projectUrl ? (
            <a
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${title}`}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-slate-200 transition hover:border-fuchsia-400 hover:bg-fuchsia-500/15 hover:text-white"
            >
              <ArrowUpRight size={17} />
            </a>
          ) : (
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-slate-500" aria-label="Project link unavailable">
              <ArrowUpRight size={17} />
            </span>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {technologies.map((technology) => (
            <span
              className="max-w-full truncate rounded-full border border-indigo-300/15 bg-indigo-950/30 px-2.5 py-1.5 text-[10px] font-medium leading-none text-slate-200 sm:text-[11px]"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Grid2X2,
  Layers3,
  Monitor,
  Settings,
  ShoppingCart,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageContainer from "../../CommenComponets/PageContainer.jsx";
import { myProjects } from "../../Datas/myproject.js";
import { myApps } from "../../Datas/myapp.js";
import ProjectCard from "./ProjectCard.jsx";

const featuredTitles = [
  "Restaurant POS App",
  "Life Tracking App",
  "Gold Shop Website",
  "Feather VFX Studio Website",
  "DAP Gym Website",
  "Veetu Rusi Food User App",
  "TrackFina – Admin App",
  "Babe’s World – E-Commerce Website",
];

const allProjects = [...myProjects, ...myApps];
const featuredProjects = featuredTitles
  .map((title) => allProjects.find((project) => project.title === title))
  .filter(Boolean);

const filters = [
  { id: "all", label: "All", icon: Grid2X2 },
  { id: "web", label: "Web Apps", icon: Monitor },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "fullstack", label: "Full Stack", icon: Layers3 },
  { id: "ecommerce", label: "Ecommerce", icon: ShoppingCart },
  { id: "admin", label: "Admin Panel", icon: Settings },
];

function matchesFilter(project, filter) {
  const searchableText = `${project.title} ${project.subtitle} ${project.projectSub} ${project.technology}`.toLowerCase();

  switch (filter) {
    case "web":
    case "mobile":
      return project.category === filter;
    case "fullstack":
      return /node\.?js|express|django|laravel/.test(searchableText);
    case "ecommerce":
      return /e-?commerce|online store|shopping|grocery|food ordering|gold shop|dry fruits/.test(searchableText);
    case "admin":
      return /admin|dashboard|management|billing/.test(searchableText);
    default:
      return true;
  }
}

function ProjectsSection({ showAll = false }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const sourceProjects = showAll ? allProjects : featuredProjects;
  const filteredProjects = sourceProjects.filter((project) => matchesFilter(project, activeFilter));
  const pageSize = 8;
  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  const visibleProjects = showAll
    ? filteredProjects.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : filteredProjects;

  function changeFilter(filterId) {
    setActiveFilter(filterId);
    setCurrentPage(1);
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#050816] py-14 text-white sm:py-16 lg:py-20" aria-labelledby="projects-title">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_25%,rgba(91,33,182,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-32 -top-36 -z-10 h-96 w-96 rounded-full bg-orange-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 -z-10 h-96 w-96 rounded-full bg-violet-700/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:48px_48px]" />

      <PageContainer fullWidth className="relative">
        <div className="pointer-events-none absolute left-10 top-4 hidden w-40 text-center xl:block">
          <p className="font-[cursive] text-base italic leading-tight text-violet-200/80">
            Turning ideas into real projects
          </p>
          <ArrowRight className="ml-1 mt-2 rotate-[35deg] text-orange-400" size={30} />
        </div>
        <div className="pointer-events-none absolute right-64 top-5 hidden w-36 text-center xl:block">
          <p className="font-[cursive] text-base italic leading-tight text-fuchsia-200/80">
            Building real solutions
          </p>
          <ArrowRight className="ml-auto mt-2 -rotate-[20deg] text-fuchsia-500" size={30} />
        </div>
        <div className="absolute right-16 top-2 hidden items-center gap-3 rounded-2xl border border-fuchsia-500/30 bg-slate-950/80 px-4 py-3 shadow-xl shadow-fuchsia-950/20 2xl:flex">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-fuchsia-500/15 text-fuchsia-300"><Code2 size={22} /></span>
          <span className="text-left"><strong className="block text-2xl leading-tight">{allProjects.length}+</strong><small className="text-xs text-slate-400">Projects Completed</small></span>
        </div>

        <header className="mx-auto mb-10 flex max-w-5xl flex-col items-center text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-orange-400/70 bg-slate-950/80 px-4 py-1.5 text-xs font-semibold tracking-[.18em] text-slate-200 shadow-[0_0_24px_rgba(249,115,22,0.14)]">
            <BriefcaseBusiness size={14} className="text-orange-400" />
            {showAll ? "MY WORK" : "MY PROJECTS"}
            <Sparkles size={14} className="text-fuchsia-400" />
          </p>
          <h2 id="projects-title" className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {showAll ? "All " : "Featured "}
            <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Here are some of my recent works. Each project is built with passion, modern technologies, and a focus on solving real-world problems.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-fuchsia-500/30 bg-slate-950/70 px-4 py-2.5 shadow-lg shadow-fuchsia-950/20 2xl:hidden">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-fuchsia-500/15 text-fuchsia-300"><Code2 size={20} /></span>
            <span className="text-left"><strong className="block text-lg leading-tight">{allProjects.length}+</strong><small className="text-xs text-slate-400">Projects Completed</small></span>
          </div>
        </header>

        <nav className="mb-8 flex justify-start overflow-x-auto px-1 pb-3 lg:justify-center" aria-label="Filter projects">
          <div className="flex min-w-max flex-nowrap gap-2 rounded-full">
            {filters.map(({ id, label, icon: Icon }) => (
              <button
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition sm:px-4 sm:py-2.5 sm:text-sm lg:px-5 ${
                  activeFilter === id
                    ? "border-transparent bg-gradient-to-r from-orange-500 to-fuchsia-600 text-white shadow-[0_0_20px_rgba(217,70,239,0.25)]"
                    : "border-slate-700/70 bg-slate-950/80 text-slate-300 hover:border-violet-400/70 hover:text-white"
                }`}
                type="button"
                key={id}
                aria-pressed={activeFilter === id}
                onClick={() => changeFilter(id)}
              >
                <Icon size={15} />{label}
              </button>
            ))}
          </div>
        </nav>

        {visibleProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 2xl:grid-cols-4">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                project={project}
                index={index}
                key={`${project.category}-${project.title}`}
              />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-slate-800 bg-slate-950/70 p-10 text-center text-slate-300">
            No projects match this category yet.
          </p>
        )}

        {showAll ? (
          pageCount > 1 && (
            <nav className="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="Project pages">
              <button
                type="button"
                className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-fuchsia-400 disabled:cursor-not-allowed disabled:opacity-40"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((page) => page - 1)}
              >
                Previous
              </button>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                <button
                  type="button"
                  className={`h-10 w-10 rounded-full border text-sm transition ${
                    currentPage === page
                      ? "border-fuchsia-400 bg-fuchsia-600 text-white"
                      : "border-slate-700 text-slate-300 hover:border-fuchsia-400"
                  }`}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                  key={page}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-fuchsia-400 disabled:cursor-not-allowed disabled:opacity-40"
                disabled={currentPage === pageCount}
                onClick={() => setCurrentPage((page) => page + 1)}
              >
                Next
              </button>
            </nav>
          )
        ) : (
          <div className="mt-7 flex justify-center">
            <Link
              className="group inline-flex items-center gap-2 rounded-full border border-fuchsia-500/60 bg-gradient-to-r from-orange-500/20 via-rose-500/15 to-fuchsia-600/20 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.15)] transition hover:border-fuchsia-300 hover:shadow-[0_0_28px_rgba(168,85,247,0.3)]"
              to="/projects"
            >
              View All Projects <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </PageContainer>
    </section>
  );
}

export default ProjectsSection;

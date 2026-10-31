import { Smartphone } from "lucide-react";
import { useState } from "react";

const palettes = [
  "from-orange-500 via-rose-600 to-purple-900",
  "from-emerald-500 via-teal-700 to-slate-950",
  "from-amber-400 via-orange-600 to-rose-900",
  "from-sky-500 via-indigo-800 to-slate-950",
  "from-violet-500 via-fuchsia-700 to-slate-950",
  "from-red-500 via-orange-700 to-slate-950",
  "from-blue-500 via-cyan-800 to-slate-950",
  "from-rose-500 via-amber-700 to-slate-950",
];

function getPublicImagePath(image) {
  return `/${image
    .replace(/^assets\/images\/gallery\//, "webapp/")
    .replace(/^assets\/MobileApp\//, "MobileApp/")}`;
}

function ProjectVisual({ project, index }) {
  const [unavailableImages, setUnavailableImages] = useState([]);
  const palette = palettes[index % palettes.length];
  const isMobile = project.category === "mobile";
  const images = project.images || [];
  const mobileImages = images.slice(0, 5);
  const title = project.cardTitle || project.title;
  const technology = isMobile
    ? "React Native"
    : project.technology?.split(" · ")[0] || "Web App";

  function markUnavailable(image) {
    setUnavailableImages((unavailable) => [...unavailable, image]);
  }

  return (
    <div className={`group/visual relative isolate flex aspect-[2.4/1] w-full items-center justify-center overflow-hidden bg-gradient-to-br ${palette}`}>
      {!isMobile && images[0] && !unavailableImages.includes(images[0]) ? (
        <img
          src={getPublicImagePath(images[0])}
          alt={project.imageAlt || title}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover/visual:scale-[1.04]"
          loading="lazy"
          onError={() => markUnavailable(images[0])}
        />
      ) : isMobile ? (
        <div className="relative z-10 flex h-[88%] w-full items-end justify-center gap-1.5 px-3 pb-0">
          {mobileImages.map((image, screen) => {
            const hasImage = image && !unavailableImages.includes(image);
            const screenPosition = [
              "mb-2 scale-y-[.78]",
              "mb-0.5 scale-y-[.94]",
              "",
              "mb-0.5 scale-y-[.94]",
              "mb-2 scale-y-[.78]",
            ][screen];

            return (
              <div
                className={`relative aspect-[.48/1] max-h-full min-w-0 max-w-[76px] flex-1 overflow-hidden rounded-[13px] border-[2px] border-slate-800 bg-slate-950 p-[2px] shadow-[0_8px_24px_rgba(2,6,23,.55)] transition-transform duration-300 group-hover/visual:-translate-y-1 ${screenPosition}`}
                key={image}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[9px] bg-slate-900">
                  {hasImage ? (
                    <img
                      src={getPublicImagePath(image)}
                      alt={`${title} app screen ${screen + 1}`}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                      onError={() => markUnavailable(image)}
                    />
                  ) : (
                    <div className={`h-full bg-gradient-to-br ${palette}`} />
                  )}
                </div>
              </div>
            );
          })}
          {mobileImages.length === 0 && (
            <div className={`grid h-[82%] w-[18%] place-items-center rounded-[13px] border-2 border-slate-800 bg-gradient-to-br ${palette} text-white`}>
              <Smartphone size={22} />
            </div>
          )}
        </div>
      ) : (
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <div className="w-[78%] max-w-[340px] -rotate-2 overflow-hidden rounded-lg border border-white/40 bg-slate-950/90 shadow-2xl">
            <div className="flex h-4 items-center gap-1 border-b border-white/10 bg-slate-900 px-2">
              <span className="h-1 w-1 rounded-full bg-rose-400" />
              <span className="h-1 w-1 rounded-full bg-amber-300" />
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              <span className="ml-2 h-1 w-1/3 rounded bg-white/20" />
            </div>
            <div className={`grid min-h-28 grid-cols-[1.2fr_.8fr] gap-2 bg-gradient-to-br ${palette} p-3`}>
              <div className="flex flex-col justify-center">
                <span className="mb-2 h-1.5 w-3/4 rounded bg-white/80" />
                <span className="mb-1 h-1 w-full rounded bg-white/55" />
                <span className="mb-2 h-1 w-4/5 rounded bg-white/30" />
                <span className="h-3 w-10 rounded-full bg-white/80" />
              </div>
              <div className="grid grid-cols-2 gap-1">
                <span className="row-span-2 rounded bg-white/25" />
                <span className="rounded bg-white/15" />
                <span className="rounded bg-slate-950/20" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-slate-950/65 to-transparent" />
      <span className="absolute left-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full border border-sky-200/50 bg-gradient-to-r from-sky-500 to-blue-600 px-3 py-1 text-[11px] font-semibold text-white shadow-[0_5px_18px_rgba(14,165,233,.3)]">
        {technology}
      </span>
    </div>
  );
}

export default ProjectVisual;

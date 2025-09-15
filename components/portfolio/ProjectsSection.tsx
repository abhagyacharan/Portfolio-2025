"use client";

import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/app/types/portfolio";
import { usePagination } from "@/app/hooks/usePagination";

type Props = {
  projects: Project[];
  perPage?: number;
};

export function ProjectsSection({ projects, perPage = 2 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { currentPage, totalPages, pageNumbers, pageItems, goToPage } =
    usePagination<Project>({ items: projects, perPage });

  const handleGoTo = (page: number) => {
    goToPage(page);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  // const canPrev = currentPage > 1;
  // const canNext = currentPage < totalPages;

  return (
    <div className="space-y-4" ref={containerRef}>
      {/* Header row with title left and numbers right, single line on all screens */}
      <div className="flex flex-row items-center justify-between w-full gap-2 flex-nowrap">
        <h2 className="text-base sm:text-lg font-medium text-white/90 border-b border-transparent pb-0">
          Featured Projects
        </h2>

        <nav
          className="flex items-center justify-end"
          aria-label="Featured projects pages"
        >
          <ul className="flex items-center gap-1 overflow-x-auto max-w-[50vw] sm:max-w-none">
            {pageNumbers.map((page) => (
              <li key={page} className="shrink-0">
                <button
                  onClick={() => handleGoTo(page)}
                  aria-current={currentPage === page ? "page" : undefined}
                  aria-label={`Go to page ${page}`}
                  className={[
                    "w-8 h-8 rounded-full text-xs",
                    "border border-white/20 transition-colors cursor-pointer",
                    currentPage === page
                      ? "bg-white text-black"
                      : "text-white/70 hover:text-white hover:border-white/40",
                  ].join(" ")}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-b border-white/20" />

      {/* Paged content */}
      <div className="space-y-6">
        {pageItems.map((project) => (
          <article
            key={project.title}
            className="p-4 sm:p-5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-2 gap-2">
              <h3 className="text-white font-medium text-sm sm:text-base">
                {project.title}
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={project.link}
                  className="p-1 rounded text-white/60 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source on GitHub"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    className="p-1 rounded text-white/60 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open live demo"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-white/70 text-xs sm:text-sm mb-3 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-white/60 bg-white/5 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

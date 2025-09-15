"use client";

import { useMemo, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Twitter,
  FileText,
} from "lucide-react";

export default function PortfolioContent() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack marketplace with real-time chat and payment integration",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      link: "https://github.com/yourusername/ecommerce",
      live: "https://yourproject.com",
    },
    {
      title: "AI Dashboard",
      description:
        "Analytics dashboard with machine learning insights and data visualization",
      tech: ["React", "Python", "TensorFlow"],
      link: "https://github.com/yourusername/ai-dashboard",
      live: "https://ai-dashboard.com",
    },
    {
      title: "Mock Interview Platform",
      description:
        "AI-first mock interview platform with role-based question banks and scoring",
      tech: ["Next.js", "PostgreSQL", "OpenAI"],
      link: "https://github.com/yourusername/mockr",
      live: "https://mockr.example.com",
    },
    {
      title: "Macro Tracker",
      description:
        "Nutrition tracking app with custom recipes and daily macro goals",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/macro-tracker",
      live: "https://macro-tracker.example.com",
    },
  ];

  // Show fewer per page on small screens, more on md+
  const perPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / perPage);
  const pagedProjects = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return projects.slice(start, start + perPage);
  }, [currentPage, projects]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const el = document.getElementById("projects-section");
    el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-0 relative">
          {/* Vertical divider only on large screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/15 -translate-x-1/2 z-10" />

          {/* Left: Personal Info */}
          <section className="flex flex-col justify-center pr-0 lg:pr-16">
            <div className="space-y-8 sm:space-y-10">
              {/* Name & Title */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
                  <span className="font-medium italic">Aela</span> Bhagya Charan
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-white/80 font-light">
                  Full Stack Developer
                </p>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Hyderabad, India</span>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <h2 className="text-base sm:text-lg font-medium text-white/90 border-b border-white/15 pb-2">
                  Experience
                </h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="text-white font-medium">Developer Intern</h3>
                    <p className="text-white/70">
                      Accenture • Feb, 2025 - June, 2025
                    </p>
                    <p className="text-white/60 text-xs mt-2 leading-relaxed">
                      Developed a strong foundation in Web Development, Python,
                      and core fundamentals, and gained hands-on experience with
                      enterprise platforms (Adobe Campaign Classic). Designed and
                      automated workflows for multi-channel communication and
                      delivered client-focused solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h2 className="text-base sm:text-lg font-medium text-white/90 border-b border-white/15 pb-2">
                  Education
                </h2>
                <div className="text-sm">
                  <h3 className="text-white font-medium">
                    B.Tech in Computer Science - Data Science
                  </h3>
                  <p className="text-white/70">
                    B V Raju Institute of Technology • 2021 - 2025
                  </p>
                  <p className="text-white/60 text-xs mt-1">Hyderabad, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                <a
                  href="https://github.com/abhagyacharan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/abhagyacharan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Right: Skills & Projects */}
          <section className="flex flex-col justify-center pl-0 lg:pl-16">
            <div className="space-y-8 sm:space-y-10">
              {/* Tech Stack */}
              <div className="space-y-4">
                <h2 className="text-base sm:text-lg font-medium text-white/90 border-b border-white/15 pb-2">
                  Tech Stack
                </h2>

                <div className="space-y-3 sm:space-y-4">
                  {/* Frontend */}
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="text-sm font-medium text-white/80">
                      Frontend
                    </span>
                    {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                      (tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-light border border-white/20 hover:bg-white/20 transition-all"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  {/* Backend */}
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="text-sm font-medium text-white/80">
                      Backend
                    </span>
                    {["Node.js", "Python", "GraphQL"].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-light border border-white/20 hover:bg-white/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Databases */}
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="text-sm font-medium text-white/80">
                      Databases
                    </span>
                    {["PostgreSQL", "MongoDB", "Redis"].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-light border border-white/20 hover:bg-white/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* DevOps */}
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="text-sm font-medium text-white/80">
                      DevOps
                    </span>
                    {["AWS", "Docker"].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-light border border-white/20 hover:bg-white/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects with pagination */}
              <div className="space-y-4" id="projects-section">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <h2 className="text-base sm:text-lg font-medium text-white/90">
                    Featured Projects
                  </h2>

                  <nav
                    className="flex items-center gap-2 overflow-x-auto sm:overflow-visible -mx-1 sm:mx-0 px-1"
                    aria-label="Projects pagination"
                  >
                    {/* Page numbers */}
                    <ul className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <li key={page}>
                            <button
                              onClick={() => goToPage(page)}
                              aria-current={
                                currentPage === page ? "page" : undefined
                              }
                              className={[
                                "w-8 h-8 sm:w-9 sm:h-9 rounded-full text-xs sm:text-sm",
                                "border border-white/20 transition-colors",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                                currentPage === page
                                  ? "bg-white text-black"
                                  : "text-white/70 hover:text-white hover:border-white/40",
                              ].join(" ")}
                            >
                              {page}
                            </button>
                          </li>
                        )
                      )}
                    </ul>
                  </nav>
                </div>

                {/* Divider */}
                <div className="border-b border-white/15" />

                {/* Paged projects */}
                <div className="space-y-4 sm:space-y-6">
                  {pagedProjects.map((project, index) => (
                    <article
                      key={index}
                      className="p-4 sm:p-5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-white font-medium text-sm sm:text-base">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 shrink-0">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                            aria-label={`${project.title} source on GitHub`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 rounded text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                              aria-label={`${project.title} live demo`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-white/70 text-xs sm:text-sm mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-0.5 rounded text-white/70 bg-white/5 text-xs border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="mailto:a.bhagyacharan@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black font-medium text-sm transition-all hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </a>
                <a
                  href="mailto:alex@example.com"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-sm border border-white/20 hover:bg-white/15 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

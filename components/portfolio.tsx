"use client";

import { useMemo, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  File,
  ExternalLink,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Twitter,
  FileText,
} from "lucide-react";

export default function PortfolioContent() {
  const techStack = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "Python", "GraphQL"],
    Database: ["PostgreSQL", "MongoDB", "Redis"],
    DevOps: ["AWS", "Docker"],
  };

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
    // Add more projects if needed...
  ];

  // Pagination state
  const perPage = 2; // show 2 projects at a time
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / perPage);
  const pagedProjects = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return projects.slice(start, start + perPage);
  }, [currentPage, projects]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Optional: Auto-scroll projects section into view on page change
    const el = document.getElementById("projects-section");
    el?.scrollIntoView({ behavior: "smooth", block: "nearest" }); // UX nicety
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
        {/* Dividing Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 backdrop-blur-sm hidden lg:block transform -translate-x-1/2 z-10" />

        {/* Left Half - Personal Info */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-12 lg:pr-24">
          <div className="space-y-8">
            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-light text-white tracking-tight">
                <span className="font-medium italic instrument">Aela</span>{" "}
                Bhagya Charan
              </h1>
              <p className="text-xl text-white/80 font-light">
                Full Stack Developer
              </p>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4" />
                Hyderbad, India
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-white/90 border-b border-white/20 pb-2">
                Experience
              </h2>
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="text-white font-medium">Developer Intern</h3>
                  <p className="text-white/70">
                    Accenture • Feb, 2025 - June, 2025
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    Developed a strong foundation in Web Development, Python,
                    and CORE fundamentals, and gained hands-on experience with
                    enterprise platforms (Adobe Campaign Classic). Designed and
                    automated workflows for multi-channel communication and
                    delivered client-focused solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-white/90 border-b border-white/20 pb-2">
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
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/abhagyacharan"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 text-white/80 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 text-white/80 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/abhagyacharan"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 text-white/80 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Half - Skills & Projects */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-12 lg:pl-24">
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-white/90 border-b border-white/20 pb-2">
                Tech Stack
              </h2>

              <div className="space-y-3">
                {/* Frontend */}
                <div className="flex items-center flex-wrap gap-2">
                  <span className="text-sm font-medium text-white/80">
                    Frontend
                  </span>
                  {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full cursor-default bg-white/10 backdrop-blur-sm text-white/80 text-xs font-light border border-white/20 hover:bg-white/20 transition-all duration-200"
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
                      className="px-3 py-1 rounded-full cursor-default bg-white/10 backdrop-blur-sm text-white/80 text-xs font-light border border-white/20 hover:bg-white/20 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Databases */}
                <div className="flex items-center flex-wrap gap-2">
                  <span className="text-sm font-medium text-white/80 w-">
                    Databases
                  </span>
                  {["PostgreSQL", "MongoDB", "Redis"].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full cursor-default bg-white/10 backdrop-blur-sm text-white/80 text-xs font-light border border-white/20 hover:bg-white/20 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* DevOps / Cloud */}
                <div className="flex items-center flex-wrap gap-2">
                  <span className="text-sm font-medium text-white/80">
                    DevOps
                  </span>
                  {["AWS", "Docker"].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full cursor-default bg-white/10 backdrop-blur-sm text-white/80 text-xs font-light border border-white/20 hover:bg-white/20 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects with numeric pagination */}
            <div className="space-y-4" id="projects-section">
              {/* Header row with title on left, pagination on right */}
              <div className="flex items-center justify-between w-full">
                <h2 className="text-lg font-medium text-white/90 border-b border-transparent pb-0">
                  Featured Projects
                </h2>

                <nav
                  className="flex items-center gap-2"
                  aria-label="Projects pagination"
                >
                  {/* Prev */}
                  {/* <button
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-1.5 rounded-full text-xs border border-white/20 text-white/70 hover:text-white hover:border-white/40 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft/>
                    </button> */}

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
                      )
                    )}
                  </ul>

                  {/* Next */}
                  {/* <button
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1.5 rounded-full text-xs border border-white/20 text-white/70 hover:text-white hover:border-white/40 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <ArrowRight/>
                  </button> */}
                </nav>
              </div>

              {/* Keep the border under the full row if desired */}
              <div className="border-b border-white/20" />

              {/* Paged content stays the same */}
              <div className="space-y-6">
                {pagedProjects.map((project, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white font-medium text-sm">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <a
                          href={project.link}
                          className="p-1 rounded text-white/60 hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            className="p-1 rounded text-white/60 hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-white/70 text-xs mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 rounded text-white/60 bg-white/5 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="pt-4 flex gap-4">
              <a
                href="mailto:a.bhagyacharan@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
              <a
                href="mailto:alex@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white/80 font-normal text-sm border-white/80 hover:bg-white/20 transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

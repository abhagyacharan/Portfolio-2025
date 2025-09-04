"use client"

import { Github, Linkedin, Mail, ExternalLink, MapPin } from "lucide-react"

export default function PortfolioContent() {
  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Tailwind CSS",
    "GraphQL",
    "Redis",
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with real-time chat and payment integration",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      link: "https://github.com/yourusername/ecommerce",
      live: "https://yourproject.com",
    },
    {
      title: "AI Dashboard",
      description: "Analytics dashboard with machine learning insights and data visualization",
      tech: ["React", "Python", "TensorFlow"],
      link: "https://github.com/yourusername/ai-dashboard",
      live: "https://ai-dashboard.com",
    },
    {
      title: "Mobile Banking App",
      description: "Secure fintech application with biometric authentication",
      tech: ["React Native", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/banking-app",
      live: null,
    },
  ]

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
                <span className="font-medium italic instrument">Aela</span> Bhagya Charan
              </h1>
              <p className="text-xl text-white/80 font-light">Full Stack Developer</p>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4" />
                Hyderbad, India
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-white/90 border-b border-white/20 pb-2">Experience</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="text-white font-medium">Senior Developer</h3>
                  <p className="text-white/70">TechCorp Inc. • 2022 - Present</p>
                  <p className="text-white/60 text-xs mt-1">
                    Leading full-stack development for enterprise applications
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-medium">Frontend Developer</h3>
                  <p className="text-white/70">StartupXYZ • 2020 - 2022</p>
                  <p className="text-white/60 text-xs mt-1">Built responsive web applications and mobile interfaces</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-white/90 border-b border-white/20 pb-2">Education</h2>
              <div className="text-sm">
                <h3 className="text-white font-medium">B.S. Computer Science</h3>
                <p className="text-white/70">Stanford University • 2016 - 2020</p>
                <p className="text-white/60 text-xs mt-1">Magna Cum Laude, Focus on Software Engineering</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/yourusername"
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
                href="mailto:alex@example.com"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 text-white/80 hover:text-white"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Half - Skills & Projects */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-12 lg:pl-24">
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-white/90 border-b border-white/20 pb-2">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-light border border-white/20 hover:bg-white/20 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-white/90 border-b border-white/20 pb-2">Featured Projects</h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white font-medium text-sm">{project.title}</h3>
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
                    <p className="text-white/70 text-xs mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-0.5 rounded text-white/60 bg-white/5 text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="pt-4">
              <a
                href="mailto:alex@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

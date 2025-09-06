"use client";

import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Github, Linkedin, Mail } from "lucide-react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "tech", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const active = useActiveSection(NAV.map(n => n.id));

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-sm bg-white/10 border border-white/15 rounded-full px-3 py-2 flex items-center gap-2">
        <nav className="flex items-center gap-1">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  isActive ? "bg-white text-black" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mx-2 h-5 w-px bg-white/20" />
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:a.bhagyacharan@gmail.com"
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

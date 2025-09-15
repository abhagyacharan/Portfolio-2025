// app/data/portfolio.tsx
import { Github, Linkedin, Twitter } from "lucide-react";
import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Aela Bhagya Charan",
    accentName: "Aela",
    title: "Full Stack Developer",
    location: "Hyderabad, India",
    email: "a.bhagyacharan@gmail.com",
    resumeUrl: "https://drive.google.com/file/d/14HPBdN1xR9lGIuxfnfxiCR9hmanjGgEi/view?usp=sharing",
  },
  about: {
    summary:
      "Full‑stack developer focused on building AI‑first products and scalable web apps. Comfortable across React/Next.js, TypeScript, FastAPI, and Python, with deployments to Vercel and AWS.",
    highlights: [
      "Shipped Mockr, an AI mock interview platform with personalized question generation using LLMs.",
      "Active in build‑in‑public and developer communities.",
    ],
  },
  experience: [
    {
      role: "Developer Intern",
      company: "Accenture",
      period: "Feb, 2025 - June, 2025",
      summary:
        "Developed a strong foundation in Web Development, Python, and CORE fundamentals, and gained hands-on experience withenterprise platforms (Adobe Campaign Classic). Designed and automated workflows for multi-channel communication.",
    },
  ],
  education: {
    degree: "B.Tech in Computer Science - Data Science",
    institution: "B V Raju Institute of Technology",
    period: "2021 - 2025",
    location: "Hyderabad, India",
  },
  social: [
    {
      label: "GitHub",
      href: "https://github.com/abhagyacharan",
      icon: <Github className="w-5 h-5" aria-hidden="true" />,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/abhagyacharan",
      icon: <Linkedin className="w-5 h-5" aria-hidden="true" />,
    },
    {
      label: "Twitter",
      href: "https://x.com/abhagyacharan",
      icon: <Twitter className="w-5 h-5" aria-hidden="true" />,
    },
  ],
  techStack: {
    Frontend: ["React", "Next.js", "TailwindCSS", "Framer",],
    Backend: ["FastAPI", "Flask", "Django", "Node.js"],
    'Data Science': ["TensorFlow","Keras","Scikit-learn","NumPy"],
    Databases: ["PostgreSQL", "MySQL", "TortoiseORM"],
    Tools: ["Git","GitHub", "Postman", "LangChain"],
  },
  projects: [
    {
      title: "Mockr - AI Interview Prep",
      description: "Mockr is a full-stack AI-powered interview prep app that generates mock questions from resumes or job descriptions, with support for MCQs and Q/A formats.",
      tech: ["React", "FastAPI", "PostgreSQL", "LangChain"],
      link: "https://github.com/abhagyacharan/Mockr",
      live: "https://mockr-abc.vercel.app/",
    },
    {
      title: "CalorEase",
      description: "Calorease is a smart nutrition app that makes calorie tracking effortless by recognizing foods with instant nutrition insights and burn-time estimates.",
      tech: ["Django", "TensorFlow", "Chat-Groq"],
      link: "https://github.com/abhagyacharan/CalorEase",
    },
    {
      title: "Inventory Management System",
      description: "The Inventory Management System streamlines product and supplier management with CRUD operations and automated email notifications.",
      tech: ["React", "FastAPI", "SQLite"],
      link: "https://github.com/abhagyacharan/InventoryManagement-ReactFastAPI",
    },
    {
      title: "Vision Transformer Implementation",
      description: "Implemented Vision Transformer for Image Classification using PyTorch and Jupyter Notebook.",
      tech: ["Jupyter Notebook", "Pytorch"],
      link: "https://github.com/abhagyacharan/Vision-Transformer-Implementation-",
    },
  ],
};

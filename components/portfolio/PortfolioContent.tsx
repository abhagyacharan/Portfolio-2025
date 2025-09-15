// Server Component
import { Suspense } from "react";
import { FileText, Mail, MapPin } from "lucide-react";
import { portfolioData } from "@/app/data/portfolio";
import { ProfileHeader } from "@/components/portfolio/ProfileHeader";
import { TechStack } from "@/components/portfolio/TechStack";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";

export default function PortfolioContent() {
  const { profile, experience, education, social, techStack, projects } =
    portfolioData;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
      <div className="w-full max-w-7xl xl:max-w-[88rem] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 relative">
        {/* Dividing Line (desktop only) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 backdrop-blur-sm hidden lg:block -translate-x-1/2 z-10" />

        {/* Left Half - Personal Info */}
        <div className="flex flex-col justify-center px-2 sm:px-6 lg:px-12 py-6 lg:pr-20">
          <ProfileHeader
            name={profile.name}
            accentName={profile.accentName}
            title={profile.title}
            locationIcon={<MapPin className="w-4 h-4" aria-hidden="true" />}
            location={profile.location}
            experience={experience}
            education={education}
            social={social}
          />
        </div>

        {/* Right Half - About, Skills & Projects */}
        <div className="flex flex-col justify-center px-2 sm:px-6 lg:px-12 py-6 lg:pl-20">
          <div className="space-y-8">

            {/* Add extra top margin on small screens, normal spacing from md up */}
            <div className="mt-6 sm:mt-12 md:mt-0">
              <TechStack stack={techStack} />
            </div>

            <Suspense fallback={null}>
              <div
                className="scroll-mt-24 sm:scroll-mt-28"
                id="projects-section"
              >
                <ProjectsSection projects={projects} perPage={2} />
              </div>
            </Suspense>

            {/* Contact CTA with safe-area padding for mobile */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 pb-[env(safe-area-inset-bottom)]">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white text-black font-normal text-sm sm:text-base transition-all duration-200 hover:bg-white/90 cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white/80 font-normal text-sm sm:text-base border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
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

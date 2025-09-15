// Server Component
import { SocialLink } from "@/app/types/portfolio";
import { IconLink } from "@/components/ui/IconLink";
import { ExperienceEntry, EducationEntry } from "@/app/types/portfolio";
import { AboutSection } from "./AboutSection";
import { portfolioData } from "@/app/data/portfolio";

type Props = {
  name: string;
  accentName?: string;
  title: string;
  locationIcon?: React.ReactNode;
  location: string;
  experience: ExperienceEntry[];
  education: EducationEntry;
  social: SocialLink[];
};

export function ProfileHeader({
  name,
  accentName,
  title,
  locationIcon,
  location,
  experience,
  education,
  social,
}: Props) {
  const [first, ...rest] = name.split(" ");
  const accent = accentName ?? first;
  const { about } = portfolioData;

  return (
    <div className="space-y-7 sm:space-y-8">
      {/* Name & Title */}
      <div className="space-y-3 sm:space-y-4">
        <h1 className="font-light text-white tracking-tight text-[clamp(2.25rem,8vw,3.75rem)]">
          <span className="font-medium italic instrument">{accent}</span>{" "}
          {rest.join(" ")}
        </h1>
        <p className="text-white/80 font-light text-base sm:text-lg">{title}</p>
        <div className="flex items-center gap-2 text-white/60 text-sm">
          {locationIcon}
          <span>{location}</span>
        </div>
      </div>

      {/* About */}
      <AboutSection about={about} />

      {/* Experience */}
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-base sm:text-lg font-medium text-white/90 border-b border-white/20 pb-2">
          Experience
        </h2>
        <div className="space-y-4 text-sm">
          {experience.map((exp, idx) => (
            <div key={idx}>
              <h3 className="text-white font-medium">{exp.role}</h3>
              <p className="text-white/70">
                {exp.company} • {exp.period}
              </p>
              <p className="text-white/60 text-xs mt-1">{exp.summary}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-base sm:text-lg font-medium text-white/90 border-b border-white/20 pb-2">
          Education
        </h2>
        <div className="text-sm">
          <h3 className="text-white font-medium">{education.degree}</h3>
          <p className="text-white/70">
            {education.institution} • {education.period}
          </p>
          <p className="text-white/60 text-xs mt-1">{education.location}</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-3 sm:gap-4 pt-2">
        {social.map((s) => (
          <IconLink key={s.label} href={s.href} label={s.label} icon={s.icon} />
        ))}
      </div>
    </div>
  );
}

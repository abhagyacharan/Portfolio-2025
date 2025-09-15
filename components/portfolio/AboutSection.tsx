// Server Component
import { About } from "@/app/types/portfolio";

type Props = {
  about: About;
};

export function AboutSection({ about }: Props) {
  return (
    <section className="space-y-3" aria-labelledby="about-heading" id="about">
      <h2
        id="about-heading"
        className="text-base sm:text-lg font-medium text-white/90 border-b border-white/20 pb-2"
      >
        About me
      </h2>

      <p className="text-white/70 text-sm sm:text-base leading-relaxed">
        {about.summary}
      </p>

      {about.highlights?.length ? (
        <ul className="list-disc pl-5 space-y-1 text-white/70 text-sm sm:text-base">
          {about.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

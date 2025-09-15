// app/components/portfolio/TechStack.tsx (Server Component)
import { TechStack as TechStackType } from "@/app/types/portfolio";
import { Badge } from "@/components/ui/Badge";

type Props = { stack: TechStackType };

export function TechStack({ stack }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-white/90 border-b border-white/20 pb-2">
        Tech Stack
      </h2>

      <div className="space-y-3">
        {Object.entries(stack).map(([category, items]) => (
          <div key={category} className="flex items-center flex-wrap gap-2">
            <span className="text-sm font-medium text-white/80">{category}</span>
            {items.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

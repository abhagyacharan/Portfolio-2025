// app/components/portfolio/TechStack.tsx (Server Component)
import { TechStack as TechStackType } from "@/app/types/portfolio";
import { Badge } from "@/components/ui/Badge";

type Props = { stack: TechStackType };

// Mobile-only variant: category on one line, badges on the next
function MobileCategoryRow({
  category,
  items,
}: {
  category: string;
  items: string[];
}) {
  return (
    <div className="sm:hidden">
      <div className="text-sm font-medium text-white/80">{category}</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((tech) => (
          <Badge key={tech} label={tech} className="whitespace-nowrap" />
        ))}
      </div>
    </div>
  );
}

// Desktop/tablet inline variant: category and badges in one row
function InlineCategoryRow({
  category,
  items,
}: {
  category: string;
  items: string[];
}) {
  return (
    <div className="hidden sm:flex items-center flex-wrap gap-2">
      <span className="text-sm font-medium text-white/80">{category}</span>
      {items.map((tech) => (
        <Badge key={tech} label={tech} />
      ))}
    </div>
  );
}

export function TechStack({ stack }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-white/90 border-b border-white/20 pb-2">
        Tech Stack
      </h2>

      <div className="space-y-4">
        {Object.entries(stack).map(([category, items]) => (
          <div key={category} className="space-y-2">
            <MobileCategoryRow category={category} items={items} />
            <InlineCategoryRow category={category} items={items} />
          </div>
        ))}
      </div>
    </div>
  );
}

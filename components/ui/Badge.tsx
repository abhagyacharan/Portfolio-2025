// app/components/ui/Badge.tsx (Server Component)
type Props = {
  label: string;
  className?: string;
};

export function Badge({ label, className }: Props) {
  return (
    <span
      className={[
        "px-3 py-1 rounded-full cursor-default",
        "bg-white/10 backdrop-blur-sm text-white/80 text-xs font-light",
        "border border-white/20 hover:bg-white/20 transition-all duration-200",
        className ?? "",
      ].join(" ")}
    >
      {label}
    </span>
  );
}

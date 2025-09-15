// app/components/ui/IconLink.tsx (Server Component)
type Props = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export function IconLink({ href, label, icon }: Props) {
  return (
    <a
      href={href}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 text-white/80 hover:text-white"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      {icon}
    </a>
  );
}

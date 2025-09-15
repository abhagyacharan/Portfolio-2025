"use client";

import type { ReactNode } from "react";

export default function MeshGradientBackground({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/mesh-gradient11.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

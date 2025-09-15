// app/page.tsx
import type { Metadata } from "next";
import PortfolioContent from "../components/portfolio/PortfolioContent";
// import MeshGradientBackground from "../components/mesh";
import ShaderBackground from "@/components/shader-background";

// Optional: Incremental Static Regeneration for home page
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "BhagyaCharan's Portfolio",
  description: "Featured projects, skills, and contact.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <ShaderBackground>
      <PortfolioContent />
    </ShaderBackground>
  );
}

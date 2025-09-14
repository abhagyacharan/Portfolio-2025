"use client";

import PortfolioContent from "@/components/portfolio";
import ShaderBackground from "@/components/shader-background";
import MeshGradientBackground from "@/components/mesh";

export default function PortfolioScreen() {
  return (
    <MeshGradientBackground>
      <PortfolioContent />
    </MeshGradientBackground>
  );
}

"use client";

import PortfolioContent from "@/components/portfolio";
import ShaderBackground from "@/components/shader-background";

export default function PortfolioScreen() {
  return (
    <ShaderBackground>
      <PortfolioContent />
    </ShaderBackground>
  );
}

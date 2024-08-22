import React from "react";
import { HeroParallax } from "@/components/global/hero-parallax";
import { products } from "@/lib/constants";

const HeroParallaxComponent = () => {
  return (
    <div>
      <HeroParallax products={products} />
    </div>
  );
};

export default HeroParallaxComponent;

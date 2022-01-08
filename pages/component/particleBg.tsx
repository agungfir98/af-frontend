import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import Particles from "react-tsparticles";
import {
  configParticlesDark,
  configParticlesLight,
} from "./particlesConfig/particles.config";

export default function ParticleBg() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const setParticle = () => {
    if (!mounted) return null;

    const currTheme = theme === "system" ? systemTheme : theme;
    if (currTheme === "dark") {
      return <Particles params={configParticlesDark} />;
    } else {
      return <Particles params={configParticlesLight} />;
    }
  };
  return setParticle();
}

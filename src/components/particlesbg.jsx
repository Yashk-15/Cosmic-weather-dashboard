import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: { value: "#1a1a2e" } },
        particles: {
          number: { value: 120, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.7, random: true },
          size: { value: 1.5, random: true },
          move: { enable: true, speed: 0.2, direction: "none", outModes: "out" },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              color: { value: "#fff" }
            }
          }
        },
        detectRetina: true,
      }}
    />
  );
}
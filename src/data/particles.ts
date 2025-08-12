import type { Particle } from "./types";
import { basicParticles } from "./particles/basic";
import { intermediateParticles } from "./particles/intermediate";
import { advancedParticles } from "./particles/advanced";

export type { Particle } from "./types";

export const particles: Particle[] = [
  ...basicParticles,
  ...intermediateParticles,
  ...advancedParticles,
];

export const getParticlesByCategory = (category: 'basic' | 'intermediate' | 'advanced') => {
  return particles.filter(particle => particle.category === category);
};

export const getAllParticles = () => particles;

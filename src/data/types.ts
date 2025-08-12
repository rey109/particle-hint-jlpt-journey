export interface Particle {
  id: string;
  particle: string;
  category: 'basic' | 'intermediate' | 'advanced';
  definition: string;
  function: string;
  examples: {
    japanese: string;
    furigana?: string;
    translation: string;
    audio?: string;
  }[];
  icon: string;
}

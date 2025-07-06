import { create } from "zustand";

type State = {
  technologies: string[];
};

type Action = {
  setTechnologies: (technologies: string[]) => void;
};

export const useTechnologiesStore = create<State & Action>((set) => ({
  technologies: [
    "⚡ Vite pour un build rapide",
    "⚛️ React V19.1",
    "🔒 TypeScript strict",
    "🎨 Tailwind CSS",
    "🛣️ TanStack Router",
    "📦 Zustand",
    "🎭 Shadcn/ui",
    "🔧 ESLint + Prettier",
  ],
  setTechnologies: (technologies: string[]) => set({ technologies }),
}));

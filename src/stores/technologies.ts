import { create } from "zustand";

type State = {
  technologies: string[];
};

type Action = {
  setTechnologies: (technologies: string[]) => void;
};

export const useTechnologiesStore = create<State & Action>((set) => ({
  technologies: [
    "⚡ Vite for fast building",
    "⚛️ React V19.1",
    "🔒 Strict TypeScript",
    "🎨 Tailwind CSS",
    "🛣️ TanStack Router",
    "📦 Zustand",
    "🎭 Shadcn/ui",
    "🔧 ESLint + Prettier",
  ],
  setTechnologies: (technologies: string[]) => set({ technologies }),
}));

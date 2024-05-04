import { create } from "zustand"

interface themeState{
  theme: string
  toggle: () => void
}

export const useThemeStore = create<themeState>()((set) => ({
  theme: "light",
  toggle: () => set((state) => ({ theme: state.theme =="light"? "dark" : "light" })),
}))

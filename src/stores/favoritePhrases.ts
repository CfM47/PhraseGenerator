import { create } from "zustand"

interface themeState{
  favorites: string[]
  add: (phrase : string) => void
  remove: (index : number) => void
}

export const useFavoritesStore = create<themeState>()((set) => ({
  favorites: [],
  add: (phrase : string) => set((state) => ({ favorites: [...state.favorites, phrase] })),
  remove: (index : number) => set((state) => ({ favorites: state.favorites.splice(index, 1) })),
}))
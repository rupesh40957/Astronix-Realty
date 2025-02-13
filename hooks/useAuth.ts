import { create } from "zustand"

type AuthStore = {
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const useAuth = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}))


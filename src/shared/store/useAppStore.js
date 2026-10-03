import { create } from "zustand"

export const useAppStore = create((set) => ({

    isLogged: true,
    sidebarOpen: true,
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen }))
}))
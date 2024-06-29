import { create } from "zustand";

type SidebarState = {
    isOpen: boolean;
    toggleSidebar: () => void;
};

const useSidebarStore = create<SidebarState>((set) => ({
    isOpen: true,
    toggleSidebar: () => {
        set((state) => ({ isOpen: !state.isOpen }));
    },
}));

export default useSidebarStore;

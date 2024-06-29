import { create } from "zustand";

type ThemeState = {
    theme: string;
    setTheme: (theme: string) => void;
};

const getInitialTheme = () => {
    if (typeof localStorage !== "undefined") {
        return localStorage.getItem("theme") || "dark";
    }
    return "dark";
};

const useThemeStore = create<ThemeState>((set) => ({
    theme: getInitialTheme(),
    setTheme: (theme) => {
        if (typeof localStorage !== "undefined") {
            localStorage.setItem("theme", theme);
        }
        set({ theme });
    },
}));

export default useThemeStore;

import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark");
        setIsDark(isDarkMode);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        if (newTheme) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-8 right-8 z-[100] w-10 h-10 flex items-center justify-center 
                       bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl
                       border border-slate-200 dark:border-white/10 rounded-full
                       shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:scale-110 transition-all duration-300"
        >
            {isDark ? (
                <Sun size={18} className="text-amber-400 fill-amber-400" />
            ) : (
                <Moon size={18} className="text-slate-600 fill-slate-600" />
            )}
        </button>
    );
}
import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {

    const [isDark, setIsDark] = useState(true);

    const theme = () => {
        setIsDark((prev) => {
            if (prev) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            }
            else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
            return !prev;
        })
    };

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (localTheme == 'light') {
            document.documentElement.classList.remove("dark");
            setIsDark(true)
        }
        else {
            document.documentElement.classList.add("dark");
            setIsDark(false)
        }
    }, [])

    return (
        <button
            onClick={theme}
            className="relative p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                <Sun className={`absolute inset-0 h-6 w-6 text-yellow-500 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                    }`} />
                <Moon className={`absolute inset-0 h-6 w-6 text-blue-400 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                    }`} />
            </div>
        </button>
    );
};

export default ThemeToggle;
import { List, Moon } from "phosphor-react"
import { useEffect, useState } from "react"

export function Header(){
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.theme === "dark"
    )
    
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }
    
    useEffect(() => {
        const html = window.document.documentElement;
    
        const prevTheme = isDarkMode ? "light" : "dark";
        html.classList.remove(prevTheme);
    
        const nextTheme = isDarkMode ? "dark" : "light";
        html.classList.add(nextTheme);
    
        localStorage.setItem("theme", nextTheme);
    }, [isDarkMode])
    
    
    return(
        <div className="bg-zinc-300 dark:bg-zinc-800 h-[92px] w-full fixed z-10 px-6 py-5 flex items-center justify-between">
            <List className="h-8 w-8 dark:text-zinc-500 dark:hover:text-zinc-300 text-zinc-600 hover:text-zinc-900 transition-colors"/>
            <div className="hidden lg:flex gap-6">
                <span className="w-24 h-4 rounded-lg bg-zinc-700 hover:bg-zinc-500 transition-colors"></span>
                <span className="w-24 h-4 rounded-lg bg-zinc-700 hover:bg-zinc-500 transition-colors"></span>
                <span className="w-24 h-4 rounded-lg bg-zinc-700 hover:bg-zinc-500 transition-colors"></span>
                <span className="w-24 h-4 rounded-lg bg-zinc-700 hover:bg-zinc-500 transition-colors"></span>
            </div>
            <div className="flex gap-4 w-fit items-center">
                <span className="h-8 w-8 rounded-lg bg-zinc-700 hover:bg-zinc-500 transition-colors"></span>
                <span className="h-8 w-8 rounded-lg bg-zinc-700 hover:bg-zinc-500 transition-colors"></span>
                <button 
                onClick={() => {toggleDarkMode()}}
                className="h-12 w-12 rounded-full bg-zinc-700 hover:bg-zinc-500 transition-colors flex items-center justify-center">
                    <Moon weight="bold" className="w-5 h-5"/>
                </button>
            </div>
        </div>
    )
}
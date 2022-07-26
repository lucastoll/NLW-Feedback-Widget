import { List, MoonStars, Sun } from "phosphor-react"
import { useLayoutEffect, useState } from "react"

export function Header(){
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.theme === "dark"
    )
    
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }
    
    useLayoutEffect(() => {
        const html = window.document.documentElement;
    
        const prevTheme = isDarkMode ? "light" : "dark";
        html.classList.remove(prevTheme);
    
        const nextTheme = isDarkMode ? "dark" : "light";
        html.classList.add(nextTheme);
    
        localStorage.setItem("theme", nextTheme);
    }, [isDarkMode])
    
    
    return(
        <div className="bg-zinc-300 dark:bg-zinc-800 h-[92px] w-full fixed z-10 px-6 py-5 flex items-center justify-between">
            <List className="h-8 w-8 text-zinc-600 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300  transition-colors"/>
            <div className="hidden lg:flex gap-6">
                <span className="w-24 h-4 rounded-lg bg-zinc-500 hover:bg-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-500 transition-colors"></span>
                <span className="w-24 h-4 rounded-lg bg-zinc-500 hover:bg-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-500 transition-colors"></span>
                <span className="w-24 h-4 rounded-lg bg-zinc-500 hover:bg-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-500 transition-colors"></span>
                <span className="w-24 h-4 rounded-lg bg-zinc-500 hover:bg-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-500 transition-colors"></span>
            </div>
                <div className="flex gap-4 w-fit items-center">
                    <span className="h-8 w-8 rounded-lg bg-zinc-500 hover:bg-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-500 transition-colors"></span>
                    <span className="h-8 w-8 rounded-lg bg-zinc-500 hover:bg-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-500 transition-colors"></span>
                    <div className="bg-zinc-700 dark:bg-zinc-900 animate-pulse rounded-full">
                        <button 
                        onClick={() => {toggleDarkMode()}}
                        className="h-12 w-12 rounded-full bg-zinc-500 hover:bg-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-500 transition-colors flex items-center justify-center">
                            {isDarkMode ? <Sun weight="bold" className="w-5 h-5 animate-spin"/> : <MoonStars weight="bold" className="w-5 h-5 animate-pulse"/>}
                        </button>
                    </div>
                </div>
        </div>
    )
}
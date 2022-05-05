import { List, Moon } from "phosphor-react"

export function Header(){
    return(
        <div className="bg-zinc-800 h-[92px] w-full fixed z-10 px-4 py-5 flex items-center justify-between lg:px-6">
            <List className="h-8 w-8 text-zinc-500 hover:text-zinc-300 transition-colors"/>
            <div className="hidden lg:flex gap-6">
                <span className="w-24 h-4 rounded-lg bg-zinc-700 hover:bg-zinc-500 transition-colors"></span>
                <span className="w-24 h-4 rounded-lg bg-zinc-700 hover:bg-zinc-500 transition-colors"></span>
                <span className="w-24 h-4 rounded-lg bg-zinc-700 hover:bg-zinc-500 transition-colors"></span>
                <span className="w-24 h-4 rounded-lg bg-zinc-700 hover:bg-zinc-500 transition-colors"></span>
            </div>
            <div className="flex gap-4 w-fit items-center">
                <span className="h-8 w-8 rounded-lg bg-zinc-700 hover:bg-zinc-500 transition-colors"></span>
                <span className="h-8 w-8 rounded-lg bg-zinc-700 hover:bg-zinc-500 transition-colors"></span>
                <span className="h-12 w-12 rounded-full bg-zinc-700 hover:bg-zinc-500 transition-colors flex items-center justify-center">
                    <Moon weight="bold" className="w-5 h-5"/>
                </span>
            </div>
        </div>
    )
}
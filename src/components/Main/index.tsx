export function Main(){
    return(
        <div className="pt-[116px] px-6 h-auto relative flex flex-col gap-6">
            <div className="w-full h-28 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors flex items-center justify-center text-center rounded-lg p-4">
                <p>Experimente enviar um feedback de um <i>bug</i> na aplicação!</p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="w-full h-80 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors rounded-lg"></div>
                <div className="w-full h-80 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors rounded-lg"></div>
                <div className="w-full h-80 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors rounded-lg"></div>
                <div className="w-full h-80 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors rounded-lg"></div>
                <div className="w-full h-80 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors rounded-lg"></div>
                <div className="w-full h-80 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors rounded-lg"></div>
            </div>
            <footer className="text-cs text-neutral-400 flex items-center justify-center w-full mb-4">
                <a className="underline underline-offset-2" href="https://github.com/lucastoll" target={"_blank"}>Github.com/lucastoll</a>
            </footer>
        </div>
    );
}


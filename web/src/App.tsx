import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Widget } from "./components/Widget";

export function App() {
  return (
    <div className="bg-zinc-50 dark:bg-[#09090A] text-zinc-300 transition-colors duration-500 min-h-full">
      <Header/>
      <Main />
      <div className="relative z-30">
          <Widget />
      </div>
    </div>
  )
}


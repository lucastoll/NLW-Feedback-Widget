import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Widget } from "./components/Widget";

export function App() {
  return (
    <>
     <Header/>
     <div className="relative z-0">
      <Main />
      <Widget />
     </div>
    </>
  )
}


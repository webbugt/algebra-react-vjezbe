import Calculation from "./components/Calculation";
import Header from "./components/layout/Header";
import CatImage from "./components/CatImage";
import { BlueSubtitle, GreenSubtitle, GreenTitle, MagentaSubtitle, RedSubtitle } from "./components/Titles";
import {Counter} from './containers/Counter'
// funkcionalna komponenta
function App() {
  console.log("App render")
  return (
    <div>
      <Header />
      <GreenTitle title="Vrijednost iz parent komponente"/>
      <br />
      <GreenSubtitle
        title="I'm blue dabudedadbabdab" 
        className="text-slate-900"
      />
      <BlueSubtitle title="mora biti prisutan" />
      <MagentaSubtitle title="kupi mobitel" />
      <RedSubtitle title="ferrari" />

      <CatImage className="maca1" />
{/* Tailwind example */}
      <p className="text-sm leading-6 font-semibold text-slate-500 my-[200px]">OpenAi/subtitle</p>
      <h1 className="mt-4 max-w-5xl text-slate-900 text-3xl sm:text-6xl tracking-tight font-bold dark:text-white">Naslov ko OpenAI</h1>
      <CatImage
        className="maca2 narancasta"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRv4XycGdx5_m1P2W0bMG1xqcpA7kucbaULP8Kx2TGBQ&s"
        width={400}
      />

      <Counter initial={42} />

      <Calculation x={42} y={18} />
      <Calculation x={15} y={21} />
      <Calculation x={3} y={-14} />
    </div>
  );
}

export default App;

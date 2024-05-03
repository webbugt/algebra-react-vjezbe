import Calculation from "./components/Calculation";
import Header from "./components/Header";
import CatImage from "./components/image/CatImage";
import { BlueSubtitle, GreenSubtitle, GreenTitle } from "./components/Titles";
import {Counter} from './components/Counter'
// funkcionalna komponenta
function App() {
  console.log("App render")
  return (
    <div>
      <Header />
      <GreenTitle title="Vrijednost iz parent komponente"/>
      <br />
      <GreenSubtitle title="I'm blue dabudedadbabdab" />
      <BlueSubtitle title="mora biti prisutan" />

      <CatImage className="maca1" />

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

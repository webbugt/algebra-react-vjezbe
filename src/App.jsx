import Calculation from "./components/Calculation";
import CatImage from "./components/image/CatImage";
import { BlueSubtitle, GreenTitle } from "./components/Titles";

// funkcionalna komponenta
function App() {
  return (
    <div>
      <GreenTitle
        title="Naslov iz App komponente"
        className="nekaKlasa zeleni tekst"
      />
      <br />
      <BlueSubtitle title="I'm blue dabudedadbabdab" />
      <BlueSubtitle />

      <CatImage className="maca1" />

      <CatImage
        className="maca2 narancasta"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRv4XycGdx5_m1P2W0bMG1xqcpA7kucbaULP8Kx2TGBQ&s"
        width={400}
      />

      <Calculation x={42} y={18} />
      <Calculation x={15} y={21} />
      <Calculation x={3} y={-14} />
    </div>
  );
}

export default App;

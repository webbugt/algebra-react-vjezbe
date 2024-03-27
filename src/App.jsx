import Calculation from "./components/Calculation";
import CatImage from "./components/CatImage";

const plaviStil = {
  color: "blue",
  textDecoration: "underline",
  fontWeight: "bold",
};

function GreenTitle({ className, title = "Zeleni naslov" }) {
  return (
    <h1
      className={className}
      style={{
        ...plaviStil,
        color: "green",
        background: "yellow",
      }}
    >
      {title}
    </h1>
  );
}

function BlueSubtitle({ title = "plavi subtitle", className }) {
  return (
    <h2 className={className} style={plaviStil}>
      {title}
    </h2>
  );
}


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

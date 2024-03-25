const plaviStil = {
  color: "blue",
  textDecoration: "underline",
  fontWeight: "bold",
};

function GreenTitle(props) {
  return (
    <div className={props.className}>
      <h1
        style={{
          ...plaviStil,
          color: "green",
          background: "yellow",
        }}
      >
        {props.title}
      </h1>
    </div>
  );
}

function BlueSubtitle(props) {
  const { title = "plavi subtitle", className } = props;

  return (
    <h2 className={className} style={plaviStil}>
      {title}
    </h2>
  );
}

const defaultCatImageUrl =
  "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg";

function CatImage({ src = defaultCatImageUrl, className, width=200 }) {
  return <img className={className} src={src} alt="Cat" title="Mačak" width={width+"px"} />;
}

function Calculation(props) {
  // brojevi za zbrojiti
  const x = props.x;
  const y = props.y;

  return (
    <p>
      a + b = {x} + {y} = {x + y}
    </p>
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

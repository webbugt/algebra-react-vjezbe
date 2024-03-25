const plaviStil = {
  color: "blue",
  textDecoration: "underline",
  fontWeight: "bold",
};

const urlSlike =
  "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg";

function GreenTitle(props) {

  console.log("green title props", props)
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

function BlueSubtitle() {
  return <h2 style={plaviStil}>Lorem ipsum dolor sit amet consectetur</h2>;
}

function CatImage() {
  return <img src={urlSlike} alt="Cat" title="Mačak" width="200" />;
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
      <BlueSubtitle />

      <CatImage />

      <Calculation x={42} y={18} />
      <Calculation x={15} y={21} />
      <Calculation x={3} y={-14} />
    </div>
  );
}

export default App;

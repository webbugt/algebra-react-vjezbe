
const plaviStil = {
  color: "blue",
  textDecoration: "underline",
  fontWeight: "bold"
}

const urlSlike = "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"

function GreenTitle(){
  return <h1 style={
      {
        ...plaviStil,
        color: "green",
        background: "yellow"
      }
    }>
      Lorem ipsum dolor
    </h1>
}

function BlueSubtitle(){
  return <h2 style={plaviStil}>
      Lorem ipsum dolor sit amet consectetur
    </h2>
}

function CatImage(){
  return <img 
      src={urlSlike} 
      alt="Cat" 
      title="Mačak" 
      width="200"
    />
}


function Calculation(){
  
  // brojevi za zbrojiti
  const x = 5
  const y = 10

  return (<p>
      x + y = {x} + {y} = {x + y}
    </p>)
}

// funkcionalna komponenta
function App() {

  return <div>
    
    <GreenTitle title="Hello world" />
    <CatImage />

    <BlueSubtitle />
    <GreenTitle title="Hello world" />
    
    <Calculation />
    <GreenTitle title="Hello world" />

  </div>
}

export default App

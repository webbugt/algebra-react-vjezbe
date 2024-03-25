
const plaviStil = {
  color: "blue",
  textDecoration: "underline",
  fontWeight: "bold"
}

const urlSlike = "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"

// funkcionalna komponenta
function App() {

  // brojevi za zbrojiti
  const x = 5
  const y = 10

  return <div>
    <h1 style={
      {
        ...plaviStil,
        color: "green",
        background: "yellow"
      }
    }>Lorem ipsum dolor</h1>

    <h2 style={plaviStil}>Lorem ipsum dolor sit amet consectetur</h2>
    
    <img 
      src={urlSlike} 
      alt="Cat" 
      title="Mačak" 
      width="200"
    />

    <p>
      x + y = {x} + {y} = {x + y}
    </p>
  </div>
}

export default App

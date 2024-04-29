import Header from "../components/Header.jsx";
import { FancyTitle } from "../components/Titles.jsx";
import {useState} from 'react'

function Komponenta4 ({ naslov="default" }) {
  return <p> Pozdrav iz komponente 4 {naslov}</p>
}
function Komponenta3 ({tekst}) {
  return <Komponenta4 naslov={tekst}/>
}
function Komponenta2 ({title}) {
  return <Komponenta3 tekst={title}/>
}

function Komponenta1 () {
  const [name,setName] = useState("perica")
  return <div>
    <input type="text" value={name} onChange={event=>{setName(event.target.value)}}/>
    <Komponenta2 title={name}/>
    </div>
}


export function ContextPage() {
  return (
    <div>
      <Header />
      <FancyTitle title="Context Page" />
      <Komponenta1 />
    </div>
  );
}

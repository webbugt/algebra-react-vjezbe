import { useState } from "react";

function PropDrillKomponenta4({ naslov = "default" }) {
  return <p> Pozdrav iz komponente 4 {naslov}</p>;
}
function PropDrillKomponenta3({ tekst }) {
  return <PropDrillKomponenta4 naslov={tekst} />;
}
function PropDrillKomponenta2({ title }) {
  return <PropDrillKomponenta3 tekst={title} />;
}
export function PropDrillKomponenta1() {
  const [name, setName] = useState("perica");
  return <div>
    <input type="text" value={name} onChange={event => { setName(event.target.value); }} />
    <PropDrillKomponenta2 title={name} />
  </div>;
}

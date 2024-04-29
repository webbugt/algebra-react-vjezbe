import { useState } from "react";
import propTypes from 'prop-types'

function PropDrillKomponenta4({ naslov }) {
  return <p> Pozdrav iz komponente 4 {naslov}</p>;
}
PropDrillKomponenta4.propTypes = {
  naslov: propTypes.string
}
PropDrillKomponenta4.defaultProps = {
  naslov: "default new"
}

function PropDrillKomponenta3({ tekst }) {
  return <PropDrillKomponenta4 naslov={tekst}  />;
}
PropDrillKomponenta3.propTypes = {
  tekst: propTypes.string
}
PropDrillKomponenta3.defaultProps = {
  tekst:"default from 3"
}

function PropDrillKomponenta2({ title }) {
  return <PropDrillKomponenta3 tekst={title} />;
}
PropDrillKomponenta2.propTypes = {
  title: propTypes.string
}
PropDrillKomponenta2.defaultProps = {
  title:"default from 2"
}

export function PropDrillKomponenta1() {
  const [name, setName] = useState("perica");
  return <div>
    <input type="text" value={name} onChange={event => { setName(event.target.value); }} />
    <PropDrillKomponenta2 title={name} />
  </div>;
}

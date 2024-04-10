import propTypes from "prop-types";
import { useState } from "react";
import { BlueSubtitle } from "./Titles";

function KomponentaSaStanjem({ nekiNaslov, initialCount }) {
  const [count,setCount] = useState(initialCount);
  const [content,setContent] = useState("bilo što kao inicijalna vrijednost")

  return (
    <div style={{border:"solid red 2px"}}>
      {nekiNaslov}
      <h2>Trenutno stanje: {count}</h2>
      <BlueSubtitle title={content} />
      <button onClick={()=>{
        // modifikacija stanja kada ovisimo o prethodnom
        // koristi se funkcija koja uzima prethodno stanje i vrača novo
        setCount(previousValue => previousValue + 1)
        // verbosniji način zapisa istog
        // setCount(function(previousValue){
        //     return previousValue + 1
        // })
      }}> Dodaj jedan na count </button>
      <button onClick={()=>{
        setContent("Tekst 1: pisao Pero Perić")
      }} >
        Postavi tekst 1
      </button>
      <button onClick={()=>{
        setContent("Tekst 2: sad je HRT")
      }} >
        Postavi tekst 2
      </button>

    </div>
  );
}

KomponentaSaStanjem.propTypes = {
  nekiNaslov: propTypes.string,
  initialCount: propTypes.number
};

KomponentaSaStanjem.defaultProps = {
  nekiNaslov: "opća vrijednost nekiNaslov propa",
  initialCount: 42
};

export default KomponentaSaStanjem;

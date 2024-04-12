import propTypes from "prop-types";
import { useState } from "react";
import { BlueSubtitle } from "./Titles";
import { Counter } from "./Counter";

function KomponentaSaStanjem({ nekiNaslov, initialCount, id }) {
  // tijelo koponente - pokrece se na svaki rerender
  console.log(`KomponentaSaStanjem ${id} se renderala`);
  const [content, setContent] = useState("bilo što kao inicijalna vrijednost");

  const [location, setLocation] = useState({
    city: "Zagreb",
    country: "Croatia",
  });

  return (
    <div style={{ border: "solid yellow 2px" }}>
      {nekiNaslov}
      <Counter initial={initialCount}/>
      <p>
        Grad: {location.city}, Država: {location.country}
      </p>
      <BlueSubtitle title={content} />
      <button
        onClick={() => {
          setContent("Tekst 1: pisao Pero Perić");
        }}
      >
        Postavi tekst 1
      </button>
      <button
        onClick={() => {
          setContent("Tekst 2: sad je HRT");
        }}
      >
        Postavi tekst 2
      </button>
      <button
        onClick={() => {
          setLocation({ city: "Amsterdam", country: "Nizozemska" });
        }}
      >
        Promijeni Lokaciju
      </button>
    </div>
  );
}

KomponentaSaStanjem.propTypes = {
  nekiNaslov: propTypes.string,
  initialCount: propTypes.number,
  id: propTypes.string,
};

KomponentaSaStanjem.defaultProps = {
  nekiNaslov: "opća vrijednost nekiNaslov propa",
  initialCount: 42,
  id: "undefined",
};

export default KomponentaSaStanjem;

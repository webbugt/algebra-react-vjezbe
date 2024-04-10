import propTypes from "prop-types";
import { useState } from "react";

function KomponentaSaStanjem({ nekiNaslov }) {
  const [count,setCount] = useState(10);

  console.log({count, setCount})

  return (
    <span>
      {nekiNaslov}
      <h2>Trenutno stanje: {count}</h2>
      {/* <h2>{staticnoStanje.count}</h2> */}
    </span>
  );
}

KomponentaSaStanjem.propTypes = {
  nekiNaslov: propTypes.string,
};

KomponentaSaStanjem.defaultProps = {
  nekiNaslov: "opća vrijednost nekiNaslov propa",
};

export default KomponentaSaStanjem;

import propTypes from "prop-types";
import { useState } from "react";
import { BlueSubtitle } from "./Titles";

function KomponentaSaStanjem({ nekiNaslov, initialCount }) {
  const [count,setCount] = useState(initialCount);
  const [content,setContent] = useState("bilo što kao inicijalna vrijednost")

console.log(setContent)

  return (
    <span>
      {nekiNaslov}
      <h2>Trenutno stanje: {count}</h2>
      <BlueSubtitle title={content} />
    </span>
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

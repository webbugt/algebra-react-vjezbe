import propTypes from "prop-types";
import { Counter } from "./Counter";
import { TitleWithState } from "./TitleWithState";
import { LocationDisplay } from "./LocationDisplay";

function ParentBezStanja({ nekiNaslov, initialCount, id }) {
  // tijelo koponente - pokrece se na svaki rerender
  console.log(`KomponentaSaStanjem ${id} se renderala`);
  return (
    <div
      style={{
        padding: 10,
        border: "solid 1px rgba(0,0,0,.5)",
        margin: "10px",
        display: "inline-flex",
        flexDirection: "column"

      }}
    >
      <h3>{nekiNaslov}</h3>
      <Counter initial={initialCount} />
      <TitleWithState />
      <LocationDisplay />
    </div>
  );
}

ParentBezStanja.propTypes = {
  nekiNaslov: propTypes.string,
  initialCount: propTypes.number,
  id: propTypes.string,
};

ParentBezStanja.defaultProps = {
  nekiNaslov: "opća vrijednost nekiNaslov propa",
  initialCount: 42,
  id: "undefined",
};

export default ParentBezStanja;

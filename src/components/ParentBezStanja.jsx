import propTypes from "prop-types";
import { Counter } from "./Counter";
import { TitleWithState } from "./TitleWithState";
import { LocationDisplay } from "./LocationDisplay";

function ParentBezStanja({ nekiNaslov, initialCount, id }) {
  // tijelo koponente - pokrece se na svaki rerender
  console.log(`KomponentaSaStanjem ${id} se renderala`);
  return (
    <div style={{ border: "solid yellow 2px" }}>
      {nekiNaslov}
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

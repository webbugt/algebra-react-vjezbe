import propTypes from "prop-types";
import { useSelector } from "react-redux";

const COUNTER_KEY = "counter-value";

const countSelector = (state) => state.counter.value;
export function Counter({ initial }) {
  const count = useSelector(countSelector);

  return (
    <div>
      <h2>
        Stanje brojača:{" "}
        <h3 style={{ fontSize: 40, weight: "bold" }}>{count}</h3>
      </h2>
      <button>Dodaj 1</button>
      <button>Oduzmi 1</button>
    </div>
  );
}

Counter.propTypes = {
  initial: propTypes.number,
};
Counter.defaultProps = {
  initial: 0,
};

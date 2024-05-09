import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/counterSlice";

// const COUNTER_KEY = "counter-value";

const countSelector = (state) => state.counter.value;
// eslint-disable-next-line no-unused-vars
export function Counter({ initial }) {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  const addOne = () => {
    dispatch(increment())
  }
  const reduceOne = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h2>
        Stanje brojača:{" "}
        <h3 style={{ fontSize: 40, weight: "bold" }}>{count}</h3>
      </h2>
      <button onClick={addOne}>Dodaj 1</button>
      <button onClick={reduceOne}>Oduzmi 1</button>
    </div>
  );
}

Counter.propTypes = {
  initial: propTypes.number,
};
Counter.defaultProps = {
  initial: 0,
};

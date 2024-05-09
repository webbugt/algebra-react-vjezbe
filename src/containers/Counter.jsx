import { useState, useEffect } from "react";
import propTypes from 'prop-types'

const COUNTER_KEY = "counter-value"

const useCounterState = (initial, localStorageKey) => {
  const [count, setCount] = useState(()=>{
    const localStorageValue = window.localStorage.getItem(COUNTER_KEY)
    if(localStorageValue !== null){
      return parseInt(localStorageValue)
    }
    return initial
  });
  console.log("counter se rerenderao", count);

  const addOne = () => {
    // modifikacija stanja kada ovisimo o prethodnom
    // koristi se funkcija koja uzima prethodno stanje i vrača novo
    setCount((previousValue) => previousValue + 1);
    // verbosniji način zapisa istog
    // setCount(function(previousValue){
    //     return previousValue + 1
    // })
  };


  useEffect(()=>{
    window.localStorage.setItem(localStorageKey,String(count))
  },[count, localStorageKey])

  const removeOne = () => {
    setCount(previousValue => previousValue - 1);
  };


  return [count,addOne,removeOne]
}

export function Counter({ initial }) {
  const [count, addOne, removeOne] = useCounterState(initial, COUNTER_KEY)
  
  return <div>
    <h2>Stanje brojača: {count}</h2>
    <button onClick={addOne}>
      Dodaj 1
    </button>
    <button onClick={removeOne}>
      Oduzmi 1
    </button>
  </div>;
}

Counter.propTypes = {
  initial: propTypes.number
}
Counter.defaultProps = {
  initial: 0
}

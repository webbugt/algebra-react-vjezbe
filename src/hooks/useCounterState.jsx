import { useState, useEffect } from "react";

export const useCounterState = (initial, localStorageKey) => {
  const [count, setCount] = useState(() => {
    const localStorageValue = window.localStorage.getItem(localStorageKey);
    if (localStorageValue !== null) {
      return parseInt(localStorageValue);
    }
    return initial;
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

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, String(count));
  }, [count, localStorageKey]);

  const removeOne = () => {
    setCount((previousValue) => previousValue - 1);
  };

  return [count, addOne, removeOne];
};

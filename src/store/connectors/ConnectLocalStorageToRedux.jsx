import{useEffect} from "react";
import { useSelector } from 'react-redux'


const countSelector = (state) => state.counter.value;
export function ConnectLocalStorageToRedux(){
  const count = useSelector(countSelector)

  useEffect(() => {
    window.localStorage.setItem("counter-value", String(count));
  }, [count]);

  return null
}
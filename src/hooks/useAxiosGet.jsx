
import axios from "axios";
import { useEffect, useState } from "react";

// custom hook
export function useAxiosGet(url){
  const [data,setCountries] = useState(null)
  const [isError,setIsError] = useState(false)

  useEffect(()=>{
    axios.get(url)
    .then(({data})=>setCountries(data)).catch(()=>{
      setIsError(true)
    })
  },[url])
  return { data, isError, isLoading: data===null}
}


import axios from "axios";
import { useEffect, useState } from "react";

// custom hook
export function useCountryData(){
  const [countries,setCountries] = useState(null)
  const [isError,setIsError] = useState(false)

  useEffect(()=>{
    axios.get("https://restcountries.com/v2/all")
    .then(({data})=>setCountries(data)).catch(()=>{
      setIsError(true)
    })
  },[])
  return {countries, isError, isLoading: countries===null}
}

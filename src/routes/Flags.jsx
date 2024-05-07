
import axios from "axios";
import Header from "../components/layout/Header.jsx";
import { useEffect, useState } from "react";


function FlagsOfTheWorld () {
  const [countries,setCountries] = useState(null)

  useEffect(()=>{
    axios.get("https://restcountries.com/v2/all")
    .then(({data})=>setCountries(data))
  },[])

  if(countries === null){
    return "Loading"
  }

  return "Flags"
}

export function FlagsPage() {
  return (
    <div>
      <Header />
      <h1>zastave svijeta</h1>
      <FlagsOfTheWorld />
    </div>
  );
}

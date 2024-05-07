
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

  return <div className="w-[100vw] flex flex-row flex-wrap gap-2">
    {countries.map(country=>{
      const {name, flag, numericCode} = country
      return <img className="w-20" key={name+numericCode} src={flag} alt={name} title={name}/>
    })}
  </div>
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

import { useCountryData } from "../hooks/useCountryData"

export function FlagsOfTheWorld () {
  const {countries, isError, isLoading} = useCountryData()

  if(isError){
    return "ERROR!"
  }

  if(isLoading){
    return "Loading"
  }

  return <div className="w-[100vw] flex flex-row flex-wrap gap-2">
    {countries.map(country=>{
      const {name, flag, numericCode} = country
      return <img className="w-20" key={name+numericCode} src={flag} alt={name} title={name}/>
    })}
  </div>
}


import axios from "axios"
import useSWR from "swr"

const fetcher = (...args) => axios.get(...args).then(response=>response.data)

export function FlagsOfTheWorld () {
  const {data, error, isLoading} = useSWR(
    "https://restcountries.com/v2/all",
    fetcher
    )

  if(error){
    return "ERROR!"
  }

  if(isLoading){
    return "Loading"
  }

  return <div className="w-[100vw] flex flex-row flex-wrap gap-2">
    {data.map(country=>{
      const {name, flag, numericCode} = country
      return <img className="w-20" key={name+numericCode} src={flag} alt={name} title={name}/>
    })}
  </div>
}


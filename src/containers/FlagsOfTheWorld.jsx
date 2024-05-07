import { useAxiosGet } from "../hooks/useAxiosGet"
export function FlagsOfTheWorld () {
  const {data, isError, isLoading} = useAxiosGet("https://restcountries.com/v2/all")

  if(isError){
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


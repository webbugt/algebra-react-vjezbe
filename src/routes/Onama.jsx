import Header from "../components/layout/Header.jsx";
import DashboardParent from "../containers/ParentBezStanja.jsx";
import { FancyTitle } from "../components/Titles.jsx";
import { useSelector } from "react-redux";


const counterStateSelector = (state) => state.counter
function ShowCount (){
  const {value: count, lastChange} = useSelector(counterStateSelector)


  return <b style={{fontSize: 80}}>{count} <small style={{fontSize:20}}>{lastChange}</small></b>
}


export function Onama() {
  return (
    <div>
      <Header />
      <FancyTitle 
        title="O nama" 
        subtitle="Hello" 
      />
      <ShowCount />
      <br/>

      <DashboardParent id="prva komponenta" nekiNaslov="Neki drugi naslov za Stanje" initialCount={20} />
      <DashboardParent id="matija" nekiNaslov="Naslov iz O nama" initialCount={-50} />
    </div>
  );
}

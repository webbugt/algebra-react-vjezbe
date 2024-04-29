import Header from "../components/Header.jsx";
import { PropDrillKomponenta1 } from "../components/PropDrillExample.jsx";
import { FancyTitle } from "../components/Titles.jsx";

function ContextExample4 (){
  return <p>Hello from context example, context value:</p>
}

function ContextExample3(){
  return <ContextExample4 />
}

function ContextExample2(){
  return <ContextExample3 />
}


function ContextExample1(){
  return <ContextExample2 />
}

export function ContextPage() {
  return (
    <div>
      <Header />
      <FancyTitle title="Context Page" />
      <PropDrillKomponenta1 />
      <ContextExample1 />
    </div>
  );
}

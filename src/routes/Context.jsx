import { createContext, useContext } from "react";
import Header from "../components/Header.jsx";
import { PropDrillKomponenta1 } from "../components/PropDrillExample.jsx";
import { FancyTitle } from "../components/Titles.jsx";

const NameContext = createContext("John");

function ContextExample4() {
  const nameContextValue = useContext(NameContext);
  return <div>Hello from context example, context value: {nameContextValue}</div>;
}

function ContextExample3() {
  return (
    <div>
      Component 3:
      <ContextExample4 />
    </div>
  );
}

function ContextExample2() {
  return (
    <div>
      Component 2:
      <ContextExample3 />
    </div>
  );
}

function ContextExample1() {
  return (
    <div style={{marginTop: 20}}>
      Component 1:
      <ContextExample2 />
    </div>
  );
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

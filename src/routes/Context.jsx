import {
  ContextExample1,
  ContextExample2,
  ContextExample3,
  ContextExample4,
} from "../components/ContextExample.jsx";
import Header from "../components/Header.jsx";
import { PropDrillKomponenta1 } from "../components/PropDrillExample.jsx";
import { FancyTitle } from "../components/Titles.jsx";
import { NameContextProvider } from "../context/Name.context.jsx";

import { useState } from "react";

export function ContextWithState() {
  const [name, setName] = useState("perica");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <NameContextProvider value={name}>
        <h5>kopija 1</h5>
        <ContextExample1 />
        <br />
        <h5>kopija 2</h5>
        <ContextExample2 />
        <br />
        <NameContextProvider value="mary">
        <h5>kopija 3</h5>
          <ContextExample3 />
        </NameContextProvider>
        <br />
        <h5>kopija 4</h5>
        <ContextExample4 />
      </NameContextProvider>
    </div>
  );
}

export function ContextPage() {
  return (
    <div>
      <Header />
      <FancyTitle title="Context Page" />
      <PropDrillKomponenta1 />
      <ContextWithState />
    </div>
  );
}

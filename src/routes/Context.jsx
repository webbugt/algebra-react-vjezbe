import { ContextExample1, ContextExample2, ContextExample3, ContextExample4 } from "../components/ContextExample.jsx";
import Header from "../components/Header.jsx";
import { PropDrillKomponenta1 } from "../components/PropDrillExample.jsx";
import { FancyTitle } from "../components/Titles.jsx";
import { NameContextProvider } from "../context/Name.context.jsx";

export function ContextPage() {
  return (
    <div>
      <Header />
      <FancyTitle title="Context Page" />
      <PropDrillKomponenta1 />

      <NameContextProvider value="Peter">
        <ContextExample1 />
        <br />
        <NameContextProvider value="Mary">
          <ContextExample2 />
          <br />
          <ContextExample3 />
        </NameContextProvider>

        <br />
        <ContextExample4 />
      </NameContextProvider>
    </div>
  );
}

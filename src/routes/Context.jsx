import Header from "../components/Header.jsx";
import { PropDrillKomponenta1 } from "../components/PropDrillExample.jsx";
import { FancyTitle } from "../components/Titles.jsx";

export function ContextPage() {
  return (
    <div>
      <Header />
      <FancyTitle title="Context Page" />
      <PropDrillKomponenta1 />
    </div>
  );
}

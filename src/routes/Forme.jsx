import Header from "../components/Header.jsx";
import { FancyTitle } from "../components/Titles.jsx";

export function Forme() {
  return (
    <div>
      <Header />
      <FancyTitle title="Forme" />
      <form>
        <label htmlFor="name">Ime</label>
        <input name="name" type="text" />
        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
}

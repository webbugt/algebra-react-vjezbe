import Header from "../components/Header.jsx";
import KomponentaSaStanjem from "../components/KomponentaSaStanjem.jsx";
import { FancyTitle } from "../components/Titles.jsx";

export function Onama() {
  return (
    <div>
      <Header />
      <FancyTitle 
        title="O nama" 
        subtitle="Hello" 
      />

      <KomponentaSaStanjem nekiNaslov="Neki drugi naslov za Stanje" initialCount={20} />
      <KomponentaSaStanjem nekiNaslov="Naslov iz O nama" initialCount={-50} />
    </div>
  );
}

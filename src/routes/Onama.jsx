import Header from "../components/Header.jsx";
import DashboardParent from "../components/ParentBezStanja.jsx";
import { FancyTitle } from "../components/Titles.jsx";

export function Onama() {
  return (
    <div>
      <Header />
      <FancyTitle 
        title="O nama" 
        subtitle="Hello" 
      />

      <DashboardParent id="prva komponenta" nekiNaslov="Neki drugi naslov za Stanje" initialCount={20} />
      <DashboardParent id="matija" nekiNaslov="Naslov iz O nama" initialCount={-50} />
    </div>
  );
}

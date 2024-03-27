import Header from "../components/Header.jsx";
import { FancyTitle } from "../components/Titles.jsx";

export function Onama() {
  return (
    <div>
      <Header />
      <FancyTitle 
        title="O nama" 
        subtitle="Hello" 
      />
      {/* nema ga, vrati null jer ne4ma ni title ni subtitle */}
      <FancyTitle /> 

      <FancyTitle subtitle="samo sub" />
    </div>
  );
}

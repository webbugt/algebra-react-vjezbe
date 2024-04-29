import { ControlledNameInput, NameForm } from "../components/forme/FunctionalNameForm.jsx";
import Header from "../components/Header.jsx";
import { FancyTitle } from "../components/Titles.jsx";

export function Forme() {
  return (
    <div>
      <Header />
      <FancyTitle title="Forme" />
      <ControlledNameInput />
      <NameForm />
    </div>
  );
}

import { ControlledNameInput, NameForm } from "../containers/forme/FunctionalNameForm.jsx";
import Header from "../components/layout/Header.jsx";
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

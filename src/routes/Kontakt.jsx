
import EventButton from "../components/EventButton.jsx";
import Header from "../components/Header.jsx";
import { GreenTitle } from "../components/Titles.jsx";

export function Kontakt() {

  const buttonChangeHandler = (eventName) => {
    console.log("button triggered an event "+eventName)
  }

  return (
    <div>
      <span>neka izmjena</span>
      <Header />
      <GreenTitle title="Kontakt" />
      <EventButton onChange={buttonChangeHandler}/>
    </div>
  );
}

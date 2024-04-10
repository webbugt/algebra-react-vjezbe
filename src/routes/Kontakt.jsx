
import { useState } from "react";
import EventButton from "../components/EventButton.jsx";
import Header from "../components/Header.jsx";
import { GreenTitle } from "../components/Titles.jsx";

export function Kontakt() {

  const [lastState,setLastState] = useState("none")

  const buttonChangeHandler = (eventName) => {
    // console.log("button triggered an event "+eventName)
    setLastState("event: "+eventName)
  }

  return (
    <div>
      <Header />
      <GreenTitle title={lastState} />
      <EventButton onChange={buttonChangeHandler}/>
    </div>
  );
}

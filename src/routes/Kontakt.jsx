
import { useState } from "react";
import EventButton from "../components/EventButton.jsx";
import Header from "../components/Header.jsx";
import { RedTitle } from "../components/Titles.jsx";
import LifecycleDemo from "../components/LifecycleDemo.jsx";
import { Counter } from "../components/Counter.jsx";

export function Kontakt() {

  const [lastState,setLastState] = useState("none")

  const buttonChangeHandler = (eventName) => {
    // console.log("button triggered an event "+eventName)
    setLastState("event: "+eventName)
  }

  return (
    <div>
      <Header />
      <RedTitle title={lastState} />
      <LifecycleDemo currentEvent={lastState}/>
      <EventButton onChange={buttonChangeHandler}/>
      <Counter initial={24}/>
    </div>
  );
}

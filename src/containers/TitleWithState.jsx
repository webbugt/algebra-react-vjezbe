import { Fragment, useState } from "react";
import { BlueSubtitle } from "../components/Titles";

export function TitleWithState() {
  const [content, setContent] = useState("bilo što kao inicijalna vrijednost");
  console.log("TitleWithState se rerenderao", content);
  // Fragment nam služi da bi vratili više elemenata iz komponente,
  // ali nema potrebe za wrapper html elementom (tipa div ili span)
  return <Fragment>
    <BlueSubtitle title={content} />
    <button
      onClick={() => {
        setContent("Tekst 1: pisao Pero Perić");
      }}
    >
      Postavi tekst 1
    </button>
    <button
      onClick={() => {
        setContent("Tekst 2: sad je HRT");
      }}
    >
      Postavi tekst 2
    </button>
  </Fragment>;
}

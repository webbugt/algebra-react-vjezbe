import { useState } from "react";
import { BlueSubtitle } from "./Titles";

export function TitleWithState() {
  const [content, setContent] = useState("bilo što kao inicijalna vrijednost");
  console.log("TitleWithState se rerenderao", content);
  return <div>
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
  </div>;
}

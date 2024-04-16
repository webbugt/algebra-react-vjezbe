import { useState } from "react";

function InteractiveSvg() {
  
  const [svgContent, setSvgContent] = useState("Naš tekst");
  
  return (
    <svg
      height="200"
      width="350"
      onMouseEnter={() => {
        setSvgContent("Ušli smo mišem");
      }}
      onMouseLeave={() => {
        setSvgContent("Pozdrav do idući puta!");
      }}
    >
      <path
        id="lineAC"
        d="M 30 180 q 150 -250 300 0"
        stroke="blue"
        strokeWidth="2"
        fill="none"
      />
      <text
        style={{
          fill: "red",
          fontSize: 25,
        }}
      >
        <textPath href="#lineAC" startOffset="80">
          {svgContent}
        </textPath>
      </text>
    </svg>
  );
}

export default InteractiveSvg;

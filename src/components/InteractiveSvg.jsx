import { useEffect, useState } from "react";

function InteractiveSvg() {
  const [svgContent, setSvgContent] = useState("Naš tekst");

  const onMouseEnter = () => {
    setSvgContent("Ušli smo mišem");
  };

  useEffect(
    function useEffectHandler() {
      console.log("use effect handler:", svgContent);

      return function destroy() {
        console.log("use effect destroy", svgContent);
      };
    },
    [svgContent]
  );

  return (
    <svg
      height="200"
      width="350"
      onMouseLeave={() => {
        setSvgContent("Pozdrav do idući puta!");
      }}
      onMouseEnter={onMouseEnter}
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
      <text
        x={20}
        y={20}
        style={{
          fill: "blue",
          fontSize: 25,
        }}
      >
        Sadrzaj
      </text>
    </svg>
  );
}

export default InteractiveSvg;

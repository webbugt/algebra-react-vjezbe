function InteractiveSvg() {
  return (
    <svg height="200" width="350">
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
          I love SVG! I love SVG!
        </textPath>
      </text>
    </svg>
  );
}

export default InteractiveSvg;

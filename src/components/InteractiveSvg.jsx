function InteractiveSvg() {

  return (
    <svg height="200" width="350" xmlns="http://www.w3.org/2000/svg">
      <path
        id="lineAC"
        d="M 30 180 q 150 -250 300 0"
        stroke="blue"
        strokeWidth="2"
        fill="none"
      />
      <text style="fill:red;font-size:25px;">
        <textPath href="#lineAC" startOffset="80">
          I love SVG! I love SVG!
        </textPath>
      </text>
    </svg>
  );
}

export default InteractiveSvg
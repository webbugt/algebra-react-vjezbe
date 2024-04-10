function EventButton() {
  const handleClick = () => {
    console.log("onclick event");
  };

  const handleMouseOver = () => {
    console.log("onmouseover event");
  };

  const handleMouseLeave = () => {
    console.log("mouseleave event")
  }

  
  const handleMouseEnter = () => {
    console.log("mouseenter event")
  }

  return <button 
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
    >Click me!</button>;
}

export default EventButton;

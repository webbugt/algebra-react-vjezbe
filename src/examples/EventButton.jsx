import propTypes from 'prop-types'

function EventButton({ onChange }) {

  const handleClick = () => {
    if(typeof onChange === "function") onChange("onclick")
    // console.log("onclick event");
  };

  const handleMouseOver = () => {
    if(typeof onChange === "function") onChange("onmouseover")
    // console.log("onmouseover event");
  };

  const handleMouseLeave = () => {
    if(typeof onChange === "function") onChange("onmouseleave")
    // console.log("mouseleave event")
  }

  const handleMouseEnter = () => {
    if(typeof onChange === "function") onChange("onmouseenter")
    // console.log("mouseenter event")
  }

  return <button 
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
    >Click me!</button>;
}

EventButton.propTypes = {
    onChange: propTypes.func
}

EventButton.propTypes = {
    onChange: ()=>{}
}

export default EventButton;

import propTypes from 'prop-types'

const plaviStil = {
  color: "blue",
  textDecoration: "underline",
  fontWeight: "bold",
};

function GreenTitle({ className, title = "Zeleni naslov" }) {
  return (
    <h1
      className={className}
      style={{
        ...plaviStil,
        color: "green",
        background: "yellow",
      }}
    >
      {title.toString()}
    </h1>
  );
}

GreenTitle.propTypes = {
  className: propTypes.string,
  title: propTypes.string
}

GreenTitle.defaultProps = {}


function BlueSubtitle({ title = "plavi subtitle", className }) {
  return (
    <h2 className={className} style={plaviStil}>
      {title}
    </h2>
  );
}

function FancyTitle({title,subtitle}){
  
  if(!title && !subtitle){
    return null
  }
  
  return <div className="fancyTitle" style={{
    padding: 5,
    border: "solid green 1px"
  }}>
    {!!title && <GreenTitle title={title}/>}
    {!!subtitle && <BlueSubtitle title={subtitle}/>}
  </div>
}


export { GreenTitle, BlueSubtitle, FancyTitle }

import propTypes from 'prop-types'
import withColor from '../hoc/withColor';

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

GreenTitle.defaultProps = {
  className: undefined,
  title: "Default title"
}

function Subtitle({title,className,color}){
  return (
    <h2 className={className} style={{
      color,
      textDecoration: "underline",
      fontWeight: "bold"
    }}>
      {title}
    </h2>
  );
}

Subtitle.propTypes={
  title: propTypes.string.isRequired,
  className: propTypes.string,
  color: propTypes.string
}

Subtitle.defaultProps={
  className: undefined,
  color: undefined
}

function BlueSubtitle({ title, className }) {
  console.log(`BlueSubtitle rerendered ${title}`)
  return (
    <Subtitle title={title} className={className} color="blue" />
  );
}

BlueSubtitle.propTypes = {
  title: propTypes.string.isRequired,
  className: propTypes.string
}

BlueSubtitle.defaultProps = {
  className: undefined
}


function GreenSubtitle({ title, className }) {
  console.log(`GreenSubtitle rerendered ${title}`)
  return (
    <Subtitle title={title} className={className} color="green" />
  );
}

GreenSubtitle.propTypes = {
  title: propTypes.string.isRequired,
  className: propTypes.string
}

GreenSubtitle.defaultProps = {
  className: undefined
}

export const MagentaSubtitle = withColor(Subtitle)

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


export { GreenTitle, BlueSubtitle, FancyTitle, GreenSubtitle }

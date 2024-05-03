import propTypes from 'prop-types'
import withColor from '../hoc/withColor';
import style from "./Titles.module.css"
import clsx from "clsx"


function Title({className, title, color}){
  return (
    <h1
      className={clsx(className, style.title)}
      style={{
        color,
        background: "yellow",
      }}
    >
      {title.toString()}
    </h1>
  );
}

Title.propTypes={
  title: propTypes.string.isRequired,
  className: propTypes.string,
  color: propTypes.string
}

Title.defaultProps={
  className: undefined,
  color: undefined
}

const GreenTitle = withColor(Title,"green")


export const RedTitle = withColor(Title, "#550000")

export const YellowTitle = withColor(Title, "#999900")

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

const GreenSubtitle = withColor(Subtitle, "green")

export const MagentaSubtitle = withColor(Subtitle, "magenta")

export const RedSubtitle = withColor(Subtitle,"red")

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

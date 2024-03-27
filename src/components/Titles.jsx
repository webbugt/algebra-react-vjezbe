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
      {title}
    </h1>
  );
}

function BlueSubtitle({ title = "plavi subtitle", className }) {
  return (
    <h2 className={className} style={plaviStil}>
      {title}
    </h2>
  );
}

function FancyTitle({title,subtitle}){
  return <div>
    {!!title && <GreenTitle title={title}/>}
    {!!subtitle && <BlueSubtitle title={subtitle}/>}
  </div>
}


export { GreenTitle, BlueSubtitle, FancyTitle }

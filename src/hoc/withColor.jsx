

const withColor = (Component) => {
    const ComponentWithColor = ({...rest}) => {
        return <Component {...rest}  color="magenta"/>
    }
    return ComponentWithColor
}


export default withColor





const withColor = (Component,color) => {
    const ComponentWithColor = ({...rest}) => {
        return <Component {...rest}  color={color}/>
    }
    return ComponentWithColor
}


export default withColor



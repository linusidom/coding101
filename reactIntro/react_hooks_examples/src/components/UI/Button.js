import classes from './Button.module.css'

export default function Button(props){
    // console.log(props)

    const {children, className, ...otherProps} = props
    // console.log(otherProps)

    return(
        // <button className={`${classes.button} ${props.className}`} onClick={props.onClick}>{props.children}</button>
        <button className={`${classes.button} ${className}`} {...otherProps}>{children}</button>
    )
}


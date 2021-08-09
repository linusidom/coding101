import classes from './Button.module.css'

export default function Button(props){
    
    const {className, children, ...otherProps} = props

    return (
        <button className={`${classes.button} ${className}`} {...otherProps}>{children}</button>
    )
}
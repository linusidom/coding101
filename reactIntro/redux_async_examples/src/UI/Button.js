import classes from './Button.module.css'

export default function Button(props){
    const {className, children, ...otherProps} = props
    return(
        <button className={`${className} ${classes.button}`} {...otherProps}>{children}</button>
    )
}
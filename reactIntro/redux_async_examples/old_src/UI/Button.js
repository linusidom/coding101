import classes from './Button.module.css'

export default function Button(props){

    // const {children, className, ...otherProps} = props

    return <button className={`${classes.button} ${props.className}`} onClick={props.onClick}>{props.children}</button>
}
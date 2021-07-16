import classes from './Button.module.css'

export default function Button(props){

    const {children, ...other} = props

    return(
        <button className={classes.button} {...other}>{props.children}</button>
    )
}
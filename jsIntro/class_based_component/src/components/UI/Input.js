import classes from './Input.module.css'

export default function Input(props){
    // console.log(props)
    const {children, ...other} = props
    return(
        <div className={classes.loginForm}>
            <label className={classes.labelField} htmlFor={props.id}>{children}</label>
            <input className={`${classes.inputField} ${props.className}`} type={props.type || 'text'} id={props.id} {...other} />
        </div>
    )
}
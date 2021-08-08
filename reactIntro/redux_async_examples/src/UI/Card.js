import classes from './Card.module.css'

export default function Card(props){
    const {className, children, ...otherProps} = props
    return(
        <div className={`${className} ${classes.card}`} {...otherProps}>{children}</div>
    )
}